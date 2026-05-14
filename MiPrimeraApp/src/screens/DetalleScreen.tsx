import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../types/navigation';

type DetalleRouteProp = RouteProp<HomeStackParamList, 'Detalle'>;

type Props = {
  route: DetalleRouteProp;
};

const detalles: Record<number, { nombre: string; descripcion: string }> = {
  1: { nombre: 'Tarta de manzana', descripcion: 'Tarta clásica con masa quebrada y manzanas caramelizadas.' },
  2: { nombre: 'Pizza margarita', descripcion: 'Pizza italiana con tomate, mozzarella fresca y albahaca.' },
  3: { nombre: 'Ensalada César', descripcion: 'Lechuga romana, croutons, parmesano y aderezo César.' },
};

const DetalleScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const detalle = detalles[id];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{detalle?.nombre ?? `Receta #${id}`}</Text>
      <Text style={styles.descripcion}>
        {detalle?.descripcion ?? 'Sin descripción disponible.'}
      </Text>
      <Text style={styles.idBadge}>ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef3c7',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f2937',
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 24,
  },
  idBadge: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default DetalleScreen;
