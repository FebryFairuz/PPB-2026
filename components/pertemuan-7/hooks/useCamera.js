
import { useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import { Alert } from "react-native";

export const useCamera = () => {
  const [imageUri, setImageUri] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const handleOpenCamera = async () => {
    if (!permission) {
      const { status } = await requestPermission();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Camera permission is required to take photos"
        );
        return;
      }
    }

    if (!permission.granted) {
      const { status } = await requestPermission();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Camera permission is required to take photos"
        );
        return;
      }
    }

    setIsCameraVisible(true);
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        setImageUri(photo.uri);
        setIsCameraVisible(false);
      } catch (error) {
        console.error("Error taking picture:", error);
        Alert.alert("Error", "Failed to take picture");
      }
    }
  };

  const pickImageFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Gallery permission is required to select photos"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      "Change Avatar",
      "Choose an option",
      [
        {
          text: "Take Photo",
          onPress: handleOpenCamera,
        },
        {
          text: "Choose from Gallery",
          onPress: pickImageFromGallery,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return {
    imageUri,
    setImageUri,
    isCameraVisible,
    setIsCameraVisible,
    facing,
    cameraRef,
    handleOpenCamera,
    toggleCameraFacing,
    takePicture,
    pickImageFromGallery,
    showImagePickerOptions,
  };
};