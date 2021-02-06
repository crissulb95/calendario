import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

const initialState = {
    modalOpen: false,
}

describe('Pruebas en uiReducer', () => {
    
    test('Debe retornar el estad por defecto', () => {
        
        const state = uiReducer( initialState, {} );
        expect(state).toEqual(initialState);

    });

    test('Debe abrir y cerrar el modal', () => {
        const modalOpen = uiOpenModal();
        let state = uiReducer(initialState, modalOpen);

        expect(state).toEqual({ modalOpen:true })
        
        const modalClose = uiCloseModal();
        state = uiReducer(initialState, modalClose);

        expect(state).toEqual({ modalOpen:false });
    })
    
    

});
