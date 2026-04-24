import React from "react";
import { View, Text, StyleSheet } from "react-native"; 
import Producto from "./Producto";



type TarjetaProductoProps = {
  producto: Producto;
}

const TarjetaProducto: React.FC<TarjetaProductoProps> = ({ producto }) => {
  return (
    <View style={styles.containerGeneral}>
      <Text>{producto.nombre}</Text>
      <Text>{producto.precio}</Text>
      <Text>{producto.descripcion}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerGeneral: {
    flex: 1,
    backgroundColor: '#8d9d90',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default TarjetaProducto;