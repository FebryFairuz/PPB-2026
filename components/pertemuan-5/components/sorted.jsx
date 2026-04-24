import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style-app";
const SortedData = ({ sortBy, setSortBy }) => {
  return (
    <View style={styles.sortSection}>
      <Text style={styles.filterLabel}>Sort by:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          { value: "name", label: "Name" },
          { value: "price-low", label: "Price: Low to High" },
          { value: "price-high", label: "Price: High to Low" },
          { value: "stock", label: "Stock" },
        ].map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.sortButton,
              sortBy === option.value && styles.sortButtonActive,
            ]}
            onPress={() => setSortBy(option.value)}
          >
            <Text
              style={[
                styles.sortButtonText,
                sortBy === option.value && styles.sortButtonTextActive,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export { SortedData };
