import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GET_ALL_BOOK } from "../../apis/book-services";
import { color_list, styles } from "../styles/style-app";
import { BookListSkeleton } from "./ui/book-skeleton";
import ImageWithFallback from "./ui/image-with-fallback";

export default function BookCollections() {
  const [books, setBooks] = useState({
    loading: false,
    data: [],
    message: "",
  });
  const [refreshing, setRefreshing] = useState(false);

  const fetchBooks = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setBooks({ loading: true, data: [], message: "" });
      }

      const results = await GET_ALL_BOOK();
      console.log(results);

      if (results.success && results.data.length > 0) {
        setBooks({ loading: false, data: results.data, message: "" });
      } else {
        setBooks({ loading: false, data: [], message: results.message });
      }
    } catch (error) {
      console.error("Error in fetching books:", error);
      setBooks({
        loading: false,
        data: [],
        message: `Error fetch book: ${error.message}`,
      });
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onRefresh = () => {
    fetchBooks(true);
  };

  // Loading State - Show Skeleton
  if (books.loading) {
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Book Collections</Text>
        </View>
        <BookListSkeleton count={3} />
      </View>
    );
  }

  // Error State
  if (books.message && books.data.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Book Collections</Text>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>{books.message}</Text>
        </View>
      </View>
    );
  }

  // Success State - Show Books
  return (
    <View style={styles.container_book_collections}>
      <View style={styles.h_container}>
        <Text style={styles.container_book_collections_title}>
          Book Collection
        </Text>
        <Text style={{ color: color_list.green }}>
          {books.data.length} items
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <GridBooks books={books.data} />
      </ScrollView>
    </View>
  );
}

const GridBooks = ({ books }) => {
  const router = useRouter();

  const handleReadNow = (book_id) => {
    console.log("Read now", book_id);
    router.push(`/module-9/book/${book_id}`);
  };
  return (
    <View style={[styles.book_grid, styles.shadow]}>
      {books.map((book, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.book_card, styles.shadow]}
          activeOpacity={0.7}
          onPress={() => handleReadNow(book?.id)}
        >
          <BookItemImg book={book} />
          <BookItemContent book={book} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const BookItemImg = ({ book }) => {
  return (
    <View style={{ position: "relative" }}>
      <ImageWithFallback
        uri={book.image}
        style={styles.book_card_img}
        resizeMode="cover"
        fallbackIconSize={50}
        fallbackIconColor="#9CA3AF"
      />
      {!book.is_free && (
        <View style={[styles.circle_premium_small, styles.shadow]}>
          <AntDesign name="crown" size={18} color="black" />
        </View>
      )}
    </View>
  );
};

const BookItemContent = ({ book }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text
        style={styles.book_card_title}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {book.title}
      </Text>
      <Text style={styles.book_card_author} numberOfLines={1}>
        {book.author}
      </Text>
      {/* RATING & VIEWERS */}
      <View style={styles.book_card_footer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="star" size={14} color={color_list.orange} />
          <Text style={styles.book_card_rating}>{book.rating}</Text>
        </View>
        {book.views && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="eye-outline" size={14} color="gray" />
            <Text style={styles.book_card_views}>{book.views}</Text>
          </View>
        )}
      </View>
      {/* END RATING & VIEWERS */}
    </View>
  );
};

export { GridBooks };
