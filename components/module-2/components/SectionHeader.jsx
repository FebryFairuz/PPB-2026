import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function SectionHeader({ icon, title, color = "#3B82F6" }) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color={color} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
});