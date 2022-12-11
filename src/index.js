import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes'

// import Home from './containers/Home'
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MyRoutes />
        <GlobalStyle />
    </React.StrictMode>
)
