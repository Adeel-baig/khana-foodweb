import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEYG7I37aaQhlIgJ4KcVeyKSwlkZtIGqc",
    authDomain: "khana-app-a1bbc.firebaseapp.com",
    projectId: "khana-app-a1bbc",
    storageBucket: "khana-app-a1bbc.appspot.com",
    messagingSenderId: "729855694813",
    appId: "1:729855694813:web:14578b47045eaaba710834",
    measurementId: "G-JNQFY3FZSQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);