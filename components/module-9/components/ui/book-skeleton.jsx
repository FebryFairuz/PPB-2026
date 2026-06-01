import { StyleSheet, View } from "react-native";
import { styles as appStyles } from "../../styles/style-app";
import Skeleton from "./skeleton";

const BookCardSkeleton = () => {
  return (
    <View style={[appStyles.new_com_container, styles.container]}>
      <View style={styles.row}>
        {/* Image Skeleton */}
        <Skeleton width={100} height={140} borderRadius={8} />

        {/* Content Skeleton */}
        <View style={styles.content}>
          {/* Title */}
          <Skeleton
            width="80%"
            height={20}
            borderRadius={4}
            style={{ marginBottom: 8 }}
          />

          {/* Author */}
          <Skeleton
            width="60%"
            height={16}
            borderRadius={4}
            style={{ marginBottom: 12 }}
          />

          {/* Description Lines */}
          <Skeleton
            width="100%"
            height={14}
            borderRadius={4}
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            width="90%"
            height={14}
            borderRadius={4}
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            width="70%"
            height={14}
            borderRadius={4}
            style={{ marginBottom: 12 }}
          />

          {/* Button */}
          <Skeleton width="100%" height={40} borderRadius={20} />
        </View>
      </View>
    </View>
  );
};

const BookListSkeleton = ({ count = 3 }) => {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </View>
  );
};

const BookSkeleton = ({ count = 3 }) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          width="100%"
          height={14}
          borderRadius={4}
          style={{ marginBottom: 6 }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 12,
  },
  row: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
});

export { BookCardSkeleton, BookListSkeleton, BookSkeleton };
