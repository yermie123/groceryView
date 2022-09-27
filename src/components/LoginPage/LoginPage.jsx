import React from 'react';

import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import ThirdPartyEmailPassword, {Github, Google, Facebook, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
    appInfo: {
        appName: "GroceryView",
        apiDomain: "http://localhost:8080",
        websiteDomain: "http://localhost:3000",
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


export default function LoginPage() {
    return (
        <div>
            <div>This is the Login Page.</div>
            <SuperTokensWrapper>
                <div>Hello</div>
            </SuperTokensWrapper>
        </div>
    )
}