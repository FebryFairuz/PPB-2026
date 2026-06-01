import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { usePathname, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { ButtonStarted } from "./components/ui/buttons";
import { color_list, styles } from "./styles/style-app";

export default function LandingPage() {
  const router = useRouter();
  const pathname = usePathname();
  // const params = useLocalSearchParams();
  // const currentUrl = `${pathname}?${new URLSearchParams(params).toString()}`;

  const handleGetStarted = () => {
    router.push(pathname + "/apps");
    console.log("move to:", pathname + "/apps");
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: color_list.green,
        paddingHorizontal: 0,
      }}
    >
      <LinearGradient
        colors={[color_list.green, color_list.green_dark]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.content}>
          <Logo />
          <Titles />
          <Decorative />

          <View style={styles.buttonContainer}>
            <ButtonStarted onAction={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color={color_list.green}
              />
            </ButtonStarted>

            <Text style={styles.footerText}>
              Start your reading journey today
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.iconCircle}>
        <Ionicons name="book" size={60} color={color_list.white} />
      </View>
    </View>
  );
};

const Titles = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Readly+</Text>
      <Text style={styles.subtitle}>Discover · Subscribe · Read Anywhere</Text>
      <Text style={styles.description}>
        Discover thousands of books at your fingertips. Read, explore, and enjoy
        your favorite stories anytime, anywhere.
      </Text>
    </View>
  );
};

const Decorative = () => {
  return (
    <View style={styles.decorativeContainer}>
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />
    </View>
  );
};
