import { StatusBar } from "expo-status-bar";
import React from "react";
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBnt1zoXWGz--9leVo0etmwU1l8t2n2hio",
  authDomain: "ig-demo-b8803.firebaseapp.com",
  projectId: "ig-demo-b8803",
  storageBucket: "ig-demo-b8803.appspot.com",
  messagingSenderId: "348158837085",
  appId: "1:348158837085:web:2fb50eb220a830930fe8b4",
  measurementId: "G-ZGWFYV86ZL"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
