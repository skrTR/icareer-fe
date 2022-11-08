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
const Page16 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        // source={require("../../../assets/newF/97m1.jpg")}
        source={{ uri: api + "/upload/" + "97m1.jpg" }}
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
          TRENDY JOB
        </Text>
        <View style={{ bottom: 50, marginLeft: 20 }}>
          <Text style={[styles.textTitle, { color: "white", fontSize: 150 }]}>
            IT
          </Text>
          <Text style={[styles.textTitle, { fontSize: 24, color: "white" }]}>
            САЛБАРТ КАРЬЕРАА
          </Text>
          <Text style={[styles.textTitle, { fontSize: 24, color: "white" }]}>
            ӨСГӨХ БОЛОМЖ
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>97-104 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
        />
        <Text style={styles.textStatus}>
          1969 оны долдугаар сарын 20-ны өдөр. “Апполо 11” хөлгийн командлагч
          Нил Армстронгийн “Жирийн нэг залуугийн ганцхан жижиг алхам хүн
          төрөлхтний түүхэн дэх агуу том дэвшил боллоо” хэмээн саран дээрээс
          өөрийн үйл явдлыг дүрслэн дамжуулж буй дуу хоолойг 650 сая хүн амьсгаа
          даран сонсож байлаа. Түүний нөхөд Майкл Коллинз, Эдвин Олдрин нарыг
          саран дээр буулгаж, түүх бичихийн тулд 400,000 хүн хөдөлмөрөө
          зориулсны нэг нь Маргарет Хамилтон хэмээх программ хангамжийн инженер
          эмэгтэй байв. Тэр “Апполо 11” хөлгийн удирдамж, жолоодлогын системийг
          боловсруулж байх үедээ программ хангамжийн инженер (software engineer)
          гэх нэр томьёог гаргаж ирсэн нь өдгөө хүн төрөлхтний хөгжлийн замналд
          чухал байр суурь эзэлж буй мэдээллийн технологийн салбарын чухал
          мэргэжлийн нэг болоод байна. Бид Trendy job булангийнхаа энэ дугаарт
          мэдээллийн технологийн салбарт карьераа өсгөхөөр зорьж буй хүмүүст
          зориулан өөрийгөө “үнэд хүргэх” боломжийн тухай мэдээллийг бэлтгэлээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/98m1.jpg")}
          source={{ uri: api + "/upload/" + "98m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 500,
            resizeMode: "contain",
          }}
        />

        <Text style={styles.textTitle}>Information Technology</Text>

        <Text style={styles.textStatus}>
          буюу мэдээллийн технологи гэдэг нь бүх төрлийн цахим өгөгдлийг үүсгэх,
          боловсруулах, хадгалах, хамгаалах, дамжуулах зорилгоор аливаа
          компьютер болон биет төхөөрөмжүүд, сүлжээг ашиглах үйл явц юм хэмээн
          TechTarget тодорхойлжээ. Энд программ хангамж, техник хангамж мэдээлэл
          дамжуулахад оролцдог бүхий л төрлийн төхөөрөмж, систем хамаарах юм.
        </Text>
        <Image
          // source={require("../../../assets/newF/98m2.jpg")}
          source={{ uri: api + "/upload/" + "98m2.jpg" }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          Апполо онгоцны программ хангамжийн инженерээр ажиллаж байх үедээ
        </Text>
        <View style={{ borderWidth: 1, marginBottom: 8 }} />
        <Text style={styles.textStatus}>
          XX зууны дунд үеэс мэдээллийн технологийн салбарын хөгжил хурдсах
          тусам компьютерын тооцоолох чадвар нэмэгдэж, төхөөрөмжийн өртөг болон
          эрчим хүчний зарцуулалт багассанаар энэ салбарт шинэ технологи бий
          болох хугацаа богиносов. Ингэснээр уг салбарт ажиллах хүчний эрэлт
          өсөж 2024 он гэхэд 28.7 сая хүн уг салбарт ажилладаг болох ба энэ тоо
          2020 онтой харьцуулахад 3.2 саяар ихэснэ гэсэн тооцоог “Statista”
          гаргажээ.
        </Text>
        <View style={{ flexDirection: "row", width: windowWidth }}>
          <Image
            // source={require("../../../assets/newF/99m1.jpg")}
            source={{ uri: api + "/upload/" + "99m1.jpg" }}
            style={{ width: windowWidth / 2.3, height: 200, marginTop: 20 }}
          />
          <Image
            // source={require("../../../assets/newF/99m2.png")}
            source={{ uri: api + "/upload/" + "99m2.png" }}
            style={{ width: windowWidth / 2.3, height: 200, marginTop: 20 }}
          />
        </View>

        <Text
          style={[styles.textTitle, { color: "#0066a6", textAlign: "center" }]}
        >
          ДЭЛХИЙН БОЛОН МОНГОЛЫН ИХ СУРГУУЛИУД
        </Text>
        <Text
          style={[
            styles.textStatus,
            { fontSize: 12, textAlign: "center", marginVertical: 0 },
          ]}
        >
          Мэдээллийн технологийн хамгийн сайн мэргэжилтэн бэлтгэдэг дэлхийн
          болон Монголын их сургуулиудын жагсаалт
        </Text>

        <Text style={[styles.textTitle, { color: "#ed1c24" }]}>
          Олон улсын их сургууль
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m3.jpg")}
            source={{ uri: api + "/upload/" + "99m3.jpg" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              { width: "70%", marginLeft: 5, textAlign: "center" },
            ]}
          >
            Massachusetts Institute of Technology (MIT)
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m4.png")}
            source={{ uri: api + "/upload/" + "99m4.png" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              { width: "70%", marginLeft: 5, textAlign: "center" },
            ]}
          >
            Stanford University
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m5.jpg")}
            source={{ uri: api + "/upload/" + "99m5.jpg" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              { width: "70%", marginLeft: 5, textAlign: "center" },
            ]}
          >
            National University of Singapore (NUS)
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m6.jpg")}
            source={{ uri: api + "/upload/" + "99m6.jpg" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              { width: "70%", marginLeft: 5, textAlign: "center" },
            ]}
          >
            University of Cambridge
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />
        <Text style={[styles.textTitle, { color: "#ed1c24" }]}>
          Монголын их сургууль
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m7.jpg")}
            source={{ uri: api + "/upload/" + "99m7.jpg" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              {
                width: "70%",
                marginLeft: 5,
                textAlign: "center",
              },
            ]}
          >
            Монгол Улсын Их Сургууль
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/99m8.jpg")}
            source={{ uri: api + "/upload/" + "99m8.jpg" }}
            style={{
              width: "30%",
              height: 50,
              resizeMode: "contain",
            }}
          />
          <Text
            style={[
              styles.textStatus,
              { width: "70%", marginLeft: 5, textAlign: "center" },
            ]}
          >
            Шинжлэх Ухаан Технологийн Их Сургууль
          </Text>
        </View>
        <View style={{ borderWidth: 1, marginVertical: 5 }} />

        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          www.topuniversities.com
        </Text>

        <Text
          style={[
            styles.textTitle,
            {
              fontSize: 40,
              marginVertical: 0,
              textAlign: "center",
              color: "#007dc5",
            },
          ]}
        >
          55.3 <Text style={{ fontSize: 20 }}>САЯ ГАРУЙ</Text>
        </Text>
        <Text
          style={[
            styles.textStatus,
            { marginVertical: 0, textAlign: "center" },
          ]}
        >
          хүн энэ салбарт ажилладаг
        </Text>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: 40,
              marginVertical: 0,
              textAlign: "center",
              marginTop: 20,
              color: "#007dc5",
            },
          ]}
        >
          85 <Text style={{ fontSize: 20 }}>САЯ АЖЛЫН БАЙР</Text>
        </Text>
        <Text
          style={[
            styles.textStatus,
            { marginVertical: 0, textAlign: "center" },
          ]}
        >
          Мэдээллийн технологийн салбарын нөлөөгөөр устах ажлын байр
        </Text>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: 40,
              marginVertical: 0,
              textAlign: "center",
              marginTop: 20,
              color: "#007dc5",
            },
          ]}
        >
          97 <Text style={{ fontSize: 20 }}>САЯ АЖЛЫН БАЙР</Text>
        </Text>
        <Text
          style={[
            styles.textStatus,
            { marginVertical: 0, textAlign: "center" },
          ]}
        >
          Мэдээллийн технологийн салбарын нөлөөгөөр шинээр бий болох мэргэжил,
          ажлын байр
        </Text>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: 40,
              marginVertical: 0,
              textAlign: "center",
              marginTop: 20,
              color: "#007dc5",
            },
          ]}
        >
          5.3 <Text style={{ fontSize: 20 }}>ИХ НАЯД АМ.ДОЛЛАР</Text>
        </Text>
        <Text
          style={[
            styles.textStatus,
            { marginVertical: 0, textAlign: "center" },
          ]}
        >
          Мэдээллийн технологийн салбарын үнэлгээ
        </Text>
        <Text style={[styles.textStatus, { marginTop: 30 }]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          www.statista.com
        </Text>
      </View>
      <ImageBackground
        // source={require("../../../assets/newF/97m1.jpg")}
        source={{ uri: api + "/upload/" + "97m1.jpg" }}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
      >
        <View style={{ marginTop: 150 }}>
          <Text
            style={[
              styles.textTitle,
              { fontSize: 30, marginLeft: 20, color: "white" },
            ]}
          >
            ХЭРХЭН
          </Text>
          <Text
            style={[
              styles.textTitle,
              { fontSize: 30, marginLeft: 20, color: "white" },
            ]}
          >
            МЭРГЭШИХ
          </Text>
          <Text
            style={[
              styles.textTitle,
              { fontSize: 30, marginLeft: 20, color: "white" },
            ]}
          >
            ВЭ?
          </Text>
        </View>
        <Text
          style={[
            styles.textStatus,
            {
              color: "white",
              width: "70%",
              fontSize: 12,
              position: "absolute",
              bottom: 20,
              left: 20,
            },
          ]}
        >
          2030 он гэхэд мэдээллийн технологийн салбарт 667,600 шинэ ажлын байр
          бий болох төдийгүй дундаж цалингийн хэмжээ улсын дунджаас хоёр дахин
          их байна хэмээн АНУ-ын Хөдөлмөрийн Статистикийн хорооноос мэдээлж
          байна. Цаг минутаар үнэ цэн нь өсөн нэмэгдэж буй энэ салбарт хэрхэн
          мэргэшиж болохыг дараах хүснэгтээр харуулж байна.{" "}
        </Text>
      </ImageBackground>
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={[styles.textTitle, { width: "30%", fontSize: 16 }]}>
            Мэргэшил
          </Text>
          <Text style={[styles.textTitle, { width: "70%", fontSize: 16 }]}>
            Tайлбар, гүйцэтгэх үүрэг
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Cloud Computing Engineer
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Amazon Web Services (AWS) болон Microsoft Azure зэрэг үүлэн
            үйлчилгээ үзүүлэгчдийн системийн дэд бүтцийг удирдах, шийдэл олох,
            хөгжүүлэх, загварчлах үүрэг гүйцэтгэдэг.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Computer Network Specialist
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Мэдээлэл холбооны сүлжээ, системийн олон төрлийг хадгалах, бүтээх,
            загварчлах, тодорхойлох ажлыг гүйцэтгэдэг. Энэ мэргэжил нь салбарын
            хамгийн өндөр цалинтай мэргэжлүүдийн нэг бөгөөд дундаж цалин нь
            112.690 ам.доллартой тэнцэнэ.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Computer Support Specialist
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Гол төлөв компьютер хэрэглэгчид болон байгууллагуудад туслалцаа
            үзүүлдэг. Мөн зарим нэг нь сүлжээний үйл ажиллагааг шалгаж, үнэлж,
            хэвийн үйл ажиллагааг нь хангадаг.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Database Administrator
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Эдгээр мэргэжилтэн нь хувь хэрэглэгч болон компаниудад өгөгдлийг
            боловсруулж, зохион байгуулахад тусалдаг. Мөн өгөгдлийг гаднын
            халдлагаас хамгаалах үүргийг гүйцэтгэдэг. Энэхүү мэргэжилтнүүд
            өгөгдлийн хэрэглээ өндөр санхүүгийн байгууллага, их сургуулиудад
            ажиллах нь түгээмэл. Дундаж цалин ирэх 10 жилд 10 хувиар өсөж 93.750
            ам.долларт хүрнэ гэж АНУ-ын Хөдөлмөрийн Статистикийн Хорооноос
            тооцоолжээ.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Information Technology Analyst
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Бизнесийн зориулалттай технологийг боловсруулж хэрэгжүүлэх үүрэгтэй.
            Хэрэглэгч болоод зах зээлийн мэдээллийг цуглуулж, дүн шинжилгээ
            хийн, шийдлийг боловсруулдаг.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Information Technology Leadership
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Энэхүү чиглэлийг сонгохыг хүссэн хүмүүс мэдээллийн технологийн
            мэдлэгтэй байхаас гадна удирдан зохион байгуулах чадвартай байх
            хэрэгтэй. Тэд IT төслүүдийн төсөв, төлөвлөгөөг боловсруулж,
            шаардлагатай цаг хугацааг төлөвлөн бодлого системийг тодорхойлох
            үүрэгтэй.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Information Security Specialist
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Байгууллагын системийн сүлжээ, системийн аюулгүй байдлыг хангах,
            дата мэдээллийг болзошгүй халдлагаас хамгаалах үүрэгтэй. Энэхүү
            мэргэжлийн цалин 2029 он гэхэд 39 хувиар өсөж 99.730 ам.долларт
            хүрнэ хэмээн АНУ-ын ХСХ-оос тооцоолжээ.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Software/ application Developer
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Төрөл бүрийн компьютерын программ хангамжийг зохион бүтээж, туршиж,
            ажиллуулах үүрэг гүйцэтгэдэг. Тэд шинэ төрлийн код бичиж аппликэйшн
            зохион бүтээдэг. Энэхүү мэргэжлийг эзэмшсэн хүмүүсийн цалин 2029 он
            гэхэд 107.000 гаруй ам.доллароор хэмжигдэх аж.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View
          style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
        >
          <Text style={[styles.textStatus, { width: "30%", fontSize: 14 }]}>
            Web Developer
          </Text>
          <Text style={[styles.textStatus, { width: "70%", fontSize: 14 }]}>
            Хэрэглэгчийн хүсэлтийн дагуу тохирсон функц, шийдлээр шинэ вебсайт
            зохион бүтээж, хөгжүүлж, тогтвортой үйл ажиллагааг нь хангах үүргийг
            гүйцэтгэдэг.
          </Text>
        </View>
        <View style={{ borderWidth: 1 }} />
        <Image
          // source={require("../../../assets/newF/101m.png")}
          source={{ uri: api + "/upload/" + "101m.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 150,
            resizeMode: "contain",
          }}
        />
        <Text
          style={[
            styles.textTitle,
            { textAlign: "center", fontSize: 24, color: "#0066a6" },
          ]}
        >
          МОНГОЛ ДАХЬ МЭРГЭЖЛИЙН СУРГАЛТУУД
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          MICROSOFT 365: ADMINISTERING OFFICE365 AND HYPER AD
        </Text>
        <Image
          // source={require("../../../assets/newF/102m2.jpg")}
          source={{ uri: api + "/upload/" + "102m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 230,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Мэдээллийн технологийн салбарын инженерүүдэд Windows Server-ийн
          хамгийн сүүлийн үеийн хувилбарыг суулгах, тохируулах, удирдан зохион
          байгуулах чадварыг олгоно. Уг салбарт шинжээч, дэд бүтцийн шийдлийг
          боловсруулах чадамжтай, олон улсад хүлээн зөвшөөрөгдсөн инженер
          болоход түлхэц болохуйц сургалт юм.
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          POWER BI: ANALYZING DATA WITH POWER BI
        </Text>
        <Image
          // source={require("../../../assets/newF/102m1.jpg")}
          source={{ uri: api + "/upload/" + "102m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 120,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Үүлэн технологид суурилсан Microsoft Power BI-ийг ашиглан мэдээлэлд
          дүн шинжилгээ хийн, дүгнэлт гаргах чадварыг уг сургалтаас олж авах
          боломжтой.
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          ITIL FOUNDATION V4- INFORMATION TECHNOLOGY INFRASTRUCTURE LIBRARY
        </Text>
        <Image
          // source={require("../../../assets/newF/102m5.png")}
          source={{ uri: api + "/upload/" + "102m5.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 500,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Мэдээллийн технологийн сервис, удирдлагын бүтэц, зохион байгуулалт,
          зарчмын тухай тодорхой мэдлэгийг олгох сургалт юм.
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          RED HAT: RED HAT SYSTEM ADMINISTRATOR RAPID TRACK / RHCSA/
        </Text>
        <Image
          // source={require("../../../assets/newF/102m4.png")}
          source={{ uri: api + "/upload/" + "102m4.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 400,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Мэдээллийн технологийн сервис, удирдлагын бүтэц, зохион байгуулалт,
          зарчмын тухай тодорхой мэдлэгийг олгох сургалт юм.
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          CODING WITH MINECRAFT
        </Text>
        <Image
          // source={require("../../../assets/newF/102m3.jpg")}
          source={{ uri: api + "/upload/" + "102m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 400,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Дунд сургуулийн 9-15 насны хүүхдүүдэд Minecraft тоглоом ашиглан
          программчлалын талаар анхан шатны мэдлэг олгох мөн интернэт орчинд
          зохистой аюулгүй ажиллах, компьютерын эд анги, орчин үеийн
          технологитой зөв харьцах талаар мэдлэг олгох сургалт юм.
        </Text>
        <Image
          // source={require("../../../assets/newF/103m1.jpg")}
          source={{ uri: api + "/upload/" + "103m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 250,
            resizeMode: "contain",
            marginTop: 20,
          }}
        />
        <Text style={[styles.textStatus, { marginVertical: 0, fontSize: 12 }]}>
          Мэдээлэл технологийн салбарт 10 гаруй жилийн туршлагатай, “Medlegten
          LingoS” старт-апын үүсгэн байгуулагч, CEO
        </Text>
        <Text style={[styles.textTitle, { marginVertical: 5, fontSize: 14 }]}>
          Б.БУЛГАН
        </Text>
        <View style={{ borderWidth: 1 }} />
        <Text style={[styles.textTitle, { fontSize: 24, textAlign: "center" }]}>
          МЭРГЭЖИЛТНИЙ ЗӨВЛӨГӨӨ
        </Text>
        <Text style={[styles.textTitle]}>
          Энэ чиглэлийн мэргэжлийг сонгохын тулд тухайн хүнд хувь хүний болон
          техникийн ямар ур чадварууд байвал давуу тал болдог вэ?
        </Text>
        <Text style={[styles.textStatus, {}]}>
          Хүсэж, хичээсэн хүн болгон энэ мэргэжлийг эзэмшиж болно. Гэхдээ өөртөө
          суулгасан байхад давуу тал болох хоёр чадварыг нэрлэвэл, нэгт,
          компьютерын бүтэц, үйл ажиллагааг маш сайн ойлгож мэддэг байх.
          Жишээлбэл, санах ойн үйл ажиллагаа, үүргийг мэдэхгүй хүн код бичихдээ
          ашиглалтыг хамгийн муу байдлаар бичсэнээс болж олон сөрөг асуудалтай
          тулгардаг. Хоёрт, математик суурьтай, логик сэтгэлгээ сайтай хүмүүс
          программ хангамжийг сайн бичдэг санагддаг. Учир нь программ хангамж
          өөрөө тархин дотроо маш олон визуал үйлдлүүдийг төсөөлж боддог.
          Тиймээс дээр дурдсан суурьтай хүмүүс илүү хурдан, сайн сурах хандлага
          ажиглагддаг.
        </Text>
        <Text style={[styles.textTitle, {}]}>
          IT чиглэлийн мэргэжлээр заавал их сургуульд сурах шаардлагагүй гэж
          зөвлөх хүн олон боллоо. Энэ тал дээр таны өгөх зөвлөгөө юу байх вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Тухайн хүн өөрөө сурч чадна гэдэг хүсэл тэмүүлэлтэй байвал сургуульд
          сураад байх шаардлагагүйгээр интернэтээс бүгдийг сурах бүрэн боломж
          бий. Гэхдээ тухайн мэргэжлээрээ номын дуу сонсох нь их чухал. Энэ нь
          хүмүүст тухайн салбарын гүн гүнзгий ойлголтуудын цаад утгыг нарийн
          ойлгож илүү цэгцтэй, системтэй ажиллах боломжийг олгодог.
        </Text>
        <Text style={[styles.textTitle, {}]}>
          Их сургуульд сурахаар шийдсэн хүмүүс сургуулиа сонгохдоо юуг анхаарах
          хэрэгтэй вэ? Та ямар их сургуулийг санал болгох вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Миний хувьд IT чиглэлээр 10 гаруй жил ажиллахдаа олон хүнийг сонгон
          шалгаруулж ажилд авч байсан. Монголд ШУТИС-ийн Мэдээлэл холбоо
          технологийн сургууль, МУИС-ийн программ хангамжийн ангийг төгсөгчид
          ажилдаа илүү өндөр бүтээмжтэй, урт хугацаандаа ч сайн мэргэжилтэн
          болдог нь миний туршлагаар батлагдсан.
        </Text>
        <Text style={[styles.textTitle, {}]}>
          Энэ мэргэжлээр ажиллахын давуу болон сул тал нь юу вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Та бидний харж байгаачлан ирээдүйд бүх зүйл технологи суурьтай болж
          байна. Тэгэхээр ажлын байр, цалин, карьераа өсгөх боломж энэ салбарт
          бүрэн байна. Сул тал гэвэл энэ мэргэжлээр ажилладаг хүнийг ихэвчлэн
          илүүдэл жинтэй, нүдний шилтэй, дуу цөөтэй байдаг гэх хүмүүсийн нийтлэг
          ойлголт байна. Харин сүүлийн үед салбарын залуучууд маань эрүүл мэнд,
          бие бялдартаа анхаардаг болоод энэ ойлголтыг эвдсэн гэж бодож байгаа
          тэгэхээр сул тал байхгүй гэж хэлж болно.
        </Text>
        <Text style={[styles.textTitle, {}]}>
          Ерөнхий боловсролын сургуулийн сурагчид энэ мэргэжлээр сурахын өмнө
          ямар суурь чадваруудыг эзэмшээрэй гэж зөвлөх вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Мэдээллийн технологийн салбарт шинэ гарч ирж байгаа технологиудад
          соргог байж, ажиллах механизмыг нь сайн судлах хэрэгтэй. Мөн өмнө
          дурдсанчлан компьютерын бүтэц, болоод логик сэтгэлгээгээ хөгжүүлэх
          хэрэгтэй.
        </Text>
        <Text style={[styles.textTitle, {}]}>
          Таны зүгээс өөр мэргэжлээр сурч, ажиллаж байгаа ч IT чиглэл рүү
          шилжихээр төлөвлөж буй хүмүүст өгөх 3 чухал зөвлөгөө.
        </Text>
        <Text style={[styles.textStatus]}>
          Миний мэдэхээр анагаах ухаан, аялал жуулчлал гээд тэс өөр салбараас
          энэ салбар руу “үсрээд” ороод ирсэн хүн олон байдаг. Тэгэхээр үнэхээр
          тухайн хүн өөрөө хүсээд, чадна гэж бодож байгаа бол энэ тийм ч
          боломжгүй зүйл биш. Тэдэнд миний зүгээс дараах зөвлөгөөг өгөх байна.
          Үүнд:
        </Text>
        <Text style={[styles.textStatus]}>
          1. Үнэхээр энэ чиглэлээр сурч чадна гэдэг хүсэл тэмүүлэлтэй байх
          хэрэгтэй.
        </Text>
        <Text style={[styles.textStatus]}>
          2. Судлаач байх. IT өөрөө маш өргөн хүрээтэй салбар. Тийм болохоор яг
          аль чиглэлээр сурахаа сонгож судалж, аль нь чиний өөрийн чинь өгөгдөлд
          тохирохыг мэдэх хэрэгтэй.
        </Text>
        <Text style={[styles.textStatus]}>
          3. Битгий шантраарай. Мэдээж маш олон асуудал гарна гэхдээ тэрний бүх
          хариулт интернэт ертөнцөд байгаа гэж хэлмээр байна.
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/104m1.jpg")}
            source={{ uri: api + "/upload/" + "104m1.jpg" }}
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              borderRadius: 150,
              borderWidth: 4,
              borderColor: "#7b2768",
            }}
          />
          <Text
            style={[
              styles.textTitle,
              { marginVertical: 0, fontSize: 12, width: "70%" },
            ]}
          >
            ТА БИДНИЙ ХАРЖ БАЙГААЧЛАН ИРЭЭДҮЙД БҮХ ЗҮЙЛ ТЕХНОЛОГИ СУУРЬТАЙ БОЛЖ
            БАЙНА. ТЭГЭХЭЭР АЖЛЫН БАЙР, ЦАЛИН, КАРЬЕРАА ӨСГӨХ БОЛОМЖ МЭДЭЭЛЛИЙН
            ТЕХНОЛОГИЙН САЛБАРТ БҮРЭН БАЙНА..
          </Text>
        </View>
        <Text style={[styles.textTitle, { fontSize: 20, textAlign: "center" }]}>
          IT САЛБАРТ АЖИЛЛАЖ БУЙ ХҮМҮҮСТ ӨГӨХ ЗӨВЛӨГӨӨ
        </Text>
        <Text
          style={[
            styles.textTitle,
            { color: "#f15623", fontSize: 14, textAlign: "center" },
          ]}
        >
          Тэрбээр GMobile, MCS зэрэг Монголын томоохон компаниудад программ
          хангамжийн чиглэлээр 10 гаруй жил ажилласан туршлагатай бөгөөд 2021
          оноос өөрийн старт-апыг үүсгэн байгуулсан.
        </Text>
        <Text style={[styles.textTitle]}>
          Та хамгийн анх ажлын байранд гарахдаа өөртөө ямар зорилго тавьж байсан
          бэ? Шинэхэн төгсөгчдөд ямар зөвлөгөө өгөх вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Оюутан байхдаа мэргэжлээрээ туршлага хуримтлуулах зорилготой байсан
          учир зөвшөөрсөн газар нь л шууд орсон. (инээв) Төгсөгчдөд хандаж
          хэлэхэд эхлээд аль байгууллагад юу сурч болохоо тооцоолж төлөвлөх
          хэрэгтэй. Тухайн байгууллагын үндсэн бизнес нь IT-аас өөр чиглэлд
          байвал тэнд хоёроос дээш жил ажиллахад сурах хөгжих боломж
          хязгаарлагдмал байдаг. Тийм болохоор ямар ч хугацаанд ажилласан
          мэргэжлийн чиглэлээрээ туршлага хуримтлуулж болох эсэхэд илүү анхаарал
          хандуулах хэрэгтэй.
        </Text>
        <Text style={[styles.textTitle]}>
          Ямар чиглэлээр мэргэших нь ирээдүйд эрэлттэй байх вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Яг энэ талаар интернэтээс хайгаад үзвэл маш олон хариулт гарч ирнэ.
          Гэхдээ өөртөө юу хүсэж байгаа, өгөгдөл чинь ямар байгааг харж байгаад
          мэргэших нь илүү чухал.
        </Text>
        <Text style={[styles.textStatus]}>
          Яг одоогоор Монголд сүлжээний аюулгүй байдлаар сертификатыг нь аваад
          ажиллавал энэ бол супер, Логик сэтгэлгээ сайн, математиктаа галзуу бол
          машин сургалт (machine learning), хиймэл оюун ухаан (AI) гэх мэтэд
          өөрийгөө сорьж үзэх боломжтой.
        </Text>
        <Text style={[styles.textTitle]}>
          Залуус өөрт тохирсон чиглэлээр мэргэшихийн тулд ямар алхам хийх
          хэрэгтэй вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Эхний шалгуур бол программ хангамжийн үндсэн хичээл болох алгоритмын
          үндэс, өгөгдлийн сангийн тодорхой мэдлэгийг ямар ч программ хангамжийн
          мэргэжилтэн эзэмших хэрэгтэй.
        </Text>
        <Text style={[styles.textTitle]}>
          Мэргэжлийн ур чадвараа сайжруулахын тулд ажлын байран дээр хийдэг
          тогтмол зуршил тань юу вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Би старт-ап байгуулахаасаа өмнө MSC группт ажилладаг байсан. Тухайн
          байгууллагад жил бүр ажлын байранд өөрийгөө сайжруулах төлөвлөгөөг
          шууд удирдлагатайгаа ярьж гаргадаг байсан. Жишээлбэл, А хэмээх
          ажилтанд ажилдаа мэргэшиж сурах ёстой чадварууд гээд заачихсан байдаг.
          Улмаар тухайн ур чадваруудад тэнцэж байна уу гэдгээ шууд
          удирдлагатайгаа шударгаар ярилцаад, түвшнээ тогтоогоод хасах хувьтай
          гарвал сайжруулах төлөвлөгөө гаргаж, тухайн ур чадваруудаа ахиулах
          төслүүд дээр туршлагатай хүнтэй нь хамт оруулдаг. Тэгэхээр ажлын
          байран дээр сурах ёстой чадваруудаа жагсаагаад нэг нэгээр ахиулаад,
          өөрийгөө хөгжүүлбэл илүү үр дүнтэй гэж хардаг.
        </Text>
        <Text style={[styles.textTitle]}>
          Одоо байгаа ажил дээрээ цалингаа өсгөх, карьераа дээшлүүлэхээр
          төлөвлөж байгаа хүмүүст санал болгох мэргэжлийн сургалтуудыг дурдвал?
        </Text>
        <Text style={[styles.textStatus]}>
          Монголд программ хангамжаар магистрт сурах нь үр дүн багатай гэж бодож
          байна. Өөрийгөө хөгжүүлье гэж бодож байгаа хүмүүст интернэтээр сурах
          бүрэн боломж байгаа. Илүү системтэй суръя гэвэл Udemy зэргээс сурч
          болно.
        </Text>
        <Text style={[styles.textTitle]}>
          Таны ажлын туршлагуудаас харахад шалгуур өндөртэй, Монголын томоохон
          групп компаниудад ажилласан. Эдгээр компанийн шинэ залуу
          мэргэжилтнүүддээ тавьдаг нийтлэг шалгуур юу байдаг вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Асуудлыг даваад гарна гэсэн хичээл зүтгэлтэй, зөв хандлагатай байх
          хэрэгтэй. Тухайлахад, MCS-ийн хувьд мэргэжлийн чадварыг ажлын байран
          дээрээ бүрэн суралцах боломжтой учраас тухайн хүний ур чадвараас илүү
          хандлагыг чухалчилдаг.{" "}
        </Text>
        <Text style={[styles.textTitle]}>
          Та мэргэжлийн хувьд үлгэр дуурайлал авдаг гурван хүнээ нэрлээч гэвэл
          хэнийг хэлэх вэ?
        </Text>
        <Text style={[styles.textStatus]}>
          Нэгдүгээрт, TomYo-гийн В.Баярсайхан захирал, надад 10 жилийн өмнө
          программ хангамжийг анх зааж байсан. Адилхан программ хангамжийн
          мэргэжилтэн байсан хэдий ч өнөөдөр бизнес эрхлээд, энтрепренер болоод
          явж байгааг нь харж яваа учраас түүгээр бахархдаг. Хоёрдугаарт, Call
          Pro компанийн үүсгэн байгуулагч Г.Тулга. Жи Мобайлд ажилладаг байхад
          миний шууд удирдлага байсан хүн. Программист суурьтай хүмүүс өөрийн
          шийдлээ зах зээлд бүтээгдэхүүн болгож зарж байна. Тухайн шийдлийг давж
          гарсан хүн бол энтрепренер хүн гэж би хардаг. Гуравдугаарт, шарк, Анд
          Глобал компанийн үүсгэн байгуулагч Ч.Анар. Бас технологийн суурьтай
          хүн, өнөөдөр глобал хэмжээний компанийг удирдаад явж байгаа учраас энэ
          хүмүүсийг их хүндэлж, үлгэр дуурайлал авдаг.{" "}
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

export default Page16;

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
