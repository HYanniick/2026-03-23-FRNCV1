import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Store from "../screens/Store";
import type { RootStackParamList } from "./types";
import CartIcon from "../components/ui/CartIcon/CartIcon.connected";
import Cam from "../screens/Cam";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="cam">
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="store" component={Store} options={{
        headerRight: () => <CartIcon />,
        headerTitleStyle: { fontWeight: "bold", fontSize: 24, color: "blue", fontFamily: "Oswald, lato" },
        headerTitleAlign: "center",
        title: "Boutique"
      }} />
      <Stack.Screen name="cam" component={Cam} options={{ title: "Caméra" }} />
      <Stack.Screen name="cart" component={Cart} options={{ title: "Panier" }} />
    </Stack.Navigator>
  );
}

export default Navigation;
