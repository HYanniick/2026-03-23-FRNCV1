import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import Button from './src/Button/Button';

export default function App() {
  let counter=0
  return (
    <View style={styles.container}>
      <Text>valeur de counter : {counter}</Text>
      <Button bgColor="red" color="white" onButtonPressed={()=>{
        counter--;
        console.log(counter)
      }} >-1</Button>
      <Button bgColor="blue" color="white" onButtonPressed={()=>{
        counter++;
        console.log(counter);
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