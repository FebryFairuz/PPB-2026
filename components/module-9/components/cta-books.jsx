import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { GET_ALL_BOOK } from "../../apis/book-services";
import { styles } from "../styles/style-app";
import { BookListSkeleton } from "./ui/book-skeleton";
import { ButtonPill } from "./ui/buttons";
import ImageWithFallback from "./ui/image-with-fallback";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const CTABook = ({ book }) => {
  const router = useRouter();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = ({ item }) => <HeroBook book={item} />;

  const RenderPagination = () => (
    <View style={styles.paginationContainer}>
      {books.data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            currentIndex === index && styles.paginationDotActive,
          ]}
        />
      ))}
    </View>
  );

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

  return (
    <View style={{ marginBottom: "-30" }}>
      <FlatList
        ref={flatListRef}
        data={books.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH - 32}
        snapToAlignment="center"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{ paddingLeft: 0 }}
        style={{
          maxHeight: "80%",
        }}
      />
      <RenderPagination />
    </View>
  );
};

const HeroBook = ({ book }) => {
  const router = useRouter();
  const [cardHeight, setCardHeight] = useState(0);

  const handleReadNow = (id) => {
    console.log("Redirect to book detail page", id);
    router.push(`/module-9/book/${id}`);
  };

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setCardHeight(height);
  };

  return (
    <View
      onLayout={handleLayout}
      style={[
        styles.new_com_container,
        {
          width: SCREEN_WIDTH - 50,
          marginRight: 15,
          // Height akan otomatis menyesuaikan
        },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <CTAImage book={book} />
        <View
          style={{
            marginLeft: 10,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <CTAInfoBook book={book} />
          <ButtonPill onAction={() => handleReadNow(book?.id)}>
            <Text style={styles.buttonText}>Read Now</Text>
          </ButtonPill>
        </View>
      </View>
    </View>
  );
};

const CTAImage = ({ book }) => {
  return (
    <View style={{ position: "relative" }}>
      <ImageWithFallback
        uri={book.image}
        style={[styles.new_book_img, styles.shadow]}
        resizeMode="cover"
        fallbackIconSize={50}
        fallbackIconColor="#9CA3AF"
      />
      {!book.is_free && (
        <View style={[styles.circle_premium, styles.shadow]}>
          <AntDesign name="crown" size={18} color="black" />
        </View>
      )}
    </View>
  );
};

const CTAInfoBook = ({ book }) => {
  return (
    <View>
      <Text style={styles.new_book_title}>{book.title}</Text>
      <Text style={styles.new_book_text}>by {book.author}</Text>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={styles.new_book_text}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {book.sinopsis}
        </Text>
      </View>
    </View>
  );
};

export default CTABook;
export { HeroBook };
