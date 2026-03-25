import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const ScanIcon = (props: Props) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("scan");
      }}
    >
      <Image
        source={require("../../../../assets/scan.png")}
        style={{ width: 32, height: 32 }}
      />
    </TouchableOpacity>
  );
};

export default ScanIcon;

const styles = StyleSheet.create({});
