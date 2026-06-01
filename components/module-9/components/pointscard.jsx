import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color_list } from "../styles/style-app";

const PointsCard = ({ points = 1250 }) => {
  const formatPoints = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>My Rewards</Text>

      <LinearGradient
        colors={["#E8E8E8", "#C0C0C0", "#A8A8A8", "#C0C0C0", "#E8E8E8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        {/* Decorative Pattern */}
        <View style={styles.decorativePattern}>
          <MaterialCommunityIcons
            name="star-four-points"
            size={80}
            color="rgba(255, 255, 255, 0.1)"
            style={styles.patternIcon1}
          />
          <MaterialCommunityIcons
            name="star-four-points"
            size={60}
            color="rgba(255, 255, 255, 0.08)"
            style={styles.patternIcon2}
          />
        </View>

        {/* Card Content */}
        <View style={styles.cardContent}>
          {/* Header */}
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              <MaterialCommunityIcons name="crown" size={24} color="#FFD700" />
              <Text style={styles.cardTitle}>Reward Points</Text>
            </View>
            <FontAwesome5 name="coins" size={20} color="#FFD700" />
          </View>

          {/* Points Display */}
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsLabel}>Available Points</Text>
            <View style={styles.pointsDisplay}>
              <Text style={styles.pointsValue}>{formatPoints(points)}</Text>
              <Text style={styles.pointsUnit}>pts</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="gift"
                size={18}
                color={color_list.green_dark}
              />
              <Text style={styles.actionText}>Redeem</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="history"
                size={18}
                color={color_list.green_dark}
              />
              <Text style={styles.actionText}>History</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={18}
                color={color_list.green_dark}
              />
              <Text style={styles.actionText}>Earn More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Shine Effect */}
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, 0.3)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.shineEffect}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: color_list.green_dark,
    marginBottom: 10,
  },
  cardGradient: {
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    overflow: "hidden",
    position: "relative",
  },
  decorativePattern: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  patternIcon1: {
    position: "absolute",
    top: -20,
    right: -20,
    transform: [{ rotate: "15deg" }],
  },
  patternIcon2: {
    position: "absolute",
    bottom: -10,
    left: -10,
    transform: [{ rotate: "-25deg" }],
  },
  cardContent: {
    position: "relative",
    zIndex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  pointsContainer: {
    marginBottom: 20,
  },
  pointsLabel: {
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
    fontWeight: "500",
  },
  pointsDisplay: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  pointsValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2C2C2C",
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  pointsUnit: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
  actionsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 12,
    padding: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: color_list.green_dark,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  shineEffect: {
    position: "absolute",
    top: 0,
    left: -100,
    right: 0,
    bottom: 0,
    width: "50%",
    transform: [{ skewX: "-20deg" }],
  },
});

export default PointsCard;
