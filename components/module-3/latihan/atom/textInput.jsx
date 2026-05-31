import { StyleSheet, TextInput } from "react-native";

export default function TextInputA({ placeholder }) {
  return <TextInput placeholder={placeholder} style={styles.input} />;
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
