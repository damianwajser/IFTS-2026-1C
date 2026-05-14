import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  const [valor, setValor] = useState("Damian");
  return (
    <View>    
    <Text>{valor}</Text>
    </View>
  );
};

export default HomeStack;
