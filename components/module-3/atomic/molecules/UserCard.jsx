import { StyleSheet, Text, View } from "react-native";
import Avatar from "../atoms/Avatar";
import Badge from "../atoms/Badge";

export default function UserCard({ name, email, role, status }) {
  return (
    <View style={styles.container}>
      <Avatar name={name} size="large" />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <View style={styles.badges}>
          <Badge text={role} variant="primary" />
          <Badge text={status} variant={status === "Active" ? "success" : "danger"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 8,
  },
  badges: {
    flexDirection: "row",
    gap: 8,
  },
});