import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function BasicInputExample() {
  const [textInput, setTextInput] = useState("");
  const [multilineInput, setMultilineInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSubmit = () => {
    Alert.alert(
      "Form Data",
      `Text: ${textInput}\nEmail: ${emailInput}\nPhone: ${phoneInput}\nNumber: ${numberInput}\nSwitch: ${isEnabled}`,
      [{ text: "OK" }],
    );
  };

  const handleClear = () => {
    setTextInput("");
    setMultilineInput("");
    setPasswordInput("");
    setEmailInput("");
    setPhoneInput("");
    setNumberInput("");
    setIsEnabled(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Basic Text Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="text" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Basic Text Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={textInput}
            onChangeText={setTextInput}
            placeholderTextColor="#9CA3AF"
          />
          {textInput.length > 0 && (
            <Text style={styles.helperText}>
              Character count: {textInput.length}
            </Text>
          )}
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  placeholder="Enter your name"\n  value={textInput}\n  onChangeText={setTextInput}\n/>`}
          </Text>
        </View>
      </View>

      {/* Multiline Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="document-text" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Multiline Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Enter description"
            value={multilineInput}
            onChangeText={setMultilineInput}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  multiline\n  numberOfLines={4}\n  textAlignVertical="top"\n/>`}
          </Text>
        </View>
      </View>

      {/* Password Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="lock-closed" size={24} color="#EF4444" />
          <Text style={styles.sectionTitle}>Password Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter password"
              value={passwordInput}
              onChangeText={setPasswordInput}
              secureTextEntry={!showPassword}
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#6B7280"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  secureTextEntry={!showPassword}\n  placeholder="Enter password"\n/>`}
          </Text>
        </View>
      </View>

      {/* Email Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="mail" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Email Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={emailInput}
            onChangeText={setEmailInput}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  keyboardType="email-address"\n  autoCapitalize="none"\n  autoCorrect={false}\n/>`}
          </Text>
        </View>
      </View>

      {/* Phone Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="call" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Phone Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phoneInput}
            onChangeText={setPhoneInput}
            keyboardType="phone-pad"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  keyboardType="phone-pad"\n  placeholder="Enter phone number"\n/>`}
          </Text>
        </View>
      </View>

      {/* Number Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="calculator" size={24} color="#EC4899" />
          <Text style={styles.sectionTitle}>Number Input</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter age"
            value={numberInput}
            onChangeText={setNumberInput}
            keyboardType="numeric"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<TextInput\n  keyboardType="numeric"\n  placeholder="Enter age"\n/>`}
          </Text>
        </View>
      </View>

      {/* Switch Input */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="toggle" size={24} color="#06B6D4" />
          <Text style={styles.sectionTitle}>Switch Input</Text>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Enable Notifications</Text>
          <Switch
            trackColor={{ false: "#D1D5DB", true: "#93C5FD" }}
            thumbColor={isEnabled ? "#3B82F6" : "#F3F4F6"}
            ios_backgroundColor="#D1D5DB"
            onValueChange={setIsEnabled}
            value={isEnabled}
          />
        </View>

        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`<Switch\n  onValueChange={setIsEnabled}\n  value={isEnabled}\n/>`}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.section}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
          >
            <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.clearButton]}
            onPress={handleClear}
          >
            <Ionicons name="close-circle" size={20} color="#EF4444" />
            <Text style={[styles.buttonText, { color: "#EF4444" }]}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Input States Preview */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="eye" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Current Values</Text>
        </View>

        <View style={styles.previewContainer}>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Name:</Text>
            <Text style={styles.previewValue}>{textInput || "(empty)"}</Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Description:</Text>
            <Text style={styles.previewValue}>
              {multilineInput || "(empty)"}
            </Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Password:</Text>
            <Text style={styles.previewValue}>
              {passwordInput ? "•".repeat(passwordInput.length) : "(empty)"}
            </Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Email:</Text>
            <Text style={styles.previewValue}>{emailInput || "(empty)"}</Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Phone:</Text>
            <Text style={styles.previewValue}>{phoneInput || "(empty)"}</Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Age:</Text>
            <Text style={styles.previewValue}>{numberInput || "(empty)"}</Text>
          </View>
          <View style={styles.previewRow}>
            <Text style={styles.previewLabel}>Notifications:</Text>
            <Text style={styles.previewValue}>
              {isEnabled ? "Enabled" : "Disabled"}
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginLeft: 12,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
  },
  multilineInput: {
    height: 100,
    paddingTop: 12,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: 12,
  },
  helperText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  codeBlock: {
    backgroundColor: "#1F2937",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  codeText: {
    color: "#F9FAFB",
    fontSize: 12,
    fontFamily: "monospace",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  submitButton: {
    backgroundColor: "#3B82F6",
  },
  clearButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EF4444",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  previewContainer: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
  },
  previewRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  previewLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    width: 120,
  },
  previewValue: {
    fontSize: 14,
    color: "#111827",
    flex: 1,
  },
});
