import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Avatar({ name, size = "medium", imageUrl }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeStyles = {
    small: { width: 32, height: 32, fontSize: 12 },
    medium: { width: 48, height: 48, fontSize: 16 },
    large: { width: 64, height: 64, fontSize: 20 },
  };

  return (
    <View
      style={[
        styles.avatar,
        {
          width: sizeStyles[size].width,
          height: sizeStyles[size].height,
        },
      ]}
    >
      {imageUrl ? (
        <Ionicons name="person" size={sizeStyles[size].fontSize} color="#FFFFFF" />
      ) : (
        <Text style={[styles.initials, { fontSize: sizeStyles[size].fontSize }]}>
          {getInitials(name)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 999,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});