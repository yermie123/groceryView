import React from 'react';
import App from './components/App/App.jsx';
import ErrorPage from './ErrorPage.jsx';
import About from './components/About/About.jsx';
import MyList from './components/MyList/MyList.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';

import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    BrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';

import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from 'supertokens-auth-react/recipe/session';

/*
Moved the below code to App, we'll see if that was a wise decision.
*/

// SuperTokens.init({
//     appInfo: {
//         appName: "GroceryView",
//         apiDomain: "http://localhost:3000/",
//         websiteDomain: "http://localhost:8080/",
//         apiBasePath: "/auth",
//         websiteBasePath: "/auth"
//     },
//     recipeList: [
//         ThirdPartyEmailPassword.init({
//             signInAndUpFeature: {
//                 providers: [
//                     Github.init(),
//                     Google.init(),
//                     Facebook.init(),
//                     Apple.init(),
//                 ]
//             }
//         }),
//         Session.init()
//     ]
// });

const router1 = createBrowserRouter(
    createRoutesFromElements([
        getSuperTokensRoutesForReactRouterDom(reactRouterDom),
        <Route path='/' element={<App />}></Route>,
        <Route path='/about' element={<About />}></Route>,
        <Route path='/mylist' element={<MyList />} />,
        <Route path='/login' element={<LoginPage />} />
    ])
)

ReactDOM.render(
    <RouterProvider router={router1} />,
    document.getElementById('app')
);

/*
I found the above code to work with the new changes in React Router.
Just in case, below is the traditional way of doing it.
*/

// ReactDOM.render(
//     <React.StrictMode>
//         <SuperTokensWrapper>
//             <BrowserRouter>
//                 <Routes>
//                     {getSuperTokensRoutesForReactRouterDom(reactRouterDom)},
//                     <Route path='/' element={<App />}></Route>,
//                     <Route path='/about' element={<About />}></Route>,
//                     <Route path='/mylist' element={<MyList />} />,
//                     <Route path='/login' element={<LoginPage />} />
//                 </Routes>
//             </BrowserRouter>
//         </SuperTokensWrapper>
//     </React.StrictMode>,
//     document.getElementById('app')
// );