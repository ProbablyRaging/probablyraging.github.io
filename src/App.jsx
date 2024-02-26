import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './views';

const App = () => {
    return (
        <BrowserRouter >
            <Page />
        </BrowserRouter>
    )
};

export default App;