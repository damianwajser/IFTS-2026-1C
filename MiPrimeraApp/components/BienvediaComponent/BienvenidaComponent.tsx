import { View, Text, StyleSheet } from 'react-native';
import styles from './BienvenidaStyle';
import BienvenidaComponentProps from './BienvenidaComponentProps';

const BienvenidaComponent : React.FC<BienvenidaComponentProps> = (props) => {
  return (
    <View>
      <Text style={styles.textblanco}>Bienvenido {props.nombre}</Text>
      <Text style={styles.textAmarillo}>Tenes {props.edad} años</Text>
    </View>
  );
} 
export default BienvenidaComponent;
