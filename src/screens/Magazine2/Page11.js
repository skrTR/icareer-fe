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
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Page11 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
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
            color: "black",
            marginTop: 80,
            fontSize: 20,
            flex: 1,
          }}
        >
          ОНЦЛОХ ТЕХНОЛОГИ
        </Text>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "black",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            ШИНЭ “ГАНЦ ЭВЭРТ”
          </Text>

          <View
            style={{
              borderWidth: 3,
              borderColor: "#00aeef",
              alignSelf: "center",
              width: 60,
              marginTop: 20,
            }}
          />

          <Image
            // source={require("../../../assets/newF/5m6.jpg")}
            source={{ uri: api + "/upload/" + "5m6.jpg" }}
            style={{ width: windowWidth, height: 100, resizeMode: "contain" }}
          />
        </View>
        <Image
          // source={require("../../../assets/newF/70m.jpg")}
          source={{ uri: api + "/upload/" + "70m.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <View>
          <Image
            source={{ uri: api + "/upload/" + "5m3.jpg" }}
            // source={require("../../../assets/newF/5m3.png")}
            style={{
              width: windowWidth,
              height: 300,
            }}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>69-75 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
        />

        <Text style={styles.textStatus}>
          Блокчэйн суурьтай старт-ап “OpenSea”-г хамтран үүсгэн байгуулагчид
          болох 30 настай Алекс Аталла, Девин Финзер нар 2.2 тэрбум ам.долларын
          үнэлгээтэй компанидаа тус бүр 18.5 хувийн хувьцаа эзэмшдэг. Тус
          компанийг 2017 онд дижитал хөрөнгө бий болгох зорилготойгоор урлагийн
          бүтээл, спортын карт, хөгжим зэргийг борлуулан эхлүүлжээ. Улмаар энэ
          оны нэгдүгээр сард 300 тэрбум ам.долларын хөрөнгө оруулалтыг амжилттай
          татсанаар компанийн үнэлгээ 13.3 тэрбум ам.долларт хүрсэн юм.{" "}
        </Text>
        <Text style={styles.textStatus}>
          Ганц эвэрт болохын өмнө үйл ажиллагаагаа эхлүүлээд хоёр жил болсон ч
          сард 1.1 сая ам.долларын арилжаа хийдэг 4,000 гаруй хэрэглэгчтэй
          байсан нь үүсгэн байгуулагчдын хувьд сэтгэлээр унах нэг шалтгаан
          болоод байсан тул тэр жилдээ бизнесээ хоёр дахин томруулах зорилтыг
          тавьсан юм. Өнгөрсөн оны хоёрдугаар сард NFT зах зээлийн их тэсрэлт
          болж долоодугаар сард нь тэдний арилжааны хэмжээ 350 сая ам.долларт
          хүрснээр тэд зорилгодоо хүрч чаджээ.
        </Text>
        <Text style={styles.textStatus}>
          Дэлхийн хамгийн том NFT арилжааны платформ нь хэрэглэгчдэд дараах
          боломжийг олгодог.
        </Text>
        <Text style={styles.textStatus}>• NFT худалдаж авах</Text>
        <Text style={styles.textStatus}>• Өөрийн NFT-ээ бүтээх</Text>
        <Text style={styles.textStatus}>
          • Авсан, цуглуулсан NFT-ээ худалдаалах
        </Text>
        <Text style={styles.textStatus}>
          “OpenSea”-ийн өдрийн арилжааны хэмжээ 2021 онд зургаан сарын дотор 100
          дахин өсөлт үзүүлжээ. Улмаар өнгөрсөн оны наймдугаар сард арилжаа нь
          1.5 тэрбум ам.долларыг давж дээд амжилт тогтоосон юм.
        </Text>
        <Text style={styles.textStatus}>
          Үүсгэн байгуулагчдын нэг Девин Финзер “OpenSea”-ийн амжилтын гол
          цөмийг ”Зөв цагтаа, зөв газраа байж, хэрэглэгчийн хүсэж буй зүйлийг
          нээлттэйгээр сонсож, хэрэгжүүлсэн нь бидний амжилтын үндэс” хэмээн
          тодорхойлжээ.
        </Text>

        <Image
          // source={require("../../../assets/newF/70m1.png")}
          source={{ uri: api + "/upload/" + "70m1.png" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 400,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Богино хугацаанд Ганц эвэрт болж чадсан “OpenSea”-ийн хувьд амжилт
          амархан ирсэн ч тус зах зээл дээр хэрэглэгчдийг хохироож буй залилан,
          NFT зах зээлийн тогтворгүй байдал мөн шинээр гарч ирж буй өрсөлдөгч
          зэрэг сорилтууд өмнө нь хүлээж байгаа юм.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ width: "40%" }}>
            <Text style={[styles.textTitle]}>NFT</Text>
            <Text style={[styles.textStatus]}>Хөрвүүлэх боломжгүй</Text>
            <Text style={[styles.textStatus]}>
              Блокчэйн технологи дээр суурилсан
            </Text>
            <Text style={[styles.textStatus]}>
              Aрилжаанд ашиглах зориулалтгүй
            </Text>
          </View>
          <Text
            style={{
              width: "20%",
              fontSize: 20,
              color: "#00aeef",
              fontFamily: "Montserrat-bold",
            }}
          >
            VS
          </Text>
          <View style={{ width: "40%" }}>
            <Text style={[styles.textTitle]}>COIN</Text>
            <Text style={[styles.textStatus]}>Хөрвүүлэх боломжтой</Text>
            <Text style={[styles.textStatus]}>
              Блокчэйн технологи дээр суурилсан
            </Text>
            <Text style={[styles.textStatus]}>
              Арилжаанд ашиглах зориулалттай
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          БЛОКЧЕЙН ТЕХНОЛОГИЙН ТУСЛАМЖТАЙГААР ӨӨРИЙН ЦУГЛУУЛГАА ЦАХИМ ОРЧИНД
          НАЙДВАРТАЙ, АЮУЛГҮЙГЭЭР УРТ ХУГАЦААНД ХАДГАЛАХ БОЛОМЖИЙГ NFT ТАНД
          ОЛГОХ ЮМ.
        </Text>
        <Image
          // source={require("../../../assets/newF/70m2.png")}
          source={{ uri: api + "/upload/" + "70m2.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 300,
          }}
          resizeMode="contain"
        />
        <Text style={styles.textStatus}>
          Шүтдэг дуучныхаа зургийг ханандаа өлгөчхөөд хуучирч гандаж байгааг нь
          хараад сэтгэлээр унах, чухал бичиг баримтаа элэгдтэл нь гэрийнхээ хаа
          нэгтээ хөглөрүүлэн хаях, яах учраа олохгүй байх, цомгийн цуглуулга нь
          нэмэгдэх тусам гэртээ шинэ тавилга авах гэх мэт асуудлууд дижитал
          эриний хүмүүст асуудал байхаа аль хэдийнээ больжээ. Учир нь тэд
          блокчэйн технологийн тусламжтайгаар өөрийн цуглуулгыг цахим орчинд
          хадгалах боломжтой болов. Мөн уран бүтээлчид өөрийн зургаа таниулахын
          тулд дэлхийн нэг тивээс нөгөө тив хүртэл бүх бүтээлээ нүүлгэх
          шаардлагагүй болжээ. Энэ бүх асуудлыг NFT шийдэж өгч байгаа бөгөөд
          блокчэйн технологийн тусламжтайгаар дээрх зүйлсийг цахим хувилбарт
          хувирган, цорын ганц хувилбараар, найдвартай, аюулгүйгээр урт
          хугацаанд хадгалах боломжийг бүрдүүлсэн юм.
        </Text>
        <Text style={styles.textStatus}>
          Улмаар хүмүүс дижитал хөрөнгөтэй болж, түүнийгээ бүртгэн, өмчилж,
          бусдад шилжүүлэх бүрэн боломжтой болсон юм.
        </Text>
        <Text style={styles.textStatus}>
          NFT-ийг онцгой болгож, үнэ цэнийг нэмж байгаа зүйлийг энд дурдахгүй
          өнгөрч болохгүй.
        </Text>
        <Text style={styles.textStatus}>
          Ван Гогийн зургийн хуулбарууд дэлхий даяар сая саяар зарагддаг гэхдээ
          тэд бүгд нийлээд эх хувилбарыг нь орлож чадахгүй. Мөн түүний үнэ
          цэнийг орлож чадахгүй. Үүнтэй адил цахим орчинд тренд болж байгаа нэг
          meem байлаа гэж бодоход эх хувилбар нь түүнээс илүү үнэ цэнтэй гэдгийг
          тодорхойлж байгаа юм.
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          “АЛИВАА БИЕТ УРЛАГИЙН ҮНЭ ЦЭНИЙГ ИЛТГЭДЭГ ХАМГИЙН ГОЛ ХҮЧИН ЗҮЙЛ НЬ
          ТҮҮНИЙ ЗОХИОГЧИЙН ЭРХИЙГ ХЭН ЭЗЭМШИЖ БАЙГААГ БАТЛАН ХАРУУЛАХ ЮМ. ХАРИН
          ЭНЭ НЬ ДИЖИТАЛ ЕРТӨНЦӨД NFT ГАРАХААС ӨМНӨ БОДИТОЙ БАЙГААГҮЙГ NFT БОДИТ
          БОЛГОЖ БАЙНА.”
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Image
            // source={require("../../../assets/newF/71m.jpg")}
            source={{ uri: api + "/upload/" + "71m.jpg" }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderWidth: 4,
              borderColor: "#0066a6",
            }}
          />
          <View>
            <Text style={[styles.textTitle, { marginVertical: 5 }]}>
              Девин Финзер
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              Гүйцэтгэх захирал,
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              хамтран үүсгэн
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              байгуулагч, OpenSea
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/72m1.png")}
          source={{ uri: api + "/upload/" + "72m1.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 300,
            resizeMode: "contain",
          }}
        />
        <Text
          style={[
            styles.textTitle,
            {
              textAlign: "center",
              fontFamily: "Montserrat-bold",
              fontSize: 30,
            },
          ]}
        >
          АНХНЫ{" "}
          <Text
            style={[
              styles.textTitle,
              {
                textAlign: "center",
                fontFamily: "Mogul",
                fontSize: 30,
                color: "#ef58a0",
              },
            ]}
          >
            NFT ATM
          </Text>
        </Text>
        <Image
          // source={require("../../../assets/newF/72m2.jpg")}
          source={{ uri: api + "/upload/" + "72m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        />

        <Text style={styles.textStatus}>
          Ирээдүйд бид дижитал урлагийн бүтээлүүдийг хийжүүлсэн ундаа, чипс
          худалдан авч байгаа мэт гэрийнхээ гаднаас бүүр орцноосоо гарахгүй
          худалдан авах эхлэлийг “Neon” хэмээх дижитал урлаг цуглуулгын платформ
          тавьжээ. Уг платформ нь дэлхийн хамгийн анхны NFT худалдаалах ATM-ийг
          Нью-Йоркийн Манхеттэний санхүүгийн гудамжинд байрлуулжээ. Уг ATM нь
          жирийн нэг автомат машин шиг харагдах бөгөөд дотор нь QR код бүхий
          NFT-үүд байрлана. Та ямар NFT худалдаж авахаа санамсаргүй байдлаар
          сонгох юм. Үнийн хувьд 5.99-420.99 ам.долларын хэлбэлзэх бөгөөд та
          тооцоогоо бэлэн мөнгөөр болон криптовалютаар хийж болох аж.
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#ef58a0",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          “ЭНЭ БОЛ ДЭЛХИЙ ДАХИНЫ ХУУЧИН ТЕХНОЛОГИ ШИНЭ ТЕХНОЛОГИО ХЭРХЭН ХҮЛЭЭН
          АВЧ БАЙГААГ ХАРУУЛЖ ЧАДСАН МАШ ХҮЧТЭЙ МЕССЕЖ БОЛЖ БАЙНА.”
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Image
            // source={require("../../../assets/newF/72m3.jpg")}
            source={{ uri: api + "/upload/" + "72m3.jpg" }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderWidth: 4,
              borderColor: "#ef58a0",
            }}
          />
          <View>
            <Text style={[styles.textTitle, { marginVertical: 5 }]}>
              Кайли Заппител
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              Нион платформын
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              гүйцэтгэх захирал
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/73m1.jpg")}
          source={{ uri: api + "/upload/" + "73m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 300,
            resizeMode: "contain",
          }}
        />

        <Text
          style={[
            styles.textTitle,
            { fontFamily: "Cambria-bold-italic", marginVertical: 0 },
          ]}
        >
          ХАМГИЙН АНХНЫ
        </Text>
        <Text style={[styles.textTitle, { fontSize: 40, marginVertical: 0 }]}>
          NFT МУЗЕЙ
        </Text>
        <Image
          // source={require("../../../assets/newF/73m3.jpg")}
          source={{ uri: api + "/upload/" + "73m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 300,
            resizeMode: "cover",
          }}
        />
        <Text style={styles.textStatus}>
          Дэлхийн хамгийн анхны NFT музей нь дижитал урлагийг хүмүүст таниулж,
          ойлгуулах зорилготойгоор Сиэтл хотод энэ оны нэгдүгээр сард нээлтээ
          хийжээ. Тэнд 3,000 хавтгай дөрвөлжин танхимд өндөр нягтаршил бүхий лед
          дэлгэцүүдийг байрлуулснаас гадна зочдод дижитал урлагийг ойлгуулах
          зорилготой бичвэрүүдийг байрлуулжээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/73m2.jpg")}
          source={{ uri: api + "/upload/" + "73m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
          }}
        />
        <Text
          style={[
            styles.textStatus,
            { fontWeight: "100", marginVertical: 0, marginTop: 15 },
          ]}
        >
          2021 ОНД ХАМГИЙН ҮНЭТЭЙ ЗАРАГДСАН
        </Text>
        <Text
          style={[
            styles.textTitle,
            {
              fontSize: 30,
              marginVertical: 0,
              textAlign: "center",
              color: "#784785",
            },
          ]}
        >
          5 NFT БYТЭЭЛ
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { fontSize: 45, marginVertical: 0, color: "#784785" },
            ]}
          >
            01.
          </Text>
          <View>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              THE MERGE
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              $91.8 САЯ АМ.ДОЛЛАР
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/74m1.jpg")}
          source={{ uri: api + "/upload/" + "74m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
            marginTop: 15,
          }}
        />
        <Text style={[styles.textStatus]}>
          The Merge-ийг Пак хэмээх өөрийгөө нууцалсан дижитал зураач бүтээжээ.
          Уг бүтээл 2021 оны арванхоёрдугаар сарын 6-нд NFT төвлөрсөн бус зах
          зээлийн Nifty Gateway дээр 91.8 сая доллароор зарагджээ. Гэхдээ энэ
          бүтээлийг 312,686 ширхэг болгон хувааж 28,983 худалдан авагчид
          тараасан юм. Эдгээр хэсгүүдийг илүү том масс болгож, хоёрдогч зах
          зээлд борлуулахын тулд нөөцлөх боломжтой. Борлуулалтын төгсгөлд нийт
          91.8 сая ам.доллар зарцуулсан нь өнөөг хүртэл зарагдсан хамгийн үнэтэй
          NFT болжээ.
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { fontSize: 45, marginVertical: 0, color: "#784785" },
            ]}
          >
            02.
          </Text>
          <View>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              EVERYDAY: THE FIRST
            </Text>
            <Text
              style={[
                styles.textTitle,
                { marginVertical: 0, textAlign: "center" },
              ]}
            >
              5000 DAYS
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              $69 САЯ АМ.ДОЛЛАР
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/74m2.jpg")}
          source={{ uri: api + "/upload/" + "74m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
            marginTop: 15,
          }}
        />
        <Text style={[styles.textStatus]}>
          “Өдөр бүр: Эхний 5,000 өдөр” бүтээлийг бол Бипл гэх дижитал зураач
          Майкл Винкельманн бүтээжээ. Уг бүтээлийг Кристигийн дуудлага
          худалдаагаар худалдаалахад уламжлалт үйлчлүүлэгчид 100 ам.доллароор
          үнэлсэн. Гэхдээ Бипл нь зургаан оронтой борлуулалтаараа крипто
          урлагийн зах зээлд алдартай байсан тул бүтээл нь 1 сая ам.доллароос
          дээш өсөхөд ердөө ганцхан цаг зарцуулжээ. Эцсийн үр дүн нь 21-нд
          дууссан уг бүтээлийн үнэ 69 сая ам.долларт хүрсэн юм.
        </Text>
        <Text style={[styles.textStatus]}>
          "Эхний 5000 хоног" бол NFT-ийн зах зээлд чухал урлагийн бүтээл бөгөөд
          энэ нь үндсэн үзэгчдийг үл хөдлөх хөрөнгийн талаар судлах замыг зассан
          юм.
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { fontSize: 45, marginVertical: 0, color: "#784785" },
            ]}
          >
            03.
          </Text>
          <View>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              BEEPLE, HUMAN ONE
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              $29.98 САЯ АМ.ДОЛЛАР
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/75m1.png")}
          source={{ uri: api + "/upload/" + "75m1.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
          }}
        />
        <Text style={[styles.textStatus]}>
          Сансрын нисгэгчид солигдох орчинд алхаж буй энэхүү зургийг Райан
          Зуррер 2021 оны арванхоёрдугаар сард 29,98 сая ам.доллароор худалдаж
          авсан юм.
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { fontSize: 45, marginVertical: 0, color: "#784785" },
            ]}
          >
            04.
          </Text>
          <View>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              LARVA LABS, CRYPTOPUNK
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              $11.75 САЯ АМ.ДОЛЛАР
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/75m2.png")}
          source={{ uri: api + "/upload/" + "75m2.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
          }}
        />
        <Text style={[styles.textStatus]}>
          CryptoPunks бол Ethereum блокчэйн дээр суурилсан өвөрмөц байдлаар
          бүтээгдсэн дүрүүдээс бүрдсэн NFT цуглуулга юм. 2021 оны зургадугаар
          сард Лондонгийн дуудлага худалдааны Sotheby's "Covid Alien" гэгддэг
          CryptoPunk №7523-ыг 11.75 сая ам.доллароор худалдаалсан нь өнөөг
          хүртэл зарагдсан хамгийн үнэтэй CryptoPunk болжээ.
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text
            style={[
              styles.textStatus,
              { fontSize: 45, marginVertical: 0, color: "#784785" },
            ]}
          >
            05.
          </Text>
          <View>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              LARVA LABS, CRYPTOPUNK
            </Text>
            <Text
              style={[
                styles.textTitle,
                { marginVertical: 0, textAlign: "center" },
              ]}
            >
              #3100
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              $7.58 САЯ АМ.ДОЛЛАР
            </Text>
          </View>
        </View>
        <Image
          // source={require("../../../assets/newF/75m3.jpg")}
          source={{ uri: api + "/upload/" + "75m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
          }}
        />
        <Text style={[styles.textStatus]}>
          CryptoPunk #3100 нь 9 харь гарагийн панкс цувралын нэг хэсэг бөгөөд
          цэнхэр цагаан толгойн тууз зүүсэн харь гарагийн хүн юм.
        </Text>
        <Text style={[styles.textStatus]}>
          10,000 CryptoPunk-ийн зөвхөн 406 нь толгойн туузтай юм. Энэ нь 2017
          онд анх худалдаанд гарсан бөгөөд 2021 оны гуравдугаар сард 2 сая
          ам.долларын үнийн санал ирснээр нэр хүнд нь өсөж, эцэст нь тухайн сард
          7.58 сая ам.доллароор зарагдсан. NFT нь одоогоор 35,000 ETH-ээр
          зарагдаж байгаа бөгөөд энэ нь энэхүү нийтлэлийг бичиж байх үед
          ойролцоогоор 50 сая ам.доллар байна.
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

export default Page11;

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
