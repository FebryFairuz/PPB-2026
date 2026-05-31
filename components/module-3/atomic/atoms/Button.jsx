import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ 
  title, 
  onPress, 
  variant = "primary",
  size = "medium",
  fullWidth = false 
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  // Variants
  primary: {
    backgroundColor: "#3B82F6",
  },
  secondary: {
    backgroundColor: "#6B7280",
  },
  success: {
    backgroundColor: "#10B981",
  },
  danger: {
    backgroundColor: "#EF4444",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  // Sizes
  small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  fullWidth: {
    width: "100%",
  },
  // Text styles
  text: {
    fontWeight: "600",
    fontSize: 14,
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#FFFFFF",
  },
  successText: {
    color: "#FFFFFF",
  },
  dangerText: {
    color: "#FFFFFF",
  },
  outlineText: {
    color: "#3B82F6",
  },
});