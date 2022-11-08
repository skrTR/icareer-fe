import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "../../Constants";

const windowWidth = Dimensions.get("window").width;
const AnotherHiglight = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ backgroundColor: "#041C32" }}>
        <Text
          style={{
            marginLeft: 21,
            fontWeight: "bold",
            fontSize: 22,
            color: "white",
            paddingTop: 20,
          }}
        >
          Булангууд
        </Text>
        <View style={styles.container}>
          <View style={styles.viewer}>
            <TouchableOpacity onPress={() => navigation.navigate("Page5")}>
              <Image
                // source={require("../../assets/newF/4m5.jpg")}
                source={{ uri: api + "/upload/" + "4m5.jpg" }}
                style={styles.image}
              />
              <Text style={styles.name}>МАНЛАЙЛАЛ</Text>
              <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                "TomYo EdTech болон DropBlok" компанийн хамтран үүсгэн
                байгуулагч Б.ЭНХЖАРГАЛ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewer}>
            <TouchableOpacity onPress={() => navigation.navigate("Page16")}>
              <Image
                // source={require("../../assets/newF/97m1.jpg")}
                source={{ uri: api + "/upload/" + "97m1.jpg" }}
                style={styles.image}
              />
              <Text style={styles.name}>ЗӨВЛӨГӨӨ</Text>
              <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                IT САЛБАРТ КАРЬЕРАА ӨСГӨХ БОЛОМЖ
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, left: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Page11")}>
              <Image
                // source={require("../../assets/newF/5m3.png")}
                source={{ uri: api + "/upload/" + "5m3.png" }}
                style={styles.image}
              />
              <Text style={styles.name}>ТЕХНОЛОГИ</Text>
              <Text style={styles.title}>ШИНЭ “ГАНЦ ЭВЭРТ”</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.viewer, { left: 10 }]}>
            <TouchableOpacity onPress={() => navigation.navigate("Page6")}>
              <Image
                // source={require("../../assets/newF/4m3.png")}
                source={{ uri: api + "/upload/" + "4m3.png" }}
                style={[
                  styles.image,
                  {
                    resizeMode: "contain",
                    backgroundColor: "#cccccccc",
                  },
                ]}
              />
              <Text style={styles.name}>ЧИГ ХАНДЛАГА</Text>
              <Text style={[styles.title, { width: windowWidth / 2.6 }]}>
                ОРЛОГЫН ЭХ ҮҮСВЭРЭЭ НЭМЭХ ШИНЭ АРГА ИНФЛҮНСЕР
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AnotherHiglight;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#041C32",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 15,
  },
  image: {
    width: 150,
    height: 230,
    borderRadius: 10,
  },
  viewer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
  },
  title: {
    fontSize: 10,
    color: "grey",
    fontWeight: "400",
  },
});
