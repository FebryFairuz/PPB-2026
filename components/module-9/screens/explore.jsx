import { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_EXPLORER_BOOK } from "../../apis/book-services";
import ClusterBook from "../components/clustering-book";
import { BookSkeleton } from "../components/ui/book-skeleton";
import { styles } from "../styles/style-app";

export default function Explore() {
  const [books, setBooks] = useState({
    loading: false,
    data: [],
    message: "",
  });
  const [most_read, setMost_read] = useState([]);
  const [new_book, setNew_book] = useState([]);
  const [popular, setPopular] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchBooks = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setBooks({ loading: true, data: [], message: "" });
      }

      const results = await GET_EXPLORER_BOOK();
      if (results.data && Object.values(results.data).length > 0) {
        setMost_read(results.data?.most_read || []);
        setPopular(results.data?.popular || []);
        setNew_book(results.data?.new_releases || []);
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

  const bookClusters = useMemo(() => {
    const clusters = [];
    if (most_read.length > 0) {
      clusters.push({ title: "Most Read", data: most_read });
    }
    if (popular.length > 0) {
      clusters.push({ title: "Popular", data: popular });
    }
    if (new_book.length > 0) {
      clusters.push({ title: "New Comming", data: new_book });
    }
    return clusters;
  }, [most_read, popular, new_book]);

  if (books.loading) {
    return (
      <View style={styles.container}>
        <BookSkeleton />
      </View>
    );
  }

  // Error State
  if (books.message && bookClusters.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>{books.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <FlatList
        data={bookClusters}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ClusterBook books={item.data} title={item.title} />
        )}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
}
