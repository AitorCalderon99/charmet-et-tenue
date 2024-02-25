import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxglwqqwgBFNfgZH1YEAbQImh6Ibr3MPI",
  authDomain: "charme-et-tenue.firebaseapp.com",
  projectId: "charme-et-tenue",
  storageBucket: "charme-et-tenue.appspot.com",
  messagingSenderId: "989428143535",
  appId: "1:989428143535:web:c9341d3a3a335880c68b5a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
