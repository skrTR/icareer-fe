import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
import { api } from "../../Constants";

const HighCategory = ({ data }) => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          Онцлох зочин
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
          <Image
            style={{
              width: windowWidth - 40,
              height: 200,
              alignSelf: "center",
              borderRadius: 20,
              marginVertical: 10,
            }}
            // source={require("../../assets/newF/1m1.jpg")}
            source={{ uri: api + "/upload/" + "1m1.jpg" }}
          />
          <View style={{ marginLeft: 20, paddingVertical: 10 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                textTransform: "uppercase",
              }}
            >
              Д.БАДРАЛ
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "400",
                fontSize: 14,
                paddingTop: 5,
              }}
            >
              ШИНЭ ШАРКИЙН ӨСӨЛТИЙН СТРАТЕГИ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          Онцлох компани
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Page8")}>
          <Image
            style={{
              width: windowWidth - 40,
              height: 200,
              alignSelf: "center",
              borderRadius: 20,
              marginVertical: 10,
            }}
            // source={require("../../assets/newF/5m5.jpg")}
            source={{ uri: api + "/upload/" + "5m5.jpg" }}
          />
          <View style={{ marginLeft: 20, paddingVertical: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              БОСА Холдинг
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "400",
                fontSize: 14,
                paddingTop: 5,
              }}
            >
              БАЙГАЛЬ ЭХ БҮТЭЭЖ, ТЭД БАТАЛГААЖУУЛАВ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          backgroundColor: "#041C32",
          marginBottom: 1,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            bottom: 7,
            paddingVertical: 10,
          }}
        >
          Онцлох манлайлагч
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Odko", { id: e.id })}
        >
          <Image
            style={{
              width: windowWidth - 40,
              height: 200,
              alignSelf: "center",
              borderRadius: 20,
              marginVertical: 10,
            }}
            source={require("../../assets/newF/2m1.jpg")}
          />
          <View style={{ marginLeft: 20, paddingVertical: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Б.ЭНХЖАРГАЛ
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "400",
                fontSize: 14,
                paddingTop: 5,
              }}
            >
              НАРИЙН УР ЧАДВАР ШААРДДАГ МЭРГЭЖИЛ БИШ Л БОЛ ИХ СУРГУУЛЬД ЗААВАЛ
              СУРАХ ШААРДЛАГАТАЙ ГЭЖ БОДДОГГҮЙ
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default HighCategory;

const styles = StyleSheet.create({});
