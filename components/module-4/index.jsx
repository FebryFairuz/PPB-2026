import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import AdvancedFormExample from "./examples/AdvancedFormExample";
import BasicInputExample from "./examples/BasicInputExample";
import FormValidationExample from "./examples/FormValidationExample";

export default function Module4() {
  const [activeExample, setActiveExample] = useState("basic");

  const examples = [
    {
      id: "basic",
      title: "Basic Input",
      icon: "create",
      color: "#3B82F6",
      component: BasicInputExample,
    },
    {
      id: "validation",
      title: "Form Validation",
      icon: "checkmark-circle",
      color: "#10B981",
      component: FormValidationExample,
    },
    {
      id: "advanced",
      title: "Advanced Form",
      icon: "document-text",
      color: "#F59E0B",
      component: AdvancedFormExample,
    },
  ];

  const ActiveComponent =
    examples.find((ex) => ex.id === activeExample)?.component ||
    BasicInputExample;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="document-text" size={32} color="#FFFFFF" />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Module 4</Text>
            <Text style={styles.headerSubtitle}>
              Forms: Input Handling & Validation
            </Text>
          </View>
        </View>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
        >
          {examples.map((example) => (
            <TouchableOpacity
              key={example.id}
              style={[
                styles.tab,
                activeExample === example.id && styles.activeTab,
                { borderBottomColor: example.color },
              ]}
              onPress={() => setActiveExample(example.id)}
            >
              <Ionicons
                name={example.icon}
                size={20}
                color={activeExample === example.id ? example.color : "#6B7280"}
              />
              <Text
                style={[
                  styles.tabText,
                  activeExample === example.id && {
                    color: example.color,
                    fontWeight: "600",
                  },
                ]}
              >
                {example.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Content */}
      <ActiveComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    backgroundColor: "#3B82F6",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    marginLeft: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#DBEAFE",
    marginTop: 4,
  },
  tabsWrapper: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    height: 56,
  },
  tabsContent: {
    paddingHorizontal: 4,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomWidth: 3,
  },
  tabText: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 8,
  },
});
