import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Store from "../screens/Store";

type Props = {};
const Stack = createNativeStackNavigator();

const Navigation = (props : Props) => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="store" component={Store} />
    </Stack.Navigator>
  );
}

export default Navigation;