import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Store from "../screens/Store";
import type { RootStackParamList } from "./types";
import CartIcon from "../components/ui/CartIcon/CartIcon.connected";
import Cam from "../screens/Cam";
import { Text, TouchableOpacity, View } from "react-native";
import ScanIcon from "../components/ui/ScanIcon/ScanIcon";
import ProductEditorScreen from "../screens/ProductEditor";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="store"
        component={Store}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("productEditor")}
              >
                <Text style={{ color: "blue", fontWeight: "700" }}>Nouveau</Text>
              </TouchableOpacity>
              <ScanIcon />
              <CartIcon />
            </View>
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
            color: "blue",
            fontFamily: "Oswald, lato",
          },
          headerTitleAlign: "center",
          title: "Boutique",
        })}
      />
      <Stack.Screen name="scan" component={Cam} options={{ title: "Caméra" }} />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{ title: "Panier" }}
      />
      <Stack.Screen
        name="productEditor"
        component={ProductEditorScreen}
        options={({ route }) => ({
          title:
            route.params?.product?.id !== undefined
              ? "Modifier le produit"
              : "Créer un produit",
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
