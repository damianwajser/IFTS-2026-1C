import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RootTabParamList } from "../App-FOMR";

type NavProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

type Props = {
  navigation: NavProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.containerGeneral}>
      <Text>Home Screen</Text>
    
      <Button title="Vamos a la pagina Detalle"></Button>
      <button title="Vamos a la pagina Detalle">asdasd</button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerGeneral: {
    flex: 1,
    backgroundColor: '#ca5b5b',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default HomeScreen;
