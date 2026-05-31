import ModuleHeader from "@/components/module-2/components/ModuleHeader";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style-app";

export default function Module6() {
  const router = useRouter();

  const navigationTypes = [
    {
      id: 1,
      title: "Stack Navigation",
      description: "Navigate between screens with push/pop transitions",
      icon: "layers",
      color: "#3B82F6",
      route: "/module-6/navigation/stacks",
      features: [
        "Screen stacking",
        "Back navigation",
        "Header customization",
        "Params passing",
      ],
    },
    {
      id: 2,
      title: "Tab Navigation",
      description: "Bottom tab bar for switching between main sections",
      icon: "grid",
      color: "#10B981",
      route: "/module-6/navigation/tabs",
      features: ["Bottom tabs", "Tab icons", "Badge support", "Custom styling"],
    },
    {
      id: 3,
      title: "Drawer Navigation",
      description: "Side menu for app navigation and settings",
      icon: "menu",
      color: "#F59E0B",
      route: "/module-6/navigation/drawer",
      features: [
        "Side menu",
        "Custom drawer",
        "Nested navigation",
        "User profile",
      ],
    },
  ];

  const handleOpenExample = (route) => {
    router.push(route);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: "#108cb9" }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModuleHeader
            icon="navigate-outline"
            title="Module 6"
            subtitle="Stack, Tab and Drawer Navigation"
            backgroundColor="#108cb9"
          />

          {/* Navigation Overview */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="information-circle" size={24} color="#108cb9" />
              <Text style={styles.sectionTitle}>Navigation Overview</Text>
            </View>
            <Text style={styles.overviewText}>
              React Navigation provides different navigation patterns for mobile
              apps. Each pattern serves different use cases and can be combined
              to create complex navigation structures.
            </Text>
          </View>

          {/* Navigation Types Cards */}
          {navigationTypes.map((nav) => (
            <View key={nav.id} style={styles.navCard}>
              <View style={styles.navCardHeader}>
                <View
                  style={[
                    styles.navIconContainer,
                    { backgroundColor: nav.color },
                  ]}
                >
                  <Ionicons name={nav.icon} size={32} color="#FFFFFF" />
                </View>
                <View style={styles.navCardTitleContainer}>
                  <Text style={styles.navCardTitle}>{nav.title}</Text>
                  <Text style={styles.navCardDescription}>
                    {nav.description}
                  </Text>
                </View>
              </View>

              {/* Features List */}
              <View style={styles.featuresList}>
                {nav.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color={nav.color}
                    />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              {/* Code Preview */}
              <View style={styles.codePreview}>
                <Text style={styles.codePreviewTitle}>Basic Usage:</Text>
                <View style={styles.codeBlock}>
                  <Text style={styles.codeText}>
                    {nav.id === 1 &&
                      `import { Stack } from 'expo-router';

<Stack>
  <Stack.Screen name="home" />
  <Stack.Screen name="details" />
</Stack>`}
                    {nav.id === 2 &&
                      `import { Tabs } from 'expo-router';

<Tabs>
  <Tabs.Screen name="home" />
  <Tabs.Screen name="profile" />
</Tabs>`}
                    {nav.id === 3 &&
                      `import { Drawer } from 'expo-router';

<Drawer>
  <Drawer.Screen name="home" />
  <Drawer.Screen name="settings" />
</Drawer>`}
                  </Text>
                </View>
              </View>

              {/* Play Button */}
              <TouchableOpacity
                style={[styles.playButton, { backgroundColor: nav.color }]}
                onPress={() => handleOpenExample(nav.route)}
              >
                <Ionicons name="play-circle" size={24} color="#FFFFFF" />
                <Text style={styles.playButtonText}>Open Example</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Key Concepts */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="bulb" size={24} color="#F59E0B" />
              <Text style={styles.sectionTitle}>Key Concepts</Text>
            </View>

            <View style={styles.conceptsList}>
              <View style={styles.conceptItem}>
                <Ionicons name="git-branch" size={20} color="#3B82F6" />
                <View style={styles.conceptContent}>
                  <Text style={styles.conceptTitle}>Navigation Structure</Text>
                  <Text style={styles.conceptDescription}>
                    Organize screens in a hierarchical structure
                  </Text>
                </View>
              </View>

              <View style={styles.conceptItem}>
                <Ionicons name="swap-horizontal" size={20} color="#10B981" />
                <View style={styles.conceptContent}>
                  <Text style={styles.conceptTitle}>Screen Transitions</Text>
                  <Text style={styles.conceptDescription}>
                    Smooth animations between screens
                  </Text>
                </View>
              </View>

              <View style={styles.conceptItem}>
                <Ionicons name="cube" size={20} color="#F59E0B" />
                <View style={styles.conceptContent}>
                  <Text style={styles.conceptTitle}>Nested Navigation</Text>
                  <Text style={styles.conceptDescription}>
                    Combine different navigation types
                  </Text>
                </View>
              </View>

              <View style={styles.conceptItem}>
                <Ionicons name="send" size={20} color="#8B5CF6" />
                <View style={styles.conceptContent}>
                  <Text style={styles.conceptTitle}>Params Passing</Text>
                  <Text style={styles.conceptDescription}>
                    Share data between screens
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
