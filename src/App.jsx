import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './views';

const App = () => {
    return (
        <BrowserRouter>
            <NextUIProvider >
                <Page />
            </NextUIProvider>
        </BrowserRouter>
    )
};

export default App;