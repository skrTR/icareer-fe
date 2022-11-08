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

const Page13 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bolorerdene zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        // source={require("../../../assets/newF/83m1.jpg")}
        source={{ uri: api + "/upload/" + "83m1.jpg" }}
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
        <View
          style={{
            backgroundColor: "#7b2768",
            marginTop: 70,
            padding: 15,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 16,
              color: "white",
            }}
          >
            БАЙР СУУРЬ
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>82-88 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#7b2768",
                fontSize: 10,
              }}
            >
              /байр суурь/
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
          “Өлзий Энд Ко капитал” үнэт цаасны компанийн гүйцэтгэх захирал
        </Text>
        <Text
          style={{
            color: "#7b2768",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          Б.ӨЛЗИЙБАЯР
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
          }}
        >
          БАНКHУУДАД ХӨРӨНГӨ ОРУУЛАХ НЬ БОГИНО ХУГАЦААНД МӨНГӨӨ ӨСГӨХ АРГА БИШ
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#7b2768",
            borderColor: "#7b2768",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            fontWeight: "500",
            fontSize: 15,
            textAlign: "center",
            marginVertical: 20,
            marginBottom: 40,
          }}
        >
          СИСТЕМИЙН БАНКНУУДЫН IPO-Д ХӨРӨНГӨ ОРУУЛАЛТ ХИЙХЭЭР ХҮЛЭЭЖ БУЙ ХҮМҮҮСТ
          ЗОРИУЛАН ЗӨВЛӨЖ БАЙНА.
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Playfair-regular",
              bottom: 10,
              textDecorationLine: "underline",
              color: "#7b2768",
            }}
          >
            C
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-bold",
              marginHorizontal: 10,
              marginRight: 40,
            }}
          >
            истемийн таван банкны IPO-г олон хүн хүлээж байгаа. Тэгэхээр бид
            хэрхэн бэлтгэх хэрэгтэй вэ?
          </Text>
        </View>
        <Text style={[styles.textStatus]}>
          Санхүү, хөрөнгийн зах зээл дээр өрнөж байгаа зүйлсэд хөндлөнгийн санаа
          бодол, байр сууриа илэрхийлдэг хүмүүс харьцангуй олширч байгаа нь
          сайшаалтай. Мөн зарим үнэт цаасны компаниудын үйл ажиллагаа сайжирч,
          мэдээллийг олон нийтэд хүргэн, сургалтууд зохион байгуулдаг болсон.
          Банкнуудын IPO-д хөрөнгө оруулахаар төлөвлөж буй хүмүүс хөндлөнгөөс
          санал бодлоо илэрхийлдэг сайн мэргэжилтнүүдийн зөвлөгөө, саналыг
          анхааралтай сонсох хэрэгтэй. Нөгөө талаас мэргэжлийн үнэт цаас,
          андеррайтерын байгууллагуудад хандаж зөвлөгөө, мэдээлэл авах хэрэгтэй.
          IPO болгон сайн гээд бүх банкны хувьцааг худалдаж авах нь өрөөсгөл
          ойлголт. Тэгэхээр хөрөнгө оруулахаар төлөвлөж буй хүмүүс ямар банканд
          хөрөнгө оруулах гэж байна вэ гэдгээ сонгоод дараах энгийн асуултуудад
          хариулт олохыг зөвлөж байна. Үүнд:
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Нэг. </Text>Компанийн
          засаглал нь ямар байгаа вэ?{" "}
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Хоёр. </Text>Удирдах
          зөвлөлд нь буй хүмүүсийн мэргэжлийн ур чадвар ямар вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Гурав. </Text> Сүүлийн
          таван жилийн хугацаанд компанийн үйл ажиллагаа хэр явж байгаа вэ?
          Сайжирсан уу? Муудсан уу гэдгийг судлах
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Дөрөв. </Text>Шинэ
          хуулиар нэг хувьцаа эзэмшигч 20 хувиас дээш хувьцаа эзэмшиж болохгүй
          гэдгийг заасан. Энэ заалтаар компаниуд бүтцээ задлах шаардлагатай
          болно. Тухайн бүтцэд байгаа хүмүүстэй хамт компанийг эзэмших учраас
          тухайн хүмүүсийн ур чадвар, ёс зүй ямар байх нь маш чухал.
        </Text>
        <Text style={[styles.textStatus]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Тав. </Text>Үнэлгээ.
          Өөрсдийгөө хэрхэн үнэлж байгааг нь сайн харах хэрэгтэй. Компанийн
          үнэлгээг андеррайтерын компани тогтооно. Тиймээс компанийн үнэлгээг
          тогтоосон андеррайтерын компанийн чансааг шалгахдаа дараах байдлаар
          шалгана. Үүнд:
        </Text>
        <Text style={[styles.textStatus]}>
          • Ямар компаниудыг андеррайтер хийж байсан бэ?
        </Text>
        <Text style={[styles.textStatus]}>
          • Хэдэн IPO, Бонд гаргасан байна вэ гэдгийг судлах. Үүнийг үнэт цаас
          арилжаачдын холбоо, Монголын хөрөнгийн биржийн сайтууд дээр байгаа
          нээлттэй мэдээллээс шүүн судалж болно.
        </Text>
        <Text style={[styles.textStatus]}>
          • Олон төсөл дээр ажиллаж байсан, олон харилцагчийн баазтай
          андеррайтерын компани сайн гэсэн үг.
        </Text>
        <Image
          // source={require("../../../assets/newF/84m1.jpg")}
          source={{ uri: api + "/upload/" + "84m1.jpg" }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#7b2768",
            color: "white",
            paddingVertical: 15,
            padding: 10,
          }}
        >
          БАНКНУУДЫН ХУВЬЦААНД КОЙНУУДАД ХӨРӨНГӨ ОРУУЛСАН ШИГ ҮЗЭМЖЭЭР, СЭТГЭЛ
          ХӨДЛӨЛӨӨР, БОГИНО ХУГАЦААНД МӨНГӨӨ ӨСГӨЖ, ХАНШИЙН ЗӨРҮҮНЭЭС АШИГ ОЛОХ
          ЗОРИЛГОТОЙГООР ХӨРӨНГӨ ОРУУЛАХ НЬ БУРУУ.
        </Text>
        <Text style={[styles.textTitle]}>
          Банкнууд IPO хийхдээ үнэт цаасны танилцуулгаа нийтэд гаргана. Бид
          үүнээс ямар үзүүлэлтийг нь харж хөрөнгө оруулах вэ?{" "}
        </Text>
        <Text style={[styles.textStatus]}>
          Манай зах зээл дээр хөрөнгө оруулалт, тэтгэврийн сан, даатгалын
          компаниуд бараг байдаггүй. Институтийн хэмжээний хөрөнгө оруулалтын
          сан байх нь ямар ашигтай вэ гэхээр аливаа нэгэн IPO-д оролцохдоо үнэт
          цаасны танилцуулгыг нэг бүрчлэн уншиж, тухайн компанийн гаргасан
          санхүүгийн төсөөлөл, бизнесийн зураглалын биелэгдэх боломж, менежмент
          зэргийг мэргэжлийн түвшинд судалж шийдвэр гаргадаг мэргэжилтнүүдээр
          удирдуулсан байдаг.
        </Text>
        <Text style={[styles.textStatus]}>
          Олон улсын зах зээл дээр томоохон хэмжээний хөрөнгө оруулалтын сангууд
          ямар хувьцаанд хөрөнгө оруулж байгаа нь жижиглэн хөрөнгө оруулагчдад
          луужин болдог. Харин манай зах зээлийн хувьд иргэдэд чиглэл болох
          хэмжээний томоохон хөрөнгө оруулалтын сан ховор учир зах зээл хувь
          хүмүүсийн шийдвэр дээр тулгуурлах нь түгээмэл. Гэвч тэр хүмүүс бүгд
          санхүүгийн мэдлэгтэй биш. Тэд хувь хувьдаа шийдвэр гаргаж, маркетинг
          үзэмжид нь итгэх нь түгээмэл учир алдаа гаргах магадлал өндөр. Иймээс
          хувь хүмүүс хөрөнгө оруулалт хийхдээ дараах алхмыг хийгээрэй. Үүнд:
        </Text>
        <Text style={[styles.textStatus]}>
          • Мэргэжлийн, туршлагатай, хараат бус хүмүүсийн үгийг сонс
        </Text>
        <Text style={[styles.textStatus]}>
          • Андеррайтерын байгууллагад очиж зөвлөгөө ав
        </Text>
        <Text style={[styles.textStatus]}>
          • Үнэт цаасны зөвлөгөө өгдөг компаниудад очиж туслалцаа хүс
        </Text>
        <Text style={[styles.textStatus]}>
          • Мөн хөрөнгө оруулалтын томоохон сангууд ямар банканд хөрөнгө оруулж
          байна гэдгийг харж дохио болгох хэрэгтэй.
        </Text>
        <Text style={[styles.textStatus]}>
          Хөрөнгө оруулалт хийхдээ тухайн компанийн маркетингд итгэх нь алдаа
          гаргах том шалтгаан болдог. Ялангуяа банкнуудын хувьцаанд койнуудад
          хөрөнгө оруулсан шиг үзэмжээр, сэтгэл хөдлөлөөр, богино хугацаанд
          мөнгөө өсгөж, ханшийн зөрүүнээс ашиг олох зорилготойгоор хөрөнгө
          оруулах нь буруу. Хувьцааны өдөр өдрийн арилжаанаас ашиг олох нь
          мэргэжлийн хүмүүсийн хийдэг ажил. Энгийн иргэд гэр бүлдээ зарцуулах
          цагаа зарцуулан хийдэг зүйл биш. Нээлттэй хувьцааг андеррайтерын
          компанийн хувьд маркетингаар бусдад худалдахаас илүү мөн чанар,
          ирээдүйд нь үндэслэн нийтэд санал болгохыг хүсдэг. Хүмүүс юунд хөрөнгө
          оруулах, юу хүсэж, хүлээж хөрөнгө оруулж байгаа вэ гэдгээ эхлээд
          ойлгох хэрэгтэй.
        </Text>
        <Image
          // source={require("../../../assets/newF/85m1.jpg")}
          source={{ uri: api + "/upload/" + "85m1.jpg" }}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#7b2768",
            color: "white",
            paddingVertical: 15,
            padding: 10,
          }}
        >
          ИРГЭД САНХҮҮГИЙН САХИЛГА БАТГҮЙ, МӨНГӨӨ ЗӨВ УДИРДАЖ ЧАДДАГГҮЙ НЬ ЖИЖИГ
          ХАРАГДАЖ БАЙГАА БОЛОВЧ УЛС ОРНЫ ЭДИЙН ЗАСАГТ ЧУХАЛ НӨЛӨӨ ҮЗҮҮЛДЭГ
          ЗҮЙЛ.
        </Text>
        <Text style={styles.textTitle}>
          Tэгэхээр олон улсын түвшинд жижиглэн хувьцаа эзэмшигчид томоохон
          хөрөнгө оруулалтын сангийн хөрөнгө оруулж байгаа хувьцааг луужин
          болгон түүнд хөрөнгө оруулдаг гэсэн үг үү?
        </Text>
        <Text style={styles.textStatus}>
          Дэлхийн жишгээр бол манайх шиг андеррайтерын компаниуд томоохон
          хөрөнгө оруулалтын сангуудтай л уулзалт хийдэг. Өөрөөр хэлбэл,
          мэргэжлийн хүмүүстэй уулзаж, өөрсдийгөө хүлээн зөвшөөрүүлж, тэдний
          шаардлагыг биелүүлж байж жижиглэн хувьцаа эзэмшигчдэд хүрдэг гэсэн үг.
          Ингэж андеррайтерын компаниудын бүтээгдэхүүнүүд чанартай гардаг. Харин
          тухайн бүс нутгийн соёлоос хамаарч Хятад, Хонконг зэрэг Азийн зах зээл
          дээр компаниуд жижиглэн хувьцаа эзэмшигчдэд тодорхой хувь санал болгох
          нь бий.
        </Text>
        <Image
          // source={require("../../../assets/newF/86m1.jpg")}
          source={{ uri: api + "/upload/" + "86m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 400,
          }}
        />
        <Text style={styles.textStatus}>
          ХҮМҮҮС ЮУНД ХӨРӨНГӨ ОРУУЛАХ, ЮУ ХҮСЭЖ, ХҮЛЭЭЖ ХӨРӨНГӨ ОРУУЛЖ БАЙГАА ВЭ
          ГЭДГЭЭ ЭХЛЭЭД ОЙЛГОХ ХЭРЭГТЭЙ.
        </Text>
        <View
          style={{
            borderWidth: 0.8,
            backgroundColor: "#7b2768",
            borderColor: "#f1567b276823",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        />
        <Text style={styles.textTitle}>
          Хүмүүст санхүүгийн боловсрол олгох, хөрөнгө оруулалтын чиглэлээр
          мэдээллийг хэзээнээс олгох ёстой вэ?
        </Text>
        <Text style={styles.textStatus}>
          Хүн бүр санхүүгийн мэдлэгтэй байх шаардлагатай. Тиймээс энэ бол
          ерөнхий боловсролын сургуульд заавал эзэмшүүлэх ёстой зүйл. Манай
          иргэдийн хувьд санхүүгийн сахилга бат, мэдлэг бага байна. Өнөөдөр
          иргэд цалин бага байна, амьдралд хүрэхгүй байна гэж байгаа боловч
          санхүүгээ ухаалгаар удирдаж чадаж байна уу гэдэг эргэлзээтэй.
          Хэрэглээний зээл олгож байгаа компаниуд маш ашигтай ажиллаж байна.
          Зээл аваад Iphone 13 авах шаардлага хүн бүрд байгаа бил үү? Үүний
          оронд тэр мөнгөөрөө хөрөнгө оруулаад өгөөжөөрөө өөртөө үнэ цэн өгөх
          зүйлийг худалдан авах хэрэгтэй. Иргэд санхүүгийн сахилга батгүй,
          мөнгөө зөв удирдаж чаддаггүй нь жижиг харагдаж байгаа боловч улс орны
          эдийн засагт чухал нөлөө үзүүлдэг зүйл. Иргэд нь үрдэг биш хөрөнгө
          оруулдаг соёлтой, компаниуд нь хувьцаагаа нээлттэй санал болгодог,
          улмаар хоёр тал ашгаа хүртдэг соёл улс орныг авч явдаг.
        </Text>

        <View
          style={{
            borderWidth: 0.8,
            backgroundColor: "#7b2768",
            borderColor: "#7b2768",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        />
        <Text style={[styles.textTitle, { textAlign: "center" }]}>
          Тэтгэврийн сан үүсгэж тэрхүү мөнгөөрөө хөрөнгө оруулалт хийж, бодитой
          өсөлт үзүүлж чадвал иргэд урам авч, хөрөнгө оруулалт, санхүүгийн
          мэдлэгээ дээшлүүлж эхэлдэг.
        </Text>
        <View
          style={{
            borderWidth: 0.8,
            backgroundColor: "#7b2768",
            borderColor: "#7b2768",
            width: windowWidth / 1.1,
            alignSelf: "center",
          }}
        />
        <Text style={styles.textTitle}>
          Хөрөнгө оруулагчдын зан төлөвийг та хэрхэн харж байна вэ?
        </Text>
        <Text style={styles.textStatus}>
          Өмнөх үеийг бодвол хүмүүс зөвлөгөө, мэдээлэл авахаар хандах нь их
          болжээ. Сургалтууд их асууж, хамрагдах хүсэлтэй болсон байна. Энэ нь
          бодлогын хүү буурснаар түүхэн доод хэмжээнд хүрч, хадгаламжийн хүү
          буурснаар иргэд хүссэн хүсээгүй хөрөнгөө өсгөх өөр боломж хайж
          эхэлсэнтэй холбоотой болов уу. Гэхдээ энэ нь нийт хүн амынхаа түвшинд
          харвал бага байна. Богино хугацаанд санхүүгийн мэдлэгийг дээшлүүлэх
          арга нь ерөнхий боловсролын хичээлийн хөтөлбөрт санхүүгийн боловсролын
          хичээлийг оруулахаас гадна тэтгэврийн реформыг эхлүүлэх юм.
        </Text>
        <Text style={styles.textStatus}>
          Тэтгэврийн сан үүсгэж тэрхүү мөнгөөрөө хөрөнгө оруулалт хийж, бодитой
          өсөлт үзүүлж чадвал иргэд урам авч, хөрөнгө оруулалт, санхүүгийн
          мэдлэгээ дээшлүүлж эхэлдэг.
        </Text>

        <Text
          style={[styles.textTitle, { color: "#7b2768", textAlign: "center" }]}
        >
          ХӨРӨНГӨ ОРУУЛАГЧ БОЛОХООР ТӨЛӨВЛӨЖ БУЙ ЗАЛУУСТ ЗӨВЛӨЖ БАЙНА
        </Text>

        <Image
          // source={require("../../../assets/newF/87m1.jpg")}
          source={{ uri: api + "/upload/" + "87m1.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Ө.ГАНЗОРИГ
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          Mандал Санхүүгийн Нэгдэл, Үүсгэн байгуулагч
        </Text>
        <Text style={styles.textStatus}>
          Монголын хөрөнгийн бирж дээр байгаа компанийн хувьцаа одоогоор
          харьцангуй хямд үнэлгээтэй байна. Үүнийг судлах хэрэгтэй. Хөрөнгө
          оруулахдаа урт хугацаанд оруул. Мөнгөө тархаан байршуулж оруул.
          Хувьцаа эзэмшигчдийн хуралд тогтмол хамрагд. Компаниудын мэдээллийг
          сайн ав. Эцэст нь хэлэхэд нэг удаа том мөнгө бус сар болгон мөнгө хий.
          Өөрийн боломжоор сар болгон тогтмол мөнгө хийх нь урт хугацаанд маш
          өндөр өгөөжийг өгдөг.
        </Text>
        <Image
          // source={require("../../../assets/newF/87m3.jpg")}
          source={{ uri: api + "/upload/" + "87m3.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
            marginTop: 20,
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Л.ЭРХЭМБАЯР
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          Түмэн шувуут, Үүсгэн байгуулагч
        </Text>
        <Text style={styles.textStatus}>
          Зах зээлээ сайн мэдэрч, мэдээллээ сайн ав. Зөв дүн шинжилгээ хийж,
          тооцоогоо сайн гарга.
        </Text>
        <Image
          // source={require("../../../assets/newF/87m2.jpg")}
          source={{ uri: api + "/upload/" + "87m2.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
            marginTop: 20,
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Г.ГАНЗОРИГ
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          Mandal Asset Management, Гүйцэтгэх захирал
        </Text>
        <Text style={styles.textStatus}>
          Эрт эхэл. Өнөөдрөөс эхэл. Том дүнгээр эхлэх шаардлагагүй. Бага багаар
          хөрөнгө оруулалтаа өсгө.
        </Text>
        <Image
          // source={require("../../../assets/newF/87m4.jpg")}
          source={{ uri: api + "/upload/" + "87m4.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
            marginTop: 20,
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Б.ӨЛЗИЙБАЯР
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          “Өлзий Энд Ко капитал” үнэт цаасны компани, Гүйцэтгэх захирал
        </Text>
        <Text style={styles.textStatus}>
          Хүмүүсийн нийтлэг том эндүүрэл бол бонд, хувьцааг их мөнгөтэй хүмүүс
          худалдаж авдаг гэх ойлголт. Энэ нь бонд гэхээр их мөнгөн дүн
          яригддагтай холбоотой болов уу. Хэн ч хөрөнгийн зах зээл рүү орох
          боломжтой. Өнөөдөр Ленд Бонд нэг ширхгийн үнэ 100,000 төгрөгөөр гарч
          байна. Өрх бүр сардаа 100,000 төгрөгийг хүүхдийн мөнгө гэж авч байна.
          Тэр бүү хэл 10,000 төгрөгөөр хөрөнгө оруулж, хувьцаа авч болно. Хэн ч
          хэдэн төгрөгөөр хөрөнгө оруулж болно. Банкнуудын хувьцаанд ч мөн адил
          иргэд худалдан авч болохгүй үнийн дүнтэй хувьцаа гарахгүй болов уу.
          Иймд хөрөнгө оруулахаар шийдсэн л бол мөнгөн дүнд бүү анхаарлаа
          хандуулаарай.
        </Text>
        <Image
          // source={require("../../../assets/newF/80m3.jpg")}
          source={{ uri: api + "/upload/" + "80m3.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
            marginTop: 20,
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Д.БАДРАЛ
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          Голомт банк, Гүйцэтгэх захирлын орлогч
        </Text>
        <Text style={styles.textStatus}>
          Залуучуудыг шинэ зах зээл дээр өөрөө бизнес хийхээс гадна өсөлттэй
          яваа салбарт хөрөнгө оруулж өгөөж хүртээсэй гэж хүсэж байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/87m5.jpg")}
          source={{ uri: api + "/upload/" + "87m5.jpg" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
            marginTop: 20,
          }}
        />

        <Text style={[styles.textTitle, { marginVertical: 0, marginTop: 5 }]}>
          Г.ЧИНЗОРИГ
        </Text>
        <Text
          style={[
            styles.textStatus,
            {
              marginVertical: 0,
              fontSize: 12,
              width: "50%",
              textAlign: "right",
              alignSelf: "flex-end",
            },
          ]}
        >
          Cэнтрал Экспресс Си Ви Эс компани, Гүйцэтгэх захирал
        </Text>
        <Text style={styles.textStatus}>
          Тухайн хувьцааг хүн болгон сонирхож, авч байгаадаа биш хөрөнгө
          оруулахаар зэхэж буй компанийнхаа бизнесийн суурийг маш сайн судлах
          ёстой болов уу. Энэ компани амжилтад хүрч чадах уу гэдэг бизнес модель
          хийгээд удирдагчдын ёс зүйг харах хэрэгтэй. Захирлуудын хэлж байгаа үг
          нь өмнө ярьж байсан зүйлтэйгээ хэр их зөрчилдөж байна вэ гэдгээс ёс
          зүй нь харагдана гэж бодож байна.
        </Text>
        <Text
          style={[
            styles.textTitle,
            { color: "#7b2768", textAlign: "center", fontSize: 24 },
          ]}
        >
          СИСТЕМИЙН 5 БАНКНЫ IPO ХИЙХ ХУГАЦААГ 2023 ОН ХҮРТЭЛ ХОЙШЛУУЛАВ
        </Text>
        <Image
          // source={require("../../../assets/newF/88m4.png")}
          source={{ uri: api + "/upload/" + "88m4.png" }}
          style={{
            height: 250,
            width: windowWidth / 1.1,
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 1.1,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Playfair-regular",
              bottom: 10,
              textDecorationLine: "underline",
              color: "#7b2768",
            }}
          >
            X
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginHorizontal: 10,
              marginRight: 40,
            }}
          >
            уульд заасны дагуу системийн таван банк IPO хийх цаг
          </Text>
        </View>
        <Text style={[styles.textStatus]}>
          хаяанд ирсэн энэ үед Сангийн сайд Б.Жавхлан тавдугаар сарын 10-ны өдөр
          Банкны тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийг дагаж
          мөрдөх журмын тухай хуульд өөрчлөлт оруулах тухай хуулийн төслийг
          Монгол Улсын Их Хурлын дарга Г.Занданшатарт өргөн мэдүүлсэн. Уг журамд
          системийн 5 банкны IPO-г 2023 он хүртэлх хойшлуулах саналыг тусгасан
          юм. Засгийн газар Улсын Их Хурлын Эдийн засгийн байнгын хорооноос
          ирүүлсэн саналыг дэмжиж холбогдох шийдвэрийн төсөл боловсруулахдаа
          тэдний өргөн барьсан 11 зүйл бүхий нөхцөл байдлыг харгалзан үзсэн. Уг
          нөхцөлийг товчоор хүргэвэл,
        </Text>
        <Text style={[styles.textStatus]}>
          Цар тахлаас үүдэлтэй эдийн засгийн хямралыг дагасан үнийн өсөлт,
          сүүлийн үед олон улсад бий болсон цэрэг улс төрийн хурцадмал байдлаас
          шалтгаалан цаашид эдийн засаг, санхүү, төсвийн нөхцөл байдал хүндэрч,
          хөрөнгө оруулалтын орчин эрсдэлд орох хандлагатай байна.
        </Text>
        <Text style={[styles.textStatus]}>
          Системд нөлөө бүхий банкийг нээлттэй хувьцаат компанийн хэлбэрт
          шилжихээс өмнө тэдгээрийн төлбөрийн чадварт цар тахлын үзүүлсэн
          нөлөөлөл, өөрийн хөрөнгийн хүрэлцээ, эрсдэлийн түвшний үзүүлэлтийг
          харгалзан активын чанарын үнэлгээг хийлгэх, хийлгээгүй тохиолдолд
          банкны хувьцааны үнэлгээ буруу гарах, улмаар хөрөнгө оруулагчдад
          эрсдэл үүсэхээр байна.
        </Text>
        <Text style={[styles.textStatus]}>
          Хөрөнгийн зах зээлд оролцогчдын идэвх сайжирч байгаа хэдий ч банкны
          санал болгож буй хувьцааг дотоодын хөрөнгө оруулагчид худалдан авахад
          шаардлагатай эх үүсвэр дутагдаж болзошгүй байна. Системд нөлөө бүхий
          банкнууд 430.0-580.0 тэрбум төгрөгийн үнэ бүхий хувьцааг олон нийтэд
          санал болгох урьдчилсан тооцоо гарч байна.
        </Text>
        <Text style={[styles.textStatus]}>
          Гэвч салбарын мэргэжилтнүүд эдгээр 11 зүйлийг үндэслэлгүй, мэргэжлийн
          бус, асуудалд өнгөц хандсан хэмээн шүүмжилж байна.{" "}
        </Text>
        <View style={{ borderWidth: 1, borderColor: "#7b2768" }} />
        <Text style={[styles.textTitle, { color: "#7b2768" }]}>
          “Системийн 5 банк 2001, 2008- 2009 оны дэлхийн эдийн засгийн хямрал,
          2014-2017 оны нүүрсний том хямрал зэрэг том том хямралыг давж гарч
          чадсан. 2018 онд Европын Төв банкны актив чанарын үнэлгээг Олон улсын
          валютын сангийн захиалгаар гадаадын агентлаг хийсэн, үүнийг ч мөн
          давсан. Тавуулаа дэлхийн хамгийн том дөрвөн аудитын компаниар жил
          болгон аудитораа хийлгэдэг. Монголбанкны хяналт шалгалтын багаар
          шалгуулдаг. Дээрээс нь банкнууд IPO хийхэд шаардлагатай бүх бэлтгэлийг
          чанарын өндөр түвшинд хийж чадсан учир дээрх дурдсан 11 хүчин зүйлтэй
          санал нийлэхгүй байна. Дэлхий дахинд эдийн засаг хүнд үед банкнууддаа
          хөрөнгө оруулалт хийж, эрсдэл даах чадварыг нь нэмдэг жишигтэй.
          Банкнуудын IPO-г хойшлуулах нь үндэслэлгүй, мэргэжлийн бус, цагаа
          олоогүй шийдвэр.”
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/88m1.jpg")}
            source={{ uri: api + "/upload/" + "88m1.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#7b2768",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={[styles.textStatus, { marginVertical: 0, width: "50%" }]}
            >
              Мандал Санхүүгийн Нэгдлийг үүсгэн байгуулагч
            </Text>
            <Text style={[styles.textTitle, , { marginVertical: 0 }]}>
              Ө.ГАНЗОРИГ
            </Text>
          </View>
        </View>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#7b2768" }}
        />
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

export default Page13;

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
