import { View, Text } from "react-native";
import BienvenidaComponent from "../BienvediaComponent/BienvenidaComponent";
import DespedidaComponent from "../DespedidaComponent/DespedidaComponent";


const SaludoComponent : React.FC = () => {
  return (
    <View>
     <BienvenidaComponent nombre="Juan" edad={25}></BienvenidaComponent>
     <DespedidaComponent nombre="Juan"></DespedidaComponent>
     <Text>HOLA</Text>
    </View>
  );
} 
export default SaludoComponent;