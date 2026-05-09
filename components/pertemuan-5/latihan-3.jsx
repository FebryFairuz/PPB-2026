import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartSummary, ProductCard } from "./components/cart-ui";
import { CategoriesBadge } from "./components/categories";
import { SearchBar } from "./components/form";
import { SortedData } from "./components/sorted";
import productsData from "./const/list-products.json";
import { styles } from "./style-app";

export default function Latihan3() {
  const [products, setProducts] = useState(productsData);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // useEffect - untuk log perubahan cart
  useEffect(() => {
    console.log("Cart updated:", cart);

    if (cart.length > 0) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      console.log(`Total items in cart: ${totalItems}`);
    }
  }, [cart]);

  // useEffect - component did mount
  useEffect(() => {
    console.log("Catalog component mounted");
    console.log(`Total products: ${products.length}`);

    return () => {
      console.log("Catalog component will unmount");
    };
  }, []);

  // useMemo - untuk filter dan sort products
  const filteredProducts = useMemo(() => {
    console.log("Filtering and sorting products...");

    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "price-low") {
        return a.price - b.price;
      } else if (sortBy === "price-high") {
        return b.price - a.price;
      } else if (sortBy === "stock") {
        return b.stock - a.stock;
      }
      return 0;
    });

    return sorted;
  }, [products, searchQuery, selectedCategory, sortBy]);

  // useMemo - untuk menghitung total cart
  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return { totalItems, totalPrice };
  }, [cart]);

  // useMemo - untuk mendapatkan categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    return ["All", ...uniqueCategories];
  }, [products]);

  // Functions
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        );
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert(
        `Checkout successful!\nTotal: Rp ${cartSummary.totalPrice.toLocaleString()}\nItems: ${cartSummary.totalItems}`,
      );

      // Update stock
      const updatedProducts = products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
          return { ...product, stock: product.stock - cartItem.quantity };
        }
        return product;
      });

      setProducts(updatedProducts);
      setCart([]);
    }
  };

  const getCartQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView untuk konten yang bisa di-scroll */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <Text style={styles.mainTitle}>Product Catalog</Text>

        <SearchBar value={searchQuery} setValue={setSearchQuery} />

        {/* Category Filter */}
        <CategoriesBadge
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Sort Options */}
        <SortedData sortBy={sortBy} setSortBy={setSortBy} />

        {/* Products List */}
        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>
            Products ({filteredProducts.length})
          </Text>

          {filteredProducts.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No products found</Text>
            </View>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                cartQuantity={getCartQuantity(product.id)}
              />
            ))
          )}
        </View>

        {/* Spacer untuk memberi ruang di bawah agar tidak tertutup CartSummary */}
        {cart.length > 0 && <View style={styles.cartSpacer} />}
      </ScrollView>

      {/* CartSummary di luar ScrollView - akan tetap di bawah */}
      {cart.length > 0 && (
        <CartSummary
          totalItems={cartSummary.totalItems}
          totalPrice={cartSummary.totalPrice}
          onCheckout={handleCheckout}
          onClearCart={clearCart}
        />
      )}
    </SafeAreaView>
  );
}
