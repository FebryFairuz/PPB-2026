import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { color_list } from "../styles/style-app";

const EmptyShelf = () => {
  return (
    <View style={styles.emptyContainer}>
      <Ionicons name="library-outline" size={100} color={color_list.green} />
      <Text style={styles.emptyTitle}>Your Shelf is Empty</Text>
      <Text style={styles.emptySubtitle}>
        Add your favorite books to see them here.
      </Text>
    </View>
  );
};

export default function Shelf() {
  // For now, we assume the shelf is always empty.
  // In the future, you can add a condition here.
  const isEmpty = true;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "My Shelf" }} />
      {isEmpty ? <EmptyShelf /> : <Text>Your books will be here</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_list.white,
    padding: 20,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: color_list.green_dark,
    marginTop: 20,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 16,
    color: color_list.gray_500,
    marginTop: 8,
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
