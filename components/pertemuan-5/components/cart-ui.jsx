import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../style-app";

const CartSummary = ({ totalItems, totalPrice, onCheckout }) => {
  return (
    <TouchableOpacity
      style={styles.cartSummaryFloating}
      onPress={onCheckout}
      activeOpacity={0.8}
    >
      <View style={styles.cartSummaryContent}>
        <View style={styles.cartInfoLeft}>
          <Text style={styles.cartItemCount}>
            {totalItems} item{totalItems > 1 ? "s" : ""}
          </Text>
          <Text style={styles.cartDeliveryText} numberOfLines={1}>
            Checkout now
          </Text>
        </View>

        <View style={styles.cartInfoRight}>
          <Text style={styles.cartTotalPrice}>
            {totalPrice.toLocaleString()}
          </Text>
          <View style={styles.cartIconBag}>
            <Ionicons name="bag-handle" size={24} color="#2D8A3E" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductCard = ({ value }) => {
  // console.log(product);
  return (
    <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{value.name}</Text>
        <Text style={styles.productCategory}>{value.category}</Text>
        <Text style={styles.productPrice}>{value.price}</Text>
        <Text style={styles.productStock}>{value.stock}</Text>
      </View>

      <View style={styles.productActions}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CartSummary, ProductCard };
