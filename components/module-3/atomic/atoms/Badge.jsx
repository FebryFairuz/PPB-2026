import { StyleSheet, Text, View } from "react-native";

export default function Badge({ text, variant = "primary" }) {
  return (
    <View style={[styles.badge, styles[variant]]}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  primary: {
    backgroundColor: "#DBEAFE",
  },
  success: {
    backgroundColor: "#D1FAE5",
  },
  warning: {
    backgroundColor: "#FEF3C7",
  },
  danger: {
    backgroundColor: "#FEE2E2",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
  primaryText: {
    color: "#1E40AF",
  },
  successText: {
    color: "#065F46",
  },
  warningText: {
    color: "#92400E",
  },
  dangerText: {
    color: "#991B1B",
  },
});