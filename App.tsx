import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
      <Text style={styles.subtitle}>
        Свежие зёрна, настоящая арабика и бережная обжарка
      </Text>
      <Button title="Начать" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "Sora",
    fontWeight: 600,
    fontSize: 34,
    letterSpacing: 1,
    textAlign: "center",
    color: "black",
    marginBottom: 8,
  },
  subtitle: {
    color: "#A9A9A9",
    fontFamily: "Sora",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 14,
    letterSpacing: 1,
    textAlign: "center",
  },
});
