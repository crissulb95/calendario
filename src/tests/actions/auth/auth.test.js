import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
jest.mock('sweetalert2', () => ({
    fire:jest.fn()
}));

import { startChecking, startLogin, startRegister } from '../../../actions/auth';
import { types } from '../../../types/types';
import * as fetchModule from '../../../helpers/fetch';

import '@testing-library/jest-dom';

const middlewares = [ thunk ];
const mockstore = configureStore( middlewares );

const initialState = { };
let store = mockstore( initialState );

Storage.prototype.setItem = jest.fn(); //Cada vez que se use una función mock, agregar a beforeEach jest.clearAllMocks()

describe('Pruebas en archivo de acciones auth', () => {

    beforeEach(() => {
        store = mockstore( initialState );
        jest.clearAllMocks();
    });
    
    test('Hace llamado a acción startLogin correctamente', async () => {

        await store.dispatch(startLogin('momoy@test.com','123123123'));
        const actions = store.getActions();

        //console.log(actions)
        /**{
            type: '[AUTH] login',
            payload: { uid: '601b80bejemplo30c23035d', name: 'testing' }
        } */

        expect(actions[0]).toEqual({
            type: '[AUTH] login',
            payload: { uid: '601b80b52f3eed030c23035d', name: 'testing' }
        });

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: { uid: expect.any(String), name: expect.any(String) }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-day', expect.any(Number));

        /**console.log(localStorage.setItem.mock.calls);
         * [
                [
                    'token',
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDFiODBiNTJmM2VlZDAzMGMyMzAzNWQiLCJuYW1lIjoidGVzdGluZyIsImlhdCI6MTYxMjQxNzMyNywiZXhwIjoxNjEyNDI0NTI3fQ.YR7hgoKFsM9ux_d2XrBKO_ve-Ego03oyWPbzmpAH6AY'
                ],
                [ 'token-init-day', 1612417327482 ]
            ]

            console.log(localStorage.setItem.mock.calls[0][1]); //token en localstorage
        */



    });
    
    test('Debería lanzar un error por hacer un inicio de sesión incorrecto', async () => {
                
        await store.dispatch(startLogin('ejemplos@test.com','12321223123'));
        const actions = store.getActions();

        //console.log(actions); //[]

        expect( actions ).toEqual([ ]);

        expect( Swal.fire ).toHaveBeenCalledTimes(1);
        expect( Swal.fire ).toHaveBeenCalledWith("Error", "Usuario no existe con ese correo", "error");
        
        await store.dispatch(startLogin('momoy@test.com','123212222223123'));
        expect( Swal.fire ).toHaveBeenCalledWith("Error", "La contraseña no es válida", "error");
    });

    test('startRegister debe actuar correctamente', async () => {

        fetchModule.noTokenFetch = jest.fn(() => ({
            json() {
                return {
                    exito:true,
                    uid:'543123',
                    name:'ejemplo',
                    token: '543hgfejemplod54gfd'
                }
            }
        }));
        
        await store.dispatch(startRegister('ejemplo@test.com','12321223123','ejemplo'));
        const actions = store.getActions();

        console.log(actions);

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload:{
                uid: expect.any(String),
                name: expect.any(String),
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token', '543hgfejemplod54gfd');
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-day', expect.any(Number));

    });

    test('startChecking debería funcionar ', async () => {
        
        fetchModule.tokenFetch = jest.fn(() => ({
            json() {
                return {
                    exito:true,
                    uid:'543123',
                    name:'ejemplo',
                    token: '543hgfejemplod54gfd'
                }
            }
        }));
        
        await store.dispatch(startChecking());

        const actions = store.getActions();
        //console.log('actions', actions, types.authChecking);

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload:{
                uid: expect.any(String),
                name: expect.any(String),
            }
        });
        
        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));

    })
    


})
