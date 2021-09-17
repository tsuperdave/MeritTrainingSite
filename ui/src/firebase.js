import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const config = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_API_DOMAIN,
    databaseURL: process.env.REACT_APP_FB_DB_URL,
    projectId: process.env.REACT_APP_FB_API_PROJ_ID,
    storageBucket: process.env.REACT_APP_FB_API_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_API_MSG_S_ID,
    appId: process.env.REACT_APP_FB_API_APP_ID
};


const app = initializeApp(config);
export const fbAuth = getAuth();
export const fbAnalytics = getAnalytics();
export const googleProvider = new GoogleAuthProvider();

export default app;