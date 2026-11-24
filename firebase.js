import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getFirestore} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
import {getAuth} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import {firebaseConfig} from './firebase-config.js';
export const ready=!!firebaseConfig.projectId && !firebaseConfig.projectId.startsWith('YOUR_');
const app=ready?initializeApp(firebaseConfig):null;
export const db=app?getFirestore(app):null, auth=app?getAuth(app):null;
