import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page12 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        // source={require("../../../assets/newF/78m1.jpg")}
        source={{ uri: api + "/upload/" + "78m1.jpg" }}
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          style={{
            position: "absolute",
            top: 55,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            textAlign: "center",
            color: "white",
            marginTop: 70,
            fontSize: 20,
            flex: 1,
          }}
        >
          ХӨРӨНГӨ ОРУУЛАЛТ
        </Text>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            БАНКHУУДЫН
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 80,
            }}
          >
            IPO
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            БИД ХЭРХЭН БЭЛТГЭХ ВЭ?
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>78-81 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
        />
        <Text style={styles.textStatus}>
          Тэртээ 1924 оны зургадугаар сард ердөө 260 янчааны хөрөнгөтэй, 4
          монгол ажилчин, 18 зөвлөлтийн мэргэжилтнээс ажиллах хүчээ бүрдүүлэн
          сууриа тавьж байсан банкны салбар өдгөө актив хөрөнгийн хэмжээ 40 их
          наядад хүрч, нийт ажилчдын тоо 15 мянгыг давжээ. Монголын ууган
          төдийгүй хурдтай өсөж буй салбарын хувьд энэ оны эхний хагаст сүүлийн
          30 жил тохиогоогүй томоохон өөрчлөлттэй жил байна гэдгийг Монголбанкны
          ерөнхийлөгч Б.Лхагвасүрэн хэлсэн юм. Түүхэнд тэмдэглэгдэн үлдэх тэрхүү
          өөрчлөлт бол системийн нөлөө бүхий 5 банк энэ онд IPO хийх юм. Энд энэ
          салбарыг болоод хөрөнгийн зах зээлийг сонирхогчид болоод
          мэргэжилтнүүд, бид хэрхэн бэлтгэх вэ?{" "}
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text
            style={[
              styles.textTitle,
              { marginTop: 20, fontSize: 40, color: "#7b2768" },
            ]}
          >
            ЯАГААД
          </Text>
          <Text style={[styles.textTitle, { fontSize: 20, marginBottom: 15 }]}>
            БАНКНУУД IPO ХИЙХ БОЛОВ?
          </Text>
        </View>
        <Text style={[styles.textTitle, { marginVertical: 0 }]}>
          IPO: An initial public offering (IPO)
        </Text>
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          буюу анхдагч зах зээлийн арилжаа. Энэ нь олон нийтэд хаалттай байсан
          компани хувьцааныхаа тодорхой хувийг хөрөнгийн бирж дээр нийтэд
          нээлттэй арилжаалахыг хэлнэ.
        </Text>
        <Text style={[styles.textStatus]}>
          Өнгөрсөн оны нэгдүгээр сарын УИХ-ын намрын ээлжит чуулганаар Банкны
          тухай хуульд нэмэлт өөрчлөлт оруулах тухай хуулийн төслийг хэлэлцэн
          баталж хуулийн хэрэгжилт энэ оны хоёрдугаар сарын нэгнээс эхэлсэн
          билээ. Уг хуульд дараах дөрвөн зарчмын дагуу нэмэлт өөрчлөлт оруулжээ.
        </Text>
        <Text style={[styles.textStatus]}>1. Банкийг нээлттэй болгох</Text>
        <Text style={[styles.textStatus]}>
          2. Хувьцаа эзэмшигчдийн төвлөрлийг бууруулах{" "}
        </Text>
        <Text style={[styles.textStatus]}>
          3. Банк татан буугдсан үед төлбөр барагдуулах дарааллыг ойлгомжтой
          болгох, хуримтлалтай иргэн, өрхийн хууль ёсны эрхийг хамгаалахад
          чиглэсэн байдлаар оновчтой байлгах зохицуулалтыг хуульд тусгав.{" "}
        </Text>
        <Text style={[styles.textStatus]}>
          4. Банкны систем дэх нөлөө бүхий банкны тодорхойлолтыг нарийвчлан
          боловсронгуй болгов.
        </Text>
        <Text style={[styles.textStatus]}>
          Нэгдүгээрт, банкны хувь эзэмшлийн төвлөрлийг бууруулах, банкийг олон
          нийтийн хяналттай болгох{" "}
        </Text>
        <Text style={[styles.textStatus]}>
          Манай улсын системийн нөлөө бүхий арилжааны банкнуудын дөрвийнх нь
          нийт хувьцааны 90 хувиас дээш хувийг 2 нөлөө бүхий хувь хүн,
          байгууллага эзэмшиж нэгийнх нь 60-аас дээш хувийг 3 байгууллага
          эзэмшиж байна. Мөн хөрөнгийн 90 орчим хувийг бусдаас татан
          төвлөрүүлсэн хөрөнгө, үлдсэн 10 гаруй хувийг банкны эздийн өмч
          бүрдүүлж байгаа нь уг салбарын засаглалыг илүү нээлттэй, ил тод болгох
          шалтгаан болж байгаа юм.
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          Банкнуудын улирлын тайлан 2021
        </Text>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text style={[styles.textTitle, { width: "40%" }]}>Банкнууд</Text>
          <Text style={[styles.textTitle, { width: "60%" }]}>
            Хувьцаа эзэмшигчид
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[styles.textStatus, { marginVertical: 0, width: "40%" }]}
          >
            {" "}
            Xаан банк
          </Text>
          <View style={{ width: "60%" }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 40% Таван богд трейд
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 60% Sawa Holdings Co.,Ltd
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[styles.textStatus, { marginVertical: 0, width: "40%" }]}
          >
            Худалдаа Хөгжлийн Банк
          </Text>
          <View style={{ width: "60%" }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 95% Д.Эрдэнэбилэг
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 5% бусад
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[styles.textStatus, { marginVertical: 0, width: "40%" }]}
          >
            Голомт банк
          </Text>
          <View style={{ width: "60%" }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 94% Д.Баясгалан
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 6% бусад
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[styles.textStatus, { marginVertical: 0, width: "40%" }]}
          >
            Tөрийн банк
          </Text>
          <View style={{ width: "60%" }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 52% Сангийн яам
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 48% Хадгаламжийн Даатгалын Корпораци
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[styles.textStatus, { marginVertical: 0, width: "40%" }]}
          >
            Хас банк
          </Text>
          <View style={{ width: "60%" }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 33%-MAK
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 20%-IFC
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 17%ORIX
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 17%-EBRD
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              • 13%-бусад
            </Text>
          </View>
          <View style={{ borderWidth: 1, marginVertical: 10 }} />
        </View>
        <View style={{ borderWidth: 1, marginVertical: 10 }} />
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          Банкны салбарын тойм, Мандал Ассет
        </Text>

        <Text style={[styles.textTitle, { color: "#7b2768" }]}>
          БАНКНУУДЫН IPO ЯМАР АЧ ХОЛБОГДОЛТОЙ ВЭ?
        </Text>
        <View
          style={{ borderWidth: 1, marginVertical: 10, borderColor: "#7b2768" }}
        />
        <Text style={[styles.textTitle]}>
          Системийн нөлөө бүхий банкнууд IPO хийснээр Монголын хөрөнгийн зах
          зээлийн хэмжээ тэлнэ.
        </Text>
        <View
          style={{ borderWidth: 1, marginVertical: 10, borderColor: "#7b2768" }}
        />
        <Text style={[styles.textStatus]}>
          Өнгөрсөн онд Монголын хөрөнгийн зах зээл өмнөх оныхоос хоёр дахин өсөж
          нийт үнэлгээ 5 их наядыг давсан бөгөөд хүн амын 75 хувь буюу 2.5 сая
          хүн үнэт цаасны данс эзэмших болсон нь уг зах зээлд хөрөнгө оруулах
          том алхмын эхлэл болсон юм. Банкнуудын IPO-ийн дүнд 600 тэрбум
          төгрөгийн нийлүүлэлт зах зээлд орж ирэх бөгөөд Мандал Ассет
          Менежментийн шинжээчдийн тооцоогоор Монголын хөрөнгийн зах зээлийн
          үнэлгээ 11.1 их наядад хүрэх төлөвтэй байна.
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/80m2.jpg")}
            source={{ uri: api + "/upload/" + "80m2.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              borderRadius: 50,
              borderColor: "#7b2768",
              borderWidth: 2,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[styles.textStatus, { marginVertical: 0, width: "80%" }]}
            >
              Монголбанкны ерөнхийлөгч
            </Text>
            <Text style={[styles.textTitle, , { marginVertical: 0 }]}>
              Б.ЛХАГВАСҮРЭН
            </Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          “Банкнууд хөрөнгийн бирж дээр IPO хийх нь зөвхөн дотоодын гэлтгүй
          гаднын хөрөнгө оруулагчдад ч банкыг нээлттэй болгож байгаа. Гаднаас
          хөрөнгө татах нь валютын орох урсгалыг нэмэгдүүлэх, олон улсын зах
          зээл дээрх Монгол Улсын нэр хүндийг өсгөх, дотоодын бизнесийн
          стандартыг сайжруулах, дэлхийн сайн жишгийг нутагшуулах зэрэг олон ач
          холбогдолтой. Манай банкнуудад Олон улсын санхүүгийн корпорац, Европын
          сэргээн босголт, хөгжлийн банк зэрэг гаднын томоохон санхүүгийн
          байгууллагууд хувь эзэмшилтэй байдаг нь бусад хөрөнгө оруулагчдад
          эерэг мессеж болсоор ирсэн болов уу. Мөн банкны засаглалыг
          сайжруулахаас гадна тухайн банкны үнэ цэн бирж дээр арилжаалагдаж
          байгаа хувьцааны үнээр тогтдог болно гэсэн үг. Өөрөөр хэлбэл, банк
          өөрөө өөрийгөө “сайн банк, том банк” гэж үнэлэх бус, энэ үнэлгээг олон
          улсын жишгээр зах зээл, зах зээл дээрх хувьцааны ханшийн хөдөлгөөн нь
          тодорхойлно."
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/80m1.jpg")}
            source={{ uri: api + "/upload/" + "80m1.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              borderRadius: 50,
              borderColor: "#7b2768",
              borderWidth: 2,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[styles.textStatus, { marginVertical: 0, width: "80%" }]}
            >
              Монголбанкны тэргүүн дэд ерөнхийлөгч
            </Text>
            <Text style={[styles.textTitle, , { marginVertical: 0 }]}>
              Г.ДӨЛГӨӨН
            </Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          “Банкнууд IPO гаргаснаар банкны үйл ажиллагаа ил тод нээлттэй болж,
          хяналтын тогтолцоо илүү боловсронгуй болох, банкны засаглал сайжрах,
          санхүүгийн хүртээмжтэй байдал нэмэгдэх зэрэг банк, санхүүгийн салбарын
          экосистемийн тогтвортой хөгжлийг дэмжих боломж бүрдэх юм.”
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/80m3.jpg")}
            source={{ uri: api + "/upload/" + "80m3.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              borderRadius: 50,
              borderColor: "#7b2768",
              borderWidth: 2,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[styles.textStatus, { marginVertical: 0, width: "80%" }]}
            >
              Голомт банкны гүйцэтгэх захирлын орлогч
            </Text>
            <Text style={[styles.textTitle, , { marginVertical: 0 }]}>
              Д.БАДРАЛ
            </Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          “Банкны салбар IPO хийх нь салбар цаашид тэлэх маш том боломж юм. Банк
          гэдэг өөрийнхөө хөрөнгөөр бусдын хөрөнгийг хөшүүрэгдэж бизнес хийдэг
          байгууллага. Эдийн засаг хүчтэй тэлэх, банкинд иргэдийн хуримтлал бий
          болохын хэрээр банкны өөрийн хөрөнгийн хүрэлцээ дутмаг байгаа. Их
          хэмжээний түүхий эд бий болж байгаа боловч эзэн нь үйлдвэрийнхээ хүчин
          чадлыг нэмэхгүй бол тэр түүхий эдийг ашигтай зүйл болгож чадахгүй
          гэсэн үг. Иймд банкны салбарт өөрийн хөрөнгөө нэмэгдүүлж IPO хийх
          боломж олгож байгаа нь бидэнд хөгжил, орон зайгаа тэлэх том боломж
          олгож байна гэж харж байна.”
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/80m4.jpg")}
            source={{ uri: api + "/upload/" + "80m4.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              borderRadius: 50,
              borderColor: "#7b2768",
              borderWidth: 2,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[styles.textStatus, { marginVertical: 0, width: "50%" }]}
            >
              “Өлзий Энд Ко” үнэт цаасны компанийн гүйцэтгэх захирал
            </Text>
            <Text style={[styles.textTitle, , { marginVertical: 0 }]}>
              Б.ӨЛЗИЙБАЯР
            </Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          Банкны тухайн хуульд орсон нэмэлт өөрчлөлтүүдээс иргэдэд эерэг нөлөө
          авчрах боломжийг олгосон заалт нь системийн таван банкыг олон нийтэд
          нээлттэй хувьцаат компани болгох юм. Үүнийг хоёр талтай гэж харж
          байна. Нэгдүгээрт, санхүүгийн зах зээл дээр зуучлалын үйл ажиллагаа
          явуулж, хадгаламж эзэмшигчдийн мөнгийг зээл болгон гаргаж байгаа
          хариуцлагатай байгууллагын хувьд олон нийтэд нээлттэй байх ёстой. Банк
          зээл олгохын тулд маш олон хүний мэдээллийг цуглуулдаг. Банкнуудын
          дотоод үйл ажиллагаа хаалттай байснаар бид энэхүү мэдээллийг хэрхэн
          ашиглагдаж байгааг мэдэх боломжгүй. Олон улсын жишгээр банк олон
          нийтэд нээлттэй, үйл ажиллагаа нь ил тод байх ёстой. Энэ жишиг манайд
          орж ирж байгаа нь сайшаалтай. Хоёрдугаарт, банкнууд IPO хийгээд нийтэд
          хувьцаагаа санал болгоход иргэд ч мөн банкны эзэн болох, хувьцаа
          эзэмших боломжтой болж байгаа.
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
        {/*  */}
        <Image
          // source={require("../../../assets/newF/81m.png")}
          source={{ uri: api + "/upload/" + "81m.png" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 250,
            marginTop: 10,
            resizeMode: "contain",
          }}
        />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textTitle,
              { marginTop: 10, width: "40%", fontSize: 20, color: "#7b2768" },
            ]}
          >
            ЗӨВЛӨГӨӨ
          </Text>
          <Text style={[styles.textTitle, { marginTop: 10, width: "60%" }]}>
            Банкнуудад хөрөнгө оруулахдаа юуг анхаарах вэ?
          </Text>
        </View>
        <Image
          // source={require("../../../assets/81m1.png")}
          source={{ uri: api + "/upload/" + "81m1.png" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 160,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          Банкны салбарын тойм, Мандал Ассет
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "flex-end", margin: 30 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Montserrat-bold",
          }}
        >
          2022/08 САР
        </Text>
        <Image
          source={require("../../../assets/icon.png")}
          style={{
            width: 14,
            height: 14,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Page12;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15,
    marginVertical: 8,
  },
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    marginVertical: 8,
  },
});
