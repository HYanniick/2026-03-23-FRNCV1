import { StyleSheet } from "react-native";
import React from "react";
import {store} from './src/store/store'
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/navigation";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
