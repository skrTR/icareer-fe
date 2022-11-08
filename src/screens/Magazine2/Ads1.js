import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Ads1 = ({ data }) => {
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
        // source={require("../../../assets/newF/2m1.jpg")}
        source={{ uri: api + "/upload/" + "2m1.jpg" }}
        style={{
          height: windowHeight / 1,
          width: 1400,
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default Ads1;

const styles = StyleSheet.create({});
