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
  const isOutOfStock = product?.stock === 0;
  const isMaxQuantity = cartQuantity >= product?.stock;

  return (
    <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={styles.productCategory}>{product?.category}</Text>
        <Text style={styles.productPrice}>
          Rp {product?.price?.toLocaleString()}
        </Text>
        <Text
          style={[styles.productStock, isOutOfStock && styles.productStockOut]}
        >
          Stock: {product?.stock}
          {isOutOfStock && " (Out of Stock)"}
        </Text>
      </View>

      <View style={styles.productActions}>
        {cartQuantity > 0 ? (
          <View style={styles.quantityControl}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onRemoveFromCart(product?.id)}
            >
              <Ionicons name="remove" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{cartQuantity}</Text>

            <TouchableOpacity
              style={[
                styles.quantityButton,
                isMaxQuantity && styles.quantityButtonDisabled,
              ]}
              onPress={() => onAddToCart(product)}
              disabled={isMaxQuantity}
            >
              <Ionicons
                name="add"
                size={20}
                color={isMaxQuantity ? "#ccc" : "#fff"}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={[styles.addButton, isOutOfStock && styles.addButtonDisabled]}
            onPress={() => onAddToCart(product)}
            disabled={isOutOfStock}
          >
            <Text style={styles.addButtonText}>
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { CartSummary, ProductCard };
