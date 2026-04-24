# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm start          # Expo dev server — escanear QR con Expo Go en la misma red Wi-Fi
npm run android    # Abrir en emulador Android
npm run ios        # Abrir en simulador iOS (solo Mac)
npm run web        # Abrir en navegador
```

No hay linter ni test runner configurados.

## Stack

- Expo SDK 54 / React 19 / React Native 0.81, TypeScript strict
- `@react-navigation/native-stack` para navegación Stack
- Nueva arquitectura habilitada (`newArchEnabled: true`)

## Arquitectura

**Flujo de arranque:** `index.ts` → `registerRootComponent(App)` → `App.tsx`

**Navegación:** `App.tsx` define `RootStackParamList` y el `NativeStackNavigator`. Todas las pantallas importan ese tipo desde `../App` para tipar sus props de navegación y ruta.

```ts
// Patrón de tipado en cada pantalla
type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type Props = { navigation: HomeNavProp };
```

Para pantallas que reciben parámetros, se agrega `RouteProp<RootStackParamList, 'NombrePantalla'>` como prop `params` (ver `DetailScreen.tsx`).

**Componentes:** todos tipados como `React.FC<Props>` con estilos inline via `StyleSheet.create()`.

**Modelo de datos:** `Producto` es un `type` definido en `components/Producto.tsx` e importado por `ListaProductos` y `TarjetaProducto`. El patrón de lista usa `FlatList` con `keyExtractor` por `id` y `ListEmptyComponent`.

**Agregar una pantalla nueva:**
1. Crear `screens/NombreScreen.tsx` con los tipos de navegación correspondientes.
2. Agregar la ruta a `RootStackParamList` en `App.tsx`.
3. Registrar `<Stack.Screen name='Nombre' component={NombreScreen} />` en el navigator.