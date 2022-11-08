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

const Page15 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>92-96 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",

                fontSize: 10,
              }}
            >
              ЭМЭГТЭЙ МАНЛАЙЛАГЧ
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

        <Text style={[styles.textTitle, { textAlign: "center" }]}>
          БОЛОВСРОЛ ХӨДӨЛМӨР ЭРХЛЭЛТ, ОРЛОГЫН ТҮВШИНД ХЭРХЭН НӨЛӨӨЛДӨГ ВЭ?
        </Text>
        <Image
          // source={require("../../../assets/newF/92m1.jpg")}
          source={{ uri: api + "/upload/" + "92m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 250,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Их сургуульд сурах нь баталгаатай, тогтмол орлогын эх үүсвэртэй болно
          гэдэгт хүмүүс эсрэг тэсрэг байр суурьтай байдаг. Бидний эргэн тойронд,
          ажлын талбарт их сургуульд сураагүй ч сурсан хүнээс хэд дахин өндөр
          орлоготой хүмүүс байх нь бий. Гэвч дэлхий нийтэд их сургуульд сурсан
          хүмүүсийн дундаж орлого, их сургуульд сураагүй хүмүүсийн дундаж
          орлогоос өндөр хэвээр байна. Тэгвэл боловсролын түвшин нь хүний
          орлогын түвшинд хэрхэн нөлөөлдгийг харуулсан дараах судалгааг хүргэе.
          Боловсролын түвшнээ дээшлүүлэх нь орлогоо өсгөх баталгаатай арга мөн
          болов уу?
        </Text>

        <Text style={styles.textTitle}>
          БОЛОВСРОЛ ХӨДӨЛМӨР ЭРХЛЭЛТЭД НӨЛӨӨЛӨХ НЬ
        </Text>
        <Text style={styles.textStatus}>
          2020 онд Үндэсний Статистикийн хорооноос хийсэн “Боловсрол ба хөдөлмөр
          эрхлэлт” судалгаагаар боловсрол нь хөдөлмөр эрхлэлтэд чухал нөлөө
          үзүүлдэг болох нь харагдсан юм.
        </Text>

        <Text style={styles.textTitle}>Боловсролын нөлөө</Text>
        <Text style={styles.textStatus}>
          • Эцэг эхийн боловсролын түвшин нэмэгдэхийн хэрээр хүүхдийн сургуульд
          сурах жил нэмэгдэж байна.
        </Text>
        <Text style={styles.textStatus}>
          • Сургуульд сурсан жил нэгээр нэмэгдэхэд хөдөлмөр эрхлэх магадлал 6.5
          хувиар нэмэгдэж байна.
        </Text>
        <Text style={styles.textStatus}>
          • Боловсрол нь хөдөлмөр эрхлэлтийг дэмжээд зогсохгүй ирээдүй хойч үе
          болсон хүүхдүүдийн амьдралд чухал үүрэг гүйцэтгэж байна. Тухайлбал,
          боловсролтой эхийн хүүхэд дээд боловсрол эзэмшээгүй эхийн хүүхдээс
          сургуульд суралцах хугацаа нь 2.3 жилээр их байна.
        </Text>

        <Text style={styles.textTitle}>Сургуульд сурсан жилийн нөлөө</Text>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 40, color: "#faa819" },
            ]}
          >
            66.3<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={[styles.textStatus, { width: "70%" }]}>
            5 жил сургуульд сурсан хүний хөдөлмөр эрхлэх магадлал
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 40, color: "#faa819" },
            ]}
          >
            70.3<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={[styles.textStatus, { width: "70%" }]}>
            9 жил сургуульд сурсан хүний хөдөлмөр эрхлэх магадлал
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 40, color: "#faa819" },
            ]}
          >
            73.2<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={[styles.textStatus, { width: "70%" }]}>
            12 жил сургуульд сурсан хүний хөдөлмөр эрхлэх магадлал
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 40, color: "#faa819" },
            ]}
          >
            76.8<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={[styles.textStatus, { width: "70%" }]}>
            16 жил сургуульд сурсан хүний хөдөлмөр эрхлэх магадлал
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 40, color: "#faa819" },
            ]}
          >
            21.5<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={[styles.textStatus, { width: "70%" }]}>
            Мэргэжилтэй хүнийг мэргэжилгүй хүнтэй харьцуулахад хөдөлмөр эрхлэх
            магадлал
          </Text>
        </View>
        <Text style={styles.textStatus}>
          Харин АНУ-д ахлах сургуулийн гэрчилгээгүй хүнийг бусад бүх түвшний
          боловсролын түвшинтэй хүнтэй харьцуулахад хамгийн бага цалин авдаг аж.
          Тэд долоо хоногт 592 ам.доллар буюу жилд ойролцоогоор 30,784
          ам.долларыг цалин хөлсөөр олж байна. Мөн энэ хүмүүс ажилгүйдлийн
          түвшин хамгийн өндөр байна. Харин ахлах сургууль төгссөнөөр долоо
          хоногт дунджаар 746 ам.доллар буюу жилд 38,792 ам.долларын цалин авч,
          ажилгүйдлийн эрсдэлийг 3.7 хувь хүртэл бууруулж байгааг доорх үзүүлэлт
          харуулжээ. Бакалаврын зэргийн боловсролтой хүнийг докторын зэргийн
          боловсролтой хүнтэй харьцуулахад орлогын түвшин 30,000 гаруй
          ам.доллароор их байгаа бөгөөд ажилгүйдэлд өртөх магадлал 2 дахин бага
          байгаа юм.
        </Text>

        <Text style={styles.textStatus}>
          Эдгээр жишээнээс харахад боловсролын түвшин нэмэгдэхэд орлого өсөхөөс
          гадна, ажилгүйдэлд өртөх магадлал буурч байгааг харж болно.
        </Text>
        <Image
          // source={require("../../../assets/newF/92m.png")}
          source={{ uri: api + "/upload/" + "92m.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 430,
            resizeMode: "contain",
          }}
        />
        <Image
          // source={require("../../../assets/newF/94m1.jpg")}
          source={{ uri: api + "/upload/" + "94m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
            marginTop: 20,
          }}
        />
        <Text
          style={[styles.textTitle, { textAlign: "center", color: "#3acd86" }]}
        >
          ҮЕИЙНХНИЙГ АЖЛЫН ТАЛБАРТ ОЙЛГОХ НЬ
        </Text>
        <Text style={styles.textStatus}>
          1997-2012 оны хооронд төрсөн хүүхдүүд буюу Z үеийнхний хамгийн “ахмад”
          нь 25 нас хүрч, дараагийн дүү нар нь ар араасаа их сургуулиа төгсөж,
          хөдөлмөрийн зах зээлд гарч эхэлжээ.
        </Text>
        <Text style={styles.textStatus}>
          Өмнөх үеийнхнээсээ итгэл үнэмшил, дадал зуршил зэргээрээ огт өөр
          тэднийг ажлын байранд бүтээмжтэй, сайн ажилтан байлгах нь ажил
          олгогчдын хувьд нэг төрлийн сорилт болж байгаа юм. Энэ хүрээнд бид Z
          үеийнхний зан төлөвийн нийтлэг шинж, ажлын байранд ямар хүлээлт
          тавьдаг талаарх мэдээллийг бэлтгэлээ.
        </Text>
        <Text style={[styles.textTitle, { color: "#3acd86", fontSize: 20 }]}>
          НИЙТЛЭГ ШИНЖ ЧАНАР:
        </Text>
        <Text style={styles.textTitle}>
          Тэд бол анхны “төрөлхийн дижитал” иргэд
        </Text>
        <Text style={styles.textStatus}>
          Миллениал үеийнхнийг шинэ эриний технологийн анхдагч хэрэглэгчид гэж
          үзэж байсан бол Z үеийнхэн технологийн хөгжлийн оргил үед төрсөн. Энэ
          утгаараа тэд төрөхдөө л технологийн дэвшлүүдтэй танилцсан гэсэн үг.
          Технологийн давуу талууд энэ үеийнхний өсөлт хөгжилтөд эерэг, сөрөг
          олон талаар нөлөөлжээ. Нэг талаар тэд мэдээллийг авах хязгааргүй
          боломжийг ашиглан өөрсдийгөө хөгжүүлж, мэдлэгээ тэлэх бүрэн бололцоо
          байна. Нөгөө талаар сошиал орчин, дэлгэцийн хэт их хамаарал нь энэ
          үеийнхний сэтгэхүй, зан төлөвт сөргөөр нөлөөлж буй.
        </Text>
        <Text style={styles.textTitle}>
          Аливаад прагматик төдийгүй санхүүч сэтгэлгээгээр ханддаг
        </Text>
        <Text style={styles.textStatus}>
          Z үеийнхнийг тодорхойлох бас нэгэн шинж бол тэд өмнөх үеийнхэн шиг
          амьдралд романтик төсөөллөөс илүү прагматик болоод санхүүч
          сэтгэлгээгээр ханддаг. Учир нь тэд дэлхийн хамгийн том санхүүгийн
          хямралуудын үеүдэд өсөж торнисон. Иймд тэд тогтвортой орлого, ухаалаг
          хөрөнгө оруулалтад ач холбогдол өгдөг байна.
        </Text>
        <Text style={styles.textTitle}>
          Сэтгэцийн эрүүл мэндээ хамгаалахад тулгарч буй сорилтууд
        </Text>
        <Text style={styles.textStatus}>
          Z үеийнхнийг зарим талаар хамгийн ганцаардмал үеийнхэн гэж нэрлэх нь
          бий. Учир нь онлайн орчинд өнгөрүүлж буй олон цаг нь тэдний сэтгэл
          зүйд сөргөөр нөлөөлж буй. Facebook, Instagram, Netflix-д зарцуулж буй
          олон цаг нь тэдний утга учиртай, амьд харилцаанд зарцуулах цагийг
          хязгаарладаг. Мөн хүмүүсийн дижитал орчинд харуулж буй “төгс”
          дүрүүдтэй өөрсдийгөө харьцуулснаар тэдний өөртөө итгэх итгэл багасдаг
          байна.
        </Text>
        <Text style={styles.textTitle}>Хэрсүү хэрэглэгчид</Text>
        <Text style={styles.textStatus}>
          Тэд технологийн чадвараа ашиглан худалдан авах гэж буй
          бүтээгдэхүүнийхээ талаар нарийн судалгаа хийдэг. Тэд бол мэдээлэлтэй
          хэрэглэгчид. Тийм учраас тэдний анхаарлыг татах, бараа
          бүтээгдэхүүнийхээ чанарт итгэн үнэмшүүлэхэд нэлээд хүчин чармайлт
          орно.
        </Text>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text
            style={[
              styles.textTitle,
              { width: "50%", color: "#007dc5", textAlign: "center" },
            ]}
          >
            MILLENNIALS
          </Text>
          <Text
            style={[
              styles.textTitle,
              { width: "50%", color: "#ef58a0", textAlign: "center" },
            ]}
          >
            GEN Z
          </Text>
        </View>
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "#007dc5",
              padding: 17.3,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Зорилгынхоо төлөө ажилладаг.
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              backgroundColor: "#ef58a0",
              padding: 10,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Ажлын тогтвортой байдал, орлогоос урам зориг авдаг
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "#007dc5",
              padding: 3.4,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Жилийн эцсийн үнэлгээнээс илүүтэй өдөр тутам ажлаа үнэлүүлэх
              сонирхолтой.
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              backgroundColor: "#ef58a0",
              padding: 10,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Хийсэн ажлынхаа тухай санал, шүүмжлэл байнга сонсохыг хүсдэг.
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "#007dc5",
              padding: 16.99,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Багаар ажиллахыг илүүд үздэг.
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              backgroundColor: "#ef58a0",
              padding: 10,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Бие даан ажиллах, ганцаарчилсан тоглолт үзүүлэх дуртай.
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              backgroundColor: "#007dc5",
              padding: 10,
              borderTopLeftRadius: 100,
              borderBottomLeftRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Карьер нь тэдний амьдралын хамгийн чухал зүйл байдаг.
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              backgroundColor: "#ef58a0",
              padding: 10,
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
            }}
          >
            <Text
              style={[
                styles.textStatus,
                {
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                },
              ]}
            >
              Ажил, амьдралын тэнцвэрийг барихыг эрмэлздэг.
            </Text>
          </View>
        </View>
        <Text style={[styles.textStatus]}>
          Төрсөн цагаасаа эхлэн цахим хэрэгслийн дунд өсөж бойжсон анхны
          үеийнхний ажлын байраа сонгохдоо баримталдаг түгээмэл зарчим нь:
        </Text>
        <Text style={[styles.textTitle]}>
          • Хамтран ажиллахад тохиромжтой нөхцөлийг бүрдүүлсэн ажлын орчин
        </Text>
        <Text style={[styles.textStatus]}>
          Уламжлалт оффисоос илүү ая тухтай, хаана ч суугаад ажлаа хийх
          боломжтой гэртээ байгаа мэт ая тухыг мэдрүүлэх оффисыг илүүд үздэг
        </Text>
        <Text style={[styles.textTitle]}>
          • Шинэлэг технологи бүхий ажлын байрны хэрэгслүүд
        </Text>
        <Text style={[styles.textStatus]}>
          Тэд технологийн хамгийн сүүлийн үеийн тоног төхөөрөмжийг андахгүй.
          Төрөхөөсөө эхлэн технологи дунд байсан тэдний ажлын бүтээмжийг өндөр
          байлгах, урам зоригтой ажиллуулах хэрэгсэл бол технологи юм.
        </Text>
        <Text style={[styles.textTitle]}>
          • Бүхий л талаар өөрийгөө хөгжүүлэх боломжууд
        </Text>
        <Text style={[styles.textStatus]}>
          Энэ үеийнхэн өөрсдийгөө төрөл бүрээр хөгжүүлэхийг эрмэлздэг.{" "}
        </Text>
        <Text style={[styles.textTitle]}>• Ажлын уян хатан цаг</Text>
        <Text style={[styles.textStatus]}>
          Тэд өмнөх үеийнхэн шиг тогтмол цагт ажилдаа ирж, ажлаасаа тарахыг
          хүсдэггүй. Харин өөрийн бүтээмж хамгийн өндөр үед ажлаа хийхийг
          чухалчилдаг. Иймд ажил олгогчид уян хатан цаг санал болгох нь эдгээр
          үеийнхнийг татах нэг том шалтгаан болно.
        </Text>
        <Text style={[styles.textTitle]}>
          • Нийгэмд эерэг нөлөөллийг авчирч буй үйл ажиллагаа эрхэлдэг компани
        </Text>
        <Text style={[styles.textStatus]}>
          Z үеийнхэн уур амьсгалын өөрчлөлт, экологийн тогтвортой байдалд
          ихээхэн анхаарал хандуулдаг.
        </Text>
        <Image
          // source={require("../../../assets/newF/96m1.jpg")}
          source={{ uri: api + "/upload/" + "96m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 300,
            marginTop: 20,
          }}
        />
        <Text style={[styles.textTitle]}>ТЭДНИЙ АЖЛЫН БАЙРАНД ГАРГАДАГ</Text>
        <Text
          style={[
            styles.textTitle,
            { color: "#784785", fontSize: 20, textAlign: "right" },
          ]}
        >
          TҮГЭЭМЭЛ 5 ШИНЖ
        </Text>
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 60, color: "#ffc20e" },
            ]}
          >
            01.
          </Text>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle, { fontSize: 16 }]}>
              УЛАМЖЛАЛТ ХАРИЛЦААНД ДУРТАЙ
            </Text>
            <Text style={[styles.textStatus, { fontSize: 14 }]}>
              Хэдийгээр гар утсаар зурвас бичихэд цаг их зарцуулдаг боловч Z
              үеийнхэн нүүр тулсан ярилцлага, амьд харилцааг илүүд үздэг нь
              судалгаагаар тогтоогджээ
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 60, color: "#ffc20e" },
            ]}
          >
            02.
          </Text>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle, { fontSize: 16 }]}>
              БИЕ ДААН АЖИЛЛАХ СОНИРХОЛТОЙ
            </Text>
            <Text style={[styles.textStatus, { fontSize: 14 }]}>
              Багаар ажиллах нь эдгээр үеийнхэнд тийм ч хэцүү биш. Харин төсөл
              хөтөлбөр дээр бие даан ажиллах нь удирдах албан тушаалтандаа
              өөрийнхөө юу чаддагийг харуулах том боломж гэж тэд үздэг.
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 60, color: "#ffc20e" },
            ]}
          >
            03.
          </Text>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle, { fontSize: 16 }]}>
              ХАМГИЙН САЙН ТУСЛАХ - ГАР УТАС
            </Text>
            <Text style={[styles.textStatus, { fontSize: 14 }]}>
              Тэд гар утасны олон төрлийн аппликэйшны тусламжтайгаар бүтээмжээ
              нэмэгдүүлдэг. Өөрөөр хэлбэл, Z үеийнхний ажлын байран дээрх
              хамгийн чухал “хамтрагч” бол гар утас юм.
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 60, color: "#ffc20e" },
            ]}
          >
            04.
          </Text>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle, { fontSize: 16 }]}>
              ТОГТВОРТОЙ, ТОДОРХОЙ БАЙДЛААС УРАМ ЗОРИГ АВДАГ
            </Text>
            <Text style={[styles.textStatus, { fontSize: 14 }]}>
              Тэд эдийн засгийн хямралын үед өссөн. Иймээс өмнөх үетэй
              харьцуулахад эрсдэлд дургүй. Иймд ажилд орохдоо тодорхой
              нөхцөлүүдэд нөхөн төлбөр авах зэрэгт дуртай байдаг.
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ flexDirection: "row", width: "100%", alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { width: "30%", fontSize: 60, color: "#ffc20e" },
            ]}
          >
            05.
          </Text>
          <View style={{ width: "70%" }}>
            <Text style={[styles.textTitle, { fontSize: 16 }]}>
              ТӨРӨЛХИЙН ӨРСӨЛДӨГЧ
            </Text>
            <Text style={[styles.textStatus, { fontSize: 14 }]}>
              Z үеийнхэн өрсөлдөөнд аль хэдийн дассан, хэн нэгний эсрэг өөрийгөө
              сорих сонирхол өндөр байдаг. Иймд ажлын байран дээрх эрүүл
              өрсөлдөөнийг бий болгох нь залуу ажилчдын бүтээмж, ур чадварыг
              дээшлүүлэх ач холбогдолтой.
            </Text>
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

export default Page15;

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
