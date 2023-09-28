import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';

const AppRouter = () => {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < App / > }
        /> <
        Route path = "/home"
        element = { < HomePage / > }
        /> < /
        Routes > <
        /Router>
    );
};

export default AppRouter;