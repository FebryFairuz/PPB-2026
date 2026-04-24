import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style-app";

const CategoriesBadge = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={styles.filterSection}>
      <Text style={styles.filterLabel}>Category:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export { CategoriesBadge };
