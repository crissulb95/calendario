import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { startChecking } from "../actions/auth";

import { LoginPage } from "../components/auth/LoginPage";
import { CalendarPage } from "../components/calendar/CalendarPage";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export default function AppRouter() {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    console.log(checking);

    useEffect(() => {
        dispatch(startChecking());
    },[ dispatch ]);

    if(checking) {
        return (<h3>Cargando...</h3>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                        exact
                        path='/login'
                        component={ LoginPage }
                        isAuth={ !!uid }
                    />
                    <PrivateRouter
                        exact
                        path='/'
                        component={ CalendarPage }
                        isAuth={ !!uid }
                    />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    );
}