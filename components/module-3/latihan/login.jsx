import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import TextInputA from "./atom/textInput";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/user-icons.png")}
        style={styles.image}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
          textTransform: "capitalize",
        }}
      >
        Let's happy new year
      </Text>
      <View style={styles.login_form}>
        <Text>Userid: </Text>
        <TextInputA placeholder="Email" />
        <Text style={{ marginTop: 15 }}>Password: </Text>
        <TextInputA placeholder="Password" secureTextEntry={true} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  login_form: {
    flexDirection: "column",
    width: "80%",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
