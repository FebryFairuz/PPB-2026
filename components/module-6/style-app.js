import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  overviewText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
  },
  navCard: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    marginTop: 8,
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
  navCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  navIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  navCardTitleContainer: {
    flex: 1,
    marginLeft: 16,
  },
  navCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  navCardDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  featuresList: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#374151",
    marginLeft: 8,
  },
  codePreview: {
    marginBottom: 16,
  },
  codePreviewTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 16,
    borderRadius: 8,
  },
  codeText: {
    fontSize: 12,
    color: "#F9FAFB",
    fontFamily: "monospace",
    lineHeight: 18,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  playButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  conceptsList: {
    gap: 12,
  },
  conceptItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
  },
  conceptContent: {
    marginLeft: 12,
    flex: 1,
  },
  conceptTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  conceptDescription: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
});
