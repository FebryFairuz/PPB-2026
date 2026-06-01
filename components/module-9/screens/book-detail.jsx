import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GET_BOOK_BY_ID } from "../../apis/book-services";
import { BookSkeleton } from "../components/ui/book-skeleton";
import { ButtonCircle, ButtonPill } from "../components/ui/buttons";
import ImageWithFallback from "../components/ui/image-with-fallback";
import { color_list, styles } from "../styles/style-app";

export default function BookDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useLocalSearchParams();
  const parentPathname = pathname.split("/")[1];

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

  const handleReadBook = async (book_id, is_free) => {
    try {
      if (is_free) {
        router.push(`/${parentPathname}/read/${book_id}`);
      } else {
        router.push(`/${parentPathname}/subscribe/${book_id}`);
      }
    } catch (error) {
      console.error("Error in handleReadBook:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  const API_URL = process.env.EXPO_PUBLIC_BACKEND_URI;
  const imageUrl = book?.data?.image ? `${API_URL}${book.data.image}` : null;

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
    <ImageBackground
      source={imageUrl ? { uri: imageUrl } : null}
      style={styles_detail.background}
    >
      {Platform.OS === "ios" ? (
        <BlurView intensity={80} tint="dark" style={styles_detail.overlay} />
      ) : (
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)", "rgba(0,0,0,0.9)"]}
          style={styles_detail.overlay}
        />
      )}
      <SafeAreaView style={styles_detail.container}>
        <Header book={book.data} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Cover book={book?.data} />
          <Sinopsis book={book?.data} />
          <ButtonPill
            color={book?.data?.is_free ? color_list.white : color_list.orange}
            onAction={() => handleReadBook(book?.data?.id, book?.data?.is_free)}
          >
            <View style={styles_detail.button_container}>
              {book?.data?.is_free ? (
                <>
                  <Feather name="play" size={20} color={color_list.green} />
                  <Text style={styles_detail.button_text}>Read</Text>
                </>
              ) : (
                <>
                  <FontAwesome
                    name="credit-card"
                    size={20}
                    color={color_list.white}
                  />
                  <Text
                    style={{
                      ...styles_detail.button_text,
                      color: color_list.white,
                    }}
                  >
                    Subscribe
                  </Text>
                </>
              )}
            </View>
          </ButtonPill>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const Header = ({ book }) => {
  const router = useRouter();
  const [is_love, setIsLove] = useState(false);
  const handleReadNow = () => {
    router.back();
  };
  return (
    <View style={styles_detail.h_container}>
      <ButtonCircle onAction={handleReadNow}>
        <Ionicons name="arrow-back" size={24} color={color_list.green} />
      </ButtonCircle>
      <View style={styles_detail.h_container_icon}>
        <ButtonCircle onAction={() => setIsLove(!is_love)}>
          <AntDesign
            name="heart"
            size={24}
            color={is_love ? "red" : color_list.green_light}
          />
        </ButtonCircle>
        <ButtonCircle>
          <AntDesign name="share-alt" size={24} color={color_list.green} />
        </ButtonCircle>
      </View>
    </View>
  );
};

const Cover = ({ book }) => {
  return (
    <View style={styles_detail.d_container}>
      <View style={styles_detail.imgContainer}>
        {/* <Image source={book?.image} style={styles.img} /> */}
        <ImageWithFallback
          uri={book.image}
          style={styles_detail.img}
          resizeMode="cover"
          fallbackIconSize={50}
          fallbackIconColor="#9CA3AF"
        />
      </View>
      <View style={styles_detail.title_container}>
        <Text style={styles_detail.title}>{book?.title}</Text>
        <Text style={styles_detail.sub_title}>{book?.author}</Text>
      </View>
      <View style={styles_detail.rating_container}>
        <AntDesign name="star" size={20} color={color_list.orange} />
        <Text style={styles_detail.rating_text}>{book?.rating} / 5.0</Text>
      </View>
    </View>
  );
};

const Sinopsis = ({ book }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
      <Text style={styles_detail.sin_title}>sinopsis</Text>
      <Text style={styles_detail.sin_paragraph}>{book?.sinopsis}</Text>
    </View>
  );
};

const styles_detail = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 15 : 25,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayAndroid: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay untuk Android
  },
  button_container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    alignContent: "center",
  },
  button_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: color_list.green,
  },

  h_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 0 : 20,
    marginBottom: Platform.OS === "ios" ? 10 : 20,
  },
  h_container_icon: {
    flexDirection: "row",
    gap: 10,
  },

  d_container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  imgContainer: {
    borderRadius: 15,
    shadowColor: color_list.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent",
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
  },
  title_container: {
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    color: color_list.white,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  sub_title: {
    color: color_list.cream,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  rating_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 0,
  },
  rating_text: {
    color: color_list.white,
    fontSize: 16,
  },
  sin_title: {
    color: color_list.white,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    marginBottom: 10,
  },
  sin_paragraph: {
    color: color_list.cream,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "justify",
  },
});
