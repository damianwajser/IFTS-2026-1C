import React, { useState } from "react";
import { View, Text, Button } from "react-native";

type SaludoProps = {
  nombre?: string;
}

const SaludoComponent : React.FC<SaludoProps> = (prop) => {
  var [edad, setEdad] = useState(10);
  const [nombre, setNombre] = useState(prop.nombre);
  const [otra, setOtra] = useState(edad);
  return (
    <View>
     <Text>HOLA {nombre}, tenes {edad} años</Text>
      <Button title="Aumentar edad" onPress={()=>{ 
        setEdad(edad + 10);
        setNombre("Ignacio");
        
      }}/>
    </View>
  );
} 
export default SaludoComponent;