import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartSummary, ProductCard } from "./components/cart-ui";
import { SearchBar } from "./components/form";
import productsData from "./const/list-products.json";
import { styles } from "./style-app";

export default function Latihan3() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return { totalItems, totalPrice };
  }, [cart]);

  const addToCart = (product) => {};

  const removeFromCart = (productId) => {};

  const handleCheckout = () => {
    alert(`Checkout successful!`);
  };

  const getCartQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
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

        {cart.length > 0 && <View style={styles.cartSpacer} />}
      </ScrollView>

      {cart.length > 0 && (
        <CartSummary
          totalItems={cartSummary.totalItems}
          totalPrice={cartSummary.totalPrice}
          onCheckout={handleCheckout}
        />
      )}
    </SafeAreaView>
  );
}
