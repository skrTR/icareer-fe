import React, { useRef } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { api } from "../../Constants";
const { width: screenWidth } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
const MyCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  // "id": "6242b7d91aaad439817a4c70",
  // "name": "Magazine1",
  const datas = [
    {
      id: "6242b7d91aaad439817a4c71",
      name: "Magazine2",
      photo2: "magazineFace2.png",
    },
    {
      id: "6242b7d91aaad439817a4c70",
      name: "Magazine1",
      photo2: "magazineFace.jpg",
    },
  ];
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            if (item.name === "Magazine1") {
              navigation.navigate("MagazineDetail", { id: item.id });
            } else {
              navigation.navigate("MagazineDetail2", { id: item.id });
            }
          }}
          style={styles.item}
        >
          <ParallaxImage
            source={{ uri: api + "/upload/" + item.photo2 }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={datas}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041C32",
    marginVertical: 1,
    paddingVertical: 38,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth + 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
});
