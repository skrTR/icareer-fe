import { StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Ads10 = ({ data }) => {
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
        source={{ uri: api + "/upload/" + data.ads10 }}
        style={{
          height: windowHeight / 1,
          width: windowWidth * 1.55,
        }}
        resizeMode="cover"
      />
    </ScrollView>
  );
};

export default Ads10;

const styles = StyleSheet.create({});
