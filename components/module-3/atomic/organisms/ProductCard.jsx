import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

export default function ProductCard({ 
  name, 
  price, 
  category, 
  stock, 
  onAddToCart 
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Ionicons name="cube-outline" size={48} color="#9CA3AF" />
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Badge 
            text={category} 
            variant="primary" 
          />
        </View>
        
        <Text style={styles.price}>
          Rp {price.toLocaleString("id-ID")}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.stockInfo}>
            <Ionicons 
              name="cube" 
              size={16} 
              color={stock > 0 ? "#10B981" : "#EF4444"} 
            />
            <Text style={[
              styles.stock,
              { color: stock > 0 ? "#10B981" : "#EF4444" }
            ]}>
              {stock > 0 ? `Stock: ${stock}` : "Out of Stock"}
            </Text>
          </View>
          
          <Button
            title="Add to Cart"
            onPress={onAddToCart}
            variant={stock > 0 ? "success" : "secondary"}
            size="small"
            disabled={stock === 0}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imageContainer: {
    width: "100%",
    height: 120,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  content: {
    gap: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    flex: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3B82F6",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  stockInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  stock: {
    fontSize: 14,
    fontWeight: "600",
  },
});