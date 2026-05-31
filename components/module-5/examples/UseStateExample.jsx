import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function UseStateExample() {
  // Simple counter
  const [count, setCount] = useState(0);

  // Text input
  const [name, setName] = useState("");

  // Boolean state
  const [isVisible, setIsVisible] = useState(true);

  // Object state
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  // Array state
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem }]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUserChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Counter Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calculator" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Simple Counter</Text>
        </View>

        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={[styles.button, styles.decrementButton]}
            onPress={() => setCount(count - 1)}
          >
            <Ionicons name="remove" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.countDisplay}>
            <Text style={styles.countText}>{count}</Text>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.incrementButton]}
            onPress={() => setCount(count + 1)}
          >
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Ionicons name="refresh" size={20} color="#6B7280" />
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const [count, setCount] = useState(0);

// Increment
setCount(count + 1);

// Decrement
setCount(count - 1);

// Reset
setCount(0);`}
          </Text>
        </View>
      </View>

      {/* Text Input Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="text" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Text Input State</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#9CA3AF"
        />

        {name ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Current Value:</Text>
            <Text style={styles.resultValue}>{name}</Text>
          </View>
        ) : null}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const [name, setName] = useState("");

<TextInput
  value={name}
  onChangeText={setName}
/>`}
          </Text>
        </View>
      </View>

      {/* Boolean State Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="toggle" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Boolean State</Text>
        </View>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsVisible(!isVisible)}
        >
          <Ionicons
            name={isVisible ? "eye" : "eye-off"}
            size={24}
            color="#F59E0B"
          />
          <Text style={styles.toggleButtonText}>
            {isVisible ? "Hide" : "Show"} Content
          </Text>
        </TouchableOpacity>

        {isVisible && (
          <View style={styles.visibleContent}>
            <Ionicons name="checkmark-circle" size={48} color="#10B981" />
            <Text style={styles.visibleText}>This content is visible!</Text>
          </View>
        )}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const [isVisible, setIsVisible] = useState(true);

// Toggle
setIsVisible(!isVisible);

// Conditional rendering
{isVisible && <View>...</View>}`}
          </Text>
        </View>
      </View>

      {/* Object State Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Object State</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John"
            value={user.firstName}
            onChangeText={(value) => handleUserChange("firstName", value)}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Doe"
            value={user.lastName}
            onChangeText={(value) => handleUserChange("lastName", value)}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="25"
            value={user.age.toString()}
            onChangeText={(value) =>
              handleUserChange("age", parseInt(value) || 0)
            }
            keyboardType="numeric"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {(user.firstName || user.lastName || user.age > 0) && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>User Object:</Text>
            <Text style={styles.resultValue}>
              {JSON.stringify(user, null, 2)}
            </Text>
          </View>
        )}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const [user, setUser] = useState({
  firstName: "",
  lastName: "",
  age: 0,
});

// Update specific field
setUser(prev => ({
  ...prev,
  firstName: value
}));`}
          </Text>
        </View>
      </View>

      {/* Array State Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="list" size={24} color="#EF4444" />
          <Text style={styles.sectionTitle}>Array State (Todo List)</Text>
        </View>

        <View style={styles.addItemContainer}>
          <TextInput
            style={[styles.input, styles.addItemInput]}
            placeholder="Add new item"
            value={newItem}
            onChangeText={setNewItem}
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {items.length > 0 ? (
          <View style={styles.itemsList}>
            {items.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                <Text style={styles.itemText}>{item.text}</Text>
                <TouchableOpacity
                  onPress={() => handleRemoveItem(item.id)}
                  style={styles.removeButton}
                >
                  <Ionicons name="trash" size={20} color="#EF4444" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={48} color="#9CA3AF" />
            <Text style={styles.emptyStateText}>No items yet</Text>
          </View>
        )}

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`const [items, setItems] = useState([]);

// Add item
setItems([...items, newItem]);

// Remove item
setItems(items.filter(item => 
  item.id !== id
));`}
          </Text>
        </View>
      </View>

      {/* Key Concepts */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="bulb" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Key Concepts</Text>
        </View>

        <View style={styles.conceptsList}>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>
              useState returns [state, setState]
            </Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>
              State updates trigger re-renders
            </Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>
              Use functional updates for complex state
            </Text>
          </View>
          <View style={styles.conceptItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.conceptText}>Never mutate state directly</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  section: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  decrementButton: {
    backgroundColor: "#EF4444",
  },
  incrementButton: {
    backgroundColor: "#10B981",
  },
  countDisplay: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 100,
    alignItems: "center",
  },
  countText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
    marginBottom: 16,
  },
  resetButtonText: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },
  resultContainer: {
    backgroundColor: "#F0F9FF",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 14,
    color: "#1E3A8A",
    fontFamily: "monospace",
  },
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF3C7",
    paddingVertical: 16,
    borderRadius: 8,
    gap: 12,
    marginBottom: 16,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#92400E",
  },
  visibleContent: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#F0FDF4",
    borderRadius: 8,
    marginBottom: 16,
  },
  visibleText: {
    fontSize: 16,
    color: "#166534",
    marginTop: 12,
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  addItemContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  addItemInput: {
    flex: 1,
    marginBottom: 0,
  },
  addButton: {
    backgroundColor: "#3B82F6",
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  itemsList: {
    gap: 8,
    marginBottom: 16,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  removeButton: {
    padding: 8,
  },
  emptyState: {
    alignItems: "center",
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 12,
  },
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 8,
  },
  codeText: {
    fontSize: 12,
    color: "#F9FAFB",
    fontFamily: "monospace",
    lineHeight: 20,
  },
  conceptsList: {
    gap: 12,
  },
  conceptItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    padding: 12,
    borderRadius: 8,
  },
  conceptText: {
    fontSize: 14,
    color: "#166534",
    marginLeft: 12,
    fontWeight: "500",
  },
});
