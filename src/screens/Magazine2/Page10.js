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
const Page13 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ width: windowWidth }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        // source={require("../../../assets/newF/60m1.jpg")}
        source={{ uri: api + "/upload/" + "60m1.jpg" }}
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
          ТЕХНОЛОГИ
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
            НИЙГМИЙН ХАРИЛЦААНЫ ДАРААГИЙН ШАТ
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-bold",
              color: "white",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 50,
            }}
          >
            METAVERSE
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>61-67 | </Text>
          <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
            CAREER DEVELOPER
          </Text>
        </View>
        <View
          style={{ borderWidth: 1, marginVertical: 5, borderColor: "grey" }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.textTitle, { marginTop: 20, fontSize: 30 }]}>
            METAVERSE
          </Text>
          <Text style={[styles.textTitle, { fontSize: 20, marginBottom: 15 }]}>
            ГЭЖ ЮУ ВЭ?
          </Text>
        </View>
        <Image
          // source={require("../../../assets/newF/62m1.jpg")}
          source={{ uri: api + "/upload/" + "62m1.jpg" }}
          style={{ width: windowWidth / 1.1, alignSelf: "center", height: 300 }}
        />
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
            }}
          >
            М
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginHorizontal: 10,
              marginRight: 40,
            }}
          >
            етаверс гэдэг нь олон төрлийн виртуал орон зайг ашигласан 3D онлайн
            ертөнц юм.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
            marginHorizontal: 8,
          }}
        >
          Өөрөөр хэлбэл, бидний хэрэглэдэг маш олон төрлийн платформыг нэгтгэн
          нэг цогц виртуал ертөнцийг бий болгож байна хэмээн ойлгож болно.
          Метаверс нь хэрэглэгчдэд нийгмийн харилцааны дараагийн шатыг санал
          болгож байгаа бөгөөд 3D виртуал ертөнцөд та өөрийн аватар дүрээр
          дамжуулан найзуудтайгаа хөгжилдөж, ажлаа хийж, бизнес уулзалтуудад
          оролцон мөн төрөл бүрээр өөрийгөө хөгжүүлж болох юм.
        </Text>

        <Text style={styles.textStatus}>
          Одоогоор метаверс бүрэн ашиглагдах хэмжээнд хүртлээ хөгжөөгүй байгаа ч
          түүний элементүүд аль хэдийнээ бидний амьдралд ашиглагдаад эхэлжээ.
          Жишээлбэл, бидний өдөр тутамдаа тоглодог видео тоглоомууд бол бидэнд
          хамгийн ойр, бодитой оршин байгаа метаверсийн хувилбар юм.
          Хөгжүүлэгчид тоглоом дотор виртуал эдийн засгийн харилцаа болон
          амьдралд байдаг үйл явдлуудыг нэмснээр жирийн нэг видео тоглоомын хил
          хязгаарыг давж хэрэглэгчдэд бодит амьдрал дээр хийгддэг үйлдлүүдээ
          хийх зэргээр илүү бодит мэдрэмжүүдийг өгч эхэлсэн нь биднийг
          метаверсийн иргэн болгох суурийг бэлтгэж байгаа юм.
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text
            style={[styles.textStatus, { textAlign: "center", fontSize: 30 }]}
          >
            META
          </Text>
          <AntDesign name="plus" size={24} color="black" />
          <Text
            style={[styles.textStatus, { textAlign: "center", fontSize: 30 }]}
          >
            UNIVERSE
          </Text>
          <MaterialCommunityIcons name="equal" size={24} color="black" />
          <Text
            style={[styles.textTitle, { textAlign: "center", fontSize: 30 }]}
          >
            METAVERSE
          </Text>
        </View>
        <Image
          // source={require("../../../assets/newF/62m2.jpg")}
          source={{ uri: api + "/upload/" + "62m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 30,
          }}
        />
        <Text style={styles.textStatus}>Метаверсэд ажиллах нь</Text>
        <Image
          // source={require("../../../assets/newF/62m3.jpg")}
          source={{ uri: api + "/upload/" + "62m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={styles.textStatus}>Метаверсэд суралцах нь</Text>
        <Image
          // source={require("../../../assets/newF/62m4.jpg")}
          source={{ uri: api + "/upload/" + "62m4.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={styles.textStatus}>Метаверсэд хөгжилдөж байгаа нь</Text>
        <Text style={styles.textStatus}>
          Метаверс хэмээх ойлголтыг анх Нил Стефенсоны бичсэн шинжлэх ухааны
          уран зөгнөлт “Цасны сүйрэл” (Snow Crash) романаас санаа аван
          боловсруулсан гэдэг. Ердөө хийсвэр төсөөлөл байсан санаа 30 жилийн
          дараа хүн төрөлхтний харилцаа холбоо, технологийн дэвшлийг шинэ шатанд
          аваачих агуу төсөл болон хувирч, технологийн акулуудыг сая сая тэрбум
          ам.долларыг энэхүү зах зээлийн бялуунаас хуваалцахад зориулан хөрөнгө
          оруулж эхэлнэ гэж хэн ч төсөөлөөгүй биз ээ.
        </Text>
        <Text style={styles.textStatus}>
          Өдгөө бидний амьдралд нэвтэрсэн метаверсийн зарим шинжийг агуулсан
          зүйлсийг нэрлэвэл:
        </Text>
        <Image
          // source={require("../../../assets/newF/63m3.jpg")}
          source={{ uri: api + "/upload/" + "63m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={[styles.textTitle, { marginTop: 10 }]}>SECOND LIFE</Text>
        <Text style={styles.textStatus}>
          Уг платформ нь хүмүүс өөрсдийн аватар дүрийг бүтээж виртуал ертөнцөд
          өөр амьдралаар амьдрах боломж олгодог. Тус платформыг 2003 онд АНУ-ын
          технологийн компани “Linden Lab” үүсгэн байгуулсан бөгөөд 2013 онд
          хэрэглэгчийн тоо нь 1 сая хүрчээ. “Second Life”-ийн “оршин суугчид”
          тоглоом тоглож, нийгмийн харилцаанд оролцож, дэлгүүр хэсэж, музей үзэх
          зэрэг бодит ертөнцөд хийж болох олон зүйлсийг хийдэг.
        </Text>
        <Image
          // source={require("../../../assets/newF/63m1.jpg")}
          source={{ uri: api + "/upload/" + "63m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={[styles.textTitle, { marginTop: 10 }]}>DECENTRA LAND</Text>
        <Text style={styles.textStatus}>
          Ethereum блокчэйн дээр суурилсан виртуал платформ юм. Энэхүү платформ
          дээр хүмүүс контент, аппликэйшн бүтээж, мөнгө олох боломжтой. Тус
          платформын бусдаас ялгарах онцлог нь хэрэглэгчид газар худалдан авч
          үүнийгээ хөгжүүлж, орон орны хүмүүстэй танилцаж, цахим орчинд хөрөнгө
          эзэмших боломжтой юм.
        </Text>
        <Image
          // source={require("../../../assets/newF/63m2.jpg")}
          source={{ uri: api + "/upload/" + "63m2.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={[styles.textTitle, { marginTop: 10 }]}>MINE CRAFT</Text>
        <Text style={styles.textStatus}>
          Minecraft нь 2021 оны байдлаар 238 сая гаруй борлогдож, 140 сая гаруй
          идэвхтэй хэрэглэгчтэй болсон бүх цаг үеийн хамгийн их борлуулалттай
          видео тоглоом юм. Энэхүү тоглоом нь гурван хэмжээст ертөнцөд
          блокуудаар дамжуулан төрөл бүрийн зүйлсийг барьж, түүндээ амьдрах
          боломжийг олгодог.
        </Text>
        <Text style={styles.textStatus}>
          Эдгээр платформ, тоглоомуудаар дамжуулан бид метаверсийн зарим
          элементийг хэрэглэж эхэлсэн гэхэд болно. Гэхдээ Метаверсийн эдгээрээс
          ялгарах онцлог нь тэр видео тоглоом биш, нийгмийн харилцааны дараагийн
          үе шат гэдгийг мартаж болохгүй.
        </Text>
        <Text style={styles.textTitle}>
          МЕТАВЕРСИЙГ БИД ХЭРХЭН ХЭРЭГЛЭХ ВЭ?
        </Text>
        <Image
          // source={require("../../../assets/newF/64m1.jpg")}
          source={{ uri: api + "/upload/" + "64m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={styles.textStatus}>
          Орчин үеийн ухаалаг утас, сошиал медиа платформуудыг ашиглаж дадсан
          хэрэглэгчийн хувьд метаверсийн “иргэн” болох нь Zoom Meeting хийхтэй
          адил амархан зүйл. Харин бидний өдөр тутамдаа төдийлөн хэрэглэж
          дадаагүй VR төхөөрөмжийг хүмүүс метаверсэд ашиглах гэнэ. Метаверсийн
          зах зээлд гол тоглогч болохоор эрэлхийлж буй “Meta” компани 2014 оноос
          “Oculus” хэмээх VR төхөөрөмжийг хөгжүүлж эхэлсэн билээ.
        </Text>
        <Text style={styles.textStatus}>
          Улмаар бид VR төхөөрөмжөө зүүж гэрээсээ ажиллахдаа виртуал оффистоо
          хамт олныхоо аватар дүртэй харилцаж, ажлаа дуусгасныхаа дараа буйдан
          дээр амарч суухдаа жаргаж буй нар, эсвэл мянга мянган одод түгэх
          сансар огторгуйг тольдож бүр хүсвэл зах хязгааргүй далайн эргийн
          үзэсгэлэн гоог биширч болох юм.
        </Text>
        <Image
          // source={require("../../../assets/newF/64m2.jpg")}
          source={{ uri: api + "/upload/" + "64m2.jpg" }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textTitle}>VIRTUAL REALITY</Text>
        <Text style={styles.textStatus}>
          Дууны нөлөө бүхий компьютер технологийг бодит байдалтай хослуулан
          график дүрслэлээр хиймлээр бүтээхийг хэлдэг. Бид энэхүү технологийн
          тусламжтайгаар хүссэн орон зайдаа “шилжих”, харах, сонсох, хүрэх зэрэг
          мэдрэмжүүдийг хиймлээр дамжуулан бодит мэт мэдрэх боломжтой.
        </Text>
        <Image
          // source={require("../../../assets/newF/64m3.jpg")}
          source={{ uri: api + "/upload/" + "64m3.jpg" }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textTitle}>AUGMENTED REALITY</Text>
        <Text style={styles.textStatus}>
          Бодит ертөнц дээр хиймлээр нэмэлт дүрслэл хийх технологи. Бидний
          хамгийн сайн мэдэх AR-ийн жишээ бол Instagram, Facebook платформын
          сторины эффектүүд юм.
        </Text>
        <Image
          // source={require("../../../assets/newF/64m4.jpg")}
          source={{ uri: api + "/upload/" + "64m4.jpg" }}
          style={{ width: windowWidth / 1.1, height: 200, marginTop: 20 }}
        />
        <Text style={styles.textTitle}>BRAIN COMPUTER INTERFACE</Text>
        <Text style={styles.textStatus}>
          Тархины дохиог хүлээн авч дүн шинжилгээ хийж команд болгон хөрвүүлээд
          төхөөрөмж рүү шилжүүлэх үүргийг гүйцэтгэдэг технологи юм.
        </Text>
        <Text style={styles.textTitle}>
          МЕТАВЕРС ХҮМҮҮСИЙН АЖИЛЛАХ НӨХЦӨЛД ХЭРХЭН НӨЛӨӨЛӨХ ВЭ?
        </Text>
        <Image
          // source={require("../../../assets/newF/65m.jpg")}
          source={{ uri: api + "/upload/" + "65m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            alignSelf: "center",
            height: 200,
            marginTop: 10,
          }}
        />
        <Text style={[styles.textStatus, { textAlign: "right", fontSize: 10 }]}>
          Марк Зукерберг Facebook компанийнхаа нэрийг Meta болгон өөрчилсөн
          тухай мэдээ гарсны дараа Нью-Йоркийн хөрөнгийн бирж дээр тус компанийн
          хувьцааны үнэ 2.75 хувиар өсөж байв
        </Text>
        <Text style={styles.textStatus}>
          Марк Зукербергийн онцолж буйгаар метаверсийн хүн төрөлхтөнд олгож буй
          хамгийн онцлох боломж нь орон зай, цаг хугацаанаас үл хамааран хүн бүр
          орлогоо нэмэгдүүлэх боломжтой болох юм. Өөрөөр хэлбэл хөгжиж буй улс
          орнуудын иргэд санхүүгийн боломжоо илүү нэмэгдүүлэх, алсын зайнаас
          ажиллахад таатай орчныг метаверс бий болгож байна. Covid-19 цар тахал
          бидэнд оффисын түрээс, ашиглалтын зардалгүйгээр алсын зайнаас ажиллах
          боломжтойг харуулсан. Гэхдээ бидний зайнаас ажиллахдаа ашигладаг
          платформууд бодитой, амьд харилцааг үүсгэхдээ тааруу байсан нь олон
          хүнд эргээд оффис руугаа тэмүүлэх хүслийг өгсөн. Харин метаверс бидэнд
          яг л оффис дээрээ ажлынхантайгаа хамт нэг орчинд ажиллаж буй мэт
          мэдрэмжийг өгөх юм. Энэ нь ирээдүйд зайнаас ажиллах шинэ соёл болоод
          нэг хотоос өөр олон хотод ажиллах боломжийг нээж өгөх юм.
        </Text>

        <Text style={styles.textTitle}>
          ХӨГЖИЖ БУЙ УЛС ОРНУУДЫН ИРГЭД САНХҮҮГИЙН БОЛОМЖОО ИЛҮҮ НЭМЭГДҮҮЛЭХ,
          АЛСЫН ЗАЙНААС АЖИЛЛАХАД ТААТАЙ ОРЧНЫГ МЕТАВЕРС БИЙ БОЛГОЖ БАЙНА
        </Text>
        <Text style={styles.textStatus}>
          Хиймэл оюун ухааны тусламжтайгаар уурхайд ажилладаг хүмүүс машинаа
          гэрээсээ удирдаж алсын зайнаас ажилладаг болно. Монголд байгаа өвчтөнд
          Японд байгаа эмч мэс засал хийх боломжтой болно. Гагцхүү бид энэ
          хэмжээнд хүрэхэд 5G технологи хэрэгтэй. Учир нь энэ мэдээлэл, команд
          дамжих хугацааг илүү хурдан хүргэх боломжийг 5G олгож, тэр хэмжээгээр
          алсын зайнаас ажиллахад алдаа гарах магадлал багасах ажээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/65m2.jpg")}
          source={{ uri: api + "/upload/" + "65m2.jpg" }}
          style={{ width: windowWidth / 1.1, height: 200 }}
        />
        <Text style={styles.textStatus}>
          Binance-ийн үзэж буйгаар криптовалютууд нь энэ орчинд хүмүүс санхүүгээ
          удирдахад чухал үүрэг гүйцэтгэнэ гэсэн итгэлтэй байна. Өөрөөр хэлбэл,
          тэд хүмүүс метаверсд ажиллахдаа криптовалютаар цалинжиж орлого олно
          хэмээн таамаглаж байгаа юм. Харин виртуал хөрөнгийн тухайд NFT
          түгээмэл ашиглагдах төсөөлөлтэй байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/66m.jpg")}
          source={{ uri: api + "/upload/" + "66m.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        />
        <Image
          // source={require("../../../assets/newF/66m8.png")}
          source={{ uri: api + "/upload/" + "66m8.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 150,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textStatus}>
          Meta компанийн гүйцэтгэх захирал Марк Зукерберг өнгөрсөн онд
          метаверсийн талаарх санал бодлоо олон нийтэд тасралтгүй хуваалцаж,
          2014 оноос хойш хөгжүүлж буй VR болон AR төхөөрөмжид зарцуулсан
          хөрөнгө нь 10 тэрбум ам.доллар давсан төдийгүй цаашид ч их хэмжээний
          хөрөнгө оруулахаа дурдаж байсан билээ. Улмаар өнгөрсөн оны аравдугаар
          сард тэд “Horizon Worlds” хэмээх метаверс бүтээх гэж буйгаа зарлаж энэ
          талбарт хүчтэй өрсөлдөгч болох хүсэлтэйгээ илэрхийлсэн юм. Тэд
          одоогоор ирээдүйн “Horizon Worlds”-ийн иргэдийг бэлтгэхэд зориулан
          дараах төхөөрөмжүүдийг хөгжүүлж байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/66m1.jpg")}
          source={{ uri: api + "/upload/" + "66m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "cover",
          }}
        />
        <Text style={styles.textTitle}>VR - Quest 2</Text>
        <Text style={styles.textStatus}>
          Энэхүү төхөөрөмжийг ашиглан та гэр бүл, найз нөхдөөсөө хол байсан ч
          тэдэнтэй хамт цагийг өнгөрөөж , дасгал хийх, амьд хөгжмийн тоглолт
          үзэх төдийгүй далайн эрэг дээр калорио шатаах зэрэг бүхий л зүйлийг
          хийх боломжтой юм. Зах зээлийн үнэ: 299 ам.доллар
        </Text>
        <Image
          // source={require("../../../assets/newF/66m3.png")}
          source={{ uri: api + "/upload/" + "66m3.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textTitle}>Spark AR</Text>
        <Text style={styles.textStatus}>
          Бидний AR-ийг ашигладаг хамгийн түгээмэл хэрэглээ бол Facebook,
          Instagram-ийн стори дахь эффектүүд билээ. Энэ эффектүүдийг хэрэглэгчид
          түгээмэл ашиглахын хэрээр AR-ийг хэрэглэж, хөгжүүлэхийг зорьж буй
          хүмүүсийн тоо нэмэгдэж байна. Энэ хүрээнд тэд AR сонирхдог
          хэрэглэгчдэд зориулж төрөл бүрийн хөгжүүлэлтийг хийж буйн нэг жишээ нь
          Spark AR бөгөөд сонирхогчдод зориулсан Polar программ, илүү мэргэжлийн
          түвшний хэрэглэгчдэдээ зориулан World AR программуудыг санал болгож
          байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/66m2.png")}
          source={{ uri: api + "/upload/" + "66m2.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.textTitle}>Smart Glasses - Ray-Ban Storie</Text>
        <Text style={styles.textStatus}>
          Ирээдүйд ухаалаг утас мэт түгээмэл ашиглагдах шинэ технологи бол
          ухаалаг нүдний шил юм. Тэд ганц даралтаар бидэнд дүрс бичлэг хийх
          боломжийг өгөх Ray-Ban Stories хэмээх ухаалаг нүдний шилийг хөгжүүлж
          байна. Цаашид та стори хийхийн тулд заавал гар тань завтай байхыг
          шаардахгүй нь.
        </Text>
        <ImageBackground
          // source={require("../../../assets/newF/67m1.jpg")}
          source={{ uri: api + "/upload/" + "67m1.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
          }}
        >
          <Image
            // source={require("../../../assets/newF/67m3.png")}
            source={{ uri: api + "/upload/" + "67m3.png" }}
            style={{
              width: windowWidth / 2,
              height: 100,
              resizeMode: "contain",
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
            }}
          />
        </ImageBackground>
        <Text style={styles.textStatus}>
          Google метаверсэд тун чимээгүй, аажмаар бэлтгэж судалгаа хөгжүүлэлтээ
          хийсээр байна. Тус компани ухаалаг нүдний шилийг зах зээлд нэвтрүүлж
          буй анхдагч компанийн нэг болж байгаа бөгөөд тэдний нэвтрүүлсэн
          бүтээгдэхүүн хувийн мэдээллийг нууцлах тал дээр хэрэглэгчдийн зүгээс
          шүүмжлэл авсан. Гэсэн ч тэд 2022 онд Метаверсийн зах зээлд хүчтэйгээр
          орно гэдгээ илэрхийлж байна.
        </Text>
        <ImageBackground
          // source={require("../../../assets/newF/67m2.png")}
          source={{ uri: api + "/upload/" + "67m2.png" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            resizeMode: "contain",
            alignItems: "center",
          }}
        >
          <Image
            // source={require("../../../assets/newF/66m5.png")}
            source={{ uri: api + "/upload/" + "66m5.png" }}
            style={{
              width: windowWidth / 2,
              height: 100,
              resizeMode: "contain",
              position: "absolute",
              bottom: 0,
              alignSelf: "center",
            }}
          />
        </ImageBackground>
        <Text style={styles.textStatus}>
          Уг компани бодит үнэ нь 3,500 ам.доллароор үнэлэгдэх HoloLens хэмээх
          VR нүдний шилийг зах зээлд нийлүүлсэн бөгөөд тэдний зорилтот
          хэрэглэгчид нь эмч, эрдэмтэд, инженерүүд байсан юм. Түүнчлэн Мicrosoft
          компани өнгөрсөн нэгдүгээр сард видео тоглоом бүтээгч Activision
          Blizzard компанийг 69 тэрбум ам.доллароор худалдан авснаас харахад 3D
          видео тоглоом бүтээгчид метаверсийн зах зээлд ирээдүйтэй байх нь
          тодорхой болсон.
        </Text>

        <Image
          // source={require("../../../assets/newF/67m3.jpg")}
          source={{ uri: api + "/upload/" + "67m3.jpg" }}
          style={{
            width: windowWidth / 1.1,
            height: 200,
            marginTop: 20,
            resizeMode: "contain",
          }}
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
