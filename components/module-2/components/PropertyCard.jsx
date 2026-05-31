import { StyleSheet, Text, View } from "react-native";

export default function PropertyCard({ title, properties, borderColor = "#06B6D4" }) {
  return (
    <View style={[styles.container, { borderLeftColor: borderColor }]}>
      <Text style={styles.title}>{title}</Text>
      {properties.map((property, index) => (
        <Text key={index} style={styles.text}>
          • {property}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
    marginBottom: 4,
  },
});