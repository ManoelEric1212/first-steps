import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About simples do app</Text>
      <StatusBar style="auto" />
    </View>
  );
}
