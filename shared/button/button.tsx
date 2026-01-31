import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

const Button = ({ text, ...props }: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.softOrange,
    borderRadius: Radius.r16,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
  },
});
