import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "./shared/button/button";
import { Colors } from "./shared/tokens";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/coffee-background-image.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.bottomWrapper}>
        <ImageBackground
          source={require("./assets/images/bottom-linear.png")}
          style={styles.linearBackground}
        >
          <View style={styles.content}>
            <Text style={styles.title}>
              Одно из самых вкусных кофе в городе!
            </Text>
            <Text style={styles.subtitle}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </Text>
            <Button text="начать" />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "68%",
  },
  bottomWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  linearBackground: {
    paddingTop: 20,
  },
  content: {
    paddingHorizontal: 28,
    paddingBottom: 70,
  },
  title: {
    fontWeight: "600",
    fontSize: 34,
    textAlign: "center",
    color: Colors.white,
    marginBottom: 18,
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 18,
  },
});
