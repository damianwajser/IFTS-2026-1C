import { StyleSheet, View, Text } from 'react-native';
import TarjetaProducto from './components/TarjetaProducto';
import Producto from './components/Producto';
import ListaProductos from './components/ListaProductos';

const productos: Producto[] = [{
  id: 1,
  nombre: "Coca-cola",
  precio: 100,
  descripcion: "Bebida gaseosa"
}, {
  id: 2,
  nombre: "Agua",
  precio: 50,
  descripcion: "Agua mineral"
}, {
  id: 3,
  nombre: "Jugo de naranja",
  precio: 120,
  descripcion: "Jugo natural"
}, {
  id: 4,
  nombre: "Cerveza",
  precio: 150,
  descripcion: "Cerveza artesanal"
},  {
  id: 5,
  nombre: "Vino tinto",
  precio: 20,
  descripcion: "Vino de la casa"
}];



const App : React.FC = () => {
 var productos50 = productos.filter(producto => producto.precio > 50);  
  return (
  <View style={styles.containerGeneral}>
    <ListaProductos productos={productos50} />
  </View>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    flex: 1,
    backgroundColor: '#ca5b5b',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;