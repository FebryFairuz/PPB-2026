import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GET_BOOK_BY_ID } from "../../apis/book-services";
import BottomSheetModal from "../components/bottom-sheet-modal";
import { BookSkeleton } from "../components/ui/book-skeleton";
import { ButtonPill } from "../components/ui/buttons";
import { color_list, styles } from "../styles/style-app";

export default function Subscribe() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState({ loading: true, data: [], message: "" });
  const getBookdetail = async () => {
    setBook({ loading: true, data: [], message: "" });
    try {
      const results = await GET_BOOK_BY_ID(id);
      setBook(results);
    } catch (error) {
      setBook({ loading: false, data: [], message: error.message });
    }
  };

  useEffect(() => {
    getBookdetail();
  }, [id]);

  const handleSubscribe = () => {
    console.log("Subscribe to book:", id);
    router.push(`/module-9/read/${id}`);
  };

  if (book.loading) {
    return (
      <View style={styles.container}>
        <BookSkeleton />
      </View>
    );
  }

  if (book.message && book.data.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>{book.message}</Text>
        </View>
      </View>
    );
  }

  return (
    <BottomSheetModal>
      <View style={style_detail.container}>
        <View style={style_detail.content}>
          <Text style={style_detail.title}>Subscribe to Read</Text>
          <Text style={style_detail.bookTitle}>{book?.title}</Text>
          <Text style={style_detail.description}>
            Subscribe to unlock this premium book and access thousands of other
            titles.
          </Text>

          <View style={style_detail.priceContainer}>
            <Text style={style_detail.price}>IDR 35.000/month</Text>
            <Text style={style_detail.priceDesc}>Cancel anytime</Text>
          </View>

          <View style={{ gap: 20, marginBottom: 50 }}>
            <ButtonPill onAction={handleSubscribe} color={color_list.orange}>
              <Text style={style_detail.subscribeButtonText}>
                Subscribe Now
              </Text>
            </ButtonPill>

            <ButtonPill onAction={() => router.back()} color={color_list.cream}>
              <Text style={style_detail.backButtonText}>Cancel</Text>
            </ButtonPill>
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
}

const style_detail = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 20,
    color: color_list.green,
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    marginBottom: 30,
    lineHeight: 24,
  },
  priceContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: color_list.orange,
  },
  priceDesc: {
    fontSize: 14,
    color: "gray",
  },
  subscribeButton: {
    backgroundColor: color_list.orange,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  subscribeButtonText: {
    color: color_list.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    padding: 16,
    alignItems: "center",
  },
  backButtonText: {
    color: color_list.green,
    fontSize: 16,
  },
});
