import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../contexts/auth-context";
import BookCollections from "../components/book-collections";
import CTABook from "../components/cta-books";
import { styles } from "../styles/style-app";

const book = {
  id: 1,
  title: "Halloween Candy",
  img: require("../../../assets/books/Halloween_candy.png"),
  author: "Giles Andreae",
  rating: 5,
  views: 100,
  created_at: "2024-06-23 10:00",
  is_free: false,
  language: "en-US",
  sinopsis:
    "This charming tale follows Gerald the giraffe, who feels left out at the Jungle Dance because of his clumsy dancing. With the help of a wise friend, Gerald learns that sometimes it just takes a different tune to find your rhythm and dance to your own beat.",
  story:
    "In the heart of the jungle, Gerald the giraffe watches his animal friends dance gracefully at the annual Jungle Dance. Despite his longing to join in, Gerald feels self-conscious about his awkward dancing. The other animals mock him, and Gerald retreats into sadness. Just when he's about to give up, a wise cricket appears and teaches Gerald that everyone can dance when they find music that speaks to their heart. With newfound confidence, Gerald discovers his unique rhythm and dances joyfully under the moonlit sky, inspiring others to embrace their differences and dance to their own tune.",
};

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/module-9/sign-in");
    }
  }, [user]);

  if (!user) {
    return null; // or a loading indicator
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Greeting />
      <View style={{ flex: 1 }}>
        <CTABook book={book} />
        <BookCollections />
      </View>
    </SafeAreaView>
  );
}

const Greeting = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const handlerSearch = () => {
    console.log(pathname + "/search");
    router.push("/module-9/search");
  };
  return (
    <View style={styles.h_container}>
      <View>
        <Text style={styles.sub_title}>Good Morning👋</Text>
        <Text
          style={{ ...styles.sub_title, color: "#000", fontWeight: "bold" }}
        >
          {user ? user?.username : "Guest"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={[styles.btn_icon, styles.shadow]}
          onPress={handlerSearch}
        >
          <Ionicons name="search-outline" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn_icon, styles.shadow]}>
          <Ionicons name="notifications-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
