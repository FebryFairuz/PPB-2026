import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "./components/cart-ui";
import { SearchBar } from "./components/form";
import productsData from "./const/list-products.json";
import { styles } from "./style-app";

export default function Latihan3() {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <Text style={styles.mainTitle}>Product Catalog</Text>

        <SearchBar value={search} setValue={setSearch} />

        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>Products ({products.length})</Text>
          {products.map((product, index) => (
            <ProductCard key={index} value={product} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
