import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function FormValidationExample() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 3) {
          error = "Full name must be at least 3 characters";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Full name can only contain letters and spaces";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^[0-9]{10,13}$/.test(value.replace(/[\s-]/g, ""))) {
          error = "Phone number must be 10-13 digits";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
          error = "Password must contain uppercase, lowercase, and number";
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;

      case "age":
        if (!value) {
          error = "Age is required";
        } else if (
          isNaN(value) ||
          parseInt(value) < 1 ||
          parseInt(value) > 120
        ) {
          error = "Please enter a valid age (1-120)";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
    );
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Success", "Form submitted successfully!", [
        {
          text: "OK",
          onPress: () => {
            // Reset form
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              age: "",
            });
            setErrors({});
            setTouched({});
          },
        },
      ]);
    } else {
      Alert.alert("Error", "Please fix all errors before submitting");
    }
  };

  const renderInput = (
    name,
    label,
    placeholder,
    icon,
    keyboardType = "default",
    secureTextEntry = false,
  ) => {
    const hasError = touched[name] && errors[name];
    const isValid = touched[name] && !errors[name] && formData[name];

    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={[
            styles.inputWrapper,
            hasError && styles.inputError,
            isValid && styles.inputValid,
          ]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={hasError ? "#EF4444" : isValid ? "#10B981" : "#6B7280"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={formData[name]}
            onChangeText={(value) => handleChange(name, value)}
            onBlur={() => handleBlur(name)}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCapitalize={name === "email" ? "none" : "sentences"}
            autoCorrect={false}
            placeholderTextColor="#9CA3AF"
          />
          {isValid && (
            <Ionicons
              name="checkmark-circle"
              size={20}
              color="#10B981"
              style={styles.validIcon}
            />
          )}
        </View>
        {hasError && (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={16} color="#EF4444" />
            <Text style={styles.errorText}>{errors[name]}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Form Header */}
      <View style={styles.section}>
        <View style={styles.headerContainer}>
          <Ionicons name="clipboard" size={32} color="#3B82F6" />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Registration Form</Text>
            <Text style={styles.headerSubtitle}>
              All fields are required and validated
            </Text>
          </View>
        </View>
      </View>

      {/* Form Fields */}
      <View style={styles.section}>
        {renderInput(
          "fullName",
          "Full Name",
          "Enter your full name",
          "person",
          "default",
        )}

        {renderInput(
          "email",
          "Email Address",
          "Enter your email",
          "mail",
          "email-address",
        )}

        {renderInput(
          "phone",
          "Phone Number",
          "Enter your phone number",
          "call",
          "phone-pad",
        )}

        {renderInput("age", "Age", "Enter your age", "calendar", "numeric")}

        {renderInput(
          "password",
          "Password",
          "Enter your password",
          "lock-closed",
          "default",
          true,
        )}

        {renderInput(
          "confirmPassword",
          "Confirm Password",
          "Confirm your password",
          "lock-closed",
          "default",
          true,
        )}
      </View>

      {/* Password Requirements */}
      <View style={styles.section}>
        <View style={styles.requirementsHeader}>
          <Ionicons name="information-circle" size={20} color="#3B82F6" />
          <Text style={styles.requirementsTitle}>Password Requirements</Text>
        </View>
        <View style={styles.requirementsList}>
          <View style={styles.requirementItem}>
            <Ionicons
              name={
                formData.password.length >= 8
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              size={16}
              color={formData.password.length >= 8 ? "#10B981" : "#9CA3AF"}
            />
            <Text
              style={[
                styles.requirementText,
                formData.password.length >= 8 && styles.requirementMet,
              ]}
            >
              At least 8 characters
            </Text>
          </View>
          <View style={styles.requirementItem}>
            <Ionicons
              name={
                /[A-Z]/.test(formData.password)
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              size={16}
              color={/[A-Z]/.test(formData.password) ? "#10B981" : "#9CA3AF"}
            />
            <Text
              style={[
                styles.requirementText,
                /[A-Z]/.test(formData.password) && styles.requirementMet,
              ]}
            >
              One uppercase letter
            </Text>
          </View>
          <View style={styles.requirementItem}>
            <Ionicons
              name={
                /[a-z]/.test(formData.password)
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              size={16}
              color={/[a-z]/.test(formData.password) ? "#10B981" : "#9CA3AF"}
            />
            <Text
              style={[
                styles.requirementText,
                /[a-z]/.test(formData.password) && styles.requirementMet,
              ]}
            >
              One lowercase letter
            </Text>
          </View>
          <View style={styles.requirementItem}>
            <Ionicons
              name={
                /[0-9]/.test(formData.password)
                  ? "checkmark-circle"
                  : "ellipse-outline"
              }
              size={16}
              color={/[0-9]/.test(formData.password) ? "#10B981" : "#9CA3AF"}
            />
            <Text
              style={[
                styles.requirementText,
                /[0-9]/.test(formData.password) && styles.requirementMet,
              ]}
            >
              One number
            </Text>
          </View>
        </View>
      </View>

      {/* Form Summary */}
      <View style={styles.section}>
        <View style={styles.summaryHeader}>
          <Ionicons name="stats-chart" size={20} color="#8B5CF6" />
          <Text style={styles.summaryTitle}>Form Status</Text>
        </View>
        <View style={styles.summaryContent}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Fields Filled:</Text>
            <Text style={styles.summaryValue}>
              {Object.values(formData).filter((v) => v).length} / 6
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Errors:</Text>
            <Text
              style={[
                styles.summaryValue,
                Object.keys(errors).length > 0 && styles.summaryError,
              ]}
            >
              {Object.keys(errors).filter((key) => errors[key]).length}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Valid Fields:</Text>
            <Text
              style={[
                styles.summaryValue,
                Object.values(formData).filter((v) => v).length === 6 &&
                  Object.keys(errors).length === 0 &&
                  styles.summarySuccess,
              ]}
            >
              {
                Object.keys(formData).filter(
                  (key) => formData[key] && !errors[key],
                ).length
              }{" "}
              / 6
            </Text>
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <View style={styles.section}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            Object.keys(errors).length > 0 && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
        >
          <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
          <Text style={styles.submitButtonText}>Submit Form</Text>
        </TouchableOpacity>
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  inputValid: {
    borderColor: "#10B981",
    backgroundColor: "#F0FDF4",
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
  },
  validIcon: {
    marginLeft: 8,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginLeft: 6,
  },
  requirementsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  requirementsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginLeft: 8,
  },
  requirementsList: {
    gap: 8,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  requirementText: {
    fontSize: 14,
    color: "#6B7280",
    marginLeft: 8,
  },
  requirementMet: {
    color: "#10B981",
    fontWeight: "500",
  },
  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginLeft: 8,
  },
  summaryContent: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 8,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#6B7280",
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  summaryError: {
    color: "#EF4444",
  },
  summarySuccess: {
    color: "#10B981",
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
  submitButtonDisabled: {
    backgroundColor: "#9CA3AF",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
