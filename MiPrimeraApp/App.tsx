import { StyleSheet, View } from 'react-native';
import SaludoComponent from './components/SaludoComponent/SaludoComponent';
import BienvenidaComponent from './components/BienvediaComponent/BienvenidaComponent';
import FotoComponent from './components/FotoComponent/FotoComponent';

const App : React.FC = () => {
 return (
    <View style={styles.container}>
      <SaludoComponent></SaludoComponent>
      <BienvenidaComponent nombre="Damian" edad={30}></BienvenidaComponent>
      <FotoComponent></FotoComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c42727',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;