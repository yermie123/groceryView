import React from 'react';
import App from './components/App/App.jsx';
import ErrorPage from './ErrorPage.jsx';
import About from './components/About/About.jsx';
import MyList from './components/MyList/MyList.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';

import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter, createRoutesFromElements } from 'react-router-dom';

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
    appInfo: {
        appName: "GroceryView",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:8080",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    Github.init(),
                    Google.init(),
                    Facebook.init(),
                    Apple.init(),
                ]
            }
        }),
        Session.init()
    ]
});

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
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]);

ReactDOM.render(
        <SuperTokensWrapper>
            {/* <RouterProvider router={router} /> */}
            <BrowserRouter>
                <Routes>
                    {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                    <Route path='/' element={<App />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/mylist' element={<MyList />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </SuperTokensWrapper>,
    document.getElementById('app')
);