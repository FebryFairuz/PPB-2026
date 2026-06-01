import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_ALL_BOOK } from "../../apis/book-services";
import { GridBooks } from "../components/book-collections";
import SearchBar from "../components/search-bar";
import { BookSkeleton } from "../components/ui/book-skeleton";
import { color_list, styles } from "../styles/style-app";

export default function Search() {
  const router = useRouter();
  const [books, setBooks] = useState({
    loading: false,
    data: [],
    message: "",
  });
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

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

  const list_books = useMemo(() => {
    let computedData = books.data || [];

    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) => {
          try {
            const value = listData[key];
            return (
              value != null &&
              String(value).toLowerCase().includes(search.toLowerCase())
            );
          } catch (error) {
            console.error(`Error processing key "${key}":`, error);
            return false;
          }
        });
      });
    }

    setTotalItems(computedData.length);

    if (computedData.length > 0) {
      return computedData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
      );
    } else {
      return [];
    }
  }, [search, books, currentPage]);

  if (books.loading) {
    return (
      <View style={styles.container}>
        <BookSkeleton />
      </View>
    );
  }

  if (books.message && books.data.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>{books.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <SearchBar value={search} setValue={setSearch} />
        </View>
      </View>
      <View style={styles.container_book_collections}>
        <View style={styles.h_container}>
          <Text style={styles.container_book_collections_title}>
            Book Collection
          </Text>
          <Text style={{ color: color_list.green }}>{totalItems} items</Text>
        </View>
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <GridBooks books={list_books} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
