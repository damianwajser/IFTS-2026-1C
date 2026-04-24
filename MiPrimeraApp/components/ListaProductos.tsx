import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import TarjetaProducto from './TarjetaProducto';
import Producto from './Producto'; 

type ListaProductosProps = {
  productos: Producto[];
}

const ListaProductos : React.FC<ListaProductosProps> = ({ productos }) => {
  return (
    <View>
      <FlatList contentContainerStyle={styles.containerGeneral}
        data={productos}
        ListEmptyComponent={<Text>No hay productos disponibles</Text>}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={
            ({ item: producto }) => {
                return <TarjetaProducto producto={producto} />;
            }
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    flex: 1,
    backgroundColor: '#6a0d0d'
  }
});

export default ListaProductos;