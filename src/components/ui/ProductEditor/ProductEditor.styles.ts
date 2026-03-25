import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  header: {
    paddingTop: 10,
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 22,
  },
  central: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 5,
    padding: 10,
    width: "100%",
    // width:Dimensions.get('window').width-50
  },
  left: {
    paddingHorizontal: 8,
    gap: 5,
    flexGrow: 1,
    flexShrink: 1,
  },
  headerValue: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textAlign: "center",
  },
  inputText: {
    height: 50,
    fontSize: 20,
  },
  input: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  multiLinesInput: {
    fontSize: 15,
    minHeight: 120,
    textAlignVertical: "top",
  },
  right: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    padding: 10,
    width: 140,
  },
  previewTitle: {
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
  },
  thumbnail: {
    height: 64,
    width: 64,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 7,
  },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  validationMessage: {
    color: "tomato",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
