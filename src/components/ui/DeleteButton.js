import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../actions/events';

export const DeleteButton = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteEvent());
    }

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
        >
            <i className='fas fa-trash' ></i> 
            <span> Borrar evento </span>
        </button>
    )
}
