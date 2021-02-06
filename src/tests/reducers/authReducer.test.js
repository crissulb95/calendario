import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

const initialState = {
    checking:true,
    //uid:null,
    //name:null
}

describe('Pruebas en authReducer', () => {
    
    test('Tiene que devolver el estado por defecto', () => {
        
        const state = authReducer(initialState, {});
        console.log(state);
        expect(state).toEqual({checking:true});
    })

    test('Debe pasar la autenticación', () => {
        
        const action = {
            type: types.authLogin,
            payload: {
                name:'Cris',
                uid:'6543examplehgfdd'
            }
        };
        
        const state = authReducer(initialState, action);
        //console.log(state) //{ checking: false, name: 'Cris', uid: '6543examplehgfdd' }

        expect(state).toEqual({ checking: false, name: 'Cris', uid: '6543examplehgfdd' });

    })
    
    test('debe hacer que termine la carga', () => {
        const action = {
            type: types.authCheckingFinish
        }

        const state = authReducer(initialState, action);
        //console.log(state); //{ checking: false }
        
        expect(state).toEqual({checking:false});
    })
    

})
