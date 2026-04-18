import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View styles={styles.container}>
          <Text styles={styles.login}>Login</Text>
          <View>
            <Text>Username</Text>
            <TextInput placeholder="Masukkan username" />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              placeholder="Masukkan password..."
              secureTextEntry={true}
            />
          </View>
          <Button title="Continue" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white",
    x: 1,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 8,
    paddinghorizontal: 16,
    margintop: 10,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
