import firebase from "./firebase";
import './firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_API_DOMAIN,
    projectId: process.env.FB_API_PROJ_ID,
    storageBucket: process.env.FB_API_BUCKET,
    messagingSenderId: process.env.FB_API_MSG_S_ID,
    appId: process.env.FB_API_APP_ID
});

export const auth = app.auth();
export default app;