import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CodeBlock from "./components/CodeBlock";
import ColorBox from "./components/ColorBox";
import ExampleContainer from "./components/ExampleContainer";
import ModuleHeader from "./components/ModuleHeader";
import PracticeCard from "./components/PracticeCard";
import PropertyCard from "./components/PropertyCard";
import SectionHeader from "./components/SectionHeader";
import { styles } from "./style-app";

export default function Module2() {
  const [textValue, setTextValue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 0, backgroundColor: "#10B981" }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModuleHeader
            icon="cube-outline"
            title="Module 2"
            subtitle="Basic Components & Styling"
            backgroundColor="#10B981"
          />

          <View style={styles.section}>
            <SectionHeader
              icon="information-circle"
              title="Pengenalan"
              color="#3B82F6"
            />
            <Text style={styles.paragraph}>
              React Native menyediakan berbagai komponen dasar untuk membangun
              UI aplikasi mobile. Mari kita pelajari komponen-komponen utama dan
              cara styling-nya.
            </Text>
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="square-outline"
              title="View Component"
              color="#8B5CF6"
            />
            <Text style={styles.paragraph}>
              View adalah container dasar yang mendukung layout dengan flexbox,
              styling, dan touch handling.
            </Text>

            <ExampleContainer label="Contoh:">
              <View style={styles.viewExample}>
                <ColorBox color="#3B82F6" text="Box 1" />
                <ColorBox color="#10B981" text="Box 2" />
                <ColorBox color="#F59E0B" text="Box 3" />
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`<View style={styles.container}>\n  <View style={styles.box} />\n</View>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="text-outline"
              title="Text Component"
              color="#EF4444"
            />
            <Text style={styles.paragraph}>
              Text digunakan untuk menampilkan teks dengan berbagai styling.
            </Text>

            <ExampleContainer label="Contoh:">
              <Text style={styles.textNormal}>Text Normal</Text>
              <Text style={styles.textBold}>Text Bold</Text>
              <Text style={styles.textItalic}>Text Italic</Text>
              <Text style={styles.textColored}>Text dengan Warna</Text>
              <Text style={styles.textLarge}>Text Besar</Text>
            </ExampleContainer>

            <CodeBlock
              code={`<Text style={styles.title}>\n  Hello World\n</Text>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="image-outline"
              title="Image Component"
              color="#EC4899"
            />
            <Text style={styles.paragraph}>
              Image digunakan untuk menampilkan gambar dari berbagai sumber.
            </Text>

            <ExampleContainer label="Contoh:">
              <View style={styles.imageContainer}>
                <View style={styles.imagePlaceholder}>
                  <Ionicons name="image" size={48} color="#9CA3AF" />
                  <Text style={styles.placeholderText}>Image Placeholder</Text>
                </View>
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`<Image\n  source={{ uri: 'url' }}\n  style={styles.image}\n/>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="create-outline"
              title="TextInput Component"
              color="#06B6D4"
            />
            <Text style={styles.paragraph}>
              TextInput memungkinkan user untuk memasukkan teks.
            </Text>

            <ExampleContainer label="Contoh:">
              <TextInput
                style={styles.textInput}
                placeholder="Masukkan teks di sini..."
                value={textValue}
                onChangeText={setTextValue}
              />
              {textValue ? (
                <Text style={styles.inputResult}>
                  Anda mengetik: {textValue}
                </Text>
              ) : null}
            </ExampleContainer>

            <CodeBlock
              code={`<TextInput\n  placeholder="Enter text"\n  value={text}\n  onChangeText={setText}\n/>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="radio-button-on-outline"
              title="Button & TouchableOpacity"
              color="#8B5CF6"
            />
            <Text style={styles.paragraph}>
              Komponen untuk interaksi user dengan aplikasi.
            </Text>

            <ExampleContainer label="Button:">
              <View style={styles.buttonContainer}>
                <Button
                  title="Press Me"
                  onPress={() => alert("Button Pressed!")}
                  color="#3B82F6"
                />
              </View>

              <Text style={[styles.exampleLabel, { marginTop: 16 }]}>
                TouchableOpacity:
              </Text>
              <TouchableOpacity
                style={styles.customButton}
                onPress={() => alert("Custom Button Pressed!")}
                activeOpacity={0.7}
              >
                <Ionicons name="heart" size={20} color="#FFFFFF" />
                <Text style={styles.customButtonText}>Custom Button</Text>
              </TouchableOpacity>
            </ExampleContainer>

            <CodeBlock
              code={`<TouchableOpacity\n  onPress={handlePress}\n>\n  <Text>Click Me</Text>\n</TouchableOpacity>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="toggle-outline"
              title="Switch Component"
              color="#10B981"
            />
            <Text style={styles.paragraph}>
              Switch untuk toggle on/off state.
            </Text>

            <ExampleContainer label="Contoh:">
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>
                  Status: {isEnabled ? "ON" : "OFF"}
                </Text>
                <Switch
                  value={isEnabled}
                  onValueChange={setIsEnabled}
                  trackColor={{ false: "#D1D5DB", true: "#86EFAC" }}
                  thumbColor={isEnabled ? "#10B981" : "#F3F4F6"}
                />
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`<Switch\n  value={isEnabled}\n  onValueChange={setIsEnabled}\n/>`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="grid-outline"
              title="Flexbox Layout"
              color="#F59E0B"
            />
            <Text style={styles.paragraph}>
              React Native menggunakan Flexbox untuk layout.
            </Text>

            <ExampleContainer label="Row (flexDirection: 'row'):">
              <View style={styles.flexRow}>
                <ColorBox color="#EF4444" text="1" width={90} height={60} />
                <ColorBox color="#F59E0B" text="2" width={90} height={60} />
                <ColorBox color="#10B981" text="3" width={90} height={60} />
              </View>
            </ExampleContainer>

            <ExampleContainer label="Column (flexDirection: 'column'):">
              <View style={styles.flexColumn}>
                <ColorBox color="#3B82F6" text="1" width={90} height={60} />
                <ColorBox color="#8B5CF6" text="2" width={90} height={60} />
                <ColorBox color="#EC4899" text="3" width={90} height={60} />
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`flexDirection: 'row' | 'column'\njustifyContent: 'center'\nalignItems: 'center'`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="color-palette-outline"
              title="Styling Methods"
              color="#EC4899"
            />
            <Text style={styles.paragraph}>
              Ada beberapa cara untuk styling di React Native.
            </Text>

            <ExampleContainer label="1. Inline Style:">
              <View
                style={{
                  padding: 10,
                  backgroundColor: "#DBEAFE",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#1E40AF", fontWeight: "600" }}>
                  Inline Styled Text
                </Text>
              </View>
            </ExampleContainer>

            <ExampleContainer label="2. StyleSheet:">
              <View style={styles.styleSheetExample}>
                <Text style={styles.styleSheetText}>
                  StyleSheet Styled Text
                </Text>
              </View>
            </ExampleContainer>

            <ExampleContainer label="3. Multiple Styles:">
              <View
                style={[styles.multipleStyleBase, styles.multipleStyleExtra]}
              >
                <Text style={styles.multipleStyleText}>
                  Multiple Styles Combined
                </Text>
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`// StyleSheet\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 20\n  }\n});`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="list-outline"
              title="Common Style Properties"
              color="#06B6D4"
            />

            <PropertyCard
              title="Layout:"
              properties={[
                "flex, flexDirection, justifyContent, alignItems",
                "width, height, margin, padding",
              ]}
              borderColor="#06B6D4"
            />

            <PropertyCard
              title="Text:"
              properties={[
                "fontSize, fontWeight, color, textAlign",
                "lineHeight, letterSpacing",
              ]}
              borderColor="#8B5CF6"
            />

            <PropertyCard
              title="View:"
              properties={[
                "backgroundColor, borderRadius, borderWidth",
                "shadowColor, shadowOffset, elevation",
              ]}
              borderColor="#10B981"
            />

            <PropertyCard
              title="Position:"
              properties={[
                "position: 'relative' | 'absolute'",
                "top, right, bottom, left, zIndex",
              ]}
              borderColor="#F59E0B"
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="layers-outline"
              title="Shadow & Elevation"
              color="#8B5CF6"
            />
            <Text style={styles.paragraph}>
              Memberikan efek depth pada komponen.
            </Text>

            <ExampleContainer label="iOS Shadow:">
              <View style={styles.shadowBox}>
                <Text style={styles.shadowText}>Shadow Effect (iOS)</Text>
              </View>
            </ExampleContainer>

            <ExampleContainer label="Android Elevation:">
              <View style={styles.elevationBox}>
                <Text style={styles.elevationText}>
                  Elevation Effect (Android)
                </Text>
              </View>
            </ExampleContainer>

            <CodeBlock
              code={`// iOS\nshadowColor: '#000',\nshadowOffset: { width: 0, height: 2 },\nshadowOpacity: 0.25,\nshadowRadius: 3.84,\n\n// Android\nelevation: 5`}
            />
          </View>

          <View style={styles.section}>
            <SectionHeader
              icon="bulb-outline"
              title="Best Practices"
              color="#10B981"
            />

            <PracticeCard text="Gunakan StyleSheet.create() untuk performa lebih baik" />
            <PracticeCard text="Hindari inline styles untuk komponen yang sering re-render" />
            <PracticeCard text="Gunakan flexbox untuk layout yang responsive" />
            <PracticeCard text="Pisahkan styles ke file terpisah untuk komponen besar" />
            <PracticeCard text="Gunakan constants untuk colors dan spacing" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
