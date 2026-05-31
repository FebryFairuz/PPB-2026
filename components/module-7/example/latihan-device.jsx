import { StyleSheet, Text, View } from "react-native";
import Avatar from "../../../assets/avatars/avatar.png";
import { AvatarWithEdit } from "./components/AvatarWithEdit";
import { CameraModal } from "./components/CameraModal";
import { useCamera } from "./hooks/useCamera";

export default function LatihanCamera() {
  const personalData = {
    name: "Anton Sukamto",
    nim: "20200101",
  };

  const {
    imageUri,
    isCameraVisible,
    setIsCameraVisible,
    facing,
    cameraRef,
    toggleCameraFacing,
    takePicture,
    showImagePickerOptions,
  } = useCamera();

  return (
    <View style={styles.container}>
      <CameraModal
        visible={isCameraVisible}
        onClose={() => setIsCameraVisible(false)}
        cameraRef={cameraRef}
        facing={facing}
        onCapture={takePicture}
        onToggleFacing={toggleCameraFacing}
      />

      <AvatarWithEdit
        imageUri={imageUri}
        defaultImage={Avatar}
        onPress={showImagePickerOptions}
        size={150}
        editIconSize={40}
      />

      <Text style={styles.title}>{personalData.name}</Text>
      <Text style={styles.subtitle}>{personalData.nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#9b9d9f",
    marginTop: 8,
  },
});
