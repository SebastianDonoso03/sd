import { Link } from "expo-router";
import { View } from "react-native";


const ListPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}>
      <Link href="../inicio">Inicio</Link>
      <Link href="../ofertas">Ofertas</Link>
    </View>
  );
};