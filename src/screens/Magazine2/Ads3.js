import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";

import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads3 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ width: windowWidth }} horizontal>
      <AntDesign
        name="arrowleft"
        size={30}
        color="#ffffff"
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <Image
        // source={require("../../../assets/newF/20m2.png")}
        source={{ uri: api + "/upload/" + "20m2.png" }}
        style={{
          height: windowHeight,
          width: windowWidth * 1.7,
          resizeMode: "contain",
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads3;

const styles = StyleSheet.create({});
