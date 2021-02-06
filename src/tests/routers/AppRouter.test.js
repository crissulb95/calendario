import React from 'react';
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

import AppRouter from "../../routers/AppRouter"

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );


describe('Pruebas en el router principal', () => {
    
    test('Tiene que mostrar el mensaje de carga ', () => {

        const initialState = { 
            auth:{
                checking:true,
            }
        };
        
        let store = mockstore( initialState );
        //store.dispatch = jest.fn();
        

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot(); //<h3>Cargando...</h3>
        expect( wrapper.find('h3').exists() ).toBe(true);

    });
    
    test('Tiene que mostrar la ruta pública', () => {

        const initialState = { 
            auth:{
                checking:false,
                uid:null
            }
        };
        
        let store = mockstore( initialState );
        //store.dispatch = jest.fn();
        

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot(); //<h3>Cargando...</h3>
        expect( wrapper.find('.login-container').exists() ).toBe(true);

    });


    
    test('Tiene que mostrar la ruta pública', () => {

        const initialState = {
            ui:{
                modalOpen:false
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
        //store.dispatch = jest.fn();
        

        const wrapper = mount(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot(); //<h3>Cargando...</h3>
        expect( wrapper.find('.calendar-screen').exists() ).toBe(true);

    });
})
