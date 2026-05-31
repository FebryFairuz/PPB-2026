import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useResponsive } from "../hooks/useResponsive";

export default function ResponsiveExample() {
  const {
    width,
    height,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    orientation,
  } = useResponsive();

  const getDeviceType = () => {
    if (isSmallDevice) return "Small Device (< 375px)";
    if (isMediumDevice) return "Medium Device (375px - 768px)";
    if (isLargeDevice) return "Large Device (> 768px)";
    return "Unknown";
  };

  const getGridColumns = () => {
    if (isSmallDevice) return 2;
    if (isMediumDevice) return 3;
    return 4;
  };

  const gridColumns = getGridColumns();

  return (
    <ScrollView style={styles.container}>
      {/* Device Info */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="phone-portrait" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Device Information</Text>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Screen Width:</Text>
            <Text style={styles.infoValue}>{width.toFixed(0)}px</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Screen Height:</Text>
            <Text style={styles.infoValue}>{height.toFixed(0)}px</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Device Type:</Text>
            <Text style={styles.infoValue}>{getDeviceType()}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Orientation:</Text>
            <Text style={styles.infoValue}>{orientation}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Grid Columns:</Text>
            <Text style={styles.infoValue}>{gridColumns}</Text>
          </View>
        </View>
      </View>

      {/* Responsive Grid */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="grid" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Responsive Grid</Text>
        </View>
        <Text style={styles.description}>
          Grid akan menyesuaikan jumlah kolom berdasarkan ukuran layar
        </Text>

        <View style={styles.gridContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <View
              key={item}
              style={[
                styles.gridItem,
                {
                  width: `${100 / gridColumns - 2}%`,
                },
              ]}
            >
              <Text style={styles.gridItemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Responsive Typography */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="text" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Responsive Typography</Text>
        </View>

        <Text
          style={[
            styles.responsiveTitle,
            {
              fontSize: isSmallDevice ? 20 : isMediumDevice ? 24 : 28,
            },
          ]}
        >
          Responsive Title
        </Text>

        <Text
          style={[
            styles.responsiveText,
            {
              fontSize: isSmallDevice ? 14 : isMediumDevice ? 16 : 18,
            },
          ]}
        >
          Text ini akan menyesuaikan ukurannya berdasarkan ukuran layar device.
          Pada device kecil, text akan lebih kecil, dan pada device besar text
          akan lebih besar.
        </Text>
      </View>

      {/* Responsive Spacing */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="resize" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Responsive Spacing</Text>
        </View>

        <View
          style={[
            styles.spacingContainer,
            {
              padding: isSmallDevice ? 12 : isMediumDevice ? 16 : 24,
            },
          ]}
        >
          <View
            style={[
              styles.spacingBox,
              {
                marginBottom: isSmallDevice ? 8 : isMediumDevice ? 12 : 16,
              },
            ]}
          >
            <Text style={styles.spacingText}>Box 1</Text>
          </View>
          <View
            style={[
              styles.spacingBox,
              {
                marginBottom: isSmallDevice ? 8 : isMediumDevice ? 12 : 16,
              },
            ]}
          >
            <Text style={styles.spacingText}>Box 2</Text>
          </View>
          <View style={styles.spacingBox}>
            <Text style={styles.spacingText}>Box 3</Text>
          </View>
        </View>
      </View>

      {/* Responsive Layout */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="albums" size={24} color="#EC4899" />
          <Text style={styles.sectionTitle}>Responsive Layout</Text>
        </View>

        <View
          style={[
            styles.layoutContainer,
            {
              flexDirection: isSmallDevice ? "column" : "row",
            },
          ]}
        >
          <View
            style={[
              styles.layoutBox,
              {
                width: isSmallDevice ? "100%" : "50%",
                marginBottom: isSmallDevice ? 12 : 0,
                marginRight: isSmallDevice ? 0 : 12,
              },
            ]}
          >
            <Ionicons name="image" size={32} color="#3B82F6" />
            <Text style={styles.layoutTitle}>Image</Text>
            <Text style={styles.layoutText}>
              Layout berubah dari column ke row
            </Text>
          </View>
          <View
            style={[
              styles.layoutBox,
              {
                width: isSmallDevice ? "100%" : "50%",
              },
            ]}
          >
            <Ionicons name="document-text" size={32} color="#10B981" />
            <Text style={styles.layoutTitle}>Content</Text>
            <Text style={styles.layoutText}>
              Berdasarkan ukuran layar device
            </Text>
          </View>
        </View>
      </View>

      {/* Responsive Cards */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="card" size={24} color="#EF4444" />
          <Text style={styles.sectionTitle}>Responsive Cards</Text>
        </View>

        <View style={styles.cardsContainer}>
          {[
            { icon: "home", title: "Home", color: "#3B82F6" },
            { icon: "search", title: "Search", color: "#10B981" },
            { icon: "heart", title: "Favorites", color: "#EF4444" },
            { icon: "person", title: "Profile", color: "#F59E0B" },
            { icon: "settings", title: "Settings", color: "#8B5CF6" },
            { icon: "notifications", title: "Notifications", color: "#EC4899" },
          ].map((item, index) => (
            <View
              key={index}
              style={[
                styles.card,
                {
                  width: isSmallDevice
                    ? "100%"
                    : isMediumDevice
                      ? "48%"
                      : "31%",
                },
              ]}
            >
              <Ionicons name={item.icon} size={32} color={item.color} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Orientation Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="phone-landscape" size={24} color="#06B6D4" />
          <Text style={styles.sectionTitle}>Orientation Aware</Text>
        </View>

        <View
          style={[
            styles.orientationContainer,
            {
              flexDirection: orientation === "portrait" ? "column" : "row",
              height: orientation === "portrait" ? 200 : 150,
            },
          ]}
        >
          <View style={styles.orientationBox}>
            <Ionicons
              name={
                orientation === "portrait"
                  ? "phone-portrait"
                  : "phone-landscape"
              }
              size={48}
              color="#06B6D4"
            />
            <Text style={styles.orientationText}>Current: {orientation}</Text>
          </View>
          <View style={styles.orientationBox}>
            <Text style={styles.orientationInfo}>
              Layout berubah berdasarkan orientasi device
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  section: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  infoValue: {
    fontSize: 14,
    color: "#3B82F6",
    fontWeight: "600",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    backgroundColor: "#3B82F6",
    padding: 20,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  gridItemText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  responsiveTitle: {
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  responsiveText: {
    color: "#6B7280",
    lineHeight: 24,
  },
  spacingContainer: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
  },
  spacingBox: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  spacingText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  layoutContainer: {
    marginTop: 8,
  },
  layoutBox: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  layoutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 12,
    marginBottom: 8,
  },
  layoutText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    marginTop: 8,
  },
  orientationContainer: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    padding: 16,
  },
  orientationBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  orientationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#06B6D4",
    marginTop: 12,
  },
  orientationInfo: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
  },
});
