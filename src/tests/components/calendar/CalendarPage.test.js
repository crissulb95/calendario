import React from 'react';
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

//import Swal from "sweetalert2";
import { CalendarPage } from "../../../components/calendar/CalendarPage";
import { messages } from "../../../helpers/calendar-espanol";
import { types } from "../../../types/types";
import { setActiveEvent } from "../../../actions/events";
import { act } from "@testing-library/react";

jest.mock("../../../actions/events", () => ({
    setActiveEvent: jest.fn(),
    loadEvents: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );

const initialState = {
    ui:{
        modalOpen:true
    }, 
    calendar:{
        events:[],
        activeEvent:null
    },
    auth:{
        checking:false,
        uid:'fsvsdvsdvsejemplo54323424131231232',
        name:'Cristian'
    }
};

let store = mockstore( initialState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarPage />
    </Provider>
);

describe('Pruebas en la página del calendario', () => {
    
    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Pruebas con las interacciones del calendario', () => {
        
        const calendar = wrapper.find('Calendar');
        const calMsgs = calendar.prop('messages');

        expect(calMsgs).toEqual(messages);

        calendar.prop('onDoubleClickEvent')();
        expect(store.dispatch).toHaveBeenCalledWith({
            type: types.uiOpenModal
        });
        
        
        calendar.prop('onSelectEvent')({ test: 'hola'});
        expect(setActiveEvent).toHaveBeenCalledWith({ test: 'hola'});
        
        act(() => {
            calendar.prop('onView')('week');
            expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week')
        });

    })
    
})
