import React from 'react';
import { mount } from "enzyme"
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import '@testing-library/jest-dom'

import { DeleteButton } from "../../../components/ui/DeleteButton";
import {startDeleteEvent} from '../../../actions/events';
jest.mock('../../../actions/events', () => ({
    startDeleteEvent: jest.fn()
}));

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );

const initialState = { };
let store = mockstore( initialState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <DeleteButton />
    </Provider>
);

describe('Pruebas en el botón de borrado de eventos', () => {
    
    test('Debe mostrarse bien', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
  
    test('Debe llamar al action correspondiente al hacer click', async() => {
        
        wrapper.find('button').prop('onClick')();

        expect(startDeleteEvent).toHaveBeenCalled();

    })
    

})
