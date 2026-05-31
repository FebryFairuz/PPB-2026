import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "./atomic/atoms/Avatar";
import Badge from "./atomic/atoms/Badge";
import Button from "./atomic/atoms/Button";
import Input from "./atomic/atoms/Input";
import Card from "./atomic/molecules/Card";
import UserCard from "./atomic/molecules/UserCard";
import LoginForm from "./atomic/organisms/LoginForm";
import ProductCard from "./atomic/organisms/ProductCard";
import useResponsive from "./hooks/useResponsive";

export default function Module3() {
  const responsive = useResponsive();
  const [selectedTab, setSelectedTab] = useState("flexbox");

  const handleLogin = (credentials) => {
    Alert.alert(
      "Login",
      `Email: ${credentials.email}\nPassword: ${credentials.password}`,
    );
  };

  const handleAddToCart = (productName) => {
    Alert.alert("Success", `${productName} added to cart!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.logoContainer}>
            <Ionicons name="grid-outline" size={64} color="#3B82F6" />
          </View>
          <Text style={styles.heroTitle}>Module 3</Text>
          <Text style={styles.heroSubtitle}>
            Flexbox, Responsive Design & Atomic Design
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Advanced Layout Concepts</Text>
          </View>
        </View>

        {/* Device Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="phone-portrait-outline" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Device Information</Text>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Width:</Text>
              <Text style={styles.infoValue}>
                {responsive.width.toFixed(0)}px
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Height:</Text>
              <Text style={styles.infoValue}>
                {responsive.height.toFixed(0)}px
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Device Type:</Text>
              <Text style={styles.infoValue}>
                {responsive.isSmallDevice && "Small"}
                {responsive.isMediumDevice && "Medium"}
                {responsive.isLargeDevice && "Large"}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Orientation:</Text>
              <Text style={styles.infoValue}>
                {responsive.isPortrait ? "Portrait" : "Landscape"}
              </Text>
            </View>
          </View>
        </View>

        {/* Tab Navigation */}
        <View style={styles.section}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                selectedTab === "flexbox" && styles.activeTab,
              ]}
              onPress={() => setSelectedTab("flexbox")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "flexbox" && styles.activeTabText,
                ]}
              >
                Flexbox
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                selectedTab === "responsive" && styles.activeTab,
              ]}
              onPress={() => setSelectedTab("responsive")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "responsive" && styles.activeTabText,
                ]}
              >
                Responsive
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, selectedTab === "atomic" && styles.activeTab]}
              onPress={() => setSelectedTab("atomic")}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "atomic" && styles.activeTabText,
                ]}
              >
                Atomic
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Flexbox Examples */}
        {selectedTab === "flexbox" && (
          <>
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
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="contract" size={24} color="#EC4899" />
                <Text style={styles.sectionTitle}>Align Items</Text>
              </View>

              <Text style={styles.subTitle}>Flex Start</Text>
              <View
                style={[
                  styles.flexExample,
                  {
                    flexDirection: "row",
                    alignItems: "flex-start",
                    height: 120,
                  },
                ]}
              >
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#EF4444", height: 40 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>1</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#F59E0B", height: 60 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>2</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#10B981", height: 80 },
                  ]}
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
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#EF4444", height: 40 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>1</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#F59E0B", height: 60 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>2</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#10B981", height: 80 },
                  ]}
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
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#EF4444", height: 40 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>1</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#F59E0B", height: 60 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>2</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#10B981", height: 80 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>3</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="git-branch" size={24} color="#10B981" />
                <Text style={styles.sectionTitle}>Flex Wrap</Text>
              </View>
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
              <View style={styles.codeBlock}>
                <Text style={styles.codeText}>flexWrap: "wrap"</Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="expand" size={24} color="#F59E0B" />
                <Text style={styles.sectionTitle}>Flex Property</Text>
              </View>
              <View style={[styles.flexExample, { flexDirection: "row" }]}>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#EF4444", flex: 1 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>flex: 1</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#F59E0B", flex: 2 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>flex: 2</Text>
                </View>
                <View
                  style={[
                    styles.flexBox,
                    { backgroundColor: "#10B981", flex: 1 },
                  ]}
                >
                  <Text style={styles.flexBoxText}>flex: 1</Text>
                </View>
              </View>
              <View style={styles.codeBlock}>
                <Text style={styles.codeText}>flex: 1 | flex: 2 | flex: 1</Text>
              </View>
            </View>
          </>
        )}

        {/* Responsive Design Examples */}
        {selectedTab === "responsive" && (
          <>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={24}
                  color="#3B82F6"
                />
                <Text style={styles.sectionTitle}>Responsive Layout</Text>
              </View>
              <Text style={styles.paragraph}>
                Layout ini akan menyesuaikan dengan ukuran layar perangkat. Coba
                putar perangkat Anda untuk melihat perubahan.
              </Text>

              <View
                style={[
                  styles.responsiveGrid,
                  {
                    flexDirection: responsive.isPortrait ? "column" : "row",
                  },
                ]}
              >
                <View
                  style={[
                    styles.responsiveBox,
                    {
                      flex: responsive.isPortrait ? 0 : 1,
                      width: responsive.isPortrait ? "100%" : "auto",
                      marginBottom: responsive.isPortrait ? 12 : 0,
                      marginRight: responsive.isPortrait ? 0 : 12,
                    },
                  ]}
                >
                  <Ionicons name="phone-portrait" size={32} color="#3B82F6" />
                  <Text style={styles.responsiveBoxTitle}>Portrait</Text>
                  <Text style={styles.responsiveBoxText}>
                    {responsive.isPortrait ? "Active" : "Inactive"}
                  </Text>
                </View>

                <View
                  style={[
                    styles.responsiveBox,
                    {
                      flex: responsive.isPortrait ? 0 : 1,
                      width: responsive.isPortrait ? "100%" : "auto",
                    },
                  ]}
                >
                  <Ionicons name="phone-landscape" size={32} color="#10B981" />
                  <Text style={styles.responsiveBoxTitle}>Landscape</Text>
                  <Text style={styles.responsiveBoxText}>
                    {responsive.isLandscape ? "Active" : "Inactive"}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="resize" size={24} color="#8B5CF6" />
                <Text style={styles.sectionTitle}>Responsive Grid</Text>
              </View>
              <View style={styles.responsiveGrid}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <View
                    key={item}
                    style={[
                      styles.gridItem,
                      {
                        width: responsive.getResponsiveValue(
                          "100%",
                          "48%",
                          "31%",
                        ),
                        marginBottom: responsive.spacing,
                      },
                    ]}
                  >
                    <Text style={styles.gridItemText}>Item {item}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="text" size={24} color="#EC4899" />
                <Text style={styles.sectionTitle}>Responsive Typography</Text>
              </View>
              <Text
                style={[
                  styles.responsiveText,
                  { fontSize: responsive.fontSize.small },
                ]}
              >
                Small Text ({responsive.fontSize.small}px)
              </Text>
              <Text
                style={[
                  styles.responsiveText,
                  { fontSize: responsive.fontSize.medium },
                ]}
              >
                Medium Text ({responsive.fontSize.medium}px)
              </Text>
              <Text
                style={[
                  styles.responsiveText,
                  { fontSize: responsive.fontSize.large },
                ]}
              >
                Large Text ({responsive.fontSize.large}px)
              </Text>
              <Text
                style={[
                  styles.responsiveText,
                  { fontSize: responsive.fontSize.xlarge },
                ]}
              >
                XLarge Text ({responsive.fontSize.xlarge}px)
              </Text>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="code-slash" size={24} color="#F59E0B" />
                <Text style={styles.sectionTitle}>useResponsive Hook</Text>
              </View>
              <View style={styles.codeBlock}>
                <Text style={styles.codeText}>
                  {`const responsive = useResponsive();\n\n`}
                  {`// Available properties:\n`}
                  {`responsive.width\n`}
                  {`responsive.height\n`}
                  {`responsive.isSmallDevice\n`}
                  {`responsive.isMediumDevice\n`}
                  {`responsive.isLargeDevice\n`}
                  {`responsive.isPortrait\n`}
                  {`responsive.isLandscape\n`}
                  {`responsive.getResponsiveValue(small, medium, large)\n`}
                  {`responsive.spacing\n`}
                  {`responsive.fontSize`}
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Atomic Design Examples */}
        {selectedTab === "atomic" && (
          <>
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="information-circle" size={24} color="#3B82F6" />
                <Text style={styles.sectionTitle}>Apa itu Atomic Design?</Text>
              </View>
              <Text style={styles.paragraph}>
                Atomic Design adalah metodologi untuk membuat design system yang
                terdiri dari 5 level: Atoms, Molecules, Organisms, Templates,
                dan Pages.
              </Text>

              <View style={styles.atomicLevel}>
                <View style={styles.atomicLevelHeader}>
                  <View
                    style={[styles.atomicDot, { backgroundColor: "#EF4444" }]}
                  />
                  <Text style={styles.atomicLevelTitle}>1. Atoms</Text>
                </View>
                <Text style={styles.atomicLevelText}>
                  Komponen dasar yang tidak bisa dipecah lagi (Button, Input,
                  Badge, Avatar)
                </Text>
              </View>

              <View style={styles.atomicLevel}>
                <View style={styles.atomicLevelHeader}>
                  <View
                    style={[styles.atomicDot, { backgroundColor: "#F59E0B" }]}
                  />
                  <Text style={styles.atomicLevelTitle}>2. Molecules</Text>
                </View>
                <Text style={styles.atomicLevelText}>
                  Kombinasi dari beberapa atoms (Card, UserCard, SearchBar)
                </Text>
              </View>

              <View style={styles.atomicLevel}>
                <View style={styles.atomicLevelHeader}>
                  <View
                    style={[styles.atomicDot, { backgroundColor: "#10B981" }]}
                  />
                  <Text style={styles.atomicLevelTitle}>3. Organisms</Text>
                </View>
                <Text style={styles.atomicLevelText}>
                  Kombinasi molecules yang membentuk section (LoginForm,
                  ProductCard, Header)
                </Text>
              </View>

              <View style={styles.atomicLevel}>
                <View style={styles.atomicLevelHeader}>
                  <View
                    style={[styles.atomicDot, { backgroundColor: "#3B82F6" }]}
                  />
                  <Text style={styles.atomicLevelTitle}>4. Templates</Text>
                </View>
                <Text style={styles.atomicLevelText}>
                  Layout page dengan placeholder content
                </Text>
              </View>

              <View style={styles.atomicLevel}>
                <View style={styles.atomicLevelHeader}>
                  <View
                    style={[styles.atomicDot, { backgroundColor: "#8B5CF6" }]}
                  />
                  <Text style={styles.atomicLevelTitle}>5. Pages</Text>
                </View>
                <Text style={styles.atomicLevelText}>
                  Template dengan real content
                </Text>
              </View>
            </View>

            {/* Atoms Examples */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="radio-button-on" size={24} color="#EF4444" />
                <Text style={styles.sectionTitle}>Atoms - Buttons</Text>
              </View>
              <View style={styles.atomsContainer}>
                <Button
                  title="Primary"
                  variant="primary"
                  size="small"
                  onPress={() => {}}
                />
                <Button
                  title="Secondary"
                  variant="secondary"
                  size="small"
                  onPress={() => {}}
                />
                <Button
                  title="Success"
                  variant="success"
                  size="small"
                  onPress={() => {}}
                />
                <Button
                  title="Danger"
                  variant="danger"
                  size="small"
                  onPress={() => {}}
                />
                <Button
                  title="Outline"
                  variant="outline"
                  size="small"
                  onPress={() => {}}
                />
              </View>

              <Text style={styles.subTitle}>Button Sizes</Text>
              <View style={styles.atomsContainer}>
                <Button
                  title="Small"
                  variant="primary"
                  size="small"
                  onPress={() => {}}
                />
                <Button
                  title="Medium"
                  variant="primary"
                  size="medium"
                  onPress={() => {}}
                />
                <Button
                  title="Large"
                  variant="primary"
                  size="large"
                  onPress={() => {}}
                />
              </View>

              <Text style={styles.subTitle}>Full Width Button</Text>
              <Button
                title="Full Width Button"
                variant="primary"
                size="large"
                fullWidth
                onPress={() => {}}
              />
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="pricetag" size={24} color="#F59E0B" />
                <Text style={styles.sectionTitle}>Atoms - Badges</Text>
              </View>
              <View style={styles.atomsContainer}>
                <Badge text="Primary" variant="primary" />
                <Badge text="Success" variant="success" />
                <Badge text="Warning" variant="warning" />
                <Badge text="Danger" variant="danger" />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="person-circle" size={24} color="#10B981" />
                <Text style={styles.sectionTitle}>Atoms - Avatars</Text>
              </View>
              <View style={styles.atomsContainer}>
                <Avatar name="John Doe" size="small" />
                <Avatar name="Jane Smith" size="medium" />
                <Avatar name="Bob Wilson" size="large" />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="create" size={24} color="#3B82F6" />
                <Text style={styles.sectionTitle}>Atoms - Inputs</Text>
              </View>
              <Input
                label="Email"
                placeholder="Enter your email"
                value=""
                onChangeText={() => {}}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                value=""
                onChangeText={() => {}}
                secureTextEntry
              />
              <Input
                label="Username"
                placeholder="Enter username"
                value=""
                onChangeText={() => {}}
                error="Username is required"
              />
            </View>

            {/* Molecules Examples */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="cube" size={24} color="#8B5CF6" />
                <Text style={styles.sectionTitle}>Molecules - Cards</Text>
              </View>
              <Card
                title="Welcome Card"
                description="This is a reusable card component that combines multiple atoms."
                icon="gift"
                iconColor="#3B82F6"
              />
              <Card
                title="Success Message"
                description="Your action was completed successfully!"
                icon="checkmark-circle"
                iconColor="#10B981"
              />
              <Card
                title="Warning Alert"
                description="Please review your information before proceeding."
                icon="warning"
                iconColor="#F59E0B"
              />
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="people" size={24} color="#EC4899" />
                <Text style={styles.sectionTitle}>Molecules - User Cards</Text>
              </View>
              <UserCard
                name="John Doe"
                email="john.doe@example.com"
                role="Administrator"
                status="Active"
              />
              <UserCard
                name="Jane Smith"
                email="jane.smith@example.com"
                role="Developer"
                status="Active"
              />
              <UserCard
                name="Bob Wilson"
                email="bob.wilson@example.com"
                role="Designer"
                status="Inactive"
              />
            </View>

            {/* Organisms Examples */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="log-in" size={24} color="#3B82F6" />
                <Text style={styles.sectionTitle}>Organisms - Login Form</Text>
              </View>
              <View style={styles.organismContainer}>
                <LoginForm onSubmit={handleLogin} />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="cart" size={24} color="#10B981" />
                <Text style={styles.sectionTitle}>
                  Organisms - Product Cards
                </Text>
              </View>
              <ProductCard
                name="Wireless Headphones"
                price={299000}
                category="Electronics"
                stock={15}
                onAddToCart={() => handleAddToCart("Wireless Headphones")}
              />
              <ProductCard
                name="Smart Watch"
                price={1499000}
                category="Electronics"
                stock={8}
                onAddToCart={() => handleAddToCart("Smart Watch")}
              />
              <ProductCard
                name="Laptop Stand"
                price={199000}
                category="Accessories"
                stock={0}
                onAddToCart={() => handleAddToCart("Laptop Stand")}
              />
            </View>

            {/* Component Structure */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="folder-open" size={24} color="#F59E0B" />
                <Text style={styles.sectionTitle}>Struktur Folder</Text>
              </View>
              <View style={styles.codeBlock}>
                <Text style={styles.codeText}>
                  {`components/\n`}
                  {`├── atomic/\n`}
                  {`│   ├── atoms/\n`}
                  {`│   │   ├── Button.jsx\n`}
                  {`│   │   ├── Input.jsx\n`}
                  {`│   │   ├── Badge.jsx\n`}
                  {`│   │   └── Avatar.jsx\n`}
                  {`│   ├── molecules/\n`}
                  {`│   │   ├── Card.jsx\n`}
                  {`│   │   └── UserCard.jsx\n`}
                  {`│   └── organisms/\n`}
                  {`│       ├── LoginForm.jsx\n`}
                  {`│       └── ProductCard.jsx\n`}
                  {`└── hooks/\n`}
                  {`    └── useResponsive.js`}
                </Text>
              </View>
            </View>

            {/* Benefits */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="checkmark-circle" size={24} color="#10B981" />
                <Text style={styles.sectionTitle}>
                  Keuntungan Atomic Design
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={20} color="#10B981" />
                <Text style={styles.benefitText}>
                  <Text style={styles.bold}>Reusability:</Text> Komponen dapat
                  digunakan kembali di berbagai tempat
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={20} color="#10B981" />
                <Text style={styles.benefitText}>
                  <Text style={styles.bold}>Consistency:</Text> Desain yang
                  konsisten di seluruh aplikasi
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={20} color="#10B981" />
                <Text style={styles.benefitText}>
                  <Text style={styles.bold}>Maintainability:</Text> Mudah untuk
                  maintain dan update
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={20} color="#10B981" />
                <Text style={styles.benefitText}>
                  <Text style={styles.bold}>Scalability:</Text> Mudah untuk
                  scale aplikasi
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <Ionicons name="checkmark" size={20} color="#10B981" />
                <Text style={styles.benefitText}>
                  <Text style={styles.bold}>Collaboration:</Text> Tim dapat
                  bekerja lebih efisien
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Best Practices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="bulb" size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Best Practices</Text>
          </View>

          <View style={styles.practiceCard}>
            <View style={styles.practiceHeader}>
              <Ionicons name="code-slash" size={20} color="#3B82F6" />
              <Text style={styles.practiceTitle}>Flexbox</Text>
            </View>
            <Text style={styles.practiceText}>
              • Gunakan flexDirection untuk mengatur layout{"\n"}• Kombinasikan
              justifyContent dan alignItems{"\n"}• Manfaatkan flex property
              untuk responsive layout{"\n"}• Gunakan flexWrap untuk multi-line
              layout
            </Text>
          </View>

          <View style={styles.practiceCard}>
            <View style={styles.practiceHeader}>
              <Ionicons name="phone-portrait" size={20} color="#10B981" />
              <Text style={styles.practiceTitle}>Responsive Design</Text>
            </View>
            <Text style={styles.practiceText}>
              • Gunakan Dimensions API untuk mendapatkan ukuran layar{"\n"}•
              Buat custom hooks untuk responsive logic{"\n"}• Test di berbagai
              ukuran layar{"\n"}• Pertimbangkan orientasi landscape dan portrait
            </Text>
          </View>

          <View style={styles.practiceCard}>
            <View style={styles.practiceHeader}>
              <Ionicons name="layers" size={20} color="#8B5CF6" />
              <Text style={styles.practiceTitle}>Atomic Design</Text>
            </View>
            <Text style={styles.practiceText}>
              • Mulai dari komponen terkecil (atoms){"\n"}• Buat komponen yang
              reusable{"\n"}• Dokumentasikan setiap komponen{"\n"}• Gunakan
              props untuk customization{"\n"}• Pisahkan logic dan presentation
            </Text>
          </View>
        </View>

        {/* Resources */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="book" size={24} color="#EC4899" />
            <Text style={styles.sectionTitle}>Sumber Belajar</Text>
          </View>

          <TouchableOpacity style={styles.resourceCard}>
            <Ionicons name="logo-react" size={24} color="#61DAFB" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>React Native Flexbox</Text>
              <Text style={styles.resourceSubtitle}>
                reactnative.dev/docs/flexbox
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <Ionicons name="resize" size={24} color="#3B82F6" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Responsive Design Guide</Text>
              <Text style={styles.resourceSubtitle}>
                reactnative.dev/docs/dimensions
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <Ionicons name="layers" size={24} color="#8B5CF6" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                Atomic Design Methodology
              </Text>
              <Text style={styles.resourceSubtitle}>
                atomicdesign.bradfrost.com
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceCard}>
            <Ionicons name="school" size={24} color="#10B981" />
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Component Patterns</Text>
              <Text style={styles.resourceSubtitle}>patterns.dev</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text" size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Ringkasan</Text>
          </View>
          <Text style={styles.paragraph}>
            Dalam module ini, kita telah mempelajari:
          </Text>

          <View style={styles.summaryItem}>
            <View style={styles.summaryNumber}>
              <Text style={styles.summaryNumberText}>1</Text>
            </View>
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Flexbox Layout</Text>
              <Text style={styles.summaryText}>
                Cara menggunakan flexbox untuk membuat layout yang fleksibel
                dengan flexDirection, justifyContent, alignItems, dan flex
                property.
              </Text>
            </View>
          </View>

          <View style={styles.summaryItem}>
            <View style={styles.summaryNumber}>
              <Text style={styles.summaryNumberText}>2</Text>
            </View>
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Responsive Design</Text>
              <Text style={styles.summaryText}>
                Membuat aplikasi yang responsive dengan menggunakan Dimensions
                API, custom hooks, dan conditional rendering berdasarkan ukuran
                layar.
              </Text>
            </View>
          </View>

          <View style={styles.summaryItem}>
            <View style={styles.summaryNumber}>
              <Text style={styles.summaryNumberText}>3</Text>
            </View>
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Atomic Design</Text>
              <Text style={styles.summaryText}>
                Metodologi untuk membuat design system yang scalable dengan
                memecah UI menjadi atoms, molecules, dan organisms.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  hero: {
    backgroundColor: "#FFFFFF",
    padding: 32,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 16,
    textAlign: "center",
  },
  badge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  badgeText: {
    color: "#3B82F6",
    fontWeight: "600",
    fontSize: 14,
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
  paragraph: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 24,
    marginBottom: 12,
  },
  bold: {
    fontWeight: "600",
    color: "#111827",
  },
  infoCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  infoLabel: {
    fontSize: 15,
    color: "#6B7280",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "600",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
  },
  activeTabText: {
    color: "#3B82F6",
    fontWeight: "600",
  },
  flexExample: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
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
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  codeText: {
    color: "#F9FAFB",
    fontSize: 13,
    fontFamily: "monospace",
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  responsiveGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  responsiveBox: {
    backgroundColor: "#F9FAFB",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  responsiveBoxTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 12,
    marginBottom: 4,
  },
  responsiveBoxText: {
    fontSize: 14,
    color: "#6B7280",
  },
  gridItem: {
    backgroundColor: "#EFF6FF",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  gridItemText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#3B82F6",
  },
  responsiveText: {
    color: "#111827",
    marginBottom: 12,
    fontWeight: "500",
  },
  atomicLevel: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
  },
  atomicLevelHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  atomicDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  atomicLevelTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  atomicLevelText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
    marginLeft: 24,
  },
  atomsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  organismContainer: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 4,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  benefitText: {
    fontSize: 15,
    color: "#374151",
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },
  practiceCard: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  practiceHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginLeft: 12,
  },
  practiceText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
  },
  resourceCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  resourceContent: {
    flex: 1,
    marginLeft: 16,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  resourceSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  summaryNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  summaryNumberText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  summaryContent: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  footer: {
    backgroundColor: "#EFF6FF",
    margin: 16,
    padding: 32,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E40AF",
    marginTop: 16,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 16,
    color: "#3B82F6",
    textAlign: "center",
    lineHeight: 24,
  },
});
