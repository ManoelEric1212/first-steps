import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Testando primeira renderização do app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
