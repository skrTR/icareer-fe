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

const Page7 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bolorerdene zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        // source={require("../../../assets/newF/35m.jpg")}
        source={{ uri: api + "/upload/" + "35m.jpg" }}
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
            backgroundColor: "#faa819",
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
            ДИЖИТАЛ НҮҮДЭЛЧИД
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 50,
            right: 0,
            padding: 10,
          }}
        >
          <View style={{}}>
            <Text
              style={{ textAlign: "right", color: "#faa819", fontSize: 40 }}
            >
              ХЭРХЭН
            </Text>
            <Text
              style={{
                textAlign: "right",
                fontSize: 16,
                fontFamily: "Montserrat-bold",
              }}
            >
              ДИЖИТАЛ НҮҮДЭЛЧИН
            </Text>
            <Text
              style={{
                textAlign: "right",
                fontSize: 16,
                fontFamily: "Montserrat-bold",
              }}
            >
              БОЛОХ ВЭ?
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>35-37 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#faa819",
                fontSize: 10,
              }}
            >
              ДИЖИТАЛ НҮҮДЭЛЧИД
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

        <Text
          style={{
            fontWeight: "500",
            fontSize: 15,
            textAlign: "center",
            marginVertical: 20,
            marginBottom: 40,
          }}
        >
          Бидний мэдэх уламжлалт амьдралын хэв маягууд сууриараа өөрчлөгдсөөр
          байна. Технологи хүний харилцааг цаг хугацаа, орон зайнаас үл хамааран
          хаанаас ч үр дүнтэй явуулах боломж олгосноор хүн төрөлхтөн хөдөлмөр
          эрхлэхийн тулд аливаа нэг газар урт хугацаанд суурин амьдрах
          шаардлагагүй болжээ. Бидний өвөг дээдэс түүврийн аж ахуй эрхлэн
          нүүдэллэн амьдардаг байсан бол өдгөө бид ч мөн технологийн хөгжлийн
          нөлөөгөөр дахин нүүдэллэн амьдрах боломжтой болжээ.
        </Text>

        <Text style={styles.textTitle}>ТООГООР:</Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            70<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={{ width: "70%" }}>
            Долоо хоногт 40 цагаас илүүгүй ажилладаг.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            49<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={{ width: "70%" }}>
            Уламжлалт хэв маягаар амьдарч байсантайгаа ижил хэмжээний цалин
            авдаг.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            17<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={{ width: "70%" }}>
            Нэг жилд 5 ба түүнээс дээш улсаар аялдаг.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            81<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text style={{ width: "70%" }}>
            Ажилдаа өндөр сэтгэл ханамжтай байдаг.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            15.5<Text style={{ fontSize: 12 }}>САЯ</Text>
          </Text>
          <Text style={{ width: "70%" }}>
            Дижитал нүүдэлчний хэв маягаар амьдардаг хүмүүсийн тоо
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ width: "30%", fontSize: 40, color: "#faa819" }}>
            32<Text style={{ fontSize: 12 }}>НАС</Text>
          </Text>
          <Text style={{ width: "70%" }}>Дижитал нүүдэлчдийн дундаж нас</Text>
        </View>
        <Text style={styles.textTitle}>НАСНЫ АНГИЛЛААР:</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              44<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Millenials</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              12<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Baby Boomers</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              23<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Gen X</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              21<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Gen Z</Text>
          </View>
        </View>
        <Text style={styles.textTitle}>ҮНДЭСТНЭЭР:</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              70<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>AHУ</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              14<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Африк-Америк</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              7<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Ази</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: "#faa819" }}>
              7<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
            <Text>Испани</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#faa819" }}>
            2<Text style={{ fontSize: 20 }}>%</Text>
          </Text>
          <Text>Бусад</Text>
        </View>

        <Text style={styles.textStatus}>
          Дижитал нүүдэлчин гэдэг нь технологийн тусламжтайгаар орон зайнаас үл
          хамааран ажлаа хийж, дэлхийн нэг газраас нөгөөд нүүдэллэн амьдардаг
          хэв маягтай хүмүүс юм. Тэд ухаалаг утас, интернэтийн тусламжтайгаар
          ажлаа гүйцэтгэдэг.
        </Text>
        <Text style={styles.textStatus}>
          Анх 1977 онд Цугио Макимото, Девид Маннерс нарын бичсэн “Дижитал
          Нүүдэл” хэмээх номд уг нэр томьёог анх хэрэглэжээ. Тус номд ажилчдыг
          хаана байгаагаасаа үл хамааран ажлаа хийх боломжийг олгодог бүрэн
          хүчин чадал бүхий цор ганц харилцаа холбооны төхөөрөмж бүтээдэг тухай
          зөгнөн өгүүлсэн байдаг.
        </Text>
        <Text style={styles.textStatus}>
          Харин XXI зуунд тус номд гардаг төхөөрөмжийн үүргийг зөөврийн
          компьютер, ухаалаг гар утас, интернэт гүйцэтгэж, Улаанбаатарын иргэн
          ур чадвараа ашиглан Лондонд ажиллахын зэрэгцээ Америкт цагийн ажил
          хийх боломж бүрджээ. Дижитал нүүдэлчид хаана ажиллаж, амьдрах эрхээ
          бүрэн ашиглаж нэг улсаас нөгөө рүү “нүүдэллэхдээ” амьдрах байраа
          онлайнаар захиалж байгаа нь үл хөдлөхийн салбарын өсөлтөд ч эерэг
          нөлөөллийг бий болгож буй.
        </Text>
        <Text style={styles.textStatus}>
          Дижитал нүүдлийн амьдралын хэв маягийг сонгож буй хүн насны хувьд
          ихэвчлэн залуу байхаас гадна маркетинг, цагийн багш, дизайнер,
          зохиолч, мэдээллийн технологи зэрэг оюуны хөдөлмөр эрхэлдэг хүмүүс
          байна.
        </Text>
        <Text style={styles.textTitle}>ДАВУУ ТАЛ</Text>
        <Text style={styles.textStatus}>
          • Хүссэн газраа аялж, амьдарч олон янзын шинэ соёлтой танилцах
          боломжтой
        </Text>
        <Text style={styles.textStatus}>
          • Уламжлалт оффист мөрдөгддөг олон төрлийн дүрэмтэй нүүр тулахгүй
        </Text>
        <Text style={styles.textStatus}>
          • Өөрийнхөө цагийг өөрөө удирдах эрх мэдэл
        </Text>
        <Text style={styles.textStatus}>
          • Хобби, сонирхдог зүйлдээ цаг заваа хүссэнээрээ зориулах боломжтой
        </Text>
        <Text style={styles.textTitle}>СУЛ ТАЛ</Text>
        <Text style={styles.textStatus}>
          • Өөр өөр цагийн бүсэд тааруулж ажиллах шаардлагатай тулгарна
        </Text>
        <Text style={styles.textStatus}>
          • Ажил, амьдралын тэнцвэрээ бий болгоход маш нарийн цаг төлөвлөлт
          шаардлагатай
        </Text>
        <Text style={styles.textStatus}>
          • Гэр бүл, найз нөхөдтэйгөө хүссэн үедээ уулзаж чадахгүйн улмаас
          ганцаардах магадлал өндөр
        </Text>
        <Text style={styles.textStatus}>
          • Байнгын аяллын хэв маягтай байх нь зарлага их шаарданa
        </Text>
        <Image
          // source={require("../../../assets/newF/chart3.jpg")}
          source={{ uri: api + "/upload/" + "chart3.jpg" }}
          style={{ width: "100%", height: 300, resizeMode: "contain" }}
        />

        <Text style={[styles.textTitle, { color: "#784785" }]}>
          ЭМЭГТЭЙЧҮҮД ДИЖИТАЛ НҮҮДЛИЙН АМЬДРАЛЫН ХЭВ МАЯГИЙГ ИЛҮҮ СОНГОЖ БАЙНА.
        </Text>
        <Text style={styles.textStatus}>
          “FlexJob”-ийн хийсэн судалгаагаар дижитал нүүдэлчдийн 70 хувийг
          эмэгтэйчүүд эзэлж байна. Олон эмэгтэй хүүхэд төрүүлж, өсгөхийн тулд
          карьераасаа татгалзах, “чөлөө авах” нөхцөл байдалтай нүүр тулдаг. Энэ
          нь албан тушаал ахих боломжийг хязгаарлаж, цалингийн зөрүүг
          нэмэгдүүлдэг. Харин дижитал нүүдлийн хэв маяг энэхүү асуудлыг шийдэх
          боломжийг олгожээ. 100 хувь зайнаас ажилладаг компаниудын 30 хувь нь
          эмэгтэй гүйцэтгэх захирал, үүсгэн байгуулагчтай байна.
        </Text>

        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-bold",
            paddingVertical: 15,
            fontSize: 16,
          }}
        >
          ДИЖИТАЛ НҮҮДЭЛЧНИЙ КАРЬЕРЫГ ЭХЛҮҮЛЭХИЙН ТУЛД ТА ЗААВАЛ ПРОГРАММИСТ
          БАЙХ ШААРДЛАГАГҮЙ
        </Text>

        <Text style={styles.textStatus}>
          “FlexJob”-ийн хийсэн судалгаагаар дижитал нүүдэлчдийн таван хүн тутмын
          нэг нь жилд 50.000-99.999 ам.долларын орлогыг олдог аж. Мөн дижитал
          нүүдэлчид дундаж цалин өндөр газар ажиллаж, амьдралын өртөг багатай
          газар амьдрах боломжтой нь хүмүүс энэ хэв маягийг сонгох, жилээс жилд
          тоо нь нэмэгдэх нэг шалтгаан болж байгаа юм. Тэдний 18 хувь нь оффист
          ажиллаж байгаагаасаа өндөр цалин авч байгаа бол 46 хувь нь бага цалин
          авч байна.
        </Text>

        <Text style={styles.textStatus}>
          Дэлхий дээр маш олон төрлийн дижитал нүүдэлчний карьерын төрөл бий
          учраас дижитал нүүдлийн хэв маягаар амьдрахын тулд та заавал супер
          программист байх шаардлагагүй. Харин та хийх ажлаа сонгохдоо онлайн
          бизнес, чөлөөт уран бүтээлч, аль эсвэл алсын зайнаас ажиллах зэрэг
          чиглэлээс өөрт тохирохоо сонгоорой.
        </Text>

        <Text style={styles.textStatus}>
          Танд дараах “төхөөрөмжүүд” байхад бараг л дижитал нүүдэлчин боллоо
          гэсэн үг.
        </Text>

        <Text style={styles.textTitle}>• Зөөврийн компьютер</Text>
        <Text style={styles.textTitle}>
          • Хаана ч ашиглах боломжтой олон улсын mobile hotspot
        </Text>
        <Text style={styles.textTitle}>
          • Ажил, аяллаа тэнцвэржүүлэн бүтээмжээ удирдах аргуудыг мэддэг байх
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

export default Page7;

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
