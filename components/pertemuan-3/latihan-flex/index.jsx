import { StyleSheet, Text, View } from "react-native";

export default function LatFlexbox() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-evenly",
        }}
      >
        <View style={{ ...styles.box, backgroundColor: "purple" }}>
          <Text style={styles.text}>Box 1</Text>
        </View>
        <View style={{ ...styles.box, backgroundColor: "green" }}>
          <Text style={styles.text}>Box 2</Text>
        </View>
        <View style={{ ...styles.box, backgroundColor: "blue" }}>
          <Text style={styles.text}>Box 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 50,
  },
  box: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  section: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
