import React from 'react'
import { useDispatch } from 'react-redux';
import { startDeleteEvent } from '../../actions/events';

export const DeleteButton = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('delete');
        dispatch(startDeleteEvent());
    }

    return (
        <button
            style={{zIndex:'10'}}
            className='btn btn-danger fab-danger'
            onClick={handleDelete}
        >
            <i className='fas fa-trash' ></i> 
            <span> Borrar evento </span>
        </button>
    )
}
