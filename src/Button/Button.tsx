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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(false);
    }, 180);
    return () => clearTimeout(timeoutId);
  }, [isActive]);

  const handlePressIn = () => {
    setIsActive(true);
  };



  return (
    <Pressable onPress={(evt)=>{
        onButtonPressed()
    }}
      onPressIn={handlePressIn}
      style={[
        styles.Button, {
            backgroundColor:bgColor === 'blue'
              ? isActive
                ? 'lightblue'
                : 'blue'
              : isActive
                ? '#ff7b7b'
                : 'red',
        },
      ]}
    >
      <Text style={[styles.text,{color:color}]}>{children}</Text>
    </Pressable>
  );
};
export default Button;