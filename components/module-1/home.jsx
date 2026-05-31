import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Module1() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Ionicons name="logo-react" size={64} color="#61DAFB" />
          </View>
          <Text style={styles.heroTitle}>React Native</Text>
          <Text style={styles.heroSubtitle}>Learn once, write anywhere</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Module 1: Introduction</Text>
          </View>
        </View>

        {/* What is React Native */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="information-circle" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Apa itu React Native?</Text>
          </View>
          <Text style={styles.paragraph}>
            React Native adalah framework open-source yang dikembangkan oleh
            Meta (Facebook) untuk membangun aplikasi mobile menggunakan
            JavaScript dan React.
          </Text>
          <Text style={styles.paragraph}>
            Dengan React Native, Anda dapat membuat aplikasi native untuk iOS
            dan Android menggunakan satu codebase, yang berarti lebih efisien
            dan hemat waktu.
          </Text>
        </View>

        {/* Key Features */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="star" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Fitur Utama</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: "#DBEAFE" }]}>
              <Ionicons name="phone-portrait" size={28} color="#3B82F6" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Cross-Platform</Text>
              <Text style={styles.featureText}>
                Satu kode untuk iOS dan Android
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: "#D1FAE5" }]}>
              <Ionicons name="flash" size={28} color="#10B981" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Hot Reload</Text>
              <Text style={styles.featureText}>
                Lihat perubahan secara real-time
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: "#FEF3C7" }]}>
              <Ionicons name="code-slash" size={28} color="#F59E0B" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>JavaScript & React</Text>
              <Text style={styles.featureText}>
                Gunakan teknologi web yang familiar
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: "#FCE7F3" }]}>
              <Ionicons name="cube" size={28} color="#EC4899" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Native Components</Text>
              <Text style={styles.featureText}>
                Akses komponen native platform
              </Text>
            </View>
          </View>
        </View>

        {/* How it Works */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="settings" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Cara Kerja</Text>
          </View>

          <View style={styles.workflowCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Tulis Kode JavaScript</Text>
              <Text style={styles.stepText}>
                Gunakan React components dan JavaScript untuk menulis UI
              </Text>
            </View>
          </View>

          <View style={styles.workflowCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Bridge Communication</Text>
              <Text style={styles.stepText}>
                JavaScript berkomunikasi dengan native code melalui bridge
              </Text>
            </View>
          </View>

          <View style={styles.workflowCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Render Native UI</Text>
              <Text style={styles.stepText}>
                Aplikasi merender menggunakan native components platform
              </Text>
            </View>
          </View>
        </View>

        {/* Advantages */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="thumbs-up" size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>Keuntungan</Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.listText}>
              <Text style={styles.bold}>Efisiensi Waktu:</Text> Develop sekali
              untuk dua platform
            </Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.listText}>
              <Text style={styles.bold}>Performa Native:</Text> Menggunakan
              komponen native asli
            </Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.listText}>
              <Text style={styles.bold}>Komunitas Besar:</Text> Banyak library
              dan dukungan
            </Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.listText}>
              <Text style={styles.bold}>Hot Reload:</Text> Development lebih
              cepat dan produktif
            </Text>
          </View>

          <View style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.listText}>
              <Text style={styles.bold}>Reusable Code:</Text> Share code dengan
              web React
            </Text>
          </View>
        </View>

        {/* Popular Apps */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="apps" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>Aplikasi Populer</Text>
          </View>
          <Text style={styles.paragraph}>
            Banyak aplikasi terkenal yang dibangun dengan React Native:
          </Text>

          <View style={styles.appGrid}>
            <View style={styles.appCard}>
              <Text style={styles.appName}>Facebook</Text>
            </View>
            <View style={styles.appCard}>
              <Text style={styles.appName}>Instagram</Text>
            </View>
            <View style={styles.appCard}>
              <Text style={styles.appName}>WhatsApp</Text>
            </View>
            <View style={styles.appCard}>
              <Text style={styles.appName}>Discord</Text>
            </View>
            <View style={styles.appCard}>
              <Text style={styles.appName}>Shopify</Text>
            </View>
            <View style={styles.appCard}>
              <Text style={styles.appName}>Uber Eats</Text>
            </View>
          </View>
        </View>

        {/* Getting Started */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="rocket" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Memulai</Text>
          </View>
          <Text style={styles.paragraph}>
            Untuk memulai dengan React Native, Anda perlu:
          </Text>

          <View style={styles.requirementCard}>
            <Ionicons name="logo-nodejs" size={24} color="#339933" />
            <Text style={styles.requirementText}>
              Node.js (v18 atau lebih baru)
            </Text>
          </View>

          <View style={styles.requirementCard}>
            <Ionicons name="terminal" size={24} color="#000000" />
            <Text style={styles.requirementText}>
              npm atau yarn package manager
            </Text>
          </View>

          <View style={styles.requirementCard}>
            <Ionicons name="code-working" size={24} color="#007ACC" />
            <Text style={styles.requirementText}>
              Code editor (VS Code recommended)
            </Text>
          </View>

          <View style={styles.requirementCard}>
            <Ionicons name="phone-portrait" size={24} color="#3B82F6" />
            <Text style={styles.requirementText}>
              Expo Go app atau emulator
            </Text>
          </View>
        </View>

        {/* Resources */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="book" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Sumber Belajar</Text>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="globe-outline" size={24} color="#3B82F6" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Official Documentation</Text>
              <Text style={styles.resourceSubtitle}>reactnative.dev</Text>
            </View>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="logo-github" size={24} color="#000000" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>GitHub Repository</Text>
              <Text style={styles.resourceSubtitle}>facebook/react-native</Text>
            </View>
          </View>

          <View style={styles.resourceCard}>
            <Ionicons name="school-outline" size={24} color="#10B981" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Expo Documentation</Text>
              <Text style={styles.resourceSubtitle}>docs.expo.dev</Text>
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
  hero: {
    backgroundColor: "#FFFFFF",
    padding: 32,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F0F9FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 16,
    fontStyle: "italic",
  },
  badge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  badgeText: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: 14,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  paragraph: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 24,
    marginBottom: 12,
  },
  bold: {
    fontWeight: "600",
    color: "#111827",
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    marginBottom: 12,
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  featureText: {
    fontSize: 14,
    color: "#6B7280",
  },
  workflowCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8B5CF6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  listText: {
    fontSize: 15,
    color: "#374151",
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },
  appGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  appCard: {
    width: "48%",
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  appName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  requirementCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#3B82F6",
  },
  requirementText: {
    fontSize: 15,
    color: "#374151",
    marginLeft: 12,
    flex: 1,
  },
  resourceCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    marginBottom: 12,
  },
  resourceContent: {
    marginLeft: 16,
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  resourceSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  footer: {
    backgroundColor: "#EFF6FF",
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  footerText: {
    fontSize: 16,
    color: "#1E40AF",
    fontWeight: "600",
    textAlign: "center",
  },
});
