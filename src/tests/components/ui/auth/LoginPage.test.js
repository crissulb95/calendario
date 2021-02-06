import React from 'react';
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom'

import { LoginPage } from "../../../../components/auth/LoginPage";
import { startLogin, startRegister } from "../../../../actions/auth";
import Swal from "sweetalert2";
import { mount } from "enzyme";

jest.mock("sweetalert2", () => {
    fire: jest.fn()
});

jest.mock("../../../../actions/auth", () => {
    startLogin: jest.fn()
});

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );

const initialState = {};

let store = mockstore( initialState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <LoginPage />
    </Provider>
);

describe('Pruebas en la pagina de inicio y registro', () => {
    
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Debe mostrar correctamente el componente ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe llamar dispatch de login ', () => {
        
        wrapper.find('input[name="loginMail"]').simulate('change', {
            target:{
                name:'loginMail',
                value:'ejemplo@test.com'
            }
        })
        
        wrapper.find('input[name="loginPassword"]').simulate('change', {
            target:{
                name:'loginPassword',
                value:'123123123'
            }
        })

        wrapper.find('form').at(0).prop('onSubmit')({//form de inicio de sesión
            preventDefault(){}
        });

        expect( startLogin ).toHaveBeenCalledWith('ejemplo@test.com','123123123');

    });

    //Registro
    test('Debe mostrar el error cuando las contraseñas no coinciden', () => {
        
        
        wrapper.find('input[name="registerPassword"]').simulate('change', {
            target:{
                name:'registerPassword',
                value:'123123123'
            }
        })
        
        wrapper.find('input[name="registerPassword2"]').simulate('change', {
            target:{
                name:'registerPassword2',
                value:'1231231234'
            }
        })

        wrapper.find('form').at(1).prop('onSubmit')({//form de registro
            preventDefault(){}
        });

        expect(startRegister).not.toHaveBeenCalled();
        expect(Swal.fire).toHaveBeenCalledWith('Error', expect.any(String), 'error');
    });
    
    test('Registro con las mismas contraseñas', () => {
        
        
        wrapper.find('input[name="registerPassword"]').simulate('change', {
            target:{
                name:'registerPassword',
                value:'123123123'
            }
        })
        
        wrapper.find('input[name="registerPassword2"]').simulate('change', {
            target:{
                name:'registerPassword2',
                value:'123123123'
            }
        })

        wrapper.find('form').at(1).prop('onSubmit')({//form de registro
            preventDefault(){}
        });

        expect(Swal.fire).not.toHaveBeenCalled();
        expect(startRegister).toHaveBeenCalled();
        expect(startRegister).toHaveBeenCalledWith('test@test.com','123123123','Test');
    });

});


