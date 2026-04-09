import { View, Text} from 'react-native';
import styles from './DespedidaStyle';
import DespedidaComponentProps from './DespedidaComponentProps';

const DespedidaComponent : React.FC<DespedidaComponentProps> = (props) => {
  return (
    <View>
      <Text style={styles.text}>CHAAAAY {props.nombre}</Text>
    </View>
  );
} 
export default DespedidaComponent;
