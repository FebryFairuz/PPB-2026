import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style-app";

export default function LatihanLocations() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Izin ditolak", "Aplikasi membutuhkan akses lokasi");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);

      // Reverse geocoding untuk mendapatkan alamat dari koordinat
      let addressData = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });

      if (addressData.length > 0) {
        setAddress(addressData[0]);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location" size={24} color="#EF4444" />
            <Text style={styles.sectionTitle}>Current Location</Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="shield-checkmark" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>GPS Coordinates</Text>
            </View>
            <Text style={styles.tipDescription}>
              Latitute: {location?.latitude}
            </Text>
            <Text style={styles.tipDescription}>
              Longitude: {location?.longitude}
            </Text>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="shield-checkmark" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>Location Address</Text>
            </View>
            {address && (
              <>
                <Text style={styles.tipDescription}>
                  Kota: {address.city || address.subregion || "Tidak tersedia"}
                </Text>
                <Text style={styles.tipDescription}>
                  Provinsi: {address.region || "Tidak tersedia"}
                </Text>
                <Text style={styles.tipDescription}>
                  Negara: {address.country || "Tidak tersedia"}
                </Text>
                <Text style={styles.tipDescription}>
                  Kode Pos: {address.postalCode || "Tidak tersedia"}
                </Text>
                <Text style={styles.tipDescription}>
                  Jalan: {address.street || "Tidak tersedia"}
                </Text>
                <Text style={styles.tipDescription}>
                  Alamat Lengkap: {address.name || address.street},{" "}
                  {address.city}, {address.region}, {address.country}
                </Text>
              </>
            )}
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="code-slash" size={20} color="#8B5CF6" />
              <Text style={styles.tipTitle}>JSON Location</Text>
            </View>
            <View style={styles.codePreview}>
              <Text style={styles.codePreviewTitle}>Output expo-location:</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.codeScrollView}
              >
                <View style={styles.codeBlock}>
                  <Text style={styles.codeText}>
                    {JSON.stringify(location, null, 2)}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.tipCard}>
            <View style={styles.tipHeader}>
              <Ionicons name="code-slash" size={20} color="#10B981" />
              <Text style={styles.tipTitle}>JSON Address</Text>
            </View>
            <View style={styles.codePreview}>
              <Text style={styles.codePreviewTitle}>
                Output reverse geocoding:
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.codeScrollView}
              >
                <View style={styles.codeBlock}>
                  <Text style={styles.codeText}>
                    {JSON.stringify(address, null, 2)}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
