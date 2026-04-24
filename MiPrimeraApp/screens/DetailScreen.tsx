import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { RootTabParamList } from "../App";

type NavProp = BottomTabNavigationProp<RootTabParamList, 'Details'>;
type RouteProps = RouteProp<RootTabParamList, 'Details'>;

type Props = {
  navigation: NavProp;
  route: RouteProps;
}

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
 const username  = route.params.username;
 const productId = route.params.productId;
  return (
    <View style={styles.containerGeneral}>
      <Text>Detail Screen</Text>
      <Text>Username: {username}</Text>
      <Text>ProductId: {productId}</Text>
      <Button title="Vamos a la pagina Detalle 2" 
              onPress={() => navigation.navigate({ 
                    name: 'Details2', 
                    params: { username: username } })} />
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
export default DetailScreen;
