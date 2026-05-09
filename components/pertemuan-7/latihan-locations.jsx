import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <Text style={{ padding: 5, backgroundColor: "brown", color: "white" }}>
        Result Location: {JSON.stringify(location)}
      </Text>
      <Text>Latitute: {location?.latitude}</Text>
      <Text>Longitude: {location?.longitude}</Text>
      {address && (
        <>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 15,
              marginBottom: 5,
            }}
          >
            Alamat:
          </Text>
          <Text>
            Kota: {address.city || address.subregion || "Tidak tersedia"}
          </Text>
          <Text>Provinsi: {address.region || "Tidak tersedia"}</Text>
          <Text>Negara: {address.country || "Tidak tersedia"}</Text>
          <Text>Kode Pos: {address.postalCode || "Tidak tersedia"}</Text>
          <Text>Jalan: {address.street || "Tidak tersedia"}</Text>
          <Text>
            Alamat Lengkap: {address.name || address.street}, {address.city},{" "}
            {address.region}, {address.country}
          </Text>
        </>
      )}
    </SafeAreaView>
  );
}
