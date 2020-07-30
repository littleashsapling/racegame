import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHUfHT4s_JeaCr3J1n8c37W0FtQZenFmI",
    authDomain: "grimgames-138da.firebaseapp.com",
    databaseURL: "https://grimgames-138da.firebaseio.com"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();