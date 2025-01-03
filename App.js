import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6UcaMFno8JJogUHpEhuPl3L-25mruvs",
  authDomain: "meals-to-go-9c2dd.firebaseapp.com",
  projectId: "meals-to-go-9c2dd",
  storageBucket: "meals-to-go-9c2dd.firebasestorage.app",
  messagingSenderId: "790675693025",
  appId: "1:790675693025:web:00934da90b6e196c78c6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword( auth, "mo@binni.io", "password")
      .then((user) => {
        console.log("firebase user:",user);
        setIsAuthenticated(true)
      })
      .catch((e) => console.log("firebase error:",e))
    }, 2000)
  },[])
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
        <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
        </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
