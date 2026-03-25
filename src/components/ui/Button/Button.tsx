import { View, Text, Pressable,ToastAndroid } from "react-native";
import React, { useEffect, useState } from 'react'
import styles from "./Button.styles";
interface IButtonProps{
  children:string
  color?:"white"|"grey"
  bgColor:"blue"|"red"
  onButtonPressed:()=>void
}
const Button: React.FC<IButtonProps>= ({children, color, bgColor, onButtonPressed=()=>{}}) => {
  //console.log(props)
  const [clickablableBGColor, setclickablableBGColor] = useState<string>(bgColor)
  useEffect(() => {
    setTimeout(()=>{
          setclickablableBGColor(bgColor)
          console.log('remise a zero de la couleur');

        },230)
  }, [bgColor,clickablableBGColor])

  return (
    <Pressable onPress={(evt)=>{
        setclickablableBGColor('grey')

        onButtonPressed()
    }} style={[styles.Button, {backgroundColor:clickablableBGColor}]}>
      <Text style={[styles.text,{color:color}]}>{children}</Text>
    </Pressable>
  );
};
export default Button;
