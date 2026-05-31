
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const AvatarWithEdit = ({ 
  imageUri, 
  defaultImage, 
  onPress,
  size = 150,
  editIconSize = 40,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.avatarContainer}>
        <Image
          source={imageUri ? { uri: imageUri } : defaultImage}
          style={[
            styles.avatar,
            { width: size, height: size, borderRadius: size / 2 },
          ]}
          resizeMode="cover"
        />
        <View
          style={[
            styles.cameraIconOverlay,
            {
              width: editIconSize,
              height: editIconSize,
              borderRadius: editIconSize / 2,
            },
          ]}
        >
          <FontAwesome name="edit" size={editIconSize * 0.6} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    borderColor: "#0996d7",
    borderWidth: 4,
    padding: 0,
    backgroundColor: "#f2f2f2",
  },
  cameraIconOverlay: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0ea6d0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },
});