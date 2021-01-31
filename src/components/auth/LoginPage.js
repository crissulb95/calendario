import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {

    const dispatch = useDispatch();

    const [ value, handleInputChange ] = useForm({
        loginMail:'elpin1995@gmail.com',
        loginPassword:'123123123',
    });
    
    const [ registerValue, handleRegisterInputChange ] = useForm({
        registerMail:'',
        registerName:'',
        registerPassword:'123123123',
        registerPassword2:'123123123',
    });

    const { loginMail, loginPassword } = value;

    const { registerMail, registerPassword, registerName, registerPassword2 } = registerValue

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(startLogin(loginMail, loginPassword));
        //console.log(value);
    }

    const handleRegister = e => {
        e.preventDefault();

        if(registerPassword !== registerPassword2 ){
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error'); 
        }

        dispatch(startRegister( registerMail, registerPassword, registerName ));
        //console.log(registerValue);
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginMail'
                                value={ loginMail }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={ loginPassword }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={ registerName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerMail'
                                value={ registerMail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword'
                                value={ registerPassword }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPassword2'
                                value={ registerPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
