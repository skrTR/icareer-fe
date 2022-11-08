import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
import * as Animatable from "react-native-animatable";
import { api } from "../../../Constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page2 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth, backgroundColor: "white" }}
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
        <Text style={{ fontWeight: "bold" }}>6 | </Text>
        <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
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
      <View style={{}}>
        <Animatable.Text
          animation="fadeInDownBig"
          duration={800}
          style={{
            fontFamily: "Montserrat-bold",
            marginHorizontal: 20,
            color: "#0066a6",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          ЭРХЛЭГЧИЙН ЗУРВАС
        </Animatable.Text>
        <View
          style={{
            borderWidth: 3,
            margin: 20,
            width: 80,
            borderColor: "#0066a6",
          }}
        />
        <Animatable.Image
          animation={"fadeInUpBig"}
          duration={1000}
          // source={require("../../../assets/newF/6m1.jpg")}
          source={{ uri: api + "/upload/" + "6m1.jpg" }}
          style={{ width: windowWidth / 1.1, height: 400, alignSelf: "center" }}
          resizeMode="cover"
        />
        {/* <View style={{ marginRight: 30 }}>
          <Text style={[styles.textWork, { textAlign: "right" }]}>
            {data.p2Dircetor}
          </Text>
          <Text style={[styles.textName, { textAlign: "right" }]}>
            {data.p2DirectorName}
          </Text>
        </View> */}
        <Text style={[styles.text, { marginTop: 20 }]}>
          Хувь хүн болон карьер хөгжлийн чиглэлээр Монголын медиа зах зээлд
          анхлан гаргаж эхэлсэн CAREER developer дижитал болон хэвлэмэл
          сэтгүүлийн маань 2 дахь дугаар төлөвлөгөөт хугацаанаас ялимгүй удсан ч
          олон талт эх сурвалжийн нарийн судалгаа, дүн шинжилгээ, байр
          суурьтайгаар хэвлэгдэн гарч байна. Мэдээ, мэдээллийн зах хязгааргүй
          урсгалаас залууст үнэ цэн, туршлага, мэдлэг өгөх агуулгуудыг тэдний
          хүлээн авах арга барил, хэв шинжид тохируулан хүргэхэд бидний зорилго
          оршино.
        </Text>
        <Text style={[styles.text, { marginTop: 20 }]}>
          Энэ удаагийн дугаарын онцлох зочноор шаргуу хөдөлмөр, эрүүл амьдралын
          хэв маяг, тасралтгүй манлайллыг өөртөө цогцлоосон эрхэм шарк Д.Бадрал
          захирлыг онцлов. Мөн охид, бүсгүйчүүд дэлхийн хэмжээнд өрсөлдөх старт
          апыг цогцлоох бүрэн боломжтойг үлгэрлэж яваа Б.Энхжаргалыг эмэгтэй
          манлайлагч буландаа онцоллоо. Компани үүсгэх, бизнес эхлүүлэх гэдэг нь
          тэр чигтээ сорилт. Бэрхшээлтэй нүүр тулж, шинэ шинэлэг рүү тэмүүлэн
          байр сууриа олсон томоохон компанийн үүсгэн байгуулагч Х.Эрдэнэбаяр
          эрхмийн бизнесийн зарчимтай ‘Founder’s story’ булангаас дэлгэрэнгүй
          уншиж танилцаарай.
        </Text>
        <Text
          style={{ fontFamily: "Montserrat-bold", margin: 20, fontSize: 18 }}
        >
          МЭДЛЭГ БОЛ ХҮЧ, БОЛОВСРОЛ БОЛОМЖУУДЫГ ИЛҮҮ ТОДРУУЛДАГ
        </Text>
        <Text style={[styles.text]}>
          Цаг үетэйгээ хөл нийлүүлэн алхаж, дэлхийн хэмжээний дэвшилтэт
          технологи, ирээдүйн чиг хандлагуудыг Дижитал нүүдэлчид, Influencer’s
          marketing, NFT болон OpenSea, Metaverse-ийн тухай сонирхолтой
          нийтлэлүүдээс шимтэн уншихыг уриалж байна. Хорин нэгдүгээр зуун тэр
          чигээрээ технологи руу эргэлт буцалтгүй чиглэсэн холын аяны эхлэл. IT
          буюу мэдээллийн технологийн салбарын мэргэжлийн гол онцлогууд, тэр
          чиглэлээр хөдөлмөрлөж ихийг бүтээж буй залуучуудын ажлын хэв маяг,
          арга барил, карьераа ахиулах боломж зэргийг ‘Trendy job’ булангаас
          дэлгэрэнгүй хүлээн аваарай.
        </Text>
        <Text style={[styles.text, { marginTop: 20 }]}>
          Юмсыг судалж шинжлэх, олон талаас харж суурь дүгнэлтийг гаргах нь оюун
          ухаант нийгэмд тэр дундаа өнөөгийн эдийн засаг суурьтай дэлхийн улс
          орнуудад амьдарч буй хүн бүрд чухал. Тиймээс бидний сэтгүүлчдийн
          багийн чадварлаг нөхдийн бэлтгэн гаргасан Судалгаа, Хөрөнгө оруулалт
          зэрэг булангуудаас өөр нэгэн өнцгийг өөртөө нэмж, боломжоо бүтээх
          эхлэлээ тавиарай гэж хүсье. Үүнд: "Gen Z болон Ажил олгогчид, Монголын
          системийн нөлөө бүхий 5 банкны IPO" зэрэг сонирхолтой нийтлэлүүд
          багтсан болно.
        </Text>
        <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>
          Энэхүү эрч хүч, урам зориг, сэтгэл зүрхээ шингээн бэлтгэсэн 2 дахь
          дугаарын нийтлэл, ярилцлага, судалгаа, танилцуулгууд та бүхэнд
          таалагдана гэж найдаж байна. Цаашид улам бүр сайжруулан, хөгжүүлж
          хэрэгтэйг цаг тутам үнэ цэнтэйгээр хүргэж байх болно.
        </Text>
      </View>
      <View>
        <View style={{ borderWidth: 1, marginTop: 20, marginHorizontal: 20 }} />
        <Animatable.Image
          animation="slideInRight"
          iterationCount={1}
          direction="alternate"
          source={require("../../../assets/faceLogoBlack.png")}
          style={{ width: windowWidth / 1.1, height: 100, alignSelf: "center" }}
          resizeMode="contain"
        />
        <View style={{ borderWidth: 1, marginTop: 5, marginHorizontal: 20 }} />
        <Animatable.Text
          style={{
            fontFamily: "Montserrat-regular",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          2022/08 сар | Дугаар №002
        </Animatable.Text>
        <View style={{ borderWidth: 1, marginHorizontal: 20 }} />
        <Text style={styles.textWork}>Ерөнхий эрхлэгч</Text>
        <Text style={styles.textName}>Г.НАМХАЙДОРЖ</Text>
        <Text style={styles.textWork}>Контентын хэлтэс</Text>
        <Text style={styles.textName}>Г.ИЧИНХОРОЛ</Text>
        <Text style={styles.textWork}>Сэтгүүлч</Text>
        <Text style={styles.textName}>Л.ДЭЛГЭРМАА</Text>
        <Text style={styles.textWork}>Бизнесийн хэлтэс</Text>
        <Text style={styles.textName}>Б.БАЯРМАА</Text>
        <Text style={styles.textWork}>Технологийн хэлтэс</Text>
        <Text style={styles.textName}>А.ЦЭЛМЭН</Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
          }}
        >
          Зар сурталчилгаа
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          Бидэнтэй хамтран ажиллах, зар сурталчилгаа байршуулахыг хүсвэл та
          бүхэн 7755-5255 дугаарын утсаар болон magazine@ihelp.mn хаягаар холбоо
          барина уу.
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          Холбоо барих
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, UBH төв, 9-р давхар,
          930Б
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            marginTop: 30,
          }}
        >
          Эрхлэн гаргагч
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            fontFamily: "Montserrat-regular",
            marginVertical: 5,
            marginHorizontal: 20,
          }}
        >
          “Новелист Тайм” ХХК
        </Text>
        <View style={{ borderWidth: 1, margin: 20 }} />
        <Image
          source={require("../../../assets/magazinelogo.png")}
          style={{ width: windowWidth, height: 100 }}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/companylogo.png")}
          style={{ width: windowWidth, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Montserrat-bold",
          marginHorizontal: 20,

          textAlign: "right",
        }}
      >
        2022/08 САР
      </Text>
    </ScrollView>
  );
};

export default Page2;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 20,
    // textAlign: "justify",
    fontFamily: "Montserrat-regular",
    fontSize: 16,
  },
  textWork: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-bold",
    marginTop: 20,
  },
  textName: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat-regular",
    marginVertical: 5,
  },
});
