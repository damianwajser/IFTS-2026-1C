import React, { useState } from 'react';
import { Text, View, TextInput, Button, Switch } from 'react-native';

type UserForm = {
  usuario: string;
  email: string;
  edad: string;
  acepta: boolean;
}

const App: React.FC = () => {
  
  const [user,setUser] = useState<UserForm>({
    usuario: '',
    email: '',
    edad: '',
    acepta: false
  });

  const { usuario, email, edad, acepta } = user;
  // estado derivado (no otro useState): se calcula en cada render
  const validar = esMayorDeEdad(edad) && acepta && usuario.trim() !== '' && email.trim() !== '';

  return (
    <View style={{
      flex: 1, padding: 16, justifyContent: "center",
      gap: 8
    }}>
      <Text>Usuario</Text>
      <TextInput
        value={usuario}
        onChangeText={(t) => setUser({...user, usuario: t})}
        placeholder="Escriba su usuario"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(t) => setUser({...user, email: t})}
        placeholder="Escriba su email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Edad</Text>
      <TextInput
        value={edad}
        onChangeText={(t) => /^\d*$/.test(t) ? setUser({...user, edad: t}):undefined}
        placeholder="Escriba su Edad"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Acepta TyC</Text>
      <Switch value={acepta} onValueChange={(value) => setUser({...user, acepta: value})} />
      <Button title="Enviar" onPress={() => { console.log({ user }) }}
        disabled={!validar} />
    </View>
  );
};

export default App;

function esMayorDeEdad(edad: string): boolean {
  const edadNumerica = parseInt(edad);
  return !(isNaN(edadNumerica) || edadNumerica <= 18);
}
