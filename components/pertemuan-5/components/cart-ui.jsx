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

const ProductCard = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  cartQuantity,
}) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productCategory}>{product.category}</Text>
        <Text style={styles.productPrice}>
          Rp {product.price.toLocaleString()}
        </Text>
        <Text style={styles.productStock}>Stock: {product.stock}</Text>
      </View>

      <View style={styles.productActions}>
        {cartQuantity > 0 ? (
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onRemoveFromCart(product.id)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{cartQuantity}</Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onAddToCart(product)}
              disabled={cartQuantity >= product.stock}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddToCart(product)}
            disabled={product.stock === 0}
          >
            <Text style={styles.addButtonText}>
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { CartSummary, ProductCard };
