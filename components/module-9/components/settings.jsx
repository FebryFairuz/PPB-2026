import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/style-app";

const nav_preferences = [
  { id: 1, title: "Account Safety", icon: "shield-alt" },
  { id: 2, title: "Payment Methods", icon: "credit-card" },
  { id: 3, title: "My Coints", icon: "coins" },
  { id: 4, title: "Privacy Policy", icon: "shield-virus" },
  { id: 5, title: "Help & Support", icon: "question-circle" },
  { id: 6, title: "Terms of Service", icon: "info-circle" },
  { id: 7, title: "Language", icon: "language" },
];

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      <View style={styles.cardContainer}>
        {nav_preferences.map((item, index) => renderSettingItem(item, index))}
      </View>
    </View>
  );
};

const renderSettingItem = (item, index) => {
  const isLastItem = index === nav_preferences.length - 1;

  return (
    <TouchableOpacity
      key={item.id}
      style={[styles.settingItem, isLastItem && styles.lastItem]}
      activeOpacity={0.7}
    >
      <View style={styles.settingContent}>
        <FontAwesome5
          name={item.icon}
          size={20}
          color={color_list.green_dark}
        />
        <Text style={styles.settingTitle}>{item.title}</Text>
      </View>
      <AntDesign name="right" size={18} color="#999" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: color_list.green_dark,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: color_list.green_light,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  settingContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default Settings;
