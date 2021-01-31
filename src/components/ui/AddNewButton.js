import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui';

export const AddNewButton = () => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(uiOpenModal());
    }
    //console.log(process.env);
    return (
        <button 
            style={{zIndex:'10'}}
            className='btn btn-primary fab'//flying action button
            onClick={ handleAdd }
        >
            <i className='fas fa-plus'></i>
        </button>
    )
}
