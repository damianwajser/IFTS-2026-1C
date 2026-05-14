import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import TarjetaProducto from './TarjetaProducto';
import Producto from './Producto'; 
import Cliente from './Cliente';

type ListaProductosProps = {
  productos: Producto[];
  cliente: Cliente;
}

const ListaProductos : React.FC<ListaProductosProps> = ({ productos, cliente }) => {
  return (
    <View>
      <FlatList contentContainerStyle={styles.containerGeneral}
        data={productos}
        ListEmptyComponent={<Text>No hay productos disponibles</Text>}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={
            ({ item: producto }) => {
                if (cliente.tipo === "premium") {
                    return <TarjetaProducto producto={producto} />;
                } else {
                    producto.precio = producto.precio * 1.2; // Aumento del 20% para clientes regulares
                    return <TarjetaProducto producto={producto} />;
                }
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