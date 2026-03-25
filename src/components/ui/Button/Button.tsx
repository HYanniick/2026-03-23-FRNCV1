import { Text, Pressable } from "react-native";
import React, { useEffect, useState } from 'react'
import styles from "./Button.styles";
interface IButtonProps{
  children:string
  color?:"white"|"grey"
  bgColor:"blue"|"red"
  onButtonPressed:()=>void
}
const Button: React.FC<IButtonProps>= ({children, color, bgColor, onButtonPressed=()=>{}}) => {
  const [clickablableBGColor, setclickablableBGColor] = useState<string>(bgColor)
  useEffect(() => {
    setTimeout(()=>{
          setclickablableBGColor(bgColor)
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
