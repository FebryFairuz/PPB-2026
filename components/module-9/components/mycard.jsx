import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../contexts/auth-context";
import { color_list } from "../styles/style-app";

const MyCard = () => {
  const router = useRouter();
  const { user } = useAuth();
  const handleViewProfile = () => {
    console.log("View Profile pressed");
    // router.push("/profile-detail");
  };

  const handleScanQR = () => {
    console.log("Scan QR Code pressed");
    // router.push("/qr-scanner");
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require("@/assets/avatars/avatar.png")}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.userDetails}>
          <Text style={styles.username} numberOfLines={1}>
            {user?.username}
          </Text>
          <View style={styles.membershipBadge}>
            <MaterialCommunityIcons
              name="shield-star"
              size={20}
              color={color_list.green_dark}
            />
            <Text style={styles.membershipText}>Basic Member</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleViewProfile}
          activeOpacity={0.7}
        >
          <FontAwesome name="user-o" size={16} color={color_list.green} />
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleScanQR}
          activeOpacity={0.7}
        >
          <AntDesign name="scan" size={16} color={color_list.green} />
          <Text style={styles.buttonText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: color_list.green_light,
    width: "100%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  loadingContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 40,
    borderWidth: 1,
    borderColor: color_list.green_light,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: color_list.green,
    borderWidth: 2,
    backgroundColor: color_list.green_light,
  },
  userDetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 6,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  membershipBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  membershipText: {
    fontSize: 14,
    color: color_list.green_dark,
    fontWeight: "500",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Platform.OS === "ios" ? 12 : 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color_list.green_light,
    backgroundColor: color_list.cream,
    gap: 6,
  },
  buttonText: {
    color: color_list.green_dark,
    fontWeight: "600",
    fontSize: 13,
  },
});

export default MyCard;
