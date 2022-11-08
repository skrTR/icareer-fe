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
import { api } from "../../../Constants";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const Page8 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        resizeMode="cover"
        // source={require("../../../assets/newF/4m6.jpg")}
            source={{uri: api + "/upload/" + "4m6.jpg"}}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="black"
          style={{
            position: "absolute",
            top: 85,
            left: 20,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            backgroundColor: "#0066a6",
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
            ОНЦЛОХ КОМПАНИ
          </Text>
        </View>
        <View
          style={{
            marginTop: 150,
          }}
        >
          <Text
            style={[
              styles.textTitle,
              { color: "white", textAlign: "center", fontSize: 25 },
            ]}
          >
            БАЙГАЛЬ ЭХ БҮТЭЭЖ, ТЭД БАТАЛГААЖУУЛАВ
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 0, right: 30 }}>
          <Image
            // source={require("../../../assets/newF/39m1.png")}
                source={{uri: api + "/upload/" + "39m1.png"}}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>40-51 | </Text>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#0066a6",
                fontSize: 10,
              }}
            >
              ОНЦЛОХ КОМПАНИ
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
        <Text style={styles.textStatus}>
          Улаанбаатар хотоос 45 км зайд байрлах Горхи Тэрэлжийн байгалийн
          цогцолбор газрын хөрсөнд 28 сая жилийн өмнө түрэгдэн гарч ирсэн боржин
          чулуулгийн баялаг нөөц оршино. Агаар мандалд хуримтлагдсан усан
          дуслууд хур тунадас болон газрын гүн рүү нэвчихдээ энэхүү үржил шимт
          өнгөн хөрсөөр дамжин боржин давхаргад очдог. Ингэж хүний биед
          шаардлагатай микро элементүүд, байгалийн эрдэс бодисоор баяжуулсан
          гүний эрдэст ус бий болдог.
        </Text>
        <Text style={styles.textStatus}>
          Энэхүү гүний эрдэст усыг Монгол Улсын өнцөг булан бүрд амьдарч буй
          хүмүүс тэр бүр хэрэглэх боломжгүй байлаа. Харин техник, технологи
          хөгжихийн хэрээр байгаль эхийн бүтээсэн “Цэнхэр алт”-ыг хүн бүр
          хэрэглэх боломж өдгөө бүрджээ.
        </Text>
        <Text style={styles.textStatus}>
          Энэхүү байгаль эхийн бүтээсэн чандмань эрдэнийн үр шимийг хүртэх
          боломжийг иргэн бүрд олгож буй Монгол Улсын усны зах зээлийн 30 хувийг
          дангаараа эзэлдэг компанийн удирдлагын философи, дотоод соёл, хүний
          нөөцийн бодлоготой танилцъя.
        </Text>
        {/* Tuuhen zamnal */}
        <Text style={[styles.textTitle, { color: "#0066a6" }]}>
          ТҮҮХЭН ЗАМНАЛ
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        >
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              1996
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  { width: 150, textAlign: "center", fontSize: 12 },
                ]}
              >
                Худалдаа, зуучлалын БОСА ХХК-ийг байгуулан Герман, Польш зэрэг
                орноос хүнсний бүтээгдэхүүн импортлон үйл ажиллагаагаа эхлүүлэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              1997
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  { width: 150, textAlign: "center", fontSize: 12 },
                ]}
              >
                Монголын хүнсний сүлжээ дэлгүүрийн суурийг тавьж, Улаанбаатар
                хотод анхны өөртөө үйлчлэх 3 салбар дэлгүүр нээв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              1999
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  { width: 150, textAlign: "center", fontSize: 12 },
                ]}
              >
                Монголд анх удаа бараа бүтээгдэхүүний түгээлтийн үйлчилгээ
                нэвтрүүлэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2004
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Блү Голд ХХК үүсгэн байгуулагдав.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2007
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Хан Хэнтийн нурууны Горхи Тэрэлжийн сав газраас Тэрэлж байгалийн
                эрдэст усыг үйлдвэрлэн хэрэглэгчийн гарт хүргэж эхлэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2009
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                “Дэлхийн энергийн V чуулга уулзалт”-д Тэрэлж байгалийн эрдэст ус
                оролцов.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2017
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Спорт савлагаатай “Актив” усыг үйлдвэрлэж эхлэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2020
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Налайх дүүргийн Шилдэг аж ахуй нэгжээр тодров.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2020
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Тэрэлж үйлдвэрийн хүчин чадал 4.8 дахин нэмэгдэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2020
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                Тэрэлж эрдэст ус рибрэндинг хийв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2021
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                “Аутизмтай хүүхдүүдийг ойлгоё, хайрлая, хүлээн зөвшөөрье” аянд
                нэгдэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2021
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                “Тэрэлж кидс” төсөл эхлэв.
              </Text>
            </View>
          </View>
          <AntDesign
            name="arrowright"
            size={40}
            color="#0066a6"
            style={{ alignSelf: "center", marginHorizontal: 10 }}
          />
          <View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", textAlign: "center" },
              ]}
            >
              2021
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#0066a6",
                padding: 10,
                alignItems: "center",
                alignContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  styles.textStatus,
                  {
                    width: 150,
                    textAlign: "center",
                    fontSize: 12,
                  },
                ]}
              >
                SmartBlue B2B, B2C бизнесийн процесст суурилсан Preselling,
                Vanselling хосолсон борлуулалтын программ ашиглалтад оров.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{}}>
          <Text style={styles.textTitle}>ЖИЛД ТӨЛДӨГ</Text>
          <Text style={styles.textTitle}>ТАТВАРЫН ХЭМЖЭЭ</Text>
          <Text
            style={[
              styles.textTitle,
              { color: "#0066a6", fontSize: 30, marginVertical: 10 },
            ]}
          >
            1<Text style={{ fontSize: 20 }}>ТЭРБУМ</Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            // source={require("../../../assets/newF/41m1.jpg")}
                source={{uri: api + "/upload/" + "41m1.jpg"}}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textTitle}>САЛБАРТАА </Text>
            <Text style={styles.textTitle}>НЭВТРҮҮЛСЭН</Text>
            <Text style={styles.textTitle}>ШИНЭ ТЕХНОЛОГИ</Text>
          </View>
        </View>
        <Text style={styles.textStatus}>
          Турк улсад үйлдвэрлэсэн өндөр хүчин чадал бүхий, эрчим хүчний
          хэмнэлттэй, үйлдвэрлэлийн явцад усны хаягдалгүй бүрэн автомат тоног
          төхөөрөмжийг Монголд анхлан нэвтрүүлсэн.
        </Text>
        <Text style={styles.textTitle}>ҮЙЛДВЭРИЙН ХҮЧИН ЧАДАЛ</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.textTitle,
              { color: "#0066a6", fontSize: 30, marginVertical: 10 },
            ]}
          >
            40<Text style={{ fontSize: 20 }}>САЯ ЛИТР</Text>
          </Text>
          <Text style={[styles.textStatus, { marginLeft: 10, top: 4 }]}>
            /1 жилд/
          </Text>
        </View>
        <Text style={[styles.textStatus, { bottom: 25 }]}>
          ус савлах хүчин чадалтай
        </Text>
        <Text style={[styles.textTitle, { textAlign: "center" }]}>
          ТЭРЭЛЖ УСНЫ ЗАХ ЗЭЭЛД ЭЗЛЭХ ХЭМЖЭЭ
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                Дотоодын нийт
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                цэвэр усны
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                зах зээлийн
              </Text>
            </View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", fontSize: 40, marginLeft: 20 },
              ]}
            >
              30<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                жижиг усны
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                зах зээлийн
              </Text>
            </View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", fontSize: 40, marginLeft: 44 },
              ]}
            >
              10<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                Баллонтой усны
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat-regular",
                }}
              >
                зах зээлийн
              </Text>
            </View>
            <Text
              style={[
                styles.textTitle,
                { color: "#0066a6", fontSize: 40, marginLeft: 20 },
              ]}
            >
              20<Text style={{ fontSize: 20 }}>%</Text>
            </Text>
          </View>
        </View>
        <Text style={[styles.textStatus, { textAlign: "center" }]}>
          дангаар бүрдүүлдэг.
        </Text>
        <Text style={[styles.textTitle, { alignItems: "center" }]}>
          <Text style={{ fontSize: 40 }}>8</Text>
          БҮТЭЭГДЭХҮҮНИЙ ТӨРӨЛ
        </Text>
        <Text style={[styles.textTitle, { marginVertical: 20 }]}>
          АЖИЛЧДЫН ТОO
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Montserrat-bold",
              color: "#0066a6",
            }}
          >
            100
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat-medium",
              }}
            >
              Тэрэлж ус
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat-bold",
                color: "#0066a6",
              }}
            >
              ОРЧИМ
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Montserrat-bold",
              color: "#0066a6",
            }}
          >
            600
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat-medium",
              }}
            >
              Боса Холдинг
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Montserrat-bold",
                color: "#0066a6",
              }}
            >
              ГАРУЙ
            </Text>
          </View>
        </View>
        <Text style={[styles.textTitle, { marginTop: 20 }]}>
          АЖИЛЧДЫН ДУНДАЖ НАС
        </Text>
        <Text
          style={[
            styles.textTitle,
            {
              marginTop: 20,
              alignSelf: "center",
              color: "#0066a6",
              fontSize: 40,
            },
          ]}
        >
          30-35 <Text style={{ fontSize: 20 }}>НАС</Text>
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#0066a6", marginTop: 20 }}
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
          БОСА Холдинг компанийн гүйцэтгэх захирaл
        </Text>
        <Text
          style={{
            color: "#0066a6",
            textAlign: "center",
            fontSize: 25,
            fontFamily: "Montserrat-bold",
          }}
        >
          Б.НАНДИНЧИМЭГ
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
            color: "#0066a6",
          }}
        >
          ХҮМҮҮСИЙНХЭЭ УРАМ ЗОРИГИЙГ ДЭМЖИЖ, ЗОРИЛГОО БИЕЛҮҮЛЭХЭД ТУСЛАХ НЬ
          МИНИЙ ҮҮРЭГ
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#0066a6",
            borderColor: "#0066a6",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 20,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Montserrat-medium",
          }}
        >
          ӨДГӨӨ БОСА ХОЛДИНГ КОМПАНИЙН ГҮЙЦЭТГЭХ ЗАХИРЛААР ДӨРӨВ ДЭХ ЖИЛДЭЭ
          АЖИЛЛАЖ БУЙ Б.НАНДИНЧИМЭГ БОСА НЭРИЙН ДЭЛГҮҮРИЙН ХУДАЛДААНЫ ЗӨВЛӨХӨӨР
          АЖЛЫН ГАРААГАА ЭХЭЛЖ БАЙВ. ОДООГИЙН ТҮҮНИЙГ КОМПАНИ НЬ БҮТЭЭЖ, ТЭР
          СУРСАН УР ЧАДВАРАА КОМПАНИДАА ҮНЭ ЦЭН БОЛГОН ӨГЧ, ТЭД ХАМТДАА 22 ДАХЬ
          ЖИЛИЙН ТҮҮХИЙН ХУУДСАА НЭЭЖЭЭ.{" "}
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
              color: "#0066a6",
              textDecorationLine: "underline",
            }}
          >
            Я
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Cambria-bold",
              marginHorizontal: 8,
            }}
          >
            рилцлагаа таны одоо гол анхаарлаа хандуулан төвлөрч буй ажлаас
            эхэлье.
          </Text>
        </View>

        <Text style={styles.textStatus}>
          Боса Холдинг нь гишүүн компаниуддаа зөвлөх үйлчилгээ үзүүлэх, шинэ
          бизнес төслүүдийг санаачлах, тэдгээрийн хэрэгжилтэд хамтарч ажиллах
          үндсэн чиг үүрэгтэй. Одоогоор 2019 оноос эхлүүлж, 2020 оноос хэрэгжиж
          буй хоёр томоохон төсөл болох “МонКонди“ чихрийн үйлдвэр, “Тэрэлж
          ус”-ны үйлдвэрийн өргөтгөлийн төслүүд дээр төвлөрөн ажиллаж байна.
        </Text>

        <Text style={styles.textTitle}>
          Боса Холдинг компанийн хувьд байгууллагын засаглал болоод
          ажилтнуудынхаа карьер хөгжилд хэрхэн анхаардаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Манай компанид удирдлагын уламжлалт арга барил тодорхой хэмжээнд бий.
          Гэхдээ компанийн дотоод орчинд санал дэвшүүлэх, алдаа дутагдлыг
          чөлөөтэй илэрхийлэх нь бүгдэд нээлттэй. Харин карьер хөгжлийн хувьд
          100 хувь ардчилсан гэж хэлж болно. Одоогоор манай гишүүн компаниудын
          10 гаруй гүйцэтгэх захирал компанидаа олон жил ажилласан, ажлын
          гараагаа менежер, алба хэлтсийн даргаас эхлүүлсэн хүмүүс байдаг.
        </Text>
        <Text style={styles.textTitle}>
          Та 600 гаруй ажилтантай том гэр бүлийг удирдаж байна. Таны удирдах
          арга барилаас сонирхмоор байна?
        </Text>
        <Text style={styles.textStatus}>
          Олон хүмүүстэй ажиллахад удирдах, удирдуулах гэхээс илүү “хамтран
          ажиллах” зарчмыг баримтлах нь хоёр талдаа илүү харилцан ашигтай
          байдаг. Би удирдаж байна, нөгөө хүн маань удирдуулж байна гэсэн
          харилцааг амьд бус гэж хардаг. Хүмүүсийнхээ урам зоригийг дэврээж,
          зорилгодоо тэмүүлэхэд нь тусалж, хийсэн бүтээсэн зүйлээр нь урамшуулж,
          хариуцлага алдвал сануулан ажлаа хийх сайн нөхцөлөөр хангаж өгөх нь
          миний үүрэг. Би хүмүүст зааварладаггүй. Миний удирдлагын зарчим бол
          ажилчидтайгаа гар бие, оюун санаа нэгдэн хамтран ажиллах юм.
        </Text>

        <Image
          // source={require("../../../assets/newF/44m1.jpg")}
              source={{uri: api + "/upload/" + "44m1.jpg"}}
          style={{ height: 250, width: windowWidth / 1.1 }}
        />
        <Text
          style={{
            // textAlign: "center",
            fontFamily: "Montserrat-medium",
            backgroundColor: "#0066a6",
            color: "white",
            paddingVertical: 15,
            marginBottom: 15,
            paddingLeft: 10,
          }}
        >
          ХҮМҮҮСИЙНХЭЭ УРАМ ЗОРИГИЙГ ДЭВРЭЭЖ, ЗОРИЛГОДОО ТЭМҮҮЛЭХЭД НЬ ТУСАЛЖ,
          ХИЙСЭН БҮТЭЭСЭН ЗҮЙЛЭЭР НЬ УРАМШУУЛЖ, ХАРИУЦЛАГА АЛДВАЛ САНУУЛАН АЖЛАА
          ХИЙХ САЙН НӨХЦӨЛӨӨР ХАНГАЖ ӨГӨХ НЬ МИНИЙ ҮҮРЭГ.
        </Text>

        <Text style={styles.textTitle}>
          2018 онд гүйцэтгэх захирлаар томилогдсоноос хойш цар тахлаас эхлээд
          олон саад бэрхшээлийг та хамт олонтойгоо давж буй. Тулгарсан саад
          бэрхшээл, сорилтууд танд болоод танай хамт олонд ямар сургамж, шинэ
          зүйлийг ойлгуулсан гэж та хэлэх вэ?
        </Text>
        <Text style={styles.textStatus}>
          Намайг ажлаа авсны дараа 2018 оноос санаачилж, 2019 онд судалгаа хийж
          бүрэн дууссан “МонКонди” чихрийн үйлдвэр, “Тэрэлж ус”-ны үйлдвэрийн
          хоёр томоохон төсөл 2020 онд эхлэх гэж байтал Covid-19 цар тахал
          гарсан. Үүнээс шалтгаалаад гаднаас ирж тоног төхөөрөмж угсарч,
          суурилуулж өгөх ёстой мэргэжилтнүүд ирж чадахгүйд хүрч, бид өөрсдөө
          дотооддоо инженерүүдээ бэлтгэж, угсрах шаардлагатай болсон. Мөн
          “МонКонди” чихрийн үйлдвэрт заавар зөвлөгөө өгч, жор гаргахад туслах
          орос хүнсний технологичид маань ирж чадахааргүй болсон. Социализмын
          үед чихрийн үйлдвэрт ажиллаж байсан ахмад мэргэжилтнүүдээ урьж залуу
          ажилчдадаа сургалт оруулах байдлаар энэ асуудлыг шийдсэн. Үндсэндээ
          цар тахлын улмаас бид маш олон төлөвлөгөөгөө өөрчлөх хэрэгтэй болсон.
          Үүний сөрөг үр дагавар одоо ч арилаагүй байна. Хэдийгээр цаг хугацаа,
          санхүүгийн хувьд төлөвлөөгүй хүндрэлүүд гарсан ч хүний нөөцөө бэлдэж
          маш их туршлагыг хуримтлуулж, байж болох бүхий л боломжуудыг
          хангалттай сайн ашигласан.{" "}
        </Text>
        <Image
          // source={require("../../../assets/newF/45m1.jpg")}
              source={{uri: api + "/upload/" + "45m1.jpg"}}
          style={{ width: windowWidth / 1.1, height: 400 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          БИ ХҮМҮҮСТ ЗААВАРЛАДАГГҮЙ. МИНИЙ УДИРДЛАГЫН ЗАРЧИМ БОЛ АЖИЛЧИДТАЙГАА
          ГАР БИЕ, ОЮУН САНАА НЭГДЭН ХАМТРАН АЖИЛЛАХ ЮМ.
        </Text>
        <Text style={styles.textTitle}>
          Та өөрийгөө хөгжүүлдэг арга барил, урам зориг авдаг зүйлээсээ бидэнд
          хуваалцана уу
        </Text>
        <Text style={styles.textStatus}>
          Арга барил, зуршил гэхээс илүүтэйгээр миний маш их олзуурхаж,
          бахархдаг зүйл нь миний мэргэжил. Би мэргэжлээ өөрөө сонгоогүй,
          аавынхаа зөвлөгөөг дагаж сонгосон. Банк, санхүүгийн мэргэжлээр
          төгссөнийхөө дараа энэ мэргэжлийнхээ үнэ цэнийг, төгсөөд юу хийхээ ч
          мэдээгүй байлаа. Харин ажилд орсныхоо дараа санхүүгийн суурь
          мэргэжилтэй хүн хамгийн сайн хөрвөх чадвартай, хүмүүстэй ойлголцоход
          илүү амар гэдгийг ойлгосон. Ямар ч зүйлийг тоогоор илэрхийлж болно.
          Харин тооны логик утга учрыг ойлгосон цагт үйл ажиллагааг ойлгоход
          илүү хялбар байдаг. Тэгэхээр өнөөдрийн намайг бүтээхэд санхүүгийн
          мэргэжил маань маш их тус болсон. Үүнд маш их талархдаг.{" "}
        </Text>

        <Text style={styles.textTitle}>
          Компанийн удирдлагын хувьд та ямар зан чанар, ур чадвартай хүмүүсийг
          өөрийн багт ажиллуулах хүсэлтэй байдаг вэ?
        </Text>
        <Text style={styles.textStatus}>
          Багийн ажиллагааг эрхэмлэдэг хүмүүстэй хамтарч ажиллахад маш амар
          байдаг. Тэр хүн олон хүнтэй хамтарч ажиллаж чадаж байна гэдэг нь
          цаашид хөгжих том боломжтой гэсэн үг. Мэдээж хувь хүний туршлагаасаа
          харахад тоо суурьтай, тоог хараад сайн ойлгож чаддаг хүмүүстэй
          ойлголцоход илүү амар байдаг. Дээрээс нь үнэнч тууштай чанарыг хүн
          болгон л нэрлэх болов уу. Шинэ үеийн залуучууд маш том зорилготой,
          түүнийхээ төлөө тууштай хөдөлмөрлөдөг болсон байна. Зорилгоо
          тодорхойлоод, үүнийхээ төлөө үйлдэл хийгээд эхэлчихсэн, тэр нь маш
          зөвөөр явж байгаа ийм залуучуудыг харахаар урам авч, дэмжих хүсэл
          төрдөг.
        </Text>
        <Image
          // source={require("../../../assets/newF/46m1.jpg")}
              source={{uri: api + "/upload/" + "46m1.jpg"}}
          style={{ width: windowWidth / 1.1, height: 400 }}
        />
        <Text
          style={{
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          ЗОРИЛГОО ТОДОРХОЙЛООД, ҮҮНИЙХЭЭ ТӨЛӨӨ ҮЙЛДЭЛ ХИЙГЭЭД ЭХЭЛЧИХСЭН, ТЭР
          НЬ МАШ ЗӨВӨӨР ЯВЖ БАЙГАА ИЙМ ЗАЛУУЧУУДЫГ ХАРАХААР УРАМ АВЧ, ДЭМЖИХ
          ХҮСЭЛ ТӨРДӨГ.
        </Text>
        <Text style={styles.textTitle}>
          Манай нийгэмд эмэгтэйчүүд дунд шатны менежерийн түвшинд маш сайн
          ажилладаг ч дээд шатны удирдлагын түвшинд ажиллах хувь эрэгтэйчүүдтэй
          харьцуулахад харьцангуй бага байна. Монголын бизнесийн салбар дахь
          эмэгтэйчүүдийн манлайлал, энд тулгамддаг асуудлын тухай та юу хэлэх
          вэ?
        </Text>
        <Text style={styles.textStatus}>
          Манай байгууллагын хувьд бодлогоор биш боловч 10 гүйцэтгэх захирлын 7
          нь эмэгтэй байдаг. Эмэгтэйчүүд эрчүүдийг бодвол карьер хөөхөд өөрөөс
          нь үл шалтгаалах маш олон саад бэрхшээлийг туулдаг. Эмэгтэйчүүдийн
          хувьд нарийн, жижиг ажлуудаа маш сайн хийдэг. Гүйцэтгэл сайн ч удирдах
          албан тушаалд томилогдоход өөртөө итгэлгүй байгаа нь ажиглагддаг.
          Бусдаар бол эмэгтэйчүүдийн тухайд удирдах чадвар эрчүүдээс дутмаг гэж
          бодохгүй байна. Дээрээс нь маш шаргуу, тууштай. Харин эрчүүд энэ тал
          дээр дутагдалтай ч аливаа зүйлийг томоор харж чаддаг. Гэхдээ гүйцэтгэл
          дээр алдах нь бий. Тийм учраас хүйсийн харьцаа тэнцүүхэн байх нь зөв
          гэж боддог.
        </Text>
      </View>
      <View>
        <Image
          // source={require("../../../assets/newF/47m1.jpg")}
              source={{uri: api + "/upload/" + "47m1.jpg"}}
          style={{ width: windowWidth, height: windowHeight }}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginVertical: 20,
            fontFamily: "Playfair-bold",
            color: "#0066a6",
          }}
        >
          ТЭРЭЛЖ УС
        </Text>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "#0066a6",
            borderColor: "#0066a6",
            padding: 2,
            width: 80,
            alignSelf: "center",
            marginVertical: 10,
            marginBottom: 30,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            fontFamily: "Montserrat-medium",
          }}
        >
          “БОСА ХОЛДИНГ” КОМПАНИЙН УРТ ХУГАЦААНЫ ТОМ ЗОРИЛГОДОО ХҮРЭХ НЭГ ЧУХАЛ
          ТӨСӨЛ НЬ УСНЫ ҮЙЛДВЭРЛЭЛ ЮМ. УЛААНБААТАР ХОТООС 45 КИЛОМЕТРИЙН ЗАЙД
          ГОРХИ ТЭРЭЛЖИЙН БАЙГАЛИЙН ЦОГЦОЛБОРТ ГАЗАРТ ТЭРЭЛЖ УСНЫ ҮЙЛДВЭР
          БАЙРЛАДАГ. 2004 ОНД ҮЙЛДВЭРИЙГ БАЙГУУЛАХДАА УСНЫ УРСАЦ, ЧАНАРЫН
          СУДАЛГААГ ГЕО ЭКОЛОГИЙН ХҮРЭЭЛЭНГИЙН СУДЛААЧ ЭРДЭМТДЭЭР ХИЙЛГЭЖ ТУХАЙН
          ГАЗРЫГ СОНГОЖЭЭ. ТЭР ЦАГААС ХОЙШ ҮЙЛДВЭРТЭЭ ТОНОГ ТӨХӨӨРӨМЖ
          ӨРГӨТГӨЛИЙН ШИНЭЧЛЭЛИЙГ 4 УДАА ХИЙГЭЭД БАЙНА.
        </Text>
        <Image
          // source={require("../../../assets/newF/5m5.jpg")}
              source={{uri: api + "/upload/" + "5m5.jpg"}}
          style={{ width: windowWidth / 1.1, height: 300, marginTop: 12 }}
        />
        <Text style={styles.textStatus}>
          Ус амьд, мэдээлэл дамжуулдаг онцлогтой. Тухайн орчин, ойр орчимд
          ажиллаж байгаа хүмүүсийн энергийг өөртөө шингээх чадвартай төдийгүй
          бохир орчинд, стресстэй хүмүүсийн дунд усны бүтэц дагаад өөрчлөгддөг.
          Тийм учраас газрын гүнээс хүний биед зохимжтойгоор гарч ирж байгаа
          усны бүтцийг алдагдуулахгүйн тулд үйлдвэрийн орчин цэвэр цэмцгэр,
          ажиллаж байгаа хүмүүсийг эерэг уур амьсгалтай байлгах ёстой гэх
          зарчмыг баримталж, үйлдвэртээ сонгодог хөгжмийн{" "}
        </Text>
        <Text style={styles.textStatus}>
          аяз тоглуулдаг байна. Тэрэлж ус цаашид байгальд илүү ээлтэй
          үйлдвэрлэлийг эрхэмлэн шилэнд савлах, төрөл бүрийн нэмэгдэлтэй буюу
          хийжүүлсэн, уураг, эрдэс, коллагентай гэх мэтээр төрлөө нэмэхээр
          төлөвлөжээ. Мөн савны амсар, бөглөөг хүүхэд уухад илүү тохиромжтой
          болгох бөгөөд ус ууж дадаагүй хүүхдүүдэд уулгаж сургахын тулд гадна
          дизайнаа аутизмтай хүүхдүүдийн зурсан төрөл бүрийн зургаар чимэглэх
          зэргээр сайжруулалт хийгдэж байгаа ажээ.
        </Text>
        <Text style={[styles.textTitle, { color: "#0066a6", fontSize: 20 }]}>
          БАЙГАЛЬД ЭЭЛТЭЙ ҮЙЛДВЭРЛЭГЧ
        </Text>
        <Image
          // source={require("../../../assets/newF/49m1.jpg")}
              source={{uri: api + "/upload/" + "49m1.jpg"}}
          style={{ width: windowWidth / 1.1, height: 250, marginTop: 12 }}
        />
        <Text style={[styles.textStatus]}>
          XXI зууны баялаг бүтээгчдийн үйлдвэрлэл, үйл ажиллагаа байгальд ээлтэй
          эсэх нь хэрэглэгчээ татах чухал үзүүлэлт болсон. Блү Голд компанийн
          хувьд усны ундаргыг сайжруулахын тулд эргэн тойронд нь жимсний бут
          суулгах, ойр орчмын хог хаягдлыг цэвэрлэх зэрэг үйл ажиллагааг тогтмол
          хийдэг. Мөн ус үйлдвэрлэх явцад савыг{" "}
        </Text>
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          угаахад ашигласан хаягдал усыг 98 хувь цэвэршүүлээд саарал ус болгон
          дахин ашигладаг аж. Мөн “Боса Холдинг” компанийн хэмжээнд хогоо
          ангилдаг болсноор хог хаягдлыг 80 гаруй хувь бууруулж чаджээ. Үүнээс
          гадна “МонКоди” чихрийн үйлдвэрийн тоног төхөөрөмж нь уураар ажилладаг
          учраас эрчим хүчийг 70 хувь бууруулсан аж.
        </Text>
        <Text
          style={[
            styles.textTitle,
            { color: "#0066a6", fontSize: 20, marginTop: 20 },
          ]}
        >
          ДӨЛГӨӨН, НИЙТЭЧ, УЯН ЗӨӨЛӨН
        </Text>
        <Text style={[styles.textStatus]}>
          “Боса Холдинг” компанийн байгууллагын соёлыг хүнээр илэрхийлбэл ямар
          зан чанар, үнэт зүйлтэй хүн байх вэ гэх асуултад Б.Нандинчимэг захирал
          “Маш дөлгөөхөн, нийтэч, уян зөөлөн хүн… Бид хэзээ ч ашгийг том зорилго
          болгож байгаагүй. Харилцагчтай, хэрэглэгчтэй, ажилтнуудтайгаа
          харилцахдаа “ялагчялагч” байх зарчмыг нэн тэргүүнд тавьдаг” хэмээсэн
          юм.
        </Text>
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          Байгууллагын соёл гэдэг нэг үгээр тодорхойлоход, “Манай байгууллагын
          соёл яг л энэ” гээд дурдаад хэлэх боломжгүй маш олон том, жижиг
          хэсгээс бүрддэг цогц ойлголт төдийгүй компанийн оршин тогтнох дархлаа
          болдог зүйл. Тус компанийн хувьд үүсгэн байгуулагчдын уламжлан
          өвлүүлсэн тэрхүү соёл нь өнөөдрийн Босагийн ажилчдыг сургаж, компанийн
        </Text>
        <Text style={[styles.textStatus]}>
          оршин тогтнох үндэс болдог гэнэ. Тууштай, хөдөлмөрч, итгэл даахуйц
          байдал бол тэдэнд байдаг онцлог шинж юм. Төдийгөөс өдийг хүртэл
          тууштай, хөдөлмөрч, итгэл даахуйц хүмүүс энэ компани дотор амжилтад
          хүрч, карьерын өсөлтийг үзүүлж, дараа дараагийн боловсон хүчнээ
          бэлтгэдэг уламжлал тогтжээ.
        </Text>
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          Тэдний өөрсдийгөө нэрлэх дуртай, компанийн амжилтыг тодорхойлох ганц
          үг бол “хөдөлмөрлөх” аж. Хөдөлмөрлөх гэдгийг өдөр болгон илүү цагаар
          ажиллах бус “бүтээмжтэй ажиллах”-ыг тэд ингэж томьёолдог. Цаг үеийн
          нөхцөл байдлаас шалтгаалан илүү цагаар ажиллах, үе үе ачаалалтай
          ажиллах үе байх ч хөдөлмөрлөх гэдгийг аливаа ажилтны гараас гарч буй
          ажлын үр дүнгээр хэмждэг ажээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/49m2.jpg")}
              source={{uri: api + "/upload/" + "49m2.jpg"}}
          style={{
            width: windowWidth / 1.1,
            height: 400,
            resizeMode: "contain",
            marginTop: 15,
          }}
        />
        <Text style={styles.textStatus}>
          Блү Голд ХХК “Тэрэлж ус”-ны үйлдвэрт эгшиглүүлэхээр “Усны дуулал”
          нэртэй дууг бүтээжээ.
        </Text>
        <Text style={[styles.textStatus, { marginVertical: 0 }]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Ая:</Text> Ардын
          жүжигчин, Төрийн хошой шагналт хөгжмийн зохиолч
        </Text>
        <Text style={styles.textTitle}>Н.ЖАНЦАННОРОВ</Text>
        <Text style={[styles.textStatus, { marginVertical: 0, marginTop: 20 }]}>
          <Text style={{ fontFamily: "Montserrat-bold" }}>Үг:</Text> Соёлын
          гавьяат зүтгэлтэн яруу найрагч
        </Text>
        <Text style={styles.textTitle}>Ш.ГҮРБАЗАР</Text>
        <Text style={[styles.textStatus, { marginVertical: 0, marginTop: 20 }]}>
          Монголын бясалгал, Зурхай, Сүнс, Сэтгэл судлалын Академийн ерөнхийлөгч
        </Text>
        <Text style={styles.textTitle}>Б.САРАНДАВАА</Text>
        <Image
          // source={require("../../../assets/newF/49m3.jpg")}
              source={{uri: api + "/upload/" + "49m3.jpg"}}
          style={{
            width: windowWidth / 1.1,
            height: 400,
            resizeMode: "contain",
            marginTop: 15,
          }}
        />
        <Text style={[styles.textStatus, { marginBottom: 0 }]}>
          “Усны дуулал” дууг эгшиглүүлэх үеийн усны талстууд. Зургийг Японы
          эрдэмтэн
        </Text>
        <Text style={styles.textTitle}>МАСАРУ ЭМОТО</Text>
        <Text style={[styles.textTitle, { color: "#0066a6", marginTop: 15 }]}>
          БАЙГУУЛЛАГЫН СОЁЛЫН БҮТЭЭЛЧ САНАА
        </Text>
        <Text style={styles.textStatus}>
          Ажилчдыг урам зоригтой ажлаа хийх, ажилдаа дуртай байлгахын тулд жил
          бүр урлаг, спортын наадмыг хийхээс гадна шинэ жилийн баярыг дээд шатны
          удирдлагаас эхлээд бүгд өргөн тэмдэглэдэг байна. Спорт, урлагийн
          төрлүүдийг жил бүр нэмдэг бөгөөд энэ жил буудлага, усанд сэлэлтийн
          төрөл нэмэгдсэн гэнэ. Ажилчид урлаг, спортын наадмыг жил бүр хүлээн
          баг бэлтгэн мэргэжлийн түвшинд өрсөлддөг аж.
        </Text>
        <Text style={styles.textStatus}>
          Үүнээс гадна тэдний байгууллагын соёлын салшгүй нэг хэсэг бол мэндлэх
          уламжлал. Таних үгүйгээс үл шалтгаалан байгууллагын оффист орж ирсэн
          хүн бүртэй халуун дотно мэндчилдэг нь тухайн хүний сэтгэл санааны
          байдлыг эерэг болгодог гэдэгт тэд итгэж, энэ соёлыг дотооддоо
          нэвтрүүлсэн.
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            marginBottom: 15,
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
          }}
        >
          КОМПАНИЙН ҮНЭ ЦЭНИЙГ БҮТЭЭГЧ АЖИЛТНУУДДАА АЖИЛЛАХ ТААТАЙ ОРЧИН
          НӨХЦӨЛИЙГ БҮРДҮҮЛЖ, СЭТГЭЛ ХАНАМЖИЙГ ДЭЭДЛЭХ НЬ ХАМТЫН МАНЛАЙЛАЛ БҮХИЙ
          ХҮЧИРХЭГ ХАМТ ОЛНЫГ БИЙ БОЛГОН, ХӨГЖИЛД ТҮҮЧЭЭЛЭХ “БОСА ХОЛДИНГ”
          КОМПАНИЙН ХҮНИЙ НӨӨЦИЙН БОДЛОГЫН ГОЛ ЗОРИЛГО ЮМ.
        </Text>
        <Text style={styles.textTitle}>
          ТАНЫГ КОМПАНИДАА АЖИЛЛАСНЫ ТӨЛӨӨ КОМПАНИЙН ЗҮГЭЭС ЭЦЭГ ЭХЭД ТАНЬ САР
          БҮР УРАМШУУЛАЛ ӨГДӨГ БОЛ ЯМАР ВЭ?
        </Text>
        <Text style={styles.textStatus}>
          Тус компани хүнээ, ажилтнаа сэтгэл хангалуун ажиллуулахын тулд ажлын
          ярилцлагын үеэс эхлэн карьерын төлөвлөгөө, цаашдын зорилгыг
          дэлгэрэнгүй ярилцдаг. Ажилтан тус компанид хэдэн жил ажиллахыг хүсэж
          байгаа, цаашид ямар салбарт түлхүү ажиллах эрмэлзэлтэй байгаа төдийгүй
          хоёр жилийн дараа мэргэжлийн зэргээ дээшлүүлэхээр гадаад руу явах гэж
          буйгаа эсвэл хүүхэдтэй болох гэж төлөвлөсөн хугацаагаа дэлгэрэнгүй
          ярилцсаны үндсэн дээр байгууллагадаа хэдэн жил ажиллахаа шийддэг.
          Улмаар нэг албан тушаалд удаан ажиллаад ажлаасаа уйдаад байгаагаа
          учирлавал тэд танд чөлөө өгөх, эсвэл таны саналыг харгалзан үзээд
          компани хооронд шилжүүлэх зэрэг уян хатан бодлогыг ч хэрэгжүүлдэг.
          Босачууд байгууллагад тогтвор суурьшилтай удаан хугацаанд ажиллах нь
          үнэ цэнтэй гэдгийг өрөөсгөл ойлголт гэж үздэг бөгөөд зарим албан
          тушаал 1-2 жилд сэлгэлт хийх нь үр дүнтэй байх ч тохиолдол бийг онцолж
          байсан юм.
        </Text>
        <Text style={[styles.textStatus, { marginBottom: 15, marginTop: 0 }]}>
          Мөн өнөөгийн хөдөлмөрийн зах зээлд гарч буй хүмүүс ажлын цагт баригдаж
          ажиллахыг хүсдэггүй, оффист суун ажиллахыг илүүд үзэхээ байх зэрэг
          өөрчлөлтүүдэд дасан зохицох бодлогыг баримтлан үйл ажиллагаандаа
          нэвтрүүлж байна.
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            fontFamily: "Montserrat-bold",
            color: "#0066a6",
          }}
        >
          ХИЙЖ БУЙ АЖЛААСАА УРАМ ЗОРИГ, ЭРЧ ХҮЧ АВДАГ, ҮҮГЭЭРЭЭ БАХАРХДАГ ЭРГЭЭД
          ӨӨРИЙН ХҮЧ ХӨДӨЛМӨРӨӨ ШУДАРГААР ҮНЭЛҮҮЛДЭГ АЖИЛЧДЫГ БҮТЭЭДЭГ НЬ ТУС
          КОМПАНИЙН СОЁЛЫН ОНЦЛОГ
        </Text>
        <Text style={styles.textStatus}>
          Тэд ажилчдынхаа нийгмийн асуудалд дараах байдлаар анхаарлаа
          хандуулдаг. Тухайлбал, залуу гэр бүлүүдийг ипотекийн зээлд хамрагдахад
          нь дэмжлэг үзүүлэх, тулгарсан санхүүгийн асуудлыг нь шийдэхэд туслах,
          машин, сургалтын зардлын хөнгөлөлт олгох, сургалтад тэтгэлгээр
          хамруулах зэргээр бүхий л талаар дэмждэг. Тэдний ажилчид дундаа
          хэрэгжүүлсэн сонирхолтой төслүүдийн нэг нь бүх ажилчдад нөхцөл
          харгалзахгүйгээр сар болгон эцэг, эхийн аль нэгт тогтмол цалин өгдөг
          “Баярлалаа ээжээ” хөтөлбөр юм. Энэ нь Боса компанид хүү, охин нь
          ажилладаг гэр бүл, эцэг эхэд талархал илэрхийлэх зорилгоор аав, ээжид
          нь сар болгон цалин олгох хөтөлбөр юм. Хүн эцэг эхдээ талархаж сар бүр
          баярлуулах цаг зав хязгаарлагдмал байдаг тул тэрхүү үүргийг
          ажилчдынхаа өмнөөс компани биелүүлдэг ажээ. Хэрэв аав, ээж нь авах
          боломжгүй байвал хадам аав ээжид нь өгөх эсвэл хамаатанд нь өгөх зэрэг
          заавал гэр бүлийн хүнд нь олгодог байна.
        </Text>
        <Text
          style={[styles.textTitle, { color: "#0066a6", marginBottom: 15 }]}
        >
          АЖИЛТАНД ҮЗҮҮЛЭХ НИЙГМИЙН ХАЛАМЖ
        </Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              01.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              ХАНГАМЖ, ХӨНГӨЛӨЛТ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Ажилчдын хоол, утсан харилцаа, унааны хөнгөлөлт, бичиг хэрэг, брэнд
            бүтээгдэхүүн худалдан авах хөнгөлөлт
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              02.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              ЗЭЭЛ
            </Text>
          </View>
          <Text style={styles.textStatus}>Дотоод болон гадаад</Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              03.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              ДААТГАЛ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Нийгмийн даатгал, эрүүл мэндийн даатгал, гэнэтийн ослын даатгал,
            тээврийн хэрэгслийн даатгал
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              04.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              СУРГАЛТ, ТЭТГЭЛЭГ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Мэргэшүүлэх сургалт, мэргэжлийн ур чадварыг нэмэгдүүлэх сургалт,
            хувь хүний ур чадварын сургалт, англи хэлний хөнгөлөлттэй сургалт
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              05.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              ШАГНАЛ, УРАМШУУЛАЛ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Төрийн болон байгууллагын шагнал, Шилдэг ажилтны шагнал /гадаадад
            аялах эрх/, Захирлын нэрэмжит шагнал, Өндөр гүйцэтгэлтэй ажилтны
            шагнал, бусад
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              06.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              ТЭТГЭМЖ, ТУСЛАМЖ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Шинэ хүүхэдтэй болсон аавуудад цалинтай чөлөө олгох, ар гэрийн
            гачигдал, гэнэтийн осол, эрүүл мэндийн асуудал гарсан үед мөнгөн
            тэтгэмж олгох
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.textTitle,
                {
                  color: "#0066a6",
                  fontSize: 40,
                  fontFamily: "Montserrat-regular",
                },
              ]}
            >
              07.{" "}
            </Text>
            <Text
              style={[
                styles.textTitle,
                {
                  // alignSelf: "flex-end",
                },
              ]}
            >
              OЛОН НИЙТИЙН АРГА ХЭМЖЭЭ
            </Text>
          </View>
          <Text style={styles.textStatus}>
            Урлаг спортын арга хэмжээ, хувь хүний хөгжил, карьер өсөлтийг дэмжих
            уралдаан, шинэ жил, хүүхдийн баяр зэрэг тэмдэглэлт өдрүүдийн арга
            хэмжээ зуны цугларалт, бусад олон нийтийн арга хэмжээ
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#0066a6" }} />
        </View>
        <Text style={[styles.textTitle, { color: "#0066a6", marginTop: 15 }]}>
          АЖИЛТАНД ҮЗҮҮЛЭХ НИЙГМИЙН ХАЛАМЖ
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textStatus}>Анкетын шалгаруулалт</Text>
          <AntDesign name="arrowdown" size={24} color="black" />
          <Text style={styles.textStatus}>Анхан шатны ярилцлага</Text>
          <AntDesign name="arrowdown" size={24} color="black" />
          <Text style={styles.textStatus}>Мэдлэг сорих шалгалт</Text>
          <AntDesign name="arrowdown" size={24} color="black" />
          <Text style={styles.textStatus}>Дэлгэрэнгүй ярилцлага</Text>
          <AntDesign name="arrowdown" size={24} color="black" />
          <Text
            style={[
              styles.textTitle,
              {
                backgroundColor: "#0066a6",
                marginTop: 15,
                padding: 10,
                color: "white",
              },
            ]}
          >
            Шийдвэр гаргалт
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Image
            // source={require("../../../assets/newF/51m1.jpg")}
                source={{uri: api + "/upload/" + "51m1.jpg"}}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#0066a6",
            }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              Ууган ажилтан
            </Text>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              С.БАТСАЙХАН
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              /8 жил ажилласан/
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.textTitle,
            { textAlign: "center", fontSize: 14, marginTop: 15 },
          ]}
        >
          "МИНИЙ ХУВЬД АЖИЛ МААНЬ АМЬДРАЛЫН МИНЬ САЛШГҮЙ ЧУХАЛ ХЭСЭГ. АЖЛАА ЧИН
          СЭТГЭЛЭЭСЭЭ ХИЙСНИЙХЭЭ ТӨЛӨӨ КОМПАНИ ЭРГЭЭД БИДНИЙГ БҮХИЙ Л ЦАГ ҮЕД
          ДЭМЖИН, ОЙЛГОДОГ. САЙН КОМПАНИЙН АРД ТУРШЛАГАТАЙ, НЭГДЭЖ ЧАДСАН САЙН
          ХАМТ ОЛОН БАЙДАГ ГЭДЭГТ БИ ИТГЭДЭГ. МӨН УС БОЛ АМЬД БҮХНИЙГ ТЭТГЭГЧ
          УЧРААС БИ ӨӨРИЙГӨӨ МАШ БУЯНТАЙ САЙХАН АЖИЛ ХИЙДЭГ ГЭЖ БОДДОГ."
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Image
            // source={require("../../../assets/newF/51m2.jpg")}
                source={{uri: api + "/upload/" + "51m2.jpg"}}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              borderRadius: 100,
              borderWidth: 2,
              borderColor: "#0066a6",
            }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              Oтгон ажилтан
            </Text>
            <Text style={[styles.textTitle, { marginVertical: 0 }]}>
              Н.БИЛГҮҮНЗАЯА
            </Text>
            <Text style={[styles.textStatus, { marginVertical: 0 }]}>
              /1 жил ажилласан/
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.textTitle,
            { textAlign: "center", fontSize: 14, marginTop: 15 },
          ]}
        >
          "БЛҮ ГОЛД КОМПАНИ НАДАД АНХ МАШ НЭЭЛТТЭЙ, НАЙРСАГ ХАМТ ОЛОНТОЙ
          САНАГДСАН. ЗАЛУУ ХҮНИЙ ХУВЬД НЭГ КОМПАНИДАА ТОГТВОР СУУРЬШИЛТАЙ
          АЖИЛЛАЖ, ҮҮНИЙХЭЭ ҮР ШИМИЙГ ХҮРТЭХ НЬ ХӨДӨЛМӨРЛӨСНИЙ ХАМГИЙН ТОМ
          ШАГНАЛ ГЭЖ БОДДОГ. ӨДӨР ИРЭХ ТУСАМ АЖЛЫНХАА БҮТЭЭМЖИЙГ НЭМЭГДҮҮЛЖ, ҮНЭ
          ЦЭНИЙГ ОЙЛГОХ НЬ АЖИЛТАН БОЛГОНЫ АЖИЛДАА ДУРЛАХ ШАЛТГААН БАЙХ.
          КОМПАНИЙН ХУВЬД НАЙРСАГ ХАМТ ОЛНООС ГАДНА ГЭР БҮЛД ЭЭЛТЭЙ, ХҮН БҮРИЙН
          ХИЙХ ДУРТАЙ СОНИРХОЛ, ХӨГЖЛИЙГ НЬ ХҮНДЭЛЖ ОЙЛГОДОГ, АЖИЛТАН БҮРД ӨСӨН
          ДЭВШИХ БОЛОМЖИЙГ ОЛГОДОГ НЬ ЗАЛУУ ХҮМҮҮСИЙН МАНАЙ КОМПАНИЙГ СОНГОХ
          ШАЛТГААН БОЛДОГ БОЛОВ УУ ГЭЖ БОДОЖ БАЙНА."
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

export default Page8;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-bold",
    // marginBottom: 15
  },
  textStatus: {
    fontSize: 16,
    marginVertical: 15,
    fontFamily: "Montserrat-regular",
  },
});
