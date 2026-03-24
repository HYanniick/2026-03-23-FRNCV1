import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ProductViewer: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titre: {
    textAlign: "center",
    fontSize: 30,
    textDecorationLine: "underline",
  },
  colsFlex: {
    flexDirection: "row",
    gap: 5,
  },
  colLeft: {},
  colRight: {
    justifyContent: "center",
    gap: 10,
  },
  stock: { fontSize: 20 },
  descriptionLabel: {},
  description: {},
  prix: {},
  bold: { fontWeight: 900 },
  image: {
    width: 200,
    height: 200,
  },
  indisponible: {
    fontStyle: "italic",
    color: "red",
    fontWeight: 100,
  },
});

export default styles;