import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RootTabParamList } from "../App";
import { RouteProp } from "@react-navigation/native";

type Details2NavProp = BottomTabNavigationProp<RootTabParamList, 'Details2'>;
type Details2RouteProp = RouteProp<RootTabParamList, 'Details2'>;

type Props = {
  navigation: Details2NavProp;
  route: Details2RouteProp;
}

const DetailScreen2: React.FC<Props> = ({ navigation, route }) => {
  const username = route.params.username;
  return (
    <View style={styles.containerGeneral}>
      <Text>Detail Screen 2</Text>
      <Text>Username: {username}</Text>
      <Button title="Vamos a la pagina Home" onPress={() => navigation.navigate('Home')} />
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
export default DetailScreen2;
