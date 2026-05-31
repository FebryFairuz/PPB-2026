import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    Alert,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function AdvancedFormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    birthDate: new Date(),
    gender: "",
    interests: [],
    newsletter: false,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);

  const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
  const interestOptions = [
    "Technology",
    "Sports",
    "Music",
    "Travel",
    "Food",
    "Art",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setFormData((prev) => ({ ...prev, birthDate: selectedDate }));
    }
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = () => {
    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      Alert.alert("Error", "Please fill in all required fields");
      return;
    }

    Alert.alert("Success", "Form submitted successfully!", [
      {
        text: "View Data",
        onPress: () => {
          console.log("Form Data:", formData);
          Alert.alert("Form Data", JSON.stringify(formData, null, 2), [
            { text: "OK" },
          ]);
        },
      },
      { text: "OK" },
    ]);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Personal Information Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={24} color="#3B82F6" />
          <Text style={styles.sectionTitle}>Personal Information</Text>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>
              First Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="John"
              value={formData.firstName}
              onChangeText={(value) => handleInputChange("firstName", value)}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>
              Last Name <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={formData.lastName}
              onChangeText={(value) => handleInputChange("lastName", value)}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Email <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="john.doe@example.com"
            value={formData.email}
            onChangeText={(value) => handleInputChange("email", value)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChangeText={(value) => handleInputChange("phone", value)}
            keyboardType="phone-pad"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Birth Date Picker */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Birth Date</Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons name="calendar" size={20} color="#6B7280" />
            <Text style={styles.datePickerText}>
              {formatDate(formData.birthDate)}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={formData.birthDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}

        {/* Gender Selection */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setShowGenderModal(true)}
          >
            <Text
              style={[
                styles.selectButtonText,
                !formData.gender && styles.placeholderText,
              ]}
            >
              {formData.gender || "Select gender"}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Address Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="location" size={24} color="#10B981" />
          <Text style={styles.sectionTitle}>Address</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Street Address</Text>
          <TextInput
            style={styles.input}
            placeholder="123 Main Street"
            value={formData.address}
            onChangeText={(value) => handleInputChange("address", value)}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="New York"
              value={formData.city}
              onChangeText={(value) => handleInputChange("city", value)}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.label}>ZIP Code</Text>
            <TextInput
              style={styles.input}
              placeholder="10001"
              value={formData.zipCode}
              onChangeText={(value) => handleInputChange("zipCode", value)}
              keyboardType="numeric"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="United States"
            value={formData.country}
            onChangeText={(value) => handleInputChange("country", value)}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Interests Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="heart" size={24} color="#F59E0B" />
          <Text style={styles.sectionTitle}>Interests</Text>
        </View>

        <Text style={styles.helperText}>Select all that apply</Text>

        <View style={styles.chipsContainer}>
          {interestOptions.map((interest) => (
            <TouchableOpacity
              key={interest}
              style={[
                styles.chip,
                formData.interests.includes(interest) && styles.chipSelected,
              ]}
              onPress={() => toggleInterest(interest)}
            >
              <Text
                style={[
                  styles.chipText,
                  formData.interests.includes(interest) &&
                    styles.chipTextSelected,
                ]}
              >
                {interest}
              </Text>
              {formData.interests.includes(interest) && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Newsletter Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => handleInputChange("newsletter", !formData.newsletter)}
        >
          <View
            style={[
              styles.checkbox,
              formData.newsletter && styles.checkboxChecked,
            ]}
          >
            {formData.newsletter && (
              <Ionicons name="checkmark" size={16} color="#FFFFFF" />
            )}
          </View>
          <View style={styles.checkboxTextContainer}>
            <Text style={styles.checkboxLabel}>Subscribe to newsletter</Text>
            <Text style={styles.checkboxDescription}>
              Get updates about new features and promotions
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Form Summary */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="document-text" size={24} color="#8B5CF6" />
          <Text style={styles.sectionTitle}>Form Summary</Text>
        </View>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Name:</Text>
            <Text style={styles.summaryValue}>
              {formData.firstName && formData.lastName
                ? `${formData.firstName} ${formData.lastName}`
                : "Not provided"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Email:</Text>
            <Text style={styles.summaryValue}>
              {formData.email || "Not provided"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Phone:</Text>
            <Text style={styles.summaryValue}>
              {formData.phone || "Not provided"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Birth Date:</Text>
            <Text style={styles.summaryValue}>
              {formatDate(formData.birthDate)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Gender:</Text>
            <Text style={styles.summaryValue}>
              {formData.gender || "Not selected"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Address:</Text>
            <Text style={styles.summaryValue}>
              {formData.address && formData.city
                ? `${formData.address}, ${formData.city}`
                : "Not provided"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Interests:</Text>
            <Text style={styles.summaryValue}>
              {formData.interests.length > 0
                ? formData.interests.join(", ")
                : "None selected"}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Newsletter:</Text>
            <Text style={styles.summaryValue}>
              {formData.newsletter ? "Subscribed" : "Not subscribed"}
            </Text>
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="paper-plane" size={20} color="#FFFFFF" />
          <Text style={styles.submitButtonText}>Submit Form</Text>
        </TouchableOpacity>
      </View>

      {/* Gender Selection Modal */}
      <Modal
        visible={showGenderModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Gender</Text>
              <TouchableOpacity onPress={() => setShowGenderModal(false)}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              {genderOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.modalOption,
                    formData.gender === option && styles.modalOptionSelected,
                  ]}
                  onPress={() => {
                    handleInputChange("gender", option);
                    setShowGenderModal(false);
                  }}
                >
                  <Text
                    style={[
                      styles.modalOptionText,
                      formData.gender === option &&
                        styles.modalOptionTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                  {formData.gender === option && (
                    <Ionicons name="checkmark" size={20} color="#3B82F6" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
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
  row: {
    flexDirection: "row",
    gap: 12,
  },
  inputContainer: {
    marginBottom: 16,
  },
  halfWidth: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  required: {
    color: "#EF4444",
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
  datePickerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  datePickerText: {
    fontSize: 16,
    color: "#111827",
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  selectButtonText: {
    fontSize: 16,
    color: "#111827",
  },
  placeholderText: {
    color: "#9CA3AF",
  },
  helperText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 12,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    gap: 6,
  },
  chipSelected: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6",
  },
  chipText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },
  chipTextSelected: {
    color: "#FFFFFF",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: "#3B82F6",
    borderColor: "#3B82F6",
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  checkboxDescription: {
    fontSize: 14,
    color: "#6B7280",
  },
  summaryContainer: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    width: 100,
  },
  summaryValue: {
    flex: 1,
    fontSize: 14,
    color: "#111827",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B82F6",
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  modalBody: {
    padding: 20,
  },
  modalOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#F9FAFB",
  },
  modalOptionSelected: {
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#374151",
  },
  modalOptionTextSelected: {
    color: "#3B82F6",
    fontWeight: "600",
  },
});
