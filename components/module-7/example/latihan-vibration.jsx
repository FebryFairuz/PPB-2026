import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LatihanVibration({ onClose }) {
  const [lastVibration, setLastVibration] = useState(null);

  const vibrationPatterns = [
    {
      id: "light",
      title: "Light Impact",
      description: "Getaran ringan untuk feedback sederhana",
      icon: "radio-button-off",
      color: "#3B82F6",
      action: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
    },
    {
      id: "medium",
      title: "Medium Impact",
      description: "Getaran sedang untuk interaksi standar",
      icon: "radio-button-on",
      color: "#10B981",
      action: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    },
    {
      id: "heavy",
      title: "Heavy Impact",
      description: "Getaran kuat untuk aksi penting",
      icon: "disc",
      color: "#F59E0B",
      action: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
    },
    {
      id: "success",
      title: "Success Notification",
      description: "Getaran untuk notifikasi sukses",
      icon: "checkmark-circle",
      color: "#10B981",
      action: () =>
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
    },
    {
      id: "warning",
      title: "Warning Notification",
      description: "Getaran untuk peringatan",
      icon: "warning",
      color: "#F59E0B",
      action: () =>
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning),
    },
    {
      id: "error",
      title: "Error Notification",
      description: "Getaran untuk notifikasi error",
      icon: "close-circle",
      color: "#EF4444",
      action: () =>
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
    },
    {
      id: "selection",
      title: "Selection Changed",
      description: "Getaran halus saat memilih item",
      icon: "hand-left",
      color: "#8B5CF6",
      action: () => Haptics.selectionAsync(),
    },
  ];

  const handleVibrate = async (pattern) => {
    try {
      await pattern.action();
      setLastVibration({
        title: pattern.title,
        time: new Date().toLocaleTimeString(),
      });
    } catch (error) {
      Alert.alert("Error", "Gagal melakukan getaran: " + error.message);
    }
  };

  const handleCustomPattern = async () => {
    try {
      // Pattern: vibrate for 100ms, pause 50ms, vibrate 200ms, pause 50ms, vibrate 100ms
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      await new Promise((resolve) => setTimeout(resolve, 100));
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      await new Promise((resolve) => setTimeout(resolve, 100));
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

      setLastVibration({
        title: "Custom Pattern",
        time: new Date().toLocaleTimeString(),
      });
    } catch (error) {
      Alert.alert("Error", "Gagal melakukan getaran: " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Introduction */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="information-circle" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Tentang Haptic Feedback</Text>
          </View>
          <Text style={styles.description}>
            Haptic feedback memberikan respons sentuhan fisik kepada pengguna
            melalui getaran. Ini meningkatkan pengalaman pengguna dengan
            memberikan konfirmasi taktil untuk interaksi.
          </Text>
        </View>

        {/* Platform Info */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="phone-portrait" size={20} color="#6B7280" />
            <Text style={styles.infoLabel}>Platform:</Text>
            <Text style={styles.infoValue}>{Platform.OS}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="information-circle" size={20} color="#6B7280" />
            <Text style={styles.infoLabel}>Status:</Text>
            <Text style={[styles.infoValue, { color: "#10B981" }]}>
              Haptics Available
            </Text>
          </View>
        </View>

        {/* Last Vibration Info */}
        {lastVibration && (
          <View style={styles.lastVibrationCard}>
            <View style={styles.lastVibrationHeader}>
              <Ionicons name="time" size={20} color="#8B5CF6" />
              <Text style={styles.lastVibrationTitle}>Last Vibration</Text>
            </View>
            <Text style={styles.lastVibrationText}>
              {lastVibration.title} at {lastVibration.time}
            </Text>
          </View>
        )}

        {/* Vibration Patterns */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="radio" size={24} color="#0bbbf5" />
            <Text style={styles.sectionTitle}>Vibration Patterns</Text>
          </View>
          <Text style={styles.description}>
            Tekan tombol di bawah untuk merasakan berbagai jenis getaran
          </Text>

          {vibrationPatterns.map((pattern) => (
            <TouchableOpacity
              key={pattern.id}
              style={styles.vibrationCard}
              onPress={() => handleVibrate(pattern)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.vibrationIconContainer,
                  { backgroundColor: pattern.color + "20" },
                ]}
              >
                <Ionicons name={pattern.icon} size={28} color={pattern.color} />
              </View>
              <View style={styles.vibrationContent}>
                <Text style={styles.vibrationTitle}>{pattern.title}</Text>
                <Text style={styles.vibrationDescription}>
                  {pattern.description}
                </Text>
              </View>
              <Ionicons name="play-circle" size={24} color={pattern.color} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Custom Pattern */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="construct" size={24} color="#EC4899" />
            <Text style={styles.sectionTitle}>Custom Pattern</Text>
          </View>

          <TouchableOpacity
            style={styles.customPatternButton}
            onPress={handleCustomPattern}
            activeOpacity={0.7}
          >
            <Ionicons name="pulse" size={32} color="#FFFFFF" />
            <Text style={styles.customPatternText}>
              Try Custom Vibration Pattern
            </Text>
            <Text style={styles.customPatternSubtext}>
              Heavy → Medium → Heavy
            </Text>
          </TouchableOpacity>
        </View>

        {/* Use Cases */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bulb" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Use Cases</Text>
          </View>

          <View style={styles.useCaseCard}>
            <View style={styles.useCaseHeader}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.useCaseTitle}>Button Interactions</Text>
            </View>
            <Text style={styles.useCaseDescription}>
              Gunakan light impact untuk konfirmasi tombol ditekan
            </Text>
          </View>

          <View style={styles.useCaseCard}>
            <View style={styles.useCaseHeader}>
              <Ionicons name="swap-horizontal" size={20} color="#3B82F6" />
              <Text style={styles.useCaseTitle}>Swipe Gestures</Text>
            </View>
            <Text style={styles.useCaseDescription}>
              Selection feedback untuk navigasi swipe atau scroll
            </Text>
          </View>

          <View style={styles.useCaseCard}>
            <View style={styles.useCaseHeader}>
              <Ionicons name="notifications" size={20} color="#F59E0B" />
              <Text style={styles.useCaseTitle}>Notifications</Text>
            </View>
            <Text style={styles.useCaseDescription}>
              Success, warning, atau error feedback untuk notifikasi
            </Text>
          </View>

          <View style={styles.useCaseCard}>
            <View style={styles.useCaseHeader}>
              <Ionicons name="trash" size={20} color="#EF4444" />
              <Text style={styles.useCaseTitle}>Destructive Actions</Text>
            </View>
            <Text style={styles.useCaseDescription}>
              Heavy impact untuk aksi penting seperti delete
            </Text>
          </View>
        </View>

        {/* Code Example */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="code-slash" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Code Example</Text>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`import * as Haptics from 'expo-haptics';

// Light Impact
await Haptics.impactAsync(
  Haptics.ImpactFeedbackStyle.Light
);

// Success Notification
await Haptics.notificationAsync(
  Haptics.NotificationFeedbackType.Success
);

// Selection Changed
await Haptics.selectionAsync();`}
            </Text>
          </View>
        </View>

        {/* Best Practices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="shield-checkmark" size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>Best Practices</Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="warning" size={20} color="#F59E0B" />
              <Text style={styles.tipTitle}>Don't Overuse</Text>
            </View>
            <Text style={styles.tipDescription}>
              Jangan gunakan haptic feedback terlalu sering. Gunakan hanya untuk
              interaksi penting agar tidak mengganggu pengguna.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="fitness" size={20} color="#3B82F6" />
              <Text style={styles.tipTitle}>Match the Context</Text>
            </View>
            <Text style={styles.tipDescription}>
              Pilih intensitas getaran yang sesuai dengan konteks. Light untuk
              interaksi ringan, Heavy untuk aksi penting.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="settings" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Respect User Settings</Text>
            </View>
            <Text style={styles.tipDescription}>
              Beberapa pengguna mungkin menonaktifkan haptic feedback di
              pengaturan sistem. Pastikan aplikasi Anda menghormati preferensi
              ini.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="phone-portrait" size={20} color="#EC4899" />
              <Text style={styles.tipTitle}>Test on Real Devices</Text>
            </View>
            <Text style={styles.tipDescription}>
              Haptic feedback tidak dapat dirasakan di simulator/emulator.
              Selalu test di perangkat fisik untuk pengalaman yang akurat.
            </Text>
          </View>
        </View>

        {/* Platform Differences */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="git-compare" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>Platform Differences</Text>
          </View>

          <View style={styles.platformCard}>
            <View style={styles.platformHeader}>
              <Ionicons name="logo-apple" size={24} color="#000000" />
              <Text style={styles.platformTitle}>iOS</Text>
            </View>
            <Text style={styles.platformDescription}>
              • Mendukung Taptic Engine pada iPhone 6s dan lebih baru{"\n"}•
              Memiliki berbagai jenis haptic feedback yang lebih halus{"\n"}•
              Impact feedback: Light, Medium, Heavy, Rigid, Soft{"\n"}•
              Notification feedback: Success, Warning, Error{"\n"}• Selection
              feedback untuk perubahan nilai
            </Text>
          </View>

          <View style={styles.platformCard}>
            <View style={styles.platformHeader}>
              <Ionicons name="logo-android" size={24} color="#3DDC84" />
              <Text style={styles.platformTitle}>Android</Text>
            </View>
            <Text style={styles.platformDescription}>
              • Menggunakan Vibrator API standar Android{"\n"}• Dukungan haptic
              bervariasi tergantung perangkat{"\n"}• Beberapa perangkat mungkin
              tidak mendukung semua jenis feedback{"\n"}• Intensitas getaran
              dapat berbeda antar perangkat
            </Text>
          </View>
        </View>

        {/* Interactive Demo */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="game-controller" size={24} color="#06B6D4" />
            <Text style={styles.sectionTitle}>Interactive Demo</Text>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Button Press Simulation</Text>
            <Text style={styles.demoDescription}>
              Tekan tombol untuk merasakan haptic feedback yang berbeda
            </Text>

            <View style={styles.demoButtonsContainer}>
              <TouchableOpacity
                style={[styles.demoButton, { backgroundColor: "#3B82F6" }]}
                onPress={async () => {
                  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  Alert.alert("Info", "Light haptic feedback triggered!");
                }}
              >
                <Text style={styles.demoButtonText}>Press Me</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.demoButton, { backgroundColor: "#10B981" }]}
                onPress={async () => {
                  await Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success,
                  );
                  Alert.alert("Success", "Action completed successfully!");
                }}
              >
                <Text style={styles.demoButtonText}>Success</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.demoButton, { backgroundColor: "#EF4444" }]}
                onPress={async () => {
                  await Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Error,
                  );
                  Alert.alert("Error", "Something went wrong!");
                }}
              >
                <Text style={styles.demoButtonText}>Error</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Slider Simulation</Text>
            <Text style={styles.demoDescription}>
              Tekan tombol berurutan untuk simulasi slider dengan selection
              feedback
            </Text>

            <View style={styles.sliderContainer}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  style={styles.sliderButton}
                  onPress={async () => {
                    await Haptics.selectionAsync();
                  }}
                >
                  <Text style={styles.sliderButtonText}>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Installation Guide */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="download" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Installation</Text>
          </View>

          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`# Install expo-haptics
npx expo install expo-haptics

# Import in your component
import * as Haptics from 'expo-haptics';`}
            </Text>
          </View>
        </View>

        {/* Additional Resources */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="book" size={24} color="#EC4899" />
            <Text style={styles.sectionTitle}>Additional Resources</Text>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="document-text" size={20} color="#3B82F6" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                Expo Haptics Documentation
              </Text>
              <Text style={styles.resourceLink}>
                docs.expo.dev/versions/latest/sdk/haptics
              </Text>
            </View>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="logo-apple" size={20} color="#000000" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                iOS Human Interface Guidelines
              </Text>
              <Text style={styles.resourceLink}>
                developer.apple.com/design/human-interface-guidelines/haptics
              </Text>
            </View>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="logo-android" size={20} color="#3DDC84" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                Android Haptic Feedback Guide
              </Text>
              <Text style={styles.resourceLink}>
                developer.android.com/develop/ui/views/haptics
              </Text>
            </View>
          </View>
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
  // Hero Section
  hero: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EFF6FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 16,
  },
  badge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3B82F6",
  },

  // Section Styles
  section: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
  },

  // Info Card
  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 8,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },

  // Last Vibration Card
  lastVibrationCard: {
    backgroundColor: "#F5F3FF",
    padding: 16,
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD6FE",
  },
  lastVibrationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  lastVibrationTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B5CF6",
    marginLeft: 8,
  },
  lastVibrationText: {
    fontSize: 14,
    color: "#6B7280",
  },

  // Vibration Card
  vibrationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  vibrationIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  vibrationContent: {
    flex: 1,
  },
  vibrationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  vibrationDescription: {
    fontSize: 13,
    color: "#6B7280",
  },

  // Custom Pattern Button
  customPatternButton: {
    backgroundColor: "#EC4899",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  customPatternText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 8,
  },
  customPatternSubtext: {
    fontSize: 13,
    color: "#FFFFFF",
    opacity: 0.8,
    marginTop: 4,
  },

  // Use Case Card
  useCaseCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  useCaseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  useCaseTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F2937",
    marginLeft: 8,
  },
  useCaseDescription: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },

  // Code Block
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  codeText: {
    fontFamily: "monospace",
    fontSize: 13,
    color: "#F9FAFB",
    lineHeight: 20,
  },

  // Tip Card
  tipCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tipHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F2937",
    marginLeft: 8,
  },
  tipDescription: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },

  // Platform Card
  platformCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  platformHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  platformTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginLeft: 8,
  },
  platformDescription: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 22,
  },

  // Demo Card
  demoCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
  },
  demoDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 16,
    lineHeight: 20,
  },
  demoButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  demoButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  demoButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // Slider Container
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  sliderButton: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  sliderButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
  },

  // Resource Card
  resourceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  resourceContent: {
    flex: 1,
    marginLeft: 12,
  },
  resourceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  resourceLink: {
    fontSize: 12,
    color: "#6B7280",
  },

  // Features List
  featuresList: {
    marginTop: 12,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#1F2937",
    marginLeft: 12,
    flex: 1,
  },

  // Example Card (for Module 7 index)
  exampleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  exampleIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  exampleContent: {
    flex: 1,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  exampleDescription: {
    fontSize: 13,
    color: "#6B7280",
  },

  // Requirement Card
  requirementCard: {
    backgroundColor: "#FEF2F2",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  requirementTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#991B1B",
    marginBottom: 8,
  },
  requirementList: {
    marginTop: 4,
  },
  requirementItem: {
    fontSize: 13,
    color: "#DC2626",
    lineHeight: 22,
    marginBottom: 4,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },

  // Camera/Image Picker Styles
  previewContainer: {
    alignItems: "center",
    marginTop: 12,
  },
  imagePreview: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
  },
  noImageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderStyle: "dashed",
  },
  noImageText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 12,
  },

  // Action Buttons
  actionButtonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  actionButtonSecondary: {
    backgroundColor: "#10B981",
  },
  actionButtonDanger: {
    backgroundColor: "#EF4444",
  },
  actionButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  // Image Info Card
  imageInfoCard: {
    backgroundColor: "#F0F9FF",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#BAE6FD",
  },
  imageInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  imageInfoLabel: {
    fontSize: 13,
    color: "#0369A1",
    fontWeight: "600",
  },
  imageInfoValue: {
    fontSize: 13,
    color: "#075985",
  },

  // Location Styles
  mapPlaceholder: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginTop: 12,
  },
  mapPlaceholderText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 8,
  },

  // Location Info
  locationInfoCard: {
    backgroundColor: "#ECFDF5",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },
  locationInfoTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#065F46",
    marginBottom: 12,
  },
  locationInfoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  locationInfoLabel: {
    fontSize: 13,
    color: "#047857",
    fontWeight: "600",
    width: 100,
  },
  locationInfoValue: {
    fontSize: 13,
    color: "#059669",
    flex: 1,
  },

  // Permission Card
  permissionCard: {
    backgroundColor: "#FEF3C7",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  permissionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  permissionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#92400E",
    marginLeft: 8,
  },
  permissionDescription: {
    fontSize: 13,
    color: "#B45309",
    lineHeight: 20,
  },

  // Loading State
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  loadingText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 12,
  },

  // Error State
  errorContainer: {
    backgroundColor: "#FEF2F2",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#FEE2E2",
    alignItems: "center",
  },
  errorText: {
    fontSize: 14,
    color: "#DC2626",
    textAlign: "center",
    lineHeight: 20,
  },

  // Success State
  successContainer: {
    backgroundColor: "#ECFDF5",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#A7F3D0",
    alignItems: "center",
  },
  successText: {
    fontSize: 14,
    color: "#059669",
    textAlign: "center",
    lineHeight: 20,
  },

  // Stats Card
  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 16,
  },

  // Note Card
  noteCard: {
    backgroundColor: "#FEF9C3",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#FDE047",
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#854D0E",
    marginLeft: 8,
  },
  noteText: {
    fontSize: 13,
    color: "#A16207",
    lineHeight: 20,
  },

  // Chip/Tag
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E40AF",
    marginLeft: 4,
  },

  // Toggle Button
  toggleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  toggleButtonLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
  },

  // Progress Bar
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    marginTop: 12,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#3B82F6",
    borderRadius: 4,
  },

  // Alert Box
  alertBox: {
    flexDirection: "row",
    backgroundColor: "#DBEAFE",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
  },
  alertContent: {
    flex: 1,
    marginLeft: 12,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 13,
    color: "#1E3A8A",
    lineHeight: 20,
  },

  // Card with Shadow
  cardWithShadow: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Icon Button
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonPrimary: {
    backgroundColor: "#3B82F6",
  },
  iconButtonSuccess: {
    backgroundColor: "#10B981",
  },
  iconButtonDanger: {
    backgroundColor: "#EF4444",
  },

  // Bottom Sheet
  bottomSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomSheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },

  // Empty State
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    padding: 48,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#9CA3AF",
    marginTop: 16,
    textAlign: "center",
  },

  // Skeleton Loader
  skeleton: {
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
  },
  skeletonShimmer: {
    backgroundColor: "#F3F4F6",
  },
});
