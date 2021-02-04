import { types } from "../types/types";
//import moment from 'moment';

/**{
        id: new Date().getTime(),
        title:'Cumple',
        start: moment().toDate(),
        end: moment().add(2,'hours').toDate(),
        bgcolor: '#f3f3f3',
        user: {
            _id:543,
            name:'Momoy'
        }
    } */

const initialState = {
    events: [],
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

        case types.setLoadEvents:
            return {
                ...state,
                events:[...action.payload]
            }

        case types.logOutDelete:
            return {
                ...initialState
            }
        default:
            return state;
    }

}