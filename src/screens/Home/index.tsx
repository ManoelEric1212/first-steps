import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Testando primeira renderização do aphpgvyhvgcg</Text>
      <Button
        title="Sobre"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}
