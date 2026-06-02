import { useRef, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { color_list, styles } from "../styles/style-app";
import { HeroBook } from "./cta-books";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const ClusterBook = ({ books, title }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const RenderPagination = () => (
    <View style={styles.paginationContainer}>
      {books.map((_, index) => (
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

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  const renderItem = ({ item }) => <HeroBook book={item} />;
  return (
    <>
      <View>
        <View style={styles.h_container}>
          <Text style={styles.container_book_collections_title}>{title}</Text>
          <Text style={{ color: color_list.green }}>
            {books && Object.values(books).length} items
          </Text>
        </View>
        <FlatList
          ref={flatListRef}
          data={books}
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
        />
      </View>
      <RenderPagination />
    </>
  );
};

export default ClusterBook;
