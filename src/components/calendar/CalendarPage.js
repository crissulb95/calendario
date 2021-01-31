import React, { useState } from 'react';

import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

import {Calendar, momentLocalizer} from 'react-big-calendar';
import { messages } from '../../helpers/calendar-espanol';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import moment from 'moment';

import 'moment/locale/es'; //Configuración para cambio de idioma en moment 
import { uiOpenModal } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveEvent, setActiveEvent } from '../../actions/events';
import { AddNewButton } from '../ui/AddNewButton';
import { DeleteButton } from '../ui/DeleteButton';
moment.locale('es');//cambio a español para cabezera de dias de la semana


const localizer = momentLocalizer(moment); // or globalizeLocalizer

export const CalendarPage = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar)     


    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month')

    const handleDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const handleSelect = (e) => {
        console.log(e);
        dispatch(setActiveEvent(e));
    }

    const handleViewChange = (e) => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    const onSelectSlot = (e) => {
        dispatch(clearActiveEvent());
    }

    const eventStyleGetter = (e, start, end, isSelected) => {
        //console.log(e, start, end, isSelected)

        const style = {
            backgroundColor : '#0608F0',
            borderRadius : '0px',
            opacity : 0.8,
            display : 'block',
            color: '#fff'
        }

        return {
            style
        }
    }

    return (
        <div className='calendar-screen'>
            <Navbar />
            
            <Calendar
                localizer={localizer}
                events={events}
                messages={messages}
                startAccessor="start"
                endAccessor="end"
                onDoubleClickEvent={ handleDoubleClick }
                onSelectEvent={handleSelect}
                onView={ handleViewChange }
                view={ lastView }
                onSelectSlot={ onSelectSlot }
                selectable={true}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewButton />
            { activeEvent && <DeleteButton /> }
            <CalendarModal />
        </div>
    )
}
