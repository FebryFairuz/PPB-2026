import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExampleAuth from "./example";
import { styles } from "./style-app";

export default function Module8() {
  const [activeExample, setActiveExample] = useState(null);
  const router = useRouter();
  const examples = [
    {
      id: "auth",
      title: "Authentication",
      description: "Implementasi login dan session management",
      icon: "person",
      color: "#3B82F6",
      component: ExampleAuth, // Your existing auth component
    },
  ];

  const handleOpenExample = (exampleId) => {
    setActiveExample(exampleId);
  };

  const handleCloseExample = () => {
    setActiveExample(null);
  };

  if (activeExample) {
    const example = examples.find((ex) => ex.id === activeExample);
    const ExampleComponent = example.component;
    return ExampleComponent ? (
      <ExampleComponent onClose={handleCloseExample} />
    ) : null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Ionicons name="shield-checkmark" size={64} color="#EF4444" />
          </View>
          <Text style={styles.heroTitle}>Module 8</Text>
          <Text style={styles.heroSubtitle}>
            Secure Storage & Authentication
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>SecureStore • Auth • Session</Text>
          </View>
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="information-circle" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Introduction</Text>
          </View>
          <Text style={styles.description}>
            Pelajari cara menyimpan data sensitif dengan aman menggunakan Expo
            SecureStore. Modul ini membahas enkripsi data, authentication, dan
            session management.
          </Text>
        </View>

        {/* What is SecureStore */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="lock-closed" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>What is SecureStore?</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              SecureStore adalah API dari Expo untuk menyimpan data sensitif
              dengan enkripsi:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.bulletItem}>
                • iOS: Menggunakan Keychain Services
              </Text>
              <Text style={styles.bulletItem}>
                • Android: Menggunakan EncryptedSharedPreferences
              </Text>
              <Text style={styles.bulletItem}>
                • Data terenkripsi secara otomatis
              </Text>
              <Text style={styles.bulletItem}>
                • Cocok untuk token, password, API keys
              </Text>
            </View>
          </View>
        </View>

        {/* Features Overview */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="list" size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>What You'll Learn</Text>
          </View>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>
                Menyimpan data dengan SecureStore
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>Membaca dan menghapus data</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>
                Implementasi authentication
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>Session management</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>Token expiration handling</Text>
            </View>
          </View>
        </View>

        {/* Basic Usage */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="code-slash" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Basic Usage</Text>
          </View>

          <View style={styles.codeCard}>
            <Text style={styles.codeTitle}>1. Import SecureStore</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`import * as SecureStore from 'expo-secure-store';`}
              </Text>
            </View>
          </View>

          <View style={styles.codeCard}>
            <Text style={styles.codeTitle}>2. Save Data</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`await SecureStore.setItemAsync('key', 'value');`}
              </Text>
            </View>
          </View>

          <View style={styles.codeCard}>
            <Text style={styles.codeTitle}>3. Get Data</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`const value = await SecureStore.getItemAsync('key');`}
              </Text>
            </View>
          </View>

          <View style={styles.codeCard}>
            <Text style={styles.codeTitle}>4. Delete Data</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>
                {`await SecureStore.deleteItemAsync('key');`}
              </Text>
            </View>
          </View>
        </View>

        {/* Interactive Examples */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="play-circle" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Interactive Examples</Text>
          </View>

          <TouchableOpacity
            style={styles.exampleCard}
            onPress={() => router.push("/module-8/example")}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.exampleIconContainer,
                { backgroundColor: "#3B82F6" + "20" },
              ]}
            >
              <Ionicons name={"person"} size={32} color={"#3B82F6"} />
            </View>
            <View style={styles.exampleContent}>
              <Text style={styles.exampleTitle}>Authentication</Text>
              <Text style={styles.exampleDescription}>
                Implementasi authentication login dan session management
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Best Practices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bulb" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Best Practices</Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="shield-checkmark" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Never Store Plain Passwords</Text>
            </View>
            <Text style={styles.tipDescription}>
              Jangan pernah menyimpan password dalam bentuk plain text. Gunakan
              token atau hash.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="time" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Implement Token Expiration</Text>
            </View>
            <Text style={styles.tipDescription}>
              Selalu cek expiration time token dan lakukan refresh atau logout
              jika expired.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="alert-circle" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Handle Errors Gracefully</Text>
            </View>
            <Text style={styles.tipDescription}>
              Gunakan try-catch untuk menangani error saat akses SecureStore.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="trash" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Clear Data on Logout</Text>
            </View>
            <Text style={styles.tipDescription}>
              Pastikan semua data sensitif dihapus saat user logout.
            </Text>
          </View>
        </View>

        {/* Security Notes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="warning" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>Security Notes</Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>⚠️ Important:</Text>
            <View style={styles.warningList}>
              <Text style={styles.warningItem}>
                • SecureStore memiliki limit 2048 bytes per item
              </Text>
              <Text style={styles.warningItem}>
                • Jangan simpan data besar, gunakan untuk credentials saja
              </Text>
              <Text style={styles.warningItem}>
                • Data akan hilang jika app di-uninstall
              </Text>
              <Text style={styles.warningItem}>
                • Tidak tersedia di Expo Go untuk Android
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
