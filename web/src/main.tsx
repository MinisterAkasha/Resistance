import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from 'app/providers';

import App from './App.tsx';

// TODO добавить ErrorBoundary
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
);
