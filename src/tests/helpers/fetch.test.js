import { noTokenFetch, tokenFetch } from "../../helpers/fetch";

describe('Pruebas en los helpers', () => {

    let token = '';
    
    test('noTokenFetch debería funcionar correctamente', async() => {

        /**INICIO DE SESIÓN */        
        const resp = await noTokenFetch('auth', {email:'momoy@test.com', password:'123123123'}, 'POST');

        expect ( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        token = body.token;
        expect( body.exito ).toBe( true ); 

    });
    
    test('TokenFetch debería funcionar correctamente', async() => {
      
        localStorage.setItem('token', token);

        const resp = await tokenFetch('auth/renew');

        expect ( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.exito ).toBe( true ); 
        console.log('body.msg', body.msg);
        token = body.token;

    });

});
