import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './layout/Layout';
import HomePage from './components/HomePage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="/components/" component={HomePage}>
            <IndexRedirect to="alerts/" />
            <Route path="breadcrumbs/" component={HomePage} />
        </Route>
        <Route path="premium-themes/" component={HomePage} />
        <Route path="/utilities/" component={HomePage}>
            <IndexRedirect to="colors/" />
            <Route path="colors/" component={HomePage} />
            <Route path="clearfix/" component={HomePage} />
        </Route>
        <Route path="*" component={HomePage} />
    </Route>
);

export default routes;
