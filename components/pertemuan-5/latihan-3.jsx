import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCard } from "./components/cart-ui";
import { SearchBar } from "./components/form";
import productsData from "./const/list-products.json";
import { styles } from "./style-app";

export default function Latihan3() {
  const [products, setProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    alert(`Add product to cart: ${product.name} (${product.price})`);
  };

  const removeFromCart = (productId) => {
    alert(`Remove product from cart: ${product.name} (${product.price})`);
  };

  const handleCheckout = () => {
    alert(`Checkout successful!`);
  };

  const getCartQuantity = (productId) => {
    return 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <Text style={styles.mainTitle}>Product Catalog</Text>

        <SearchBar value={searchQuery} setValue={setSearchQuery} />

        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>Products ({products.length})</Text>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
              cartQuantity={getCartQuantity(product.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
