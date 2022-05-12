import axios from "axios";

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
  //...
  // };
  
  // export const app = initializeApp(firebaseConfig);
  // export const database = getFirestore(app);
  
  // Get a list of cities from your database
  // async function getCities(database) {
    //   const citiesCol = collection(db, 'cities');
    //   const citySnapshot = await getDocs(citiesCol);
    //   const cityList = citySnapshot.docs.map(doc => doc.data());
    //   return cityList;
    // }
  

export const database = axios.create({
  baseURL: "https://portfolio-81334-default-rtdb.europe-west1.firebasedatabase.app/",
})


// Check if need Axios or only firebase
// Check for global Auth for website
// Check how to play with data