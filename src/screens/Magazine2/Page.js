import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../Constants";
import Loading from "../../components/Loading";
import * as Animatable from "react-native-animatable";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  function onLoading(value, label) {
    setLoading(value);
    console.log(label);
  }

  return (
    <>
      {loading && <Loading />}
      <ImageBackground
        // source={require("../../../assets/newF/1m1.jpg")}
        source={{ uri: api + "/upload/" + "1m1.jpg" }}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        imageStyle={{ resizeMode: "cover" }}
        onLoadStart={() => {
          onLoading(true, "true");
        }}
        onLoadEnd={() => {
          onLoading(false, "true");
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 50,
            left: 10,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Animatable.Image
            useNativeDriver={true}
            animation="fadeInDownBig"
            duration={800}
            direction={"alternate"}
            iterationDelay={2000}
            source={require("../../../assets/faceLogo.png")}
            style={{
              width: 370,
              height: 70,
              alignSelf: "center",
              marginTop: 70,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
            }}
          />
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            width: "30%",
            height: "10%",
            marginTop: 20,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "100",
              color: "white",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            ХЭРХЭН
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 10,
              textAlign: "auto",
            }}
          >
            ДИЖИТАЛ НҮҮДЭЛЧИН БОЛОХ ВЭ?
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 15,
              color: "white",
              top: 40,
            }}
          >
            FOUNDER’S STORY
          </Text>
          <Image
            // source={require("../../../assets/newF/1m2.png")}
            source={{ uri: api + "/upload/" + "1m2.png" }}
            style={{ resizeMode: "contain", width: 150, height: 150 }}
          />
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            height: "10%",
            width: "35%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            HИЙГМИЙН ХАРИЛЦААНЫ ДАРААГИЙН ШАТ
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            METAVERSE
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
            height: "10%",
            width: "38%",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Б.ЭНХЖАРГАЛ
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Нарийн ур чадвар шаарддаг мэргэжил биш л бол их сургуульд заавал
            сурах шаардлагатай гэж боддоггүй
          </Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text
            style={{
              color: "white",
              fontWeight: "400",
              fontSize: 14,
              width: "40%",
            }}
          >
            Голомт банкны Гүйцэтгэх захирлын орлогч
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "800",
              fontSize: 20,
            }}
          >
            Д.БАДРАЛ
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "200",
              textAlign: "center",
            }}
          >
            ШИНЭ ШАРКИЙН ӨСӨЛТИЙН СТРАТЕГИ
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
