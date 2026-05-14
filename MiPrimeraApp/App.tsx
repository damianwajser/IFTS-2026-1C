import { StyleSheet, View, Text } from 'react-native';
import TarjetaProducto from './components/TarjetaProducto';
import Producto from './components/Producto';
import ListaProductos from './components/ListaProductos';
import Cliente from './components/Cliente';

const clientes: Cliente[] = [{
  id: 1,
  nombre: "Juan",
  email: "juan@example.com",
  tipo: "premium"
}, {
  id: 2,
  nombre: "Maria",
  email: "maria@example.com",
  tipo: "regular"
}];


const productos: Producto[] = [{
  id: 1,
  nombre: "Coca-cola",
  precio: 100,
  descripcion: "Bebida gaseosa"
}, {
  id: 2,
  nombre: "Agua",
  precio: 40,
  descripcion: "Agua mineral"
}, {
  id: 3,
  nombre: "Jugo de naranja",
  precio: 10,
  descripcion: "Jugo natural"
}, {
  id: 4,
  nombre: "Cerveza",
  precio: 5,
  descripcion: "Cerveza artesanal"
},  {
  id: 5,
  nombre: "Vino tinto",
  precio: 20,
  descripcion: "Vino de la casa"
}];

const App : React.FC = () => {
  return (
  <View style={styles.containerGeneral}>
    <ListaProductos productos={productos} cliente={clientes[1]}/>
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