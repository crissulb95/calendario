import React from 'react';
import thunk from "redux-thunk";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import moment from 'moment';

import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

//import Swal from "sweetalert2";
import { CalendarPage } from "../../../components/calendar/CalendarPage";
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { startUpdateEvent,clearActiveEvent } from '../../../actions/events';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))
jest.mock("../../../actions/events", () => ({
    startUpdateEvent: jest.fn(),
    clearActiveEvent: jest.fn(),
    startAddNewEvent: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );

const now = moment().minutes(0).seconds(0).add(1,'hours');
const oneMoreHour = now.clone().add(1,'hours');

const initialState = {
    ui:{
        modalOpen:true
    }, 
    calendar:{
        events:[],
        activeEvent: {
            title:'prueba',
            notes:'test',
            start:now.toDate(),
            end:oneMoreHour.toDate(),
        }
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
        <CalendarModal />
    </Provider>
);

describe('Pruebas en el modal', () => {
    
    beforeEach(() => {
        jest.clearAllMocks()
    });

    test('Tiene que mostrar el modal ', () => {
        
        //expect(wrapper.find('.modal').exists()).toBe(true);
        expect(wrapper.find('Modal').prop('isOpen')).toBe(true);

    })
    
    test('Debe llamar la accion de update y cerrar el modal', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( startUpdateEvent ).toHaveBeenCalledWith(initialState.calendar.activeEvent)
        expect( clearActiveEvent ).toHaveBeenCalled();

    })
    
    test('error si falta titulo', () => {
        
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        
        //expect( startUpdateEvent ).toHaveBeenCalledWith(initialState.calendar.activeEvent);
        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true);

    })
    
    test('Tiene que crear un nuevo evento', () => {
                
        const initialState = {
            ui:{
                modalOpen:true
            }, 
            calendar:{
                events:[],
                activeEvent: null
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
                <CalendarModal />
            </Provider>
        );

        
        wrapper.find('input[name="title"]').simulate('change', {
            target:{
                name:'title',
                value:'prueba test prueba'
            }
        })

        
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        

        expect(startAddNewEvent).toHaveBeenCalledWith({
            title:'prueba test prueba',
            notes:'',
            start:expect.anything(),
            end:expect.anything(),
        })
        
        expect( clearActiveEvent ).toHaveBeenCalled();

    })
    
    test('validacion de fechas', () => {        
        wrapper.find('input[name="title"]').simulate('change', {
            target:{
                name:'title',
                value:'prueba test prueba'
            }
        })

        const today = new Date();

        act(() => {
            wrapper.find('DatePicker').at(1).prop('onChange')(today);
        });

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'La fecha de fin tiene que ser mayor a la fecha de inicio', 'error')

    })
    

})
