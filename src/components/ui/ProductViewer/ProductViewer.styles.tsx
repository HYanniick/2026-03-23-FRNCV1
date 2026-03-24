import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ProductViewer: {
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 7,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  colsFlex: {
    flexDirection: "row",
    gap: 20,
  },
  colLeft: {},
  colRight: {
    justifyContent: "center",
    gap: 10,
  },
  stock: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  prix: {
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
  },
  indisponible: {
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
    color: "red",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default styles;