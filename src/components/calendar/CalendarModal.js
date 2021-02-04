import React, { useEffect, useState } from 'react';

import DatePicker from "react-datepicker";
import Modal from 'react-modal';
import moment from 'moment';
import Swal from 'sweetalert2';

import "react-datepicker/dist/react-datepicker.css";
import { uiCloseModal } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { 
    clearActiveEvent, 
    startAddNewEvent, 
    startUpdateEvent, 
} from '../../actions/events';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');
/**Supongo que es de donde se va a tomar la referencia para aparecer el modal 
 * justo encima de este elemento que es donde se renderiza toda la app
 */

const now = moment().minutes(0).seconds(0).add(1,'hours');
const oneMoreHour = now.clone().add(1,'hours');

const initEvent = {
    title:'',
    notes:'',
    start:now.toDate(),
    end:oneMoreHour.toDate(),
};

export const CalendarModal = () => {

    const dispatch = useDispatch();

    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);

    const [startDate, setStartDate] = useState( now.toDate() )
    const [endDate, setEndDate] = useState( oneMoreHour.toDate() )

    const [formValue, setFormValue] = useState( initEvent );
    
    const { notes, title, start, end } = formValue;


    const handleChange = ({target}) => {
        setFormValue({
            ...formValue,
            [target.name] : target.value
        })
    }

    
    const startDateChange = (e) => {
        console.log(e);
        setStartDate(e)
        setFormValue({
            ...formValue,
            start: e
        });
    }

    const endDateChange = (e) => {
        console.log(e);
        setEndDate(e)
        setFormValue({
            ...formValue,
            end: e
        });
    }

    const [valid, setValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const momentStart = moment(start)
        const momentEnd = moment(end)

        if(momentStart.isAfter(momentEnd)){
            console.log('Tiene que ser mayor')
            return Swal.fire('Error', 'La fecha de fin tiene que ser mayor a la fecha de inicio', 'error')
        } 
        if( title.trim().length < 2 ) {
            setValid(false)
        }

        if(activeEvent) {
            dispatch(startUpdateEvent(formValue))
        } else {
            dispatch(startAddNewEvent(formValue));
        }

        

        setValid(true)
        closeModal();

        //console.log(formValue,momentStart, momentEnd)
    }

    
    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(clearActiveEvent());
        setFormValue(initEvent);
    }

    useEffect(() => {

        if(activeEvent) {
            setFormValue(activeEvent)
        } else {
            setFormValue(initEvent)
        }

    },[setFormValue,activeEvent]);

    return (
        <Modal
            isOpen={modalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            closeTimeoutMS={250}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
        >
            <h2> { activeEvent ? 'Editar evento' : 'Nuevo evento' } </h2>
            <hr />
            <form className="container" onSubmit={handleSubmit}>

                <div className="form-group d-flex flex-column">
                    <label className='mb-1'>Fecha y hora inicio</label>
                    <DatePicker
                        className='form-control'
                        value={ startDate }
                        selected={ startDate }
                        onChange={startDateChange} //only when value has changed
                    />
                </div>

                <div className="form-group d-flex flex-column">
                    <label className='mb-1'>Fecha y hora fin</label>
                    <DatePicker
                        className='form-control'
                        value={ endDate }
                        selected={ endDate }
                        minDate={ startDate}
                        onChange={endDateChange} //only when value has changed
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!valid && 'is-invalid' }`}
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mt-4">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        value={notes}
                        onChange={handleChange}
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-block btn-outline-primary mt-4"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
