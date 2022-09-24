import * as React from 'react';
import App from './components/App/App.jsx';
import ErrorPage from './ErrorPage.jsx';
import About from './components/About/About.jsx';
import MyList from './components/MyList/MyList.jsx';

import * as ReactDOM from 'react-dom';
import.meta.hot;
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/mylist',
        element: <MyList />
    }
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);