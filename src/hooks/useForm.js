import { useState } from "react";

export const useForm = ( initialState = {} ) => {

    const [ value, setValue ] = useState( initialState );

    const reset = ( newState = initialState ) => {
        setValue( newState );
    }

    const handleInputChange = ({ target }) => {
        const { name, value:valor } = target;

        setValue({
            ...value,
            [name]: valor
        })

    }

    /**
         * valor ACTUAL COMPROBADO DEL ESTADO, se cambia una vez se haya llamado asíncronamente al handleInputChange -> setValue 
         * setValue tarda un rato en establecer el cambio cuando se le llama, 
         * una vez procesado como se hace en el CustomHook, este debe ser esperado asíncronamente(await), así se obtiene el 
         * valor actualizado real del estado
     */
    const actualValue = async() => {
        let state;

        await setValue( (prevState) => {
            state = prevState;
            return state;
        })

        return state;
    }

    return [ value, handleInputChange, actualValue, reset ];
}