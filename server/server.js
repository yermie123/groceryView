import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const { middleware } = require("supertokens-node/lib/build/framework/express");
const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");
const { errorHandler } = require('supertokens-node/framework/express');

let { Google, Github, Apple, Facebook } = ThirdPartyEmailPassword;

supertokens.init({
    framework: "express",
    supertokens: {
        // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "https://try.supertokens.com",
        // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "GroceryView",
        apiDomain: "http://localhost:3000",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                // We have provided you with development keys which you can use for testing.
                // IMPORTANT: Please replace them with your own OAuth keys for production use.
                Google({
                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                    clientSecret: "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"
                }),
                Github({
                    clientId: "467101b197249757c71f",
                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
                }),
                Apple({
                    clientId: "4398792-io.supertokens.example.service",
                    clientSecret: {
                        keyId: "7M48Y4RYDL",
                        privateKey:
                            "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                        teamId: "YWQCXGJRJL",
                    },
                }),
                Facebook({
                    clientSecret: "FACEBOOK_CLIENT_SECRET",
                    clientId: "FACEBOOK_CLIENT_ID"
                })
            ]
        }),
        Session.init() // initializes session features
    ]
});

app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

app.use(middleware());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

/* Other API Routes */












app.use(errorHandler());

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Error handler caught middleware error',
        status: 500,
        message: { err: 'An error occured' }
    }
    const errorObj = Object.assign(defaultErr, err);
    return res.status((errorObj.status)).json(errorObj.message);
});

app.listen(3000, (req, res) => {
    console.log('Server listening on Port: 3000');
})