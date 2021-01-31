import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/auth';

export const Navbar = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startLogOut())
    }

    return (
        <div className='navbar navbar-dark bg-dark mb-4 px-4'>
            <span className='navbar-brand'>
                { name }
            </span>

            <button 
                className='btn btn-outline-warning'
                onClick={ handleClick }
            >
                <i className='fas fa-sign-out-alt'></i> 
                <span>Salir</span> 
            </button>
        </div>
    )
}