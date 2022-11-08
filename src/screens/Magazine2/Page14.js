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

const Page14 = ({ data }) => {
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
            <Text style={{ fontWeight: "bold" }}>89-91 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#ea1c24",
                fontSize: 10,
              }}
            >
              УР ЧАДВАР
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
        <Image
          // source={require("../../../assets/newF/89m1.jpg")}
          source={{ uri: api + "/upload/" + "89m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Playfair-bold",
            textAlign: "center",
            color: "#ea1c24",
          }}
        >
          ШИНЭ МАНЛАЙЛАГЧДЫН УР ЧАДВАР
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ea1c24",
            marginVertical: 20,
          }}
        />

        <Text style={styles.textStatus}>
          1912 онд сэтгэл судлаач Уильям Стерн хүний сэтгэн бодох оюуны
          чадамжийг үнэлэх IQ хэмээх ойлголтыг гарган ирсэн бөгөөд XX зууныг
          хүртэл IQ өндөртэй хүмүүс удирдах албан тушаалыг хашиж, нийгэмд
          манлайлах ёстой хэмээх бичигдээгүй хууль үйлчилж байсан юм. Харин
          1980-аад оноос өөрийнхөөрөө зүтгэдэг, бусдыг сонсдоггүй удирдагчид
          үнэлэгддэг байсан нь аажмаар өөрчлөгдөж эхлэв. Учир нь ажил олгогчид
          мэдлэг, чадвараас илүү бусадтай харилцах, өөрийгөө урамшуулж
          идэвхжүүлэх чадвар нь ажилчдыг тушаал дэвших, бүтээмжтэй ажиллахад
          нөлөөлж байгааг анзаарсан юм.
        </Text>
        <Text style={styles.textTitle}>Хүний тархи хэрхэн ажилладаг вэ?</Text>
        <Text style={styles.textStatus}>
          Тархи судлаачид хүний тархийг гурван хэсгээс бүрддэг хэмээн үздэг.
        </Text>
        <Text style={styles.textStatus}>
          1. Анхдагч тархи - Амьсгалын тогтолцоо, зүрхний цохилт гэх мэт
          зайлшгүй шаардлагатай бөгөөд бид ихэвчлэн өөрөө удирдаж чаддаггүй,
          хүний амьд явахад шаардлагатай анхдагч хэсгүүдийг удирддаг.
        </Text>
        <Text style={styles.textStatus}>
          2. Эмоционал тархины хэсэг - Баярлах, гуниглах зэрэг сэтгэл хөдлөлийг
          удирддаг.
        </Text>
        <Text style={styles.textStatus}>
          3. Рационал тархи - Логик шийдвэрүүдийг гаргадаг.
        </Text>
        <Text style={styles.textStatus}>
          Харин сэтгэл судлаачид хүний тархи нь эмоционал болон рационал гэсэн
          хоёр хэсгээс бүрддэг бөгөөд эмоционал хэсэг нь рационал хэсгээс 0,012
          дахин хурдан хугацаанд үйлдэл гаргадаг хэмээн үздэг ажээ.
        </Text>
        <Text style={styles.textStatus}>
          Өөрөөр хэлбэл, бидний рационал тархи тунгаан бодож, шийдвэр гаргахад
          цаг хугацаа зарцуулж байх хооронд сэтгэл хөдлөл аль хэдийн тухайн
          нөхцөл байдалд баярлаж, бухимдах зэрэг үйлдлийг гаргаад амжчихсан
          байдаг аж.
        </Text>
        <Image
          // source={require("../../../assets/newF/90m1.jpg")}
          source={{ uri: api + "/upload/" + "90m1.jpg" }}
          style={{ width: windowWidth / 1.1, height: 400 }}
        />
        <Text style={styles.textTitle}>
          Зохиолч, сэтгүүлч Дэниел Гоулманы “Emotional Intelligence” номд сэтгэл
          хөдлөлийн үндсэн ТАВАН чадварыг дараах байдлаар тодорхойлсон байдаг
        </Text>
        <Text style={styles.textStatus}>
          1. Өөрийн бодол мэдрэмжийг танин мэдэх (Self awareness)- Өөрийн сэтгэл
          хөдлөл, стресс бухимдал зэргийг анзаарч, түүнийгээ танин мэдэх чадвар.
          Ихэнх хүмүүс доорх гурван янзаар өөрийн сэтгэл хөдлөлд ханддаг. Үүнд:
        </Text>

        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Нэгт. </Text>Өөрийн
          сэтгэл хөдлөлийг танин мэдээд түүнд тохирсон хариу үйлдлийг хийх.
          Жишээлбэл, хэлэлцээр хийж байх үед тодорхой нөхцөл таалагдаагүйн
          улмаас та стрессдэж байвал үүнийгээ таниад буруу зүйлийг залруулдаг.
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Хоёрт. </Text>Танин
          мэдсэн ч өөрчилж чаддаггүй
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Гуравт. </Text>
          өөрийнхөө мэдрэмжээ таньж чаддаггүй, оролдлого хийдэггүй.
        </Text>
        <Text style={styles.textStatus}>
          2. Өөрийгөө удирдах чадвар (self control) - Өөрийн мэдрэмж, сэтгэл
          хөдлөлийг нөхцөл байдалд уялдуулан өөрчилж, барьж, удирдах
        </Text>
        <Text style={styles.textStatus}>
          3. Өөрийгөө идэвхжүүлэх чадвар (Motivation) - Аливаа зүйлийг урам
          зориг, итгэл найдвартайгаар хийдэг өөдрөг үзэлтэй байх
        </Text>

        <Text style={styles.textStatus}>
          4. Бусдыг ойлгох чадвар (Empathy) - Шийдвэр гаргах, үйлдэл хийхдээ
          бусдын оронд өөрийгөө тавьж бодох, тэднийг ойлгохыг чухалчлах
        </Text>
        <Text style={styles.textStatus}>
          5. Бусадтай харилцах чадвар (Social skill) - Бусдын мэдрэмж, сэтгэл
          хөдлөлийг ойлгосноороо түүнд тохируулан харилцааг удирдах
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Playfair-bold",
            textAlign: "center",
            color: "#ea1c24",
          }}
        >
          СЭТГЭЛ ХӨДЛӨЛИЙН ЧАДВАР БИДЭНД ХЭРХЭН НӨЛӨӨЛДӨГ ВЭ?
        </Text>

        <Text style={styles.textStatus}>
          Тархи биднийг шинэ мэдлэг, ур чадварт суралцаж түүнийгээ ямар нэгэн
          зүйлд ашиглахад тусалдаг. Харин EQ нь өөрийн сэтгэл хөдлөл, бие хүнээ
          ойлгоход суралцаж, түүнийгээ амьдралынхаа бүхий л талбарт ашиглахад
          чиглүүлдэг. PubMed төвөөс хийсэн судалгаанд хүний EQ чадвар сайн байх
          нь сэтгэцийн эрүүл мэнд, харилцааны чадварыг дээшлүүлэхээс гадна,
          ажлын бүтээмж, гүйцэтгэлд эерэг нөлөөллийг авчирдаг гэжээ. Мөн
          байгууллагын түвшинд зорилгоо ухамсарлах, хамт олонтойгоо уялдаа
          холбоотой ажиллахад дээрх ур чадвар туслахаас гадна сургуулийн орчинд
          гадуурхагдах зэрэг хүнд байдалд өртөхөөс сэргийлдэг аж. EQ ур чадвар
          сайтай байснаар хүн хоорондын харилцаанд ижил тэнцүү эрх, ашгийг
          хүртэх боломж олгодог.
        </Text>

        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Ажлын байранд таныг илэрхийлнэ{" "}
          </Text>
          <Text>
            - Сэтгэл хөдлөлийн чадамж өндөр байх нь ажлын байранд тулгарсан хүнд
            бэрхшээлүүдийг зөв аргаар туулах, хамт олонтойгоо бүтээлчээр хамтран
            ажиллах, тушаал дэвшихэд тань тусална. Ажил олгогчид сэтгэл
            хөдлөлийн чадварыг бусад техникийн ур чадвартай адил хэмжээнд
            чухалчилж, ажилд авахаасаа өмнө ажилчдаасаа EQ чадварын шалгалтыг
            авдаг болсон.
          </Text>
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Биеийн эрүүл мэнд{" "}
          </Text>
          <Text>
            - Үргэлж бухимдах нь зүрхний шигдээс үүсэх, цус харвах, хөгшрөлтийн
            шалтгаан болж байдаг. Ийн өөрийн сэтгэл хөдлөлөө удирдаж сурах нь
            эрүүл мэндэд олон талаар эерэг нөлөөг үзүүлдэг.
          </Text>
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Сэтгэцийн эрүүл мэнд{" "}
          </Text>
          <Text>
            - Өөрийн сэтгэл хөдлөлийг удирдаж чадахгүй түгшүүр, сэтгэлийн
            хямралтай урт хугацааг туулах нь хүний сэтгэцийн эрүүл мэндэд маш
            сөрөг нөлөөтэй. Иймд сэтгэл хөдлөлөө таньж, удирдаж, шаардлагатай
            арга хэмжээг авч чаддаг байх нь аливаа сэтгэл гутрал, стресс зэрэг
            сэтгэл зүйн асуудлыг хүндрэхээс сэргийлж, богино хугацаанд даван
            туулахад нөлөөтэй.
          </Text>
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Xарилцаа холбоо{" "}
          </Text>
          <Text>
            - Хүн өөрийнхөө сэтгэл хөдлөлийг ойлгож, хянах нь бусадтай найрсаг
            харилцаа тогтоох, тэдний сэтгэл хөдлөлийг мэдрэх чадварыг олгодог.
            Ингэснээр хувийн амьдрал, ажлын талбар дээр ч амжилт гаргах,
            бусадтай үр дүнтэй хамтран ажиллах боломжтой.
          </Text>
        </Text>
        <Text style={styles.textStatus}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>
            Нийгмийн амьдрал{" "}
          </Text>
          <Text>
            - Өөрийн сэтгэл хөдлөлөө сайн таньж мэдэх нь таныг нийгмийн бусад
            бүлгүүдтэй ойрхон байх нөхцөлийг бүрдүүлдэг. Хүнийг зөв таньж,
            нийгмийн зөв хүрээллийг бүрдүүлснээр стресс буурч, амьдралын идэвхи
            нэмэгдэж, аз жаргалтай амьдрах нөхцөлийг бүрдүүлдэг.
          </Text>
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Playfair-bold",
            textAlign: "center",
            color: "#ea1c24",
          }}
        >
          ӨӨРИЙН СЭТГЭЛ ХӨДЛӨЛИЙН ЧАДАМЖИЙГ ШИНЖЭЭРЭЙ
        </Text>
        <Image
          // source={require("../../../assets/newF/90m.png")}
          source={{ uri: api + "/upload/" + "90m.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 280,
            resizeMode: "contain",
          }}
        />

        <Text style={[styles.textTitle, { color: "#ea1c24" }]}>
          EQ чадвараа хэрхэн сайжруулах вэ?
        </Text>
        <Text style={styles.textStatus}>
          Зарим хүн төрөлхийн бусдыг ойлгох, сэтгэл хөдлөлөө сайн удирдах
          чадвартай байдаг хэдий ч эдгээр чадваруудыг практик туршлагаар олж
          авах бүрэн боломжтой.
        </Text>
        <Text style={styles.textTitle}>
          Өөрийн бодол мэдрэмжийг танин мэдэх (Self awareness)
        </Text>
        <Text style={styles.textStatus}>
          Энэхүү чадвараа сайжруулах үр дүнтэй арга бол өдрийн тэмдэглэл бичих
          юм. Өөрийн бодол, мэдрэмжүүдээ цаасан дээр буулгаж, тогтмол хугацаанд
          давтан унших нь бодлоо хянах чадварт сургадаг.
        </Text>

        <Text style={styles.textTitle}>
          Өөрийгөө удирдах чадвар (self control)
        </Text>
        <Text style={styles.textStatus}>
          Хүчтэй сэтгэл хөдлөл мэдрэгдсэн үед түүнийг хэрхэн илэрхийлэх аргад
          суралцах нь энэ ур чадвараа нэмэгдүүлэхэд эерэг нөлөөтэй. Жишээлбэл,
          уурласан үедээ гүнзгий амьсгал авах, бухимдсан шалтгаанаа зөв үгээр
          тайлбарлаж бусдад ойлгуулж сурах хэрэгтэй. Мөн сэтгэл хөдлөлөө хүлээн
          зөвшөөрч чаддаг болох нь нэн чухал.
        </Text>

        <Text style={styles.textTitle}>
          Өөрийгөө идэвхжүүлэх чадвар (Motivation)
        </Text>
        <Text style={styles.textStatus}>
          Өөрт тохиолдсон амжилттай, сайн сайхан үйл явдлыг цаг гарган тэмдэглэж
          сурах хэрэгтэй. Мөн шинэ зүйл сурахаар төлөвлөсөн бол үүнийг яагаад
          сурч байгаагаа тодорхойлоод үзээрэй. Өөрийгөө урамшуулах өөр нэгэн үр
          дүнтэй арга бол том ажлаа жижиг хэсгүүдэд хувааж, хийсэн даалгавар
          бүрээ тэмдэглэж, жагсаалаас хасах дарааллаар явах нь урам зоригтойгоор
          ажлаа хийх үр дүнтэй аргуудын нэг юм.
        </Text>
        <Text style={styles.textTitle}>Бусдыг ойлгох чадвар (Empathy)</Text>
        <Text style={styles.textStatus}>
          Бусдыг ойлгох чадвараа дээшлүүлэх хамгийн энгийн алхам бол эргэн
          тойрныхоо хүмүүст анхаарлаа хандуулах юм. Сайн дурын ажил хийх, шинэ
          хүмүүстэй танилцах нь энэ чадвараа дээшлүүлэхэд тань чухал нөлөө
          үзүүлдэг.
        </Text>
        <Text style={styles.textTitle}>
          Бусадтай харилцах чадвар (Social skill)
        </Text>
        <Text style={styles.textStatus}>
          Өөрийгөө төрөл бүрийн шинэ орчин, нөхцөл байдалд аваачих хэрэгтэй. Мөн
          бусдыг сонсож сурах, бусадтай ярилцаж байхдаа нүд рүү нь харж, түүнийг
          анхааралтай сонсож буйгаа илэрхийлэх нь энэ чадвараа сайжруулах эхний
          алхам юм.
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

export default Page14;

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
