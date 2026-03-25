import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  CartItem: {
    flexDirection: "row",
    paddingHorizontal: 5,
    borderTopColor:'grey',
    borderTopWidth:1,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    borderStyle:'solid',
    paddingVertical:5,
  },
  img: {
    width: 32,
    height: 32,
  },
  centralText:{flexGrow:1},
  central: {
    flexGrow: 1,
    flexDirection:'row'
  },
  center: { textAlign: "center", fontSize: 10 },
  titre: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 12,
  },
  buttons:{
    flexDirection:'row',
    paddingRight:10,
    gap:5
  },
  total: {
    justifyContent:'flex-end'
  },
  totalValue:{
    fontWeight:900,
    fontSize:15
  }
});