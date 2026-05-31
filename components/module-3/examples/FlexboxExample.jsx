import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function FlexboxExample() {
  return (
    <ScrollView style={styles.container}>
      {/* Flex Direction Row */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="arrow-forward" size={24} color="#EF4444" />
          <Text style={styles.sectionTitle}>Flex Direction: Row</Text>
        </View>
        <View style={[styles.flexExample, { flexDirection: "row" }]}>
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>flexDirection: "row"</Text>
        </View>
      </View>

      {/* Flex Direction Column */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="arrow-down" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Flex Direction: Column</Text>
        </View>
        <View style={[styles.flexExample, { flexDirection: "column" }]}>
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>flexDirection: "column"</Text>
        </View>
      </View>

      {/* Justify Content */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="resize" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Justify Content</Text>
        </View>

        <Text style={styles.subTitle}>Space Between</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Space Around</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "space-around" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Space Evenly</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "space-evenly" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Center</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "center" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Flex Start</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "flex-start" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Flex End</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", justifyContent: "flex-end" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>
      </View>

      {/* Align Items */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="contract" size={24} color="#EC4899" />
          <Text style={styles.sectionTitle}>Align Items</Text>
        </View>

        <Text style={styles.subTitle}>Flex Start</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", alignItems: "flex-start", height: 120 },
          ]}
        >
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", height: 40 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#F59E0B", height: 60 }]}
          >
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#10B981", height: 80 }]}
          >
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Center</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", alignItems: "center", height: 120 },
          ]}
        >
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", height: 40 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#F59E0B", height: 60 }]}
          >
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#10B981", height: 80 }]}
          >
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Flex End</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", alignItems: "flex-end", height: 120 },
          ]}
        >
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", height: 40 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#F59E0B", height: 60 }]}
          >
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#10B981", height: 80 }]}
          >
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Stretch</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", alignItems: "stretch", height: 120 },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
        </View>
      </View>

      {/* Flex Wrap */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="git-branch" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Flex Wrap</Text>
        </View>

        <Text style={styles.subTitle}>No Wrap (Default)</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", flexWrap: "nowrap" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#3B82F6" }]}>
            <Text style={styles.flexBoxText}>4</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#8B5CF6" }]}>
            <Text style={styles.flexBoxText}>5</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Wrap</Text>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", flexWrap: "wrap" },
          ]}
        >
          <View style={[styles.flexBox, { backgroundColor: "#EF4444" }]}>
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#F59E0B" }]}>
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#10B981" }]}>
            <Text style={styles.flexBoxText}>3</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#3B82F6" }]}>
            <Text style={styles.flexBoxText}>4</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#8B5CF6" }]}>
            <Text style={styles.flexBoxText}>5</Text>
          </View>
          <View style={[styles.flexBox, { backgroundColor: "#EC4899" }]}>
            <Text style={styles.flexBoxText}>6</Text>
          </View>
        </View>
      </View>

      {/* Flex Property */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="expand" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Flex Property</Text>
        </View>

        <Text style={styles.subTitle}>Flex: 1</Text>
        <View style={[styles.flexExample, { flexDirection: "row" }]}>
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", flex: 1 }]}
          >
            <Text style={styles.flexBoxText}>Flex 1</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Flex: 1, 2, 1</Text>
        <View style={[styles.flexExample, { flexDirection: "row" }]}>
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", flex: 1 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#F59E0B", flex: 2 }]}
          >
            <Text style={styles.flexBoxText}>2</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#10B981", flex: 1 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
        </View>

        <Text style={styles.subTitle}>Flex: 1, 3, 2</Text>
        <View style={[styles.flexExample, { flexDirection: "row" }]}>
          <View
            style={[styles.flexBox, { backgroundColor: "#EF4444", flex: 1 }]}
          >
            <Text style={styles.flexBoxText}>1</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#F59E0B", flex: 3 }]}
          >
            <Text style={styles.flexBoxText}>3</Text>
          </View>
          <View
            style={[styles.flexBox, { backgroundColor: "#10B981", flex: 2 }]}
          >
            <Text style={styles.flexBoxText}>2</Text>
          </View>
        </View>
      </View>

      {/* Align Self */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Align Self</Text>
        </View>
        <View
          style={[
            styles.flexExample,
            { flexDirection: "row", alignItems: "flex-start", height: 150 },
          ]}
        >
          <View
            style={[
              styles.flexBox,
              { backgroundColor: "#EF4444", alignSelf: "flex-start" },
            ]}
          >
            <Text style={styles.flexBoxText}>Start</Text>
          </View>
          <View
            style={[
              styles.flexBox,
              { backgroundColor: "#F59E0B", alignSelf: "center" },
            ]}
          >
            <Text style={styles.flexBoxText}>Center</Text>
          </View>
          <View
            style={[
              styles.flexBox,
              { backgroundColor: "#10B981", alignSelf: "flex-end" },
            ]}
          >
            <Text style={styles.flexBoxText}>End</Text>
          </View>
          <View
            style={[
              styles.flexBox,
              { backgroundColor: "#3B82F6", alignSelf: "stretch" },
            ]}
          >
            <Text style={styles.flexBoxText}>Stretch</Text>
          </View>
        </View>
      </View>

      {/* Complex Layout Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="grid" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Complex Layout</Text>
        </View>
        <View style={styles.complexLayout}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Sidebar */}
            <View style={styles.sidebar}>
              <Text style={styles.sidebarText}>Sidebar</Text>
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
              <Text style={styles.mainContentText}>Main Content</Text>
              <View style={styles.cardGrid}>
                <View style={styles.card}>
                  <Text style={styles.cardText}>Card 1</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.cardText}>Card 2</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.cardText}>Card 3</Text>
                </View>
                <View style={styles.card}>
                  <Text style={styles.cardText}>Card 4</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
          </View>
        </View>
      </View>

      {/* Position Absolute Example */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="locate" size={24} color="#EC4899" />
          <Text style={styles.sectionTitle}>Position Absolute</Text>
        </View>
        <View style={styles.positionExample}>
          <View style={styles.positionBase}>
            <Text style={styles.baseText}>Base Container</Text>
            <View style={[styles.positionBox, styles.topLeft]}>
              <Text style={styles.positionText}>TL</Text>
            </View>
            <View style={[styles.positionBox, styles.topRight]}>
              <Text style={styles.positionText}>TR</Text>
            </View>
            <View style={[styles.positionBox, styles.bottomLeft]}>
              <Text style={styles.positionText}>BL</Text>
            </View>
            <View style={[styles.positionBox, styles.bottomRight]}>
              <Text style={styles.positionText}>BR</Text>
            </View>
            <View style={[styles.positionBox, styles.center]}>
              <Text style={styles.positionText}>C</Text>
            </View>
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
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  flexExample: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    minHeight: 100,
  },
  flexBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
  },
  flexBoxText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  codeText: {
    color: "#F9FAFB",
    fontSize: 13,
    fontFamily: "monospace",
  },
  complexLayout: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 400,
  },
  header: {
    backgroundColor: "#3B82F6",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  sidebar: {
    backgroundColor: "#8B5CF6",
    width: 100,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    transform: [{ rotate: "-90deg" }],
  },
  mainContent: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  mainContentText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#EFF6FF",
    padding: 20,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  cardText: {
    color: "#3B82F6",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    backgroundColor: "#10B981",
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  positionExample: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
  },
  positionBase: {
    backgroundColor: "#E5E7EB",
    height: 300,
    borderRadius: 8,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
  },
  positionBox: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#3B82F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  positionText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  topLeft: {
    top: 10,
    left: 10,
  },
  topRight: {
    top: 10,
    right: 10,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
  },
  center: {
    top: "50%",
    left: "50%",
    marginTop: -25,
    marginLeft: -25,
  },
});
