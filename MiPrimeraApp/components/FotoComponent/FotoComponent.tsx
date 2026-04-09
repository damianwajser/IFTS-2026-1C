import { View, Image, StyleSheet } from "react-native";

const FotoComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default FotoComponent;
