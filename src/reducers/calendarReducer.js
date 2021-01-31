import { types } from "../types/types";
import moment from 'moment';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title:'Cumple',
        start: moment().toDate(),
        end: moment().add(2,'hours').toDate(),
        bgcolor: '#f3f3f3',
        user: {
            _id:543,
            name:'Momoy'
        }
    }],
    activeEvent: null,
}

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.setActiveEvent:
            return {
                ...state, 
                activeEvent:action.payload
            }
    
        case types.addNewEvent:
            return {
                ...state,
                events:[...state.events, action.payload]
            }

        case types.clearActiveEvent:
            return {
                ...state, 
                activeEvent: null
            }

        case types.updateEvent:
            return {
                ...state,
                events: state.events.map( e => (e.id === action.payload.id) ? action.payload : e )
            }
            
        case types.deleteEvent:
            return {
                ...state,
                events: state.events.filter( e => (e.id !== state.activeEvent.id)),
                activeEvent: null
            }
        default:
            return state;
    }

}