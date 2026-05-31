import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LatihanCamera from "./example/latihan-device";
import LatihanLocations from "./example/latihan-locations";
import LatihanVibration from "./example/latihan-vibration";
import { styles } from "./style-app";

export default function Module7() {
  const [activeExample, setActiveExample] = useState(null);

  const examples = [
    {
      id: "camera",
      title: "Camera",
      description:
        "Mengambil foto menggunakan kamera perangkat dengan expo-camera",
      icon: "camera",
      color: "#3B82F6",
      component: LatihanCamera,
    },
    {
      id: "image-picker",
      title: "Image Picker",
      description: "Memilih gambar dari galeri dengan expo-image-picker",
      icon: "images",
      color: "#10B981",
      component: LatihanCamera,
    },
    {
      id: "location",
      title: "Location",
      description: "Mendapatkan lokasi perangkat dengan expo-location",
      icon: "location",
      color: "#F59E0B",
      component: LatihanLocations,
    },
    {
      id: "vibration",
      title: "Vibration & Haptics",
      description: "Memberikan haptic feedback dengan expo-haptics",
      icon: "pulse",
      color: "#0bbbf5",
      component: LatihanVibration,
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
    return <ExampleComponent onClose={handleCloseExample} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Ionicons name="hardware-chip-outline" size={64} color="#3B82F6" />
          </View>
          <Text style={styles.heroTitle}>Module 7</Text>
          <Text style={styles.heroSubtitle}>
            Native Device Features Integration
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Camera • Gallery • Location</Text>
          </View>
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="information-circle" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Introduction</Text>
          </View>
          <Text style={styles.description}>
            Pelajari cara mengintegrasikan fitur bawaan (native) perangkat ke
            dalam aplikasi React Native Anda menggunakan Expo. Modul ini
            membahas akses kamera, pemilihan gambar dari galeri, dan layanan
            lokasi.
          </Text>
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
              <Text style={styles.featureText}>Izin dan penggunaan kamera</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>
                Pemilihan gambar dari galeri
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>
                Pelacakan lokasi dan geocoding
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>Permission handling</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.featureText}>
                Praktik terbaik penanganan eror (error handling)
              </Text>
            </View>
          </View>
        </View>

        {/* Examples */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="code-slash" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Interactive Examples</Text>
          </View>

          {examples.map((example) => (
            <TouchableOpacity
              key={example.id}
              style={styles.exampleCard}
              onPress={() => handleOpenExample(example.id)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.exampleIconContainer,
                  { backgroundColor: example.color + "20" },
                ]}
              >
                <Ionicons name={example.icon} size={32} color={example.color} />
              </View>
              <View style={styles.exampleContent}>
                <Text style={styles.exampleTitle}>{example.title}</Text>
                <Text style={styles.exampleDescription}>
                  {example.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Requirements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="warning" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>Requirements</Text>
          </View>

          <View style={styles.requirementCard}>
            <Text style={styles.requirementTitle}>Permissions Needed:</Text>
            <View style={styles.requirementList}>
              <Text style={styles.requirementItem}>
                • Camera access (mengambil gambar)
              </Text>
              <Text style={styles.requirementItem}>
                • Media library access (memilih gambar)
              </Text>
              <Text style={styles.requirementItem}>
                • Location access (akses GPS)
              </Text>
            </View>
          </View>

          <View style={styles.requirementCard}>
            <Text style={styles.requirementTitle}>Device Requirements:</Text>
            <View style={styles.requirementList}>
              <Text style={styles.requirementItem}>
                • Disarankan menggunakan perangkat fisik untuk fitur kamera
              </Text>
              <Text style={styles.requirementItem}>
                • GPS aktif untuk fitur lokasi
              </Text>
              <Text style={styles.requirementItem}>
                • Android 5.0+ or iOS 10.0+
              </Text>
            </View>
          </View>
        </View>

        {/* Tips */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bulb" size={24} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>Best Practices</Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="shield-checkmark" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Always Request Permissions</Text>
            </View>
            <Text style={styles.tipDescription}>
              Periksa dan minta izin sebelum mengakses fitur perangkat. Berikan
              penanganan yang baik jika pengguna menolak memberikan izin.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="alert-circle" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Handle Errors Properly</Text>
            </View>
            <Text style={styles.tipDescription}>
              Terapkan blok try-catch dan sediakan pesan eror yang ramah
              pengguna ketika proses gagal.
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="speedometer" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Optimize Performance</Text>
            </View>
            <Text style={styles.tipDescription}>
              Kompres gambar sebelum diunggah dan gunakan pengaturan kualitas
              yang sesuai saat mengambil foto dengan kamera.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
