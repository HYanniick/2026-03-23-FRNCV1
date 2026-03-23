import { View, Text, Pressable,ToastAndroid } from "react-native";
import React from 'react'
import styles from "./Button.styles";
interface IButtonProps{
  children:string
  color?:"white"|"grey"
  bgColor:"blue"|"red"
  onButtonPressed:()=>void
}
const Button: React.FC<IButtonProps>= ({children, color, bgColor, onButtonPressed=()=>{}}) => {
  
  return (
    <Pressable onPress={(evt)=>{
        onButtonPressed()
    }} style={[styles.Button, {backgroundColor:bgColor}]}>
      <Text style={[styles.text,{color:color}]}>{children}</Text>
    </Pressable>
  );
};
export default Button;