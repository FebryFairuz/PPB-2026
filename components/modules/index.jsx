import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ModuleCard = ({ title, description, icon, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: color + "20" }]}>
        <Ionicons name={icon} size={32} color={color} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#999" />
    </TouchableOpacity>
  );
};

export default function Welcome() {
  const router = useRouter();
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction",
      description: "Pengenalan React Native & Expo",
      icon: "book-outline",
      color: "#3B82F6",
      path: "/module-1",
    },
    {
      id: 2,
      title: "Module 2: Components",
      description: "Basic Components & Styling",
      icon: "cube-outline",
      color: "#10B981",
      path: "/module-2",
    },
    {
      id: 3,
      title: "Module 3: Layouts",
      description: "Flexbox & Responsive Design",
      icon: "grid-outline",
      color: "#F59E0B",
      path: "/module-3",
    },
    {
      id: 4,
      title: "Module 4: Forms",
      description: "Input Handling & Validation",
      icon: "create-outline",
      color: "#EF4444",
      path: "/module-4",
    },
    {
      id: 5,
      title: "Module 5: State Management",
      description: "useState & useEffect Hooks",
      icon: "sync-outline",
      color: "#8B5CF6",
      path: "/module-5",
    },
    {
      id: 6,
      title: "Module 6: Navigation",
      description: "Stack, Tab & Drawer Navigation",
      icon: "navigate-outline",
      color: "#EC4899",
      path: "/module-6",
    },
    {
      id: 7,
      title: "Module 7: Device Features",
      description: "Camera, Location & Permissions",
      icon: "phone-portrait-outline",
      color: "#06B6D4",
      path: "/module-7",
    },
    {
      id: 8,
      title: "Module 8: Authentication",
      description: "SecureStore and Authentication",
      icon: "lock-closed",
      color: "#F97316",
      path: "/module-8",
    },
    {
      id: 9,
      title: "Module 9: Final Project",
      description: "Build Complete Mobile App",
      icon: "rocket-outline",
      color: "#6d16f9",
      path: "/module-8",
    },
  ];

  const handleModulePress = (module) => {
    console.log(`Navigating to ${module.title}`);
    router.push(module?.path);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pemrograman Perangkat Bergerak</Text>
          <Text style={styles.headerSubtitle}>IBIK • Teknologi Informasi</Text>
        </View>

        {/* Modules Section */}
        <View style={styles.modulesContainer}>
          <Text style={styles.sectionTitle}>Course Modules</Text>
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
              color={module.color}
              onPress={() => handleModulePress(module)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 0,
  },
  modulesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 16,
    marginLeft: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#6B7280",
  },
});
