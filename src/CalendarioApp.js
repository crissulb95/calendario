import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/store';

import './styles/styles.css';

export default function CalendarioApp() {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
