import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

const ImageWithFallback = ({
  uri,
  style,
  resizeMode = "cover",
  fallbackIconSize = 60,
  fallbackIconColor = "#9CA3AF",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const API_URL = process.env.EXPO_PUBLIC_BACKEND_URI;

  // Construct full image URL
  const imageUrl = uri ? `${API_URL}${uri}` : null;

  // Check if image URL is valid
  const isValidImageUrl =
    imageUrl &&
    (imageUrl.startsWith("http://") || imageUrl.startsWith("https://"));

  // Show fallback if no URL or error occurred
  if (!isValidImageUrl || imageError) {
    return (
      <View style={[styles.fallbackContainer, style]}>
        <Ionicons
          name="image-outline"
          size={fallbackIconSize}
          color={fallbackIconColor}
        />
      </View>
    );
  }

  return (
    <View style={style}>
      <Image
        source={{ uri: imageUrl }}
        style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
        resizeMode={resizeMode}
        onError={() => {
          console.log("Image load error:", imageUrl);
          setImageError(true);
          setImageLoading(false);
        }}
        onLoad={() => setImageLoading(false)}
      />

      {/* Loading placeholder */}
      {imageLoading && (
        <View style={[styles.loadingContainer, StyleSheet.absoluteFill]}>
          <Ionicons
            name="image-outline"
            size={fallbackIconSize}
            color="#E5E7EB"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fallbackContainer: {
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageWithFallback;
