import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../../Constants";
const Page3 = ({ data }) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bayarsaihanii zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight, flex: 1 }}
        resizeMode="cover"
        // source={require("../../../assets/newF/9m1.jpg")}
        source={{ uri: api + "/upload/" + "9m1.jpg" }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View style={{ flex: 0.5 }} />
        <View
          style={{
            backgroundColor: "#007dc5",
            // marginBottom: 0,
            flex: 0.35,
            paddingLeft: 20,
            alignSelf: "flex-start",
            paddingBottom: 40,
            top: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              fontSize: 22,
              paddingTop: 20,
              color: "white",
            }}
          >
            ОНЦЛОХ ЗОЧИН
          </Text>
          <View
            style={{
              borderWidth: 3,
              marginVertical: 15,
              width: 50,
              borderColor: "white",
            }}
          />
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              fontSize: 16,
              width: windowWidth / 1.7,
              color: "white",
            }}
          >
            Ирээдүйд салбартаа манлайлж, тасралтгүй өсөн дэвших тэмүүлэлтэй
            залууст итгэл үнэмшил өгөхөөр Голомт банкны Гүйцэтгэх захирлын
            орлогч Д.Бадралтай ярилцлаа.
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>8-13 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#007dc5",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ ЗОЧИН
            </Text>
          </View>
        </View>
        {/* Zurraas  */}
        <View
          style={{
            borderWidth: 1,
            marginVertical: 10,
          }}
        />
        {/* Taniltsuulga */}
        <Text
          style={{
            marginTop: 50,
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-medium",
          }}
        >
          Голомт банкны Гүйцэтгэх захирлын орлогч
        </Text>
        <Text
          style={{
            color: "#007dc5",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          Д.БАДРАЛ
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "MinionPro-black",
          }}
        >
          ШИНЭ ШАРКИЙН ӨСӨЛТИЙН СТРАТЕГИ
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#007dc5",
            borderColor: "#007dc5",
            padding: 2,
            width: 80,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            marginVertical: 50,
            color: "grey",
            fontFamily: "Montserrat-medium",
          }}
        >
          МОНГОЛЫН БАНКНЫ СИСТЕМИЙН НӨЛӨӨ БҮХИЙ ТОГЛОГЧДЫН НЭГ ГОЛОМТ БАНК ЭНЭ
          ОНД АНХ УДАА МОНГОЛЫН ТОП 100 АЖ АХУЙН НЭГЖИЙН ЭХНИЙ ТАВД БИЧИГДЭВ.
          ЦАР ТАХЛЫН ЖИЛҮҮДЭД УРЬД ӨМНӨ БАЙГААГҮЙ ӨНДӨР АМЖИЛТ, ӨСӨЛТ ҮЗҮҮЛСЭН
          ГОЛОМТ БАНК Д.БАДРАЛЫН УДИРДЛАГА ДОР ЦАХИМ ШИЛЖИЛТ, ТЕХНОЛОГИЙН
          ШИНЭЛЭГ ШИЙДЛҮҮДЭЭРЭЭ САЛБАРТАА ЯЛГАРЧ БАЙНА.
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Playfair-regular",
              bottom: 10,
              color: "#007dc5",
            }}
          >
            X
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginHorizontal: 6,
            }}
          >
            орин нэгэн насандаа аав ээжийнхээ байрны нэг давхарт найман нэрийн
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
          }}
        >
          барааны дэлгүүр ажиллуулж анхны бизнесээ эхлүүлж байсан Д.Бадрал
          оюутан насныхаа мөрөөдлийг биелүүлж Голомт банкны 365 дахь ажилтнаар
          ажил, амьдралынхаа гарааг эхлүүлж байв. Д.Бадрал “Тууштай ажиллах нь
          үр дүнтэй ажиллаж байна гэсэн үг бус. Харин тухайн газраа өөрийн үнэ
          цэнийг хэрхэн бүтээсэн нь л тууштай байдлын үр дүнг илтгэнэ” хэмээн
          өгүүлэв. “Амжилт бол олон удаагийн уналт, босолт, шаргуу хөдөлмөрийн
          дүнд бий болдог зүйл” хэмээн өгүүлэх тэрбээр банкны салбар тэр дундаа
          Голомт банкинд хамгийн бага нэгжээс Голомт банкны Гүйцэтгэх захирлын
          орлогч Д.БАДРАЛ нь эхлээд өдийг хүртэл зогсолтгүй өсөж буй шинэ залуу
          банкир. Тэрбээр өдгөө Голомт банкны гүйцэтгэх захирлын орлогчоор
          ажиллаж буй. Д.Бадрал “Цар тахлын үр нөлөө одоо ч үргэлжилж байна.
          Тиймээс банкны зүгээс бизнесийн бүхий л нэгжид өрнөж буй өөрчлөлтүүд,
          эдийн засаг, геополитик, хилийн асуудлуудтай холбоотойгоор макро
          түвшинд гарах хүндрэлүүдээс сэргийлэхэд ихээхэн анхаарч ажиллаж байна.
          Мөн банкны эрсдэлийг бууруулж, харилцагчийн эрэлт хэрэгцээг хангахад
          анхаарлаа хандуулж байна” хэмээн өгүүлсээр биднийг албан өрөөндөө
          угтсан юм.
        </Text>

        <Text style={styles.textStatus}>
          Цар тахлаас үүдэн эдийн засагт үүсэх шокийг хэрхэн дэмжиж, хамгаалах
          вэ гэдэгт Д.Бадрал болон түүний баг төвлөрөн ажиллаж байна. Цар тахлын
          үеэс эрчимжиж байгаа дижитал шилжилт, зайнаас ажиллах, харилцах чиг
          хандлагыг дагаад бизнес загварууд хурдацтай өөрчлөгдөж байна. Банкны
          түргэн шуурхай, найдвартай үйлчилгээг энэ нөхцөл байдалд зохицуулан
          шинэчлэн боловсруулах нь Гүйцэтгэх захирлын орлогчоор томилогдоод
          удаагүй Д.Бадрал болоод түүний багийн хувьд том сорилт байв. Харин
          Голомт банкны хувьд дижитал шилжилт, технологид оруулах хөрөнгө
          оруулалт, технологи суурьтай банкны бүтээгдэхүүн үйлчилгээгээрээ
          салбараа манлайлан ажилладгийн хувьд тийм ч хүнд байгаагүй гэнэ.
        </Text>

        <Image
          // source={require("../../../assets/newF/10m1.jpg")}
          source={{ uri: api + "/upload/" + "10m1.jpg" }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            backgroundColor: "#007dc5",
            textAlign: "center",
            fontFamily: "Montserrat-medium",
            paddingVertical: 10,
            color: "white",
          }}
        >
          Амралтын цагийг идэвхтэй өнгөрүүлэх нь эрч хүчтэй, бүтээмжтэй байхын
          үндэс гэж тэрээр үздэг. Фитнессээр хичээллэх, усанд сэлэх, дугуй унах
          зэрэг нь түүний амралтаа өнгөрөөх хэв маяг юм.
        </Text>
        <Text style={styles.textStatus}>
          Түүнчлэн энэ цаг үед Голомт банк залуу харилцагчид руугаа илүүтэй
          анхаарч, тэдний эрэлт хэрэгцээнд нийцсэн бүтээгдэхүүн, үйлчилгээг
          боловсруулж ажиллах зорилтыг тавиад байгаа тухайгаа Д.Бадрал захирал
          өгүүлж байна.
        </Text>
        <Text style={styles.textStatus}>
          Гүйцэтгэх захирлын орлогчоор томилогдоод багагүй хугацааг үдсэн
          түүнийг өдгөө “Голомтын Д.Бадрал” гэхээс гадна “шарк” гэдгээр нь олон
          нийт андахгүй. Тэрбээр банкинд ажиллах хугацаандаа хөрөнгө оруулалтын
          чиглэлээр түлхүү мэргэшсэн бөгөөд төслүүдэд зээл олгох, эрсдэлийг
          үнэлэх, судалгаа шинжилгээ хийх зэрэг ажилд мэргэшсэн нэгэн. “Би
          өөрийн түүхээ бүтээхийн төлөө анхаарч явдаг” хэмээн тэрбээр өгүүлэв.
          Гэхдээ түүх гэдэг нь хувь хүнийхээ үүднээс бус, харин байгууллагынхаа
          нийгэм, улс орондоо хийж буй үйл хэрэгт өөрийн зохих хувь нэмрийг
          оруулах тухай аж. МИАТ анх удаа өөрийн өмчийн Бойнг-767 агаарын
          хөлгийг худалдан авахад анхны санхүүжилтийг “Голомт банк” хийсэн.{" "}
        </Text>
        <Text style={styles.textStatus}>
          Санхүүгийн хувьд хасах баланстай бизнест санхүүжилт хийх нь муу
          шийдвэр боловч Монгол Улсад стратегийн ач холбогдолтой хөрөнгө болох
          тул Д.Бадрал банкныхаа удирдлага, хувьцаа эзэмшигчдэд тайлбарлан,
          дэмжлэг авч чадсан гэдэг. Нисэх онгоцны үлдэгдэл санхүүжилтийг Засгийн
          газрын оролцоотойгоор АНУ-ын Экспорт, импортын банкнаас олгосон.
          Тэрбээр мөн “Эрдэнэс Тавантолгой” компанийн анхны нүүрсний тээврийг,
          залууст зориулсан хамгийн таатай нөхцөлтэй, арван хувийн урьдчилгаа
          төлөн худалдан авах боломжтой орон сууцны хорооллыг босгох, Монгол
          Улсын нүүр царай болсон үйлчилгээний хамгийн том төвийг барих зэрэг
          төслийг санхүүжүүлэхэд гар бие оролцсон. “Миний оролцож санхүүжүүлсэн
          төслүүд Монгол Улсын нийгэм, эдийн засгийн хөгжилд чухал үүрэг
          гүйцэтгэж байгааг харахад сайхан байдаг.
        </Text>
        {/* Here iam */}
        <ImageBackground
          // source={require("../../../assets/newF/11m1.jpg")}
          source={{ uri: api + "/upload/" + "11m1.jpg" }}
          style={{
            width: "100%",
            height: windowHeight / 1.5,
          }}
        >
          <View style={{ backgroundColor: "#007dc5", width: "80%", top: 50 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat-bold",
                color: "white",
                margin: 10,
              }}
            >
              ТУУШТАЙ АЖИЛЛАХ НЬ ҮР ДҮНТЭЙ АЖИЛЛАЖ БАЙНА ГЭСЭН ҮГ БУС. ХАРИН
              ТУХАЙН ГАЗРАА ӨӨРИЙН ҮНЭ ЦЭНИЙГ ХЭРХЭН БҮТЭЭСЭН НЬ Л ТУУШТАЙ
              БАЙДЛЫН ҮР ДҮНГ ИЛТГЭНЭ.
            </Text>
          </View>
        </ImageBackground>
        <Text style={styles.textStatus}>
          Энэ түүхээ хүүхдүүддээ ярих дуртай” хэмээн тэрбээр өгүүлэв. Энэ
          туршлагадаа тулгуурлан Шарк Танк нэвтрүүлэгт оролцож, хөрөнгө
          оруулалтуудаа хийсэн. Харин нэвтрүүлгийн үеэр оролцогчдыг төслөө
          танилцуулах хугацаанд нь л ойлгож, таних шаардлагатай, бизнес
          санаануудын талаар нарийн мэдээллийг авах боломж хомс байсан тул
          өөрийнхөө туршлага, мэдрэмжээр шийдвэр гаргаж байсан гэдгээ тэрбээр
          өгүүлж байлаа. Д.Бадрал Шарк Танк нэвтрүүлэгт оролцогчдын онолын
          мэдлэгээс илүүтэй дадлага туршлагыг чухалчлан хөрөнгө оруулсан хэмээж
          байсан юм. Тэрбээр “Хүнийг нь харж хөрөнгө оруулах, хүнийг нь харж
          ажилд авах хамгийн зөв. Мэдээж сайн сургууль төгсөх нь ажлын
          бүтээмжийг нэмэгдүүлдэг боловч нөгөө талаас тэр сургуулийг төгсөөгүй
          нь муу гэсэн үг биш. Хувь хүн нь өөрөө зөв, аливаад эерэг бодол,
          сэтгэлгээтэй байх хамгийн чухал” гэлээ. Мөн бизнесүүдээс өндөр ашгаас
          илүү нийгэм, байгаль орчинд ээлтэй байдлыг нь чухалчилсан гэнэ.
          “Гарааны бизнес эхлүүлж буй залуус ганцаараа бүх зүйлийг хийх гэсэн
          муйхар хүслээсээ болоод алддаг. Бизнесийг ганцаараа хийнэ гэдэг хэцүү.
          Мөн нөгөө талаас маргаашийн ашгийг бус урт хугацааны ашгийг харах
          хэрэгтэй” хэмээн шинэ шарк сануулж байсан юм. Тиймээс тэрбээр залуу
          бизнес эрхлэгчид болон өөрийн удирдлага доор ажиллаж буй залуустай
          илүү нээлттэй харилцахыг эрмэлздэг гэнэ.
        </Text>
        <Image
          // source={require("../../../assets/newF/12m1.jpg")}
          source={{ uri: api + "/upload/" + "12m1.jpg" }}
          style={{ width: "100%", height: 300 }}
        />
        <Text
          style={{
            backgroundColor: "#007dc5",
            fontFamily: "Montserrat-bold",
            fontSize: 18,
            padding: 18,
            color: "white",
          }}
        >
          ӨӨРИЙГӨӨ ЯГ ХААНА БАЙГААГ МЭДЭРЧ, ҮНЭЛЖ СУРАХ НЬ ХҮН ДУТАГДЛАА ОЛЖ
          ХАРАХ, НӨХЦӨЛ БАЙДЛЫН АНАЛИЗЫГ ЗӨВ ХИЙХЭД ТУСТАЙ.
        </Text>

        <Text style={styles.textStatus}>
          “Тавьсан зорилгодоо хүрэх эхний алхам бол яг одоо хаана байгаагаа
          мэддэг байх” хэмээн өгүүлэх тэрбээр “Өөрийгөө яг хаана байгааг мэдэрч,
          үнэлж сурах нь хүн дутагдлаа олж харах, нөхцөл байдлын анализыг зөв
          хийхэд тустай” хэмээн үздэг. 18 жил хөрөнгө оруулалтын банкираар
          ажиллаж, хөрөнгө оруулалтын салбарт “аварга загас” хэмээн хүлээн
          зөвшөөрөгдсөн түүнээс хамтран ажиллагсад, түншүүддээ ямар шалгуур
          тавьдгийг сонирхоход “Нээлттэй байдал” хэмээсэн юм. Банкны салбарт 20
          орчим жил ажиллахдаа тэрбээр удирдах албан тушаалтны хувьд хүн бүртэй
          нээлттэй харилцаж, тусалж дэмжин банкиндаа 26 шинэ залуу захирлыг
          төрүүлэн гаргасан байна.
        </Text>
        <Text style={styles.textStatus}>
          2021 оны нэгдүгээр сарын сүүлчээр Банкны тухай хуульд оруулсан нэмэлт
          өөрчлөлттэй холбоотойгоор арилжааны банкнууд нээлттэй компани болох
          боломж бүрдсэн юм. Хугацааны хувьд түр хойшлоод буй ч Голомт банк
          нээлттэй хувьцаат компани болох ажлыг Д.Бадрал удирдаж буй. Салбарын
          хувьд томоохон өөрчлөлтийг дагуулах Монголын топ таван банк IPO хийх
          шийдвэр нь хөрөнгийн зах зээл багадаа хоёр дахин тэлж, түүний араас
          үндэсний томоохон аж ахуйн нэгжүүд ээлж дараалан олон нийтэд
          хувьцаагаа санал болгох зам дардан засагдах зөв тактик гэж тэр харж
          байна. Мөн ойрын жилүүдэд санхүүгийн салбарт гарах гол үйл явдлууд
          хөрөнгийн зах зээлд үсрэнгүй хөгжил авчирснаар иргэдэд хөрөнгө оруулах
          дадал, хэвшил тогтоход дорвитой нөлөө үзүүлнэ гэдэгт тэрбээр итгэлтэй
          байна.{" "}
        </Text>
        <View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                left: 0,
                top: 0,
                width: 20,
                height: 30,
                borderWidth: 1,
                borderColor: "#007dc5",
                borderBottomRightRadius: 20,
              }}
            />
            <View
              style={{
                left: 0,
                top: 0,
                width: 20,
                height: 30,
                borderWidth: 1,
                borderColor: "#007dc5",
                borderBottomRightRadius: 20,
                marginLeft: 5,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Montserrat-bold",
              textAlign: "center",
              color: "#007dc5",
            }}
          >
            АМЖИЛТ БОЛ ОЛОН УДААГИЙН УНАЛТ, БОСОЛТ, ШАРГУУ ХӨДӨЛМӨРИЙН ДҮНД БИЙ
            БОЛДОГ ЗҮЙЛ.
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <View
              style={{
                left: 0,
                top: 0,
                width: 20,
                height: 30,
                borderWidth: 1,
                borderColor: "#007dc5",
                borderTopLeftRadius: 20,
              }}
            />
            <View
              style={{
                left: 0,
                top: 0,
                width: 20,
                height: 30,
                borderWidth: 1,
                borderColor: "#007dc5",
                borderTopLeftRadius: 20,
                marginLeft: 5,
              }}
            />
          </View>
        </View>
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

export default Page3;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    marginVertical: 8,

    // marginBottom: 15,
    // textAlign: "justify",
  },
  textStatus: {
    fontSize: 16,
    fontFamily: "Montserrat-regular",
    // textAlign: "justify",
    marginVertical: 8,
  },
});
