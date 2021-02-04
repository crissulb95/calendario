import Swal from "sweetalert2";
import { noTokenFetch, tokenFetch } from "../helpers/fetch";
import { types } from "../types/types";
import { logOutDelete } from "./events";

export const startLogin = ( email, password ) => {
    return async(dispatch) => {

        const resp = await noTokenFetch('auth', { email, password }, 'POST');
        const body = await resp.json();

        if( body.exito ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-day', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRegister = ( email, password, name ) => {
    return async(dispatch) => {

        const resp = await noTokenFetch('auth/new', { email, password, name }, 'POST');
        const body = await resp.json();

        if( body.exito ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-day', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        } 
    }
}

export const startChecking = ( ) => {
    return async(dispatch) => {

        const resp = await tokenFetch('auth/renew');
        const body = await resp.json();
        //console.log('body', body)
        if( body.exito ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-day', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            dispatch(checkingFinish());
        } 
    }
}

export const startLogOut = () => {
    return dispatch => {
        localStorage.clear();
        dispatch(logOutDelete())
        dispatch(logout());
    }
}

const login = user => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
});

const logout = () => ({
    type: types.authLogOut
});