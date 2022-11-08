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

const Page9 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bolorerdene zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        // source={require("../../../assets/newF/52.jpg")}
        source={{ uri: api + "/upload/" + "52.jpg" }}
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
            marginTop: 70,
            padding: 15,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              fontSize: 12,
              color: "white",
            }}
          >
            Itools компанийн{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-regular",
              textAlign: "right",
              fontSize: 12,
              color: "white",
            }}
          >
            гүйцэтгэх захирал{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 16,
              color: "white",
            }}
          >
            Б.ТАМИР
          </Text>
        </View>
        <View
          style={{
            marginTop: 100,
            padding: 15,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 30,
              color: "white",
            }}
          >
            ДАТА БОЛ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              textAlign: "right",
              fontSize: 30,
              color: "white",
            }}
          >
            ИРЭЭДҮЙ
          </Text>
        </View>
        <View
          style={{ position: "absolute", bottom: 30, right: 10, width: "60%" }}
        >
          <Text
            style={[
              styles.textStatus,
              {
                color: "white",
                textAlign: "right",
                fontFamily: "Montserrat-light",
              },
            ]}
          >
            Өнгөрсөн гуравдугаар сард Монголын технологийн салбарын эмэгтэйчүүд
            тусгаар тогтнолын ордноо чуулж, технологийн салбарт хэрхэн манлайлж
            буй туршлагаасаа хуваалцсан “Mongolian Women in Tech” арга хэмжээний
            үеэр индэрт хэлэлцүүлсэн хамгийн сонирхолтой илтгэлийн эзэн Itools
            компанийн гүйцэтгэх захирал Б.Тамиртай дата буюу өгөгдлийн ач
            холбогдлын талаар ярилцлаа.
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>52-58 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#b17f5e",
                fontSize: 10,
              }}
            >
              WOMEN IN TECH
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
              color: "#b17f5e",
              textDecorationLine: "underline",
            }}
          >
            Д
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Cambria-bold",
              marginHorizontal: 8,
            }}
          >
            ата гэх ойлголт хаанаас эхлэн хаана дуусаж байна вэ?
          </Text>
        </View>
        <Text style={styles.textStatus}>
          Монгол Улсын иргэн эхийн хэвлийд бий болсон цагаас эхлэн эход харуулж,
          зүрхний бичлэгт орохоос эхлээд насан эцэслэх хүртэлх бүх мэдээлэл нь
          дата болон Архивын ерөнхий газарт хадгалагдаж байдаг. Тэрхүү мэдээлэл
          хүнийг насан эцэслэснээс хойш 70 жил хадгалагддаг ба тэр хугацаанд
          тухайн мэдээлэл хэрэгтэй, үнэ цэнтэй, шаардлагатай тохиолдолд нууц
          байх эрхтэй байдаг. Тэгэхээр дата гэдэг бол бидний үг үйлдэл, төр
          хувийн хэвшлээс авч байгаа үйлчилгээ тэр бүү хэл гар утсаараа авч
          байгаа селфи хүртэл нэгэн төрлийн дата болж тухайн төхөөрөмжийн дата
          баазад хадгалагддаг.
        </Text>
        <Text style={styles.textTitle}>
          Үндсэндээ бидний цахим ертөнцөд хийж байгаа бүх үйлдэл хадгалагдаж
          үлдэж байгаа гэсэн үг үү?
        </Text>
        <Text style={styles.textStatus}>
          Тийм. Бид ямар утас, компьютер хэрэглэж байгаагаас эхлээд веб хуудас
          руу ороод мэдээ уншиж, хэн нэгний талаар коммент бичсэн нь хүртэл “мөр
          үлдээдэг”. Сөрөг комментыг хэн бичсэнийг илрүүлэх нь Монгол Улсын
          хэмжээнд жаахан төвөгтэй байж магадгүй. Харин олон улсад үүнийг
          илрүүлэх үйл явц нь ямар ч асуудалгүй. Ямар оффисоос, ямар IP хаягаас
          ямар үйлдэл хийсэн нь хадгалагддаг.
        </Text>

        <Text style={styles.textTitle}>
          Монгол Улсын хувьд иргэдийнхээ хувийн мэдээллийн аюулгүй байдлыг
          хангадаг эсэхэд та ямар байр суурьтай байдаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Сая цахим харилцаатай холбоотой таван хууль батлагдсан. Үүнтэй
          холбоотойгоор хувь хүний мэдээллийн аюулгүй байдлын тухай хууль,
          нийтийн мэдээллийн аюулгүй байдлын тухай хууль батлагдсан. Үүний
          бэлтгэл ажлыг маш сайн хангах хэрэгцээ шаардлага байгаа болохоос биш
          одоо бидэнд мэдээллийн аюулгүй байдлыг маш сайн хангаж байгаа гэх
          нотолгоог олоход маш хэцүү. Цаашид бид үүнд анхаарал хандуулж хөрөнгө
          зарцуулж, хүний нөөцөө бэлтгэх хэрэгтэй. Өнөөдрийн хувьд төр ч, хувийн
          хэвшил нь ч хувийн мэдээллийг хангалттай хамгаалж чадахгүй байна.
        </Text>

        <Text style={styles.textTitle}>
          Монгол компаниуд Big Data-г хэр хэмжээнд ашиглаж, үйл ажиллагаандаа
          нэвтрүүлж, ашгийг нь хүртэж байна вэ?
        </Text>
        <Text style={styles.textStatus}>
          Тухайлахад, манайх Big Data-г сургаж, хиймэл оюун ухаанд суурилсан
          шинэ шийдлүүдийг нэвтрүүлж, ашиглаж байна. Big Data-г боловсруулах нь
          хамгийн чухал юм. Хэчнээн их хэмжээний дата байлаа ч түүнийг
          боловсруулж чадахгүй бол үр ашгийг нь хүртэж чадахгүй. Манай улсын хүн
          амын 80 хувиас илүү нь бүртгэлтэй E-Barimt-аар жишээ авъя л даа,
          энэхүү санд иргэдийн ямар орлоготой, хаана суурьшдаг, ямар худалдан
          авалт хийдэг нь тодорхой байгаа. Гэвч энэ мэдээллүүдийг төр нэгтгэн
          боловсруулаад хувийн хэвшлийн үйл ажиллагаанд хэрэгтэй тоо баримтыг
          өгч чадахгүй байгаа юм. Хэрвээ энэ мэдээллийг өгвөл хувийн хэвшил
          бизнесийн байршлаа зөв тодорхойлоход өндөр ач холбогдолтой. Мөн төрөөс
          хэрэгжүүлж буй open data зэрэг платформууд хэрэглэхэд хялбар,
          хүртээмжийн асуудал эргэлзээтэйг дурдах нь зүйтэй болов уу.
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#b17f5e", marginTop: 15 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#b17f5e",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          Бид хамгийн зөв шийдвэрийг богино хугацаанд гаргахын тулд л датаг
          цуглуулдаг. Урд нь бол төр, компанийн удирдлагуудын гаргадаг шийдвэр
          илүү хувийн мэдрэмжид тулгуурладаг байсан. Харин одоо дата дээр
          үндэслэн шийдвэр гаргавал илүү үнэн бодитой, оновчтой байх боломжтой.
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#b17f5e", marginBottom: 15 }}
        />

        <Text style={styles.textTitle}>
          Иргэд тодорхой түвшинд мэдээллээ хамгаалах хэрэгтэй. Нөгөө талаар
          мэдээлэл нь байснаар тэдэнд хэрэгтэй үйлчилгээг нэвтрүүлэх, тулгарч
          буй асуудлыг шийдэхэд гарц болж байна. Тэгвэл мэдээллээ хамгаалах мөн
          нээлттэй байлгах тэнцвэрийг хэрхэн хангах ёстой юм бэ?
        </Text>
        <Text style={styles.textStatus}>
          Жишээлбэл, би зээл авмаар байна гэж бодъё. Би тухайн аппликейшнд
          өөрийн хувийн биометрик эмзэг мэдээллээ өгөх шаардлагатай болоод
          байна. Нөгөө талаас зээлдүүлэгчид үйл ажиллагаагаа аюулгүй явуулахын
          тулд шаардлагатай мэдээллийг авахаас өөр сонголтгүй. Тэгэхээр иргэдийн
          хувьд анхаарах ёстой зүйл нь
        </Text>
        <Text style={styles.textStatus}>
          • Өөрийнх нь мэдээллийг аюулгүй хадгалж чадаж байна уу?
        </Text>
        <Text style={styles.textStatus}>
          • Ямар дата төв дээр бидний мэдээлэл хадгалагдаж байгаа вэ?
        </Text>
        <Text style={styles.textStatus}>
          • Олон улсын шаардлага хангасан программ, лиценз ашиглаж чадаж байна
          уу?
        </Text>
        <Text style={styles.textStatus}>
          • Тухайн үйлчилгээ үзүүлэгч байгууллагын хүний нөөцийн баг ямар вэ?
        </Text>
        <Text style={styles.textStatus}>
          гэдэгт илүү анхаарах хэрэгтэй. Өөрөөр хэлбэл, хяналт тавьж, асууж,
          лавлагаа авах хэрэгцээ шаардлага бидэнд үүсэж байна. Энэ харилцааг
          удахгүй мөрдөгдөх хуульд тусгасан нь энэ хүрээнд үйлчлэх дүрэм,
          журмуудыг илүү тодорхой болгож өгч байгаа.
        </Text>

        <Text style={styles.textTitle}>
          Хангалттай хэмжээний дата боловсруулахад манайх хүний нөөцийн чадварын
          хувьд хэр байдаг вэ? Их хэмжээний датаг боловсруулж чадахгүй
          байгаагийн шалтгаан юу вэ?
        </Text>
        <Text style={styles.textStatus}>
          Чадварлаг хүний нөөц бий. Гэхдээ төр хэдэн төгрөгийн цалин олгодог
          билээ, тэнд чадварлаг хүний нөөц ажиллаж чадаж байна уу гэдэг нь
          эргэлзээтэй. Мөн бидэнд дата их байгаа боловч бүгд өөр, өөрсдийнхөө
          хэмжээнд, өөр өөрсдийн хэлээр, өөр өөрсдийн дата сервис дээр өөрсдийн
          системийг бүтээгээд цуглуулсан дата л байна. Энэ датаг бүгдийг нь
          нэгтгээд үр дүн гаргая гэхээр л хэцүү байгаад байгаа юм. Машинаар
          яривал эд анги тус бүрийг нь хийсэн ч машин болгож угсарч чадахгүй
          байна гэсэн үг. Үүнийг ажил болгоход төр, хувийн хэвшлийн хамтын
          ажиллагаа, төрийн байгууллагуудын уялдаа холбоо шаардлагатай. Хөгжмөөр
          бол удирдаач байхгүй байна. Төр энэ ажилд манлайлал үзүүлж, хувийн
          хэвшилтэйгээ хамтарч ажиллах хэрэгтэй.
        </Text>

        <Text style={styles.textTitle}>
          Цуглуулсан датагаа боловсруулах нь ямар асуудлуудыг шийдэх боломжтой
          вэ?
        </Text>
        <Text style={styles.textStatus}>
          Бид хамгийн зөв шийдвэрийг богино хугацаанд гаргахын тулд л датаг
          цуглуулдаг. Урьд нь бол төр, компанийн удирдлагуудын гаргадаг шийдвэр
          илүү хувийн мэдрэмжид тулгуурладаг байсан. Харин одоо дата дээр
          үндэслэн шийдвэр гаргавал илүү үнэн бодитой, оновчтой байх боломжтойг
          ойлгож байгаа. Энгийн жишээ гэвэл, өнөөдөр монголын иргэд хорт
          хавдраар өвдөх нь ихсэж байгаа. Энд өвчилсөн хүмүүс юу идэж, ууж, аль
          бүс нутгийн иргэд ямар ус хэрэглэж байгаа зэрэг мэдээллийг
          цуглуулснаар бид эргээд урьдчилан сэргийлэх аргаа олох боломжтой. Энэ
          нутагт амьдарч байгаа бол давс бага хэрэглээрэй гэх мэт зөвлөмжийг
          иргэддээ өгч аюулт өвчнөөс хамгаалах бүрэн боломжтой болж байгаа юм.
          Үүнээс харахад датаг цуглуулж, боловсруулснаараа бидний өдөр тутмын
          шийдвэр гаргалтаас эхлээд ирээдүйд ирэх эрсдэлээс урьдчилан сэргийлэх
          бүрэн боломжтой байна.
        </Text>
        <Text style={styles.textTitle}>
          Яг энэ асуудалд дэлхийн чиг хандлага хаашаа чиглэж вэ?
        </Text>
        <Text style={styles.textStatus}>
          XIX зуунд газартай хүмүүс хамгийн эрх мэдэлтэй, хүчирхэг байжээ. XX
          зуунд банкны эзэд мөнгөтэй нөлөөтэй байжээ. Харин XXI зуунд дататай
          улс, дататай компани, датагаа боловсруулж чадсан хүн хамгийн хүчирхэг
          болжээ. Дата бол бүх зүйл. Датаг улс гүрний, хувь хүний хувьд гээд маш
          олон түвшинд ангилж болно. Датагүйгээр цаашид бид хөгжихгүй. Гэхдээ
          датагүйгээр хөгжихгүй гээд хаа хамаагүй цуглуулаад хүссэн болгонд нь
          өгөөд байж болохгүй. Монгол Улс өөрөө иргэдийнхээ хувийн мэдээллийг
          хамгаалах, хадгалах хэрэгтэй. Өнөөдөр хүний биометрик мэдээлэл дээр
          тулгуурлаад хүмүүс маш том тоглолт хийхээс гадна үүнд зориулаад эм
          хүртэл үйлдвэрлэх бүрэн боломжтой болчихлоо. Тиймээс хувь хүн
          мэдээллээ маш сайн нандигнаж хамгаалах хэрэгтэй. Мөн дотооддоо үүнийг
          маш сайн боловсруулаад хадгалах хэрэгтэй. Дата бол ерөөсөө бүх зүйл.
          Датагаа боловсруулж чадахгүй бол олон улсын индексүүдээр улам л байр
          ухарна.
        </Text>
        <Text
          style={[styles.textTitle, { textAlign: "center", color: "#b17f5e" }]}
        >
          АЛХАМ 1
        </Text>
        <Text style={[styles.textStatus, { textAlign: "center" }]}>
          И-Мэйл рүүгээ орсон бол заавал гарах хэрэгтэй.
        </Text>
        <Text
          style={[styles.textTitle, { textAlign: "center", color: "#b17f5e" }]}
        >
          АЛХАМ 2
        </Text>
        <Text style={[styles.textStatus, { textAlign: "center" }]}>
          Үнэгүй интернэтэд холбогдохгүй байх.
        </Text>
        <Text
          style={[styles.textTitle, { textAlign: "center", color: "#b17f5e" }]}
        >
          АЛХАМ 3
        </Text>
        <Text style={[styles.textStatus, { textAlign: "center" }]}>
          Өөр нэг байгууллагад очоод сүлжээнд холбогдохгүй байх.
        </Text>
        <Text
          style={[styles.textTitle, { textAlign: "center", color: "#b17f5e" }]}
        >
          АЛХАМ 4
        </Text>
        <Text style={[styles.textStatus, { textAlign: "center" }]}>
          Байгууллага болгон мэдээллийн аюулгүй байдлын журамтай байх хэрэгтэй,
          түүнийг ажилтан болгон мөрдөж, үүнд хяналт тавьж байх хэрэгтэй.
        </Text>

        <Text style={styles.textTitle}>
          Ирээдүйд датаг бид худалдаж авдаг болох болов уу?
        </Text>
        <Text style={styles.textStatus}>
          Тийм. Ерөнхийдөө худалдаж авдаг болно, одоо ч тэр зам руу ойртож
          байна. Таны нэр, нас, хүйс, гэрийн хаяг, дансны мэдээлэл зэргийг
          нууцлаад бусдыг нь тухайн байгууллага хуулийн хүрээнд эргэлтэд оруулж
          болно. Жишээлбэл, эрүүл мэндийн үйлчилгээ авсан хүний тоо, өвчлөлийн
          хувь зэргийг боловсруулж нээлттэй болгох нь өндөр ач холбогдолтой.
        </Text>
        <Text style={styles.textTitle}>
          Хувь хүн өөрийн мэдээллээ хэрхэн хамгаалах эсэхэд таны зүгээс өгөх
          зөвлөгөө?
        </Text>
        <Text style={styles.textStatus}>
          Тодорхой статистикийг харвал хувь хүн рүү чиглэсэн гаднын халдлагуудын
          70 хувь нь тухайн хүний ажиллаж байгаа байгууллагын мэдээлэл рүү
          халдах зорилготой байна. Байгууллагын энгийн нэг ажилтан
          байгууллагынхаа и-мэйл хаягийн кодыг алдсанаараа тухайн байгууллагын
          бүх ажилчдын мэдээлэл алдагдах, байгууллагын үнэ цэн нөү-хау алдагдах,
          нийгэмд буруугаар таниулах, цаашлаад үйл ажиллагааг нь зогсоох хүртэл
          эрсдэлийг бий болгож болно. Таны хувийн мэдээлэл зөвхөн өөрийн тань
          хувийн мэдээлэл байхаа больсон. Тухайн ажилтны мэдээллийн ард
          байгууллага нь, харин байгууллагын ард улс орны эдийн засаг явж байдаг
          гэдгийг санах хэрэгтэй. Өөрөөр хэлбэл, таны мэдээлэл байгууллага, улс
          үндэстний хэмжээнд үнэ цэнтэй шүү гэдгийг иргэн бүр дор бүрнээ маш
          сайн ойлгох хэрэгтэй.
        </Text>
        <Image
          // source={require("../../../assets/newF/55m1.jpg")}
          source={{ uri: api + "/upload/" + "55m1.jpg" }}
          style={{ width: windowWidth / 1.1, height: 300 }}
        />
        <Text style={styles.textTitle}>
          BIG DATA <Text style={{ color: "#784785" }}>ГЭЖ ЮУ ВЭ?</Text>
        </Text>
        <Text style={styles.textStatus}>
          Big Data гэдэг нь маш олон төрлийн, асар их мэдээллийг хэлнэ. Асар их
          хэмжээний өгөгдлийг хадгалахад уламжлалт дата боловсруулах программ
          хангамжийг ашиглах боломжгүй ч хүн төрөлхтний өмнө нь шийдэж чадаагүй
          олон асуудлыг шийдэх боломжийг олгодог. Big data хэмээх ойлголтыг 3V
          гэж нэрлэх нь бий.
        </Text>

        <Text style={styles.textTitle}>VOLUME-ХЭМЖЭЭ</Text>
        <Text style={styles.textStatus}>
          Өгөгдлийн хэмжээ хамгийн чухал. Том хэмжээний өгөгдлийн тусламжтайгаар
          бага хэмжээтэй, нягтрал багатай, бүтэцгүй өгөгдлийг боловсруулдаг.
        </Text>
        <Text style={styles.textTitle}>VELOCITY-ХУРД</Text>
        <Text style={styles.textStatus}>
          Энэ нь өгөгдлийг хүлээн авах болон үйлдэл хийх хурдыг хэлнэ.
        </Text>
        <Text style={styles.textTitle}>VARIETY-ОЛОН ТӨРӨЛ</Text>
        <Text style={styles.textStatus}>
          Уламжлалт өгөгдлүүд тодорхой бүтэц зохион байгуулалттай, эмх
          цэгцтэйгээр системд ирдэг байсан бол дата хүлээн авах тоо нэмэгдэхийн
          хэрээр дата нь ижил бүтэцгүй дуу, видео, аудио, бичвэр зэрэг төрөл
          бүрийн хэлбэрээр ирэх болсон.
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#b17f5e",
            fontSize: 20,
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          СҮҮЛИЙН ЖИЛҮҮДЭД НЭМЭЛТ 2V ГАРЧ ИРЭВ.
        </Text>
        <Text style={styles.textTitle}>VERACITY-ЗӨВ НАРИЙВЧЛАЛ</Text>
        <Text style={styles.textStatus}>
          Өдгөө big data нь нэг төрлийн капитал болж байна. Дэлхийд нөлөө бүхий
          технологийн компаниудыг амжилтад хүргэж буй бүтээгдэхүүн үйлчилгээнүүд
          таны мэдээлэлд тулгуурлан хийсэн үйлчилгээнүүд байдаг.
        </Text>
        <Text style={styles.textTitle}>VALUE-ҮНЭ ЦЭН</Text>
        <Text style={styles.textStatus}>
          Өгөгдөл бүрд өөрийн гэсэн үнэ цэн байдаг. Дата хэр баталгаатай, энэхүү
          датаг юунд ашиглаж болох вэ гэдэг нь тухайн өгөгдлийн үнэ цэнийг
          тодорхойлдог.
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 15, borderColor: "#b17f5e" }}
        />
        <Text style={styles.textTitle}>
          Сэтгүүл зүйн салбарт ч дата сэтгүүл зүй хэмээх шинэ чиглэл үүсэж
          дэлхийн мэдээний өрөөнүүдийн сэтгүүлчдийн 50 гаруй хувийг дата
          сэтгүүлчид эзлэх болжээ.
        </Text>
        <View
          style={{ borderWidth: 1, marginBottom: 8, borderColor: "#b17f5e" }}
        />
        <Text style={styles.textStatus}>
          Big Data гэх нэр томьёог харьцангуй саяхнаас хэрэглэж эхэлсэн боловч
          үүний суурь нь 1960- 1970 оны үед анхны дата төвүүд үүссэн үеэс
          тавигдсан.{" "}
        </Text>
        <Text style={styles.textStatus}>
          Facebook, Youtube зэрэг онлайн үйлчилгээг хэрэглэх явцдаа ямар их
          хэмжээний мэдээллийн ул мөр үлдээж тэр нь дата болон хадгалагддагийг
          ойлгож эхэлсэн. Мөн сүүлийн үед big data-г хадгалах, шинжлэх зорилгоор
          тусгайлан бүтээсэн Hadoop зэрэг нээлттэй сангууд бий болсон. Энэ
          сангууд үүссэнээр их хэмжээний датаг ашиглахад хялбар, хадгалахад
          хялбар болсон.
        </Text>
        <Text style={styles.textStatus}>
          Датаг бид өдгөө аливаа нийгмийн асуудлыг илрүүлж, түүний учир
          шалтгааныг тайлбарлах, бизнесийн орчинд хэрэглэгчдээ илүү нарийн,
          дэлгэрэнгүй таньж үүнд тохирсон үйлчилгээ бий болгох, машин сургаж
          хүний үйл ажиллагааг илүү хөнгөвчлөх зэргээр салбар бүрд ашиглаж
          байна. Сүүлийн жилүүдэд сэтгүүлзүйн салбарт ч мөн дата сэтгүүлзүй
          хэмээх шинэ чиглэл үүсэж дэлхийн мэдээний өрөөнүүдийн сэтгүүлчдийн 50
          гаруй хувийг дата сэтгүүлч эзлэх болжээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/57m1.jpg")}
          source={{ uri: api + "/upload/" + "57m1.jpg" }}
          style={{ width: windowWidth / 1.1, height: 300 }}
        />
        <Text
          style={[styles.textTitle, { textAlign: "right", color: "#b17f5e" }]}
        >
          Монгол Улсын Их Хурлын 2021 оны намрын ээлжит чуулганы үеэр Инновац,
          цахим бодлогын байнгын хорооноос манай улс дэлхий дахинаа өрнөж буй аж
          үйлдвэрийн IV хувьсгалтай хөл нийлүүлэн алхаж, цахим шилжилт хийх
          хууль, эрх зүйн орчныг бүрдүүлэхээр доорх таван хуулиар цахим
          харилцааг зохицуулахаар болов.
        </Text>
        <View
          style={{ borderWidth: 1, marginTop: 10, borderColor: "#b17f5e" }}
        />
        <Text style={styles.textTitle}>
          НИЙТИЙН МЭДЭЭЛЛИЙН ИЛ ТОД БАЙДЛЫН ТУХАЙ ХУУЛЬ
        </Text>
        <Text style={styles.textStatus}>
          Таван төрлийн 68 мэдээллийг байнгын ил тод, нээлттэй байлгаж, шинэчилж
          байх үүргийг мэдээлэл хариуцагчид олгосон.
        </Text>
        <Text style={styles.textTitle}>
          ХҮНИЙ ХУВИЙН МЭДЭЭЛЭЛ ХАМГААЛАХ ТУХАЙ ХУУЛЬ
        </Text>
        <Text style={styles.textStatus}>
          Тус хуульд дараах зүйлсийг хүний хувийн мэдээлэл хэмээн үзсэн. Үүнд:
        </Text>
        <Text style={styles.textStatus}>
          Хүний үндэс, угсаа, шашин шүтлэг, итгэл үнэмшил, эрүүл мэнд, захидал
          харилцаа, генетик болон биометрик мэдээлэл, тоон гарын
        </Text>
        <Text style={styles.textStatus}>
          үсгийн хувийн түлхүүр, ял эдэлж байгаа болон ял эдэлсэн эсэх, бэлгийн
          болон хүйсийн чиг баримжаа, илэрхийлэл, бэлгийн харьцааны талаарх
          мэдээллийг болон хүний эцэг /эх/-ийн нэр, өөрийн нэр, төрсөн он, сар,
          өдөр, төрсөн газар, оршин суугаа газрын хаяг, байршил, иргэний
          бүртгэлийн дугаар, хөрөнгө, боловсрол, гишүүнчлэл, цахим тодорхойлогч,
          хүнийг шууд болон шууд бусаар тодорхойлох, эсхүл тодорхойлох боломжтой
          бусад мэдээллийг хүний хувийн мэдээлэл гэж тодорхойлж Хүний хувийн
          мэдээлэл хамгаалах тухай хуулийг баталлаа.
        </Text>
        <Text style={styles.textStatus}>
          Хуулийн онцлох хэсгүүдээс дурдвал,
        </Text>
        <Text style={styles.textStatus}>
          -Төрийн байгууллага, хуулийн этгээд нь
        </Text>
        <Text style={styles.textStatus}>
          мэдээлэл цуглуулж боловсруулж, ашиглахдаа мэдээллийн эзний зөвшөөрлийг
          заавал авдаг байхаар тусгасан.
        </Text>
        <Text style={styles.textStatus}>
          -Худалдаа үйлчилгээний байгууллагууд гарын хурууны хээ ашиглан
          гишүүнчлэлийн хөнгөлөлт үзүүлдэг, банк, санхүүгийн байгууллагууд
          хурууны хээ уншуулдаг асуудал байхгүй болно.
        </Text>
        <Text style={styles.textStatus}>
          -Хуучин хуулиар хувь хүн нууцаа өөрөө хамгаалдаг байсан бол шинэчилсэн
          найруулгаар хүний хувийн мэдээллийг хувь хүнээс гадна ажил үүргийн
          хувьд мэдсэн мэдээлэл хариуцагч давхар хамгаалдаг байхаар зохицуулсан.
        </Text>
        <Text style={styles.textStatus}>
          -Түүнчлэн хүний хувийн мэдээллийг алдсан, халдсан бол оногдуулах ялын
          бодлого нь чанга байх ёстой гэж Байнгын хорооноос үзэн Эрүүгийн хууль
          дахь ялын бодлогыг чангатгаж хорих ялын хэмжээг нэмэгдүүлсэн. Хүн бүрд
          хувийн орон зайг хамгаалах бол төрийн үүрэг. Ийм ч учраас дууны,
          дүрсний, дуу-дүрсний бичлэгийн төхөөрөмжийг байршуулах зорилгыг
          тодорхойлсон.
        </Text>
        <Text style={styles.textStatus}>
          Өөрөөр хэлбэл зөвхөн нийтийн зориулалттай орон сууцны орох, гарах
          нийтийн хэсэг болон дундын эзэмшлийн талбайд оршин суугчдын аюулгүй
          байдлыг хамгаалах, дундын эзэмшлийн эд хөрөнгийн бүрэн бүтэн байдлыг
          хангах, ажлын байранд хүний болон мэдээллийн аюулгүй байдлыг
          хамгаалах, байгууллагын эд хөрөнгийн бүрэн бүтэн байдлыг хангах, замын
          хөдөлгөөний мэдээлэл цуглуулах, боловсруулах, ашиглах, түүнд дүн
          шинжилгээ хийх зорилгоор л камер байршуулахыг зөвшөөрсөн юм.
        </Text>
        <Text style={[styles.textTitle]}>ЦАХИМ ГАРЫН ҮСГИЙН ТУХАЙ ХУУЛЬ</Text>
        <Text style={[styles.textStatus]}>
          Өнгөрсөн 10 жилийн хугацаанд төрөөс нийт 30,399 тоон гарын үсгийн
          гэрчилгээг иргэн, хуулийн этгээдэд олгосон бөгөөд эдгээр 30 гаруй
          мянган гарын үсэг бол ерөөс тендерт орох зорилгоор л хуулийн этгээдүүд
          авсан байна. Ийм ч учраас тоон гарын үсгийн хэрэглээг нэмэгдүүлэх
          төрийн байгууллага, иргэд хоорондын өдөр тутмын үйл ажиллагаанд өргөн
          нэвтрүүлэх шаардлага бий болоод байсан.
        </Text>
        <Text style={[styles.textStatus]}>
          Цахим гарын үсгийн тухай хуулийг шинэчлэн баталснаар цаашид иргэд,
          хуулийн этгээд гэрээ хэлцэл хийх, иргэд төрийн байгууллагад заавал
          биечлэн ирэхгүй өргөдөл гомдлоо цахимаар гаргахдаа тоон гарын үсгээ
          ашиглан цаг зав, мөнгө хөрөнгөө хэмнэх гэх мэт олон талын үр өгөөжөө
          өгөх болно. Улсын бүртгэлийн байгууллага 16 насанд хүрсэн Монгол Улсын
          иргэн бүрд нэг удаа үнэ төлбөргүй тоон гарын үсэг олгохоор
          зохицуулсан. Харин 5 жил тутам тоон гарын үсгийн хугацааг сунгах
          боломжтой болох юм.
        </Text>

        <Text style={[styles.textTitle]}>
          ВИРТУАЛ ХӨРӨНГИЙН ҮЙЛЧИЛГЭЭ ҮЗҮҮЛЭГЧИЙН ТУХАЙ ХУУЛЬ
        </Text>
        <Text style={[styles.textStatus]}>
          Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн тухай хууль нь виртуал
          хөрөнгийн зах зээл дээр үйлчилгээ үзүүлэх хуулийн этгээдийг бүртгэх,
          үйл ажиллагаанд нь хяналт тавих, түүнтэй холбоотой эрх, үүргийг
          тодорхойлохтой холбогдсон суурь харилцааг зохицуулсан анхдагч хууль
          юм.
        </Text>
        <Text style={[styles.textStatus]}>
          “Виртуал хөрөнгө” гэх нэр томьёог хуульд тодорхойлсон ба эдийн бус
          хөрөнгөд хамааруулахаар зохицуулсан. Гэхдээ виртуал хөрөнгө нь мөнгөн
          тэмдэгт, үнэт цаас, төлбөрийн хэрэгсэл биш юм.
        </Text>
        <Text style={[styles.textStatus]}>
          Виртуал хөрөнгийг зөвхөн виртуал хөрөнгийн үйлчилгээ үзүүлэгчээр
          бүртгүүлсэн компаниар дамжуулан нийтэд санал болгох, худалдах бөгөөд
          виртуал хөрөнгийн үйлчилгээ үзүүлэх хүсэлтэй компаниудын (хөрөнгийн эх
          үүсвэр нь хууль ёсны байх, мэдээлэл, технологийн дэд бүтцийн
          тасралтгүй, найдвартай ажиллагаа, нууцлал, аюулгүй байдлыг хангасан
          байх, бүтээгдэхүүн, үйлчилгээ, технологитой холбоотой мөнгө угаах,
          терроризмыг санхүүжүүлэх эрсдэлийн үнэлгээг хийсэн болон эрсдэлийг
          бууруулах, удирдах талаар авах арга хэмжээний төлөвлөгөөтэй байх
          зэрэг) болон мөнгө угаах, терроризмыг санхүүжүүлэхтэй тэмцэх,
          эрсдэлийг бууруулах зорилгоор баталсан бусад журмуудад заасан
          шаардлагуудыг хангаснаар виртуал хөрөнгийн үйлчилгээ үзүүлэгчээр
          бүртгүүлэх боломжтой болж байна.
        </Text>

        <Text style={[styles.textTitle]}>
          КИБЕР АЮУЛГҮЙ БАЙДЛЫН ТУХАЙ ХУУЛЬ
        </Text>
        <Text style={[styles.textStatus]}>
          Кибер аюулгүй байдлын тухай хууль батлагдсанаар кибер аюулгүй байдлыг
          хангах тогтолцоо, эрх зүйн орчин бүрдэж, иргэн хуулийн этгээд төрийн
          байгууллагын кибер аюулгүй байдлыг хангах талаарх эрх, үүрэг нь
          тодорхой болж, кибер аюулгүй байдлыг хангах үйл ажиллагааг
          хэрэгжүүлэх, кибер аюулгүй байдлын эрсдэлийн үнэлгээ, мэдээллийн
          аюулгүй байдлын аудит хийх, хяналт тавих, нэгдсэн удирдлага зохион
          байгуулалтаар хангах боломж бүрджээ.
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

export default Page9;

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