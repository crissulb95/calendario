import Swal from "sweetalert2";
import { tokenFetch } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types"


export const startAddNewEvent = (event) => {
    return async(dispatch, getState) => {
        //console.log('prbando',event);

        const { name, uid } = getState().auth;

        try {
            const resp = await tokenFetch( 'event/create', event, 'POST' );
            const body = await resp.json();

            if(body.exito) {
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name
                }
                console.log(event)
                dispatch(addNewEvent(event));
            }

        } catch (error) {
            console.log(error);
        }

    }
}

export const loadEvents = () => {
    return async(dispatch) => {
        
        try {
            const resp = await tokenFetch('event');
            const body = await resp.json();

            const events = prepareEvents(body.eventos);
            dispatch(setLoadEvents(events));
        } catch (error) {
            console.log('error', error)
        }

    }
}

export const startUpdateEvent = update => {
    return async(dispatch) => {
        try {
            const resp = await tokenFetch(`event/${update.id}`, update, 'PUT');
            const body = await resp.json();

            if(body.exito) {
                dispatch(updateEvent(update));
            } else {
                Swal.fire('Error', body.msg, 'error');
                console.log(body.msg);
            }

            console.log(body);

        } catch (error) {
            console.log('error', error)
            Swal('Error', 'No tiene permiso para actualizar el estado del evento', 'error');
        }
    }
}

export const startDeleteEvent = () => {
    return async(dispatch, getState) => {
        const {id} = getState().calendar.activeEvent;
        console.log('id', id);
        try {
            const resp = await tokenFetch(`event/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if(body.exito) {
                dispatch(deleteEvent());
            } else {
                Swal.fire('Error', body.msg, 'error');
                console.log(body.msg);
            }

            console.log(body);
            
        } catch (error) {
            console.log('error', error);
            Swal.fire('Error', (error.msg || 'No se pudo eliminar'), 'error')
        }

    }
}

const setLoadEvents = events => ({
    type: types.setLoadEvents,
    payload: events,
})

const addNewEvent = (event) => ({
    type: types.addNewEvent,
    payload: event,
});

export const setActiveEvent = (event) => ({
    type: types.setActiveEvent, 
    payload: event,
})

export const clearActiveEvent = () => ({
    type: types.clearActiveEvent
})

export const deleteEvent = () => ({
    type: types.deleteEvent
})

export const updateEvent = event => ({
    type: types.updateEvent,
    payload: event
});

export const logOutDelete = () => ({
    type:types.logOutDelete
});