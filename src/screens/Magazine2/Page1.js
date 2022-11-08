import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
const windowWidth = Dimensions.get("window").width;
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page1 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <AntDesign
        name="arrowleft"
        size={30}
        color="black"
        style={{
          position: "absolute",
          top: 80,
          left: 10,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{ flexDirection: "row", marginTop: 50, marginHorizontal: 20 }}
      >
        <Text style={{ fontWeight: "bold" }}>4-5 | </Text>
        <Text
          style={{
            color: "grey",
            fontWeight: "200",
            fontFamily: "Montserrat-regular",
          }}
        >
          CAREER DEVELOPER
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          margin: 10,
          marginHorizontal: 20,
          borderColor: "grey",
        }}
      />
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          fontFamily: "Montserrat-black",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        АГУУЛГА
      </Animatable.Text>
      {/* bayka */}
      <ImageBackground
        // source={require("../../../assets/newF/4m1.jpg")}
        source={{ uri: api + "/upload/" + "4m1.jpg" }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 400,
          justifyContent: "space-between",
          marginVertical: 20,
        }}
        resizeMode="cover"
      >
        <View>
          <Text
            style={{
              backgroundColor: "#007dc5",
              color: "white",
              fontSize: 20,
              fontFamily: "Montserrat-bold",
              alignSelf: "flex-start",
              padding: 20,
            }}
          >
            ОНЦЛОХ ЗОЧИН
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 14,
              width: windowWidth / 2.1,
              marginTop: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            Голомт банкны Гүйцэтгэх захирлын орлогч
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 20,
              marginLeft: 10,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            Д.БАДРАЛ
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Montserrat-semibold",
              fontSize: 60,
              flex: 0.2,
              marginTop: 58,
            }}
          >
            8.
          </Text>
          <Text
            style={{
              flex: 0.8,
              fontFamily: "Montserrat-bold",
              fontSize: 30,
              color: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            ШИНЭ ШАРКИЙН ӨСӨЛТИЙН СТРАТЕГИ
          </Text>
        </View>
      </ImageBackground>
      {/*ariunzaya */}
      <ImageBackground
        // source={require("../../../assets/newF/4m4.jpg")}
        source={{ uri: api + "/upload/" + "4m4.jpg" }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "white",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            14.
          </Text>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
                marginHorizontal: 20,
              }}
            >
              {" "}
              World Plus Digital компанийн үүсгэн байгуулагч
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              {" "}
              X. ЭРДЭНЭБАЯР
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#55b8ae",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        FOUNDER'S STORY
      </Text>
      <Text style={styles.textTitle}>
        БИ ӨӨРТӨӨ БАЙГАА ХАМГИЙН ТОМ БАЯЛАГИЙГ ХАРИЛЦАА ХОЛБОО ГЭЖ ХЭЛНЭ
      </Text>
      {/* bolorerdene */}
      <ImageBackground
        // source={require("../../../assets/newF/4m5.jpg")}
        source={{ uri: api + "/upload/" + "4m5.jpg" }}
        style={{
          width: windowWidth / 1.1,
          alignSelf: "center",
          height: 350,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View />
        <View
          style={{
            flexDirection: "row",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "white",
              fontFamily: "Montserrat-semibold",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}
          >
            21.
          </Text>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Montserrat-medium",
                color: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
                marginHorizontal: 20,
                marginRight: 50,
              }}
            >
              {" "}
              "TomYo EdTech болон DropBlok" компанийн хамтран үүсгэн байгуулагч
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Montserrat-bold",
                color: "white",
              }}
            >
              {" "}
              Б.ЭНХЖАРГАЛ
            </Text>
          </View>
        </View>
      </ImageBackground>
      <Text
        style={{
          backgroundColor: "#f15623",
          marginHorizontal: 19,
          textAlign: "center",
          paddingVertical: 20,
          fontFamily: "Montserrat-bold",
          color: "white",
          fontSize: 15,
        }}
      >
        ЭМЭГТЭЙ МАНЛАЙЛАГЧ
      </Text>
      <Text style={styles.textTitle}>
        HАРИЙН УР ЧАДВАР ШААРДДАГ МЭРГЭЖИЛ БИШ Л БОЛ ИХ СУРГУУЛЬД ЗААВАЛ СУРАХ
        ШААРДЛАГАТАЙ ГЭЖ БОДДОГГҮЙ
      </Text>

      {/* 28 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 10,
        }}
      >
        <Text style={styles.textNumber}>28. </Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            OРЛОГЫН ЭХ ҮҮСВЭРЭЭ НЭМЭХ ШИНЭ АРГА ИНФЛҮНСЕР
          </Text>

          <Text style={{ fontFamily: "Montserrat-regular", fontSize: 14 }}>
            Ердөө 10 хүрэхгүй жилийн өмнө танд хэн нэгэн өөрийн сошиал
            хуудсандаа бараа бүтээгдэхүүн, үйлчилгээг туршиж үзсэн сэтгэгдлээ
            хуваалцаад хүмүүсийн сарын дундаж цалингаас ч өндөр орлого олох
            боломжтой гэж хэлсэн бол та итгэх байсан уу?
          </Text>
        </View>
      </View>
      {/* 30 career hogjil */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>35. </Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            ХЭРХЭН ДИЖИТАЛ НҮҮДЭЛЧИН БОЛОХ ВЭ?
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
            }}
          >
            Бидний мэдэх уламжлалт амьдралын хэв маягууд сууриараа өөрчлөгдсөөр
            байна. Технологи хүний харилцааг цаг хугацаа, орон зайнаас үл
            хамааран хаанаас ч үр дүнтэй явуулах боломж олгосноор хүн төрөлхтөн
            хөдөлмөр эрхлэхийн тулд аливаа нэг газар урт хугацаанд суурин
            амьдрах шаардлагагүй болжээ.
          </Text>
        </View>
      </View>

      {/* 37 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={styles.textNumber}>38.</Text>
        <View style={{ flex: 0.8, flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              style={{
                backgroundColor: "#0066a6",
                fontFamily: "Montserrat-bold",
                color: "white",
                paddingVertical: 20,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ОНЦЛОХ КОМПАНИ
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                fontSize: 14,
                marginVertical: 15,
              }}
            >
              БАЙГАЛЬ ЭХ БҮТЭЭЖ, ТЭД БАТАЛГААЖУУЛАВ
            </Text>
            <Text style={{ fontFamily: "Montserrat-medium", fontSize: 12 }}>
              Монгол Улсын усны зах зээлийн 30 хувийг дангаар эзэлдэг 18 жилийн
              түүхт уг компанийн удирдлагын философи, дотоод соёл, хүний нөөцийн
              бодлоготой танилцъя.
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Image
              // source={require("../../../assets/newF/4m6.jpg")}
              source={{uri: api + "/upload/" + "4m6.jpg"}}
              style={{ width: windowWidth / 3, height: 320 }}
            />
          </View>
        </View>
      </View>
      {/* 42 */}
      <Text
        style={{
          fontFamily: "Montserrat-bold",
          backgroundColor: "#007dc5",
          textAlign: "center",
          marginHorizontal: 20,
          paddingVertical: 20,
          fontSize: 22,
          color: "white",
        }}
      >
        ОНЦЛОХ КОМПАНИ
      </Text>
      <Image
        // source={require("../../../assets/newF/5m1.jpg")}
        source={{uri: api + "/upload/" + "5m1.jpg"}}
        style={{ height: 300, width: windowWidth / 1.1, alignSelf: "center" }}
      />
      <View
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
          flexDirection: "row",
        }}
      >
        <Text style={[styles.textNumber, { top: 50 }]}>42.</Text>
        <View style={{ marginTop: 20, flex: 0.8 }}>
          <Text style={{ fontSize: 12, fontWeight: "100" }}>
            БОСА Холдинг компанийн гүйцэтгэх захирал
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: 20 }}>
            Б.НАНДИНЧИМЭГ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 16,
              color: "black",
            }}
          >
            ХҮМҮҮСИЙНХЭЭ УРАМ ЗОРИГИЙГ ДЭМЖИЖ, ЗОРИЛГОО БИЕЛҮҮЛЭХЭД ТУСЛАХ НЬ
            МИНИЙ ҮҮРЭГ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 14,
              marginVertical: 10,
              color: "black",
            }}
          >
            Өдгөө БОСА Холдинг компанийн гүйцэтгэх захирлаар дөрөв дэх жилдээ
            ажиллаж буй Б.Нандинчимэг БОСА нэрийн дэлгүүрийн худалдааны
            зөвлөхөөр ажлын гараагаа эхэлж байв. Одоогийн түүнийг компани нь
            бүтээж, тэр сурсан ур чадвараа компанидаа үнэ цэн болгон өгч, тэд
            хамтдаа 22 дахь жилийн түүхийн хуудсаа нээжээ.
          </Text>
        </View>
      </View>
      <Image
        // source={require("../../../assets/newF/5m5.jpg")}
        source={{uri: api + "/upload/" + "5m5.jpg"}}
        style={{
          width: windowWidth / 1.11,
          height: 300,
          alignSelf: "center",
          bottom: 20,
        }}
      />
      {/* 54 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={[styles.textNumber, { color: "#b17f5e" }]}>54. </Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              // source={require("../../../assets/newF/5m2.jpg")}
              source={{uri: api + "/upload/" + "5m2.jpg"}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#b17f5e",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#b17f5e",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                ДАТА БОЛ ИРЭЭДҮЙ
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                Itools компанийн гүйцэтгэх захирал
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                Б.ТАМИР
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#b17f5e",
        }}
      >
        "XXI зуунд дататай улс, датагаа боловсруулж чадсан үндэстэн хамгийн
        хүчирхэг үндэстэн болж байна."
      </Text>
      {/* 58 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginVertical: 20,
        }}
      >
        <Text style={[styles.textNumber, { color: "#7b2768" }]}>67. </Text>
        <View style={{ flex: 0.8 }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              // source={require("../../../assets/newF/5m4.jpg")}
              source={{uri: api + "/upload/" + "5m4.jpg"}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#7b2768",
                alignSelf: "center",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-bold",
                  color: "#7b2768",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                БАНКHУУДАД ХӨРӨНГӨ ОРУУЛАХ НЬ БОГИНО ХУГАЦААНД МӨНГӨӨ ӨСГӨХ АРГА
                БИШ
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-medium",
                  marginVertical: 10,
                  marginLeft: 5,
                }}
              >
                “Өлзий Энд Ко капитал” үнэт цаасны компанийн гүйцэтгэх захирал
              </Text>
              <Text style={{ fontFamily: "Montserrat-bold", marginLeft: 5 }}>
                Б.ӨЛЗИЙБАЯР
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontFamily: "Cambria-italic",
          fontSize: 14,
          color: "#7b2768",
        }}
      >
        Системийн банкнуудын ipo-д хөрөнгө оруулалт хийхээр хүлээж буй хүмүүст
        зориулан зөвлөж байна.
      </Text>
      {/* 63 */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.textNumber}>69. </Text>
        <View style={{ flex: 0.8 }}>
          <Text style={{ fontFamily: "Montserrat-bold", fontSize: 16 }}>
            ШИНЭ “ГАНЦ ЭВЭРТ”
          </Text>
        </View>
      </View>
      <Image
        // source={require("../../../assets/newF/5m3.png")}
        source={{uri: api + "/upload/" + "5m3.png"}}
        style={{
          width: windowWidth / 1.35,
          height: 200,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      />
      {/* 63 */}
      <ImageBackground
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          flex: 1,
          marginTop: 20,
        }}
        // source={require("../../../assets/newF/5m7.jpg")}
        source={{ uri: api + "/upload/" + "5m7.jpg" }}
      >
        <Text style={[styles.textNumber, { color: "white" }]}>97. </Text>
        <View style={{ flex: 0.8 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 16,
              color: "white",
            }}
          >
            IT САЛБАРТ КАРЬЕРАА ӨСГӨХ БОЛОМЖ
          </Text>

          <Text
            style={{
              fontFamily: "Montserrat-regular",
              fontSize: 16,
              marginVertical: 10,
              color: "white",
            }}
          >
            2030 он гэхэд мэдээллийн технологийн салбарт 667,600 шинэ ажлын байр
            бий болох төдийгүй дундаж цалингийн хэмжээ улсын дунджаас хоёр дахин
            их байна хэмээн АНУ-ын Хөдөлмөрийн Статистикийн хорооноос мэдээлж
            байна. Цаг минутаар үнэ цэн нь өсөн нэмэгдэж буй энэ салбарт хэрхэн
            мэргэшиж болох вэ?
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Page1;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-bold",
    marginHorizontal: 20,
    marginVertical: 10,
    // marginBottom: 15,
  },
  textStatus: {
    fontSize: 14,
    marginVertical: 10,
    fontFamily: "Montserrat-regular",
    // textAlign: "justify",
    marginHorizontal: 20,
  },
  textNumber: {
    fontFamily: "Montserrat-semibold",
    color: "#007dc5",
    fontSize: 30,
    flex: 0.2,
    marginTop: 20,
  },
});
