import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { api } from "../../Constants";
import { useNavigation } from "@react-navigation/native";

const BestPerson = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#041C32",
        marginTop: 1,
        paddingVertical: 15,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "white",
          marginLeft: 15,
        }}
      >
        Онцлох зочин
      </Text>

      <Text
        style={{
          fontWeight: "400",
          fontSize: 14,
          color: "white",
          marginLeft: 17,
        }}
      >
        Нийтлэлийг зочноор хайж унших
      </Text>
      <ScrollView horizontal style={{ paddingVertical: 20 }}>
        <View style={{ paddingHorizontal: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
            <Image
              // source={require("../../assets/newF/4m1.jpg")}
              source={{ uri: api + "/upload/" + "4m1.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Д.Бадрал
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page4")}>
            <Image
              // source={require("../../assets/newF/4m4.jpg")}
              source={{ uri: api + "/upload/" + "4m4.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Х.Эрдэнэбаяр
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page5")}>
            <Image
              // source={require("../../assets/newF/4m5.jpg")}
              source={{ uri: api + "/upload/" + "4m5.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Б.Энхжаргал
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 0 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page8")}>
            <Image
              // source={require("../../assets/newF/5m1.jpg")}
              source={{ uri: api + "/upload/" + "5m1.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Б.Нандинчимэг
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page9")}>
            <Image
              // source={require("../../assets/newF/5m2.jpg")}
              source={{ uri: api + "/upload/" + "5m2.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Б.Тамир
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Page13")}>
            <Image
              // source={require("../../assets/newF/5m4.jpg")}
              source={{ uri: api + "/upload/" + "5m4.jpg" }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "white",
                paddingTop: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Б.Өлзийбаяр
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BestPerson;

const styles = StyleSheet.create({});
