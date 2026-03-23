import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import Button from './src/Button/Button';

export default function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("counter has changed : ", counter);
    }, [counter]);

  return (
    <View style={styles.container}>
      <Text>valeur de counter : {counter}</Text>
      <Button bgColor="red" color="white" onButtonPressed={()=>{
        setCounter(counter - 1);
      }} >-1</Button>
      <Button bgColor="blue" color="white" onButtonPressed={()=>{
        setCounter(counter + 1);
      }}>+1</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});