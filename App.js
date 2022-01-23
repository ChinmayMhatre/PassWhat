import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import Start from "./screens/Start";
import HomeScreen from "./screens/HomeScreen";
import New from "./screens/New";

import * as firebase from "firebase";

const Stack = createNativeStackNavigator();
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyCR8ZD4r8lTvP9iJIs4zc_7pXEqinNt68M",
//     authDomain: "password-manager-2936f.firebaseapp.com",
//     projectId: "password-manager-2936f",
//     storageBucket: "password-manager-2936f.appspot.com",
//     messagingSenderId: "161958272215",
//     appId: "1:161958272215:web:1c04c4c1e43fee8e47a492",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDTixsi5SV3fY4Wqn6tscEe8QLv5JihAkI",
  authDomain: "rn-login-7e81e.firebaseapp.com",
  projectId: "rn-login-7e81e",
  storageBucket: "rn-login-7e81e.appspot.com",
  messagingSenderId: "838079033698",
  appId: "1:838079033698:web:a2a2db4b58c2284bf47c3b",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
