import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";


const DetallePage = () => {
    const { id } = useLocalSearchParams();

    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}>
           <Stack.Screen options={{headerTitle: `Detalle #${id}`}} />

        </View>
    );
};

export default DetallePage;