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
import { string } from "prop-types";

const Page6 = ({ data }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      {/* Bolorerdene zurag */}
      <ImageBackground
        style={{ width: windowWidth, height: windowHeight }}
        // source={require("../../../assets/newF/4m3.png")}
        source={{ uri: api + "/upload/" + "4m3.png" }}
        imageStyle={{ resizeMode: "contain" }}
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
        <View style={{ marginTop: 150 }}>
          <Text
            style={[
              styles.textTitle,
              {
                color: "#9f52a0",
                marginVertical: 0,
                fontSize: 24,
                textAlign: "center",
              },
            ]}
          >
            Орлогын эх үүсвэрээ
          </Text>
          <Text
            style={[
              styles.textTitle,
              {
                color: "#9f52a0",
                marginVertical: 0,
                fontSize: 24,
                textAlign: "center",
              },
            ]}
          >
            нэмэх шинэ арга
          </Text>
        </View>
        <View style={{ position: "absolute", bottom: 50, right: 30 }}>
          <Text
            style={[
              styles.textTitle,
              {
                fontFamily: "Mogul",
                color: "#ea1c24",
                fontSize: 60,
              },
            ]}
          >
            Инфлүнсер
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{ width: windowWidth / 1.1, alignSelf: "center", marginTop: 15 }}
      >
        {/* Header Page and text */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-bold",
                color: "#5e8aa4",
                fontSize: 10,
              }}
            >
              ЧИГ ХАНДЛАГА
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "grey", fontFamily: "Montserrat-regular" }}>
              CAREER DEVELOPER
            </Text>
            <Text style={{ fontWeight: "bold" }}> | 28-33 </Text>
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
          Ердөө 10 хүрэхгүй жилийн өмнө танд хэн нэгэн өөрийн сошиал хуудсандаа
          бараа бүтээгдэхүүн, үйлчилгээг туршиж үзсэн сэтгэгдлээ хуваалцаад
          хүмүүсийн сарын дундаж цалингаас ч өндөр орлого олох боломжтой гэж
          хэлсэн бол та итгэх байсан уу?
        </Text>
        <Text style={styles.textStatus}>
          Дэлхийн эдийн засгийн форум болон Бостон консалтинг группээс хийсэн
          судалгааны тайланд дурдсанаар 2026 он гэхэд 21 сая хүн ажлын байраа
          алдах бөгөөд тэдний 70 хувь нь тухайн ажлын байр хөдөлмөрийн зах зээлд
          шаардлагагүй болсноос үүдэлтэй хэмээжээ. Технологийн дэвшил зарим
          ажлын байрны оршин тогтнох үндсийг үгүй хийж байгаа боловч урьд өмнө
          байгаагүй өөр төрлийн ажлын байруудыг бий болгож буйн нэг жишээ нь
          инфлүнсер юм. Өдгөө сошиал хуудсандаа олон дагагчтай болох нь орлогоо
          солонгоруулах нэг арга болжээ.
        </Text>
        <Text style={[styles.textTitle, { color: "#5e8aa4" }]}>
          ИНФЛҮНСЕР ХЭМЭЭХ ОЙЛГОЛТЫГ ОЛОН УЛСАД ДАРААХ БАЙДЛААР ТОДОРХОЙЛЖ БАЙНА
        </Text>
        <Text style={styles.textStatus}>
          • Өөрийн эрх мэдэл, мэдлэг, байр суурь болон хүлээн авагчидтайгаа
          харилцах харилцаагаараа дамжуулан бусдын худалдан авах шийдвэрт
          нөлөөлөх хүчтэй хүмүүс
        </Text>
        <Text style={styles.textStatus}>
          • Эдгээр хүмүүс нь өөр өөрийн гэсэн тодорхой салбарт харьяалагдах олон
          тооны идэвхтэй дагагчтай байдаг. Түүний дагагчийн хэмжээ нь хуудсаа
          хэр сонирхолтой, ач холбогдолтой хөтөлдгөөс хамаардаг.
        </Text>

        <Text style={styles.textStatus}>
          Гэхдээ тэднийг зөвхөн маркетингийн тодорхой нэг суваг гэж харах нь
          өрөөсгөл ойлголт юм. Харин хувь хүн, албан байгууллагууд зорилтот
          хэрэглэгчдэдээ бүтээгдэхүүн, үйлчилгээгээ таниулахдаа хамтран ажиллах
          боломжтой нийгмийн харилцааны үнэ цэн бүхий зүйл гэж харах нь зүйтэй
        </Text>

        <Text style={styles.textStatus}>
          Инфлүнсер маркетингийн зах зээлд хамгийн чухал үзүүлэлтийн нэг бол
          инфлүнсерүүдийн дагагчдын тоо юм. Мэргэжилтнүүд тэднийг дагагчдын
          тоогоор нь дараах байдлаар ангилж байна.
        </Text>
        {/* asd */}
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Микро-инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>15,000</Text>-аас
              бага
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Энгийн-инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>
                15,000-50,000
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Өсөж буй инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>
                50,000-100,000
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Дундаж инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>
                100,000- 500,000
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Макро-инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>
                500,000-1,000,000
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat-regular",
              marginVertical: 10,
              alignSelf: "center",
            }}
          >
            Мега-инфлүнсер
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              <Text style={{ fontFamily: "Montserrat-bold" }}>1 саяас </Text>
              дээш
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-regular",
              }}
            >
              дагагчтай
            </Text>
          </View>
        </View>
        <View style={{ borderWidth: 1, marginBottom: 10 }} />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Montserrat-regular",
          }}
        >
          <Text style={{ fontFamily: "Montserrat-bold" }}>Эх сурвалж: </Text>
          influencermarketinghub.com
        </Text>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <Text style={{ flex: 0.2, fontSize: 50, color: "#5e8aa4" }}>
            01.{" "}
          </Text>
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontFamily: "Montserrat-bold" }}>
              Dulguun.odkhuu
            </Text>

            <Image
              // source={require("../../../assets/newF/duk1.jpg")}
              source={{ uri: api + "/upload/" + "duk1.jpg" }}
              style={{
                width: windowWidth / 1.5,
                height: 120,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
          <Text style={{ flex: 0.2, fontSize: 50, color: "#5e8aa4" }}>
            02.{" "}
          </Text>
          <View style={{ flex: 0.8 }}>
            <Text style={{ fontFamily: "Montserrat-bold" }}>
              theukaofficial
            </Text>

            <Image
              // source={require("../../../assets/newF/uka1.jpg")}
              source={{ uri: api + "/upload/" + "uka1.jpg" }}
              style={{
                width: windowWidth / 1.5,
                height: 120,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>

        <Text style={styles.textStatus}>
          Манай улсын хувьд Instagram-д хамгийн олон буюу 609 мянган
          дагагчтайгаар жүжигчин О.Дөлгөөн тэргүүлж байгаа бөгөөд удаах байрыг
          дуучин Ука эзэлж байна. Эдгээр инфлүнсер нь дээрх ангиллын макро
          түвшинд харьяалагджээ.
        </Text>
        <View style={{}}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              // source={require("../../../assets/newF/Instagram-Icon.png")}
              source={{ uri: api + "/upload/" + "Instagram-Icon.png" }}
              style={{
                width: 50,
                resizeMode: "contain",
                height: 50,
                alignSelf: "center",
              }}
            />
            <View style={{ width: "90%" }}>
              <Text
                style={[styles.textTitle, { fontSize: 16, marginLeft: 10 }]}
              >
                Instagram дээр хамгийн олон дагагчтай TOP 10 инфлүнсерийн
                жагсаалт
              </Text>
              <Text
                style={[
                  styles.textStatus,
                  { fontSize: 12, marginLeft: 10, bottom: 10 },
                ]}
              >
                /2022.07.31 байдлаар/
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              textAlign: "center",
              fontSize: 20,
              marginVertical: 50,
            }}
          >
            МОНГОЛД
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#cccccc" }} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                width: "10%",
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Username</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>Followers</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>
              Engagement
            </Text>
            <Text
              style={{ width: "20%", textAlign: "center", marginVertical: 5 }}
            >
              Likes per post
            </Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: "#cccccc", marginBottom: 10 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/29m1.jpg")}
              source={{ uri: api + "/upload/" + "29m1.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              dulguun.odkhuu
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>609K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.63%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>3.7к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/29m2.jpg")}
              source={{ uri: api + "/upload/" + "29m2.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              theukaofficial
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>578K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.37%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>2к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m19.jpg")}
              source={{ uri: api + "/upload/" + "30m19.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              iderodcomedian
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>570K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.58%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>9к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m2.jpg")}
              source={{ uri: api + "/upload/" + "30m2.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              khishigdalai__
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>479K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.99%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>4к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m3.jpg")}
              source={{ uri: api + "/upload/" + "30m3.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              shuuderheen
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>491K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.4%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>2к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m4.jpg")}
              source={{ uri: api + "/upload/" + "30m4.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              bold.dorjsuren
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>471K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.11%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>471</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m5.jpg")}
              source={{ uri: api + "/upload/" + "30m5.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              tsogtoo.official
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>470K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.47%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>2к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m6.jpg")}
              source={{ uri: api + "/upload/" + "30m6.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              tugs_saruul
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>443K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>4K</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m7.jpg")}
              source={{ uri: api + "/upload/" + "30m7.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              g.undarmaa
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>433K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.33%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>1K</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m8.jpg")}
              source={{ uri: api + "/upload/" + "30m8.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              dulguun_positive mongolians
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>406K</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.35%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>1K</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <Text>
            Эх сурвалж:{" "}
            <Text style={{ fontWeight: "bold" }}>www.heepsy.com</Text>
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-medium",
              textAlign: "center",
              fontSize: 20,
              marginVertical: 50,
            }}
          >
            ДЭЛХИЙД
          </Text>
          <View style={{ borderWidth: 1, borderColor: "#cccccc" }} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                width: "10%",
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Username</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>Followers</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>
              Engagement
            </Text>
            <Text
              style={{ width: "20%", textAlign: "center", marginVertical: 5 }}
            >
              Likes per post
            </Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: "#cccccc", marginBottom: 10 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m9.jpg")}
              source={{ uri: api + "/upload/" + "30m9.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              Cristiano Ronaldo
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>472M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.65%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>7M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m10.jpg")}
              source={{ uri: api + "/upload/" + "30m10.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Kylie</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>363M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>2%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>6M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m11.jpg")}
              source={{ uri: api + "/upload/" + "30m11.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Leo Messi</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>354M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.6%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>5M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m12.jpg")}
              source={{ uri: api + "/upload/" + "30m12.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              Selana Gomez
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>340M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.27%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>4к</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m13.jpg")}
              source={{ uri: api + "/upload/" + "30m13.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>The Rock</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>332M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.35%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>1M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m14.jpg")}
              source={{ uri: api + "/upload/" + "30m14.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              Ariana Grande
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>327M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.18%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>3.6M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m15.jpg")}
              source={{ uri: api + "/upload/" + "30m15.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              Kim Kardashian
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>325M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.03%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>3M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m16.jpg")}
              source={{ uri: api + "/upload/" + "30m16.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Beyoncé</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>271M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>1.54%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>3.8M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m17.jpg")}
              source={{ uri: api + "/upload/" + "30m17.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>
              Khloé Kardashian
            </Text>
            <Text style={{ width: "20%", textAlign: "center" }}>266M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>0.6%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>1.4M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/30m18.jpg")}
              source={{ uri: api + "/upload/" + "30m18.jpg" }}
              style={{
                width: "10%",
                height: 38,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
            <Text style={{ width: "30%", textAlign: "center" }}>Kendall</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>251M</Text>
            <Text style={{ width: "25%", textAlign: "center" }}>2.5%</Text>
            <Text style={{ width: "20%", textAlign: "center" }}>5.8M</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#cccccc",
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: "right" }}>
            Эх сурвалж:{" "}
            <Text style={{ fontWeight: "bold" }}>socialtracker.io</Text>
          </Text>
        </View>
        <Image
          // source={require("../../../assets/newF/31m3.png")}
          source={{ uri: api + "/upload/" + "31m3.png" }}
          style={{
            width: 150,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.textStatus}>
          Instagram-ийн инфлүнсерүүдэд аливаа байгууллага сошиал сурталчилгааны
          төсвийнхөө 68 хувийг төлөвлөдөг аж. Instargram-ийн мега түвшний “одод”
          болох Криштиану Роналду, Кайли Женнер, Девин Жонсон нар пост нэг
          бүрээс 1 сая ам.доллар буюу 1 тэрбум төгрөгөөс ч илүү орлогыг олох
          боломжтой байдгийг “Hopper HQ”-ээс мэдээлсэн билээ. Харин манай улсын
          инфлүнсерүүдийн тухайд 50 мянгаас дээш дагагчтай инфлүнсерийн нэг
          story-ны үнэ 500,000 төгрөгөөс, шууд дамжуулалт (live) 1 сая төгрөгөөс
          эхэлж байна
        </Text>
        <Image
          // source={require("../../../assets/newF/31m2.png")}
          source={{ uri: api + "/upload/" + "31m2.png" }}
          style={{
            width: 150,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.textStatus}>
          Youtube суваг дээр аливаа контент бүтээгчид түншийн хөтөлбөр буюу
          “Youtube’s Partner Program” (YPP) -д хамрагдаж өөрийн бичлэг дундуур
          сурталчилгаа байршуулах байдлаар орлого олох боломжтой. Уг хөтөлбөрт
          хамрагдахын тулд 1,000 захиалагчтай, 4,000 цагийн чанартай үзэлттэй
          байхаас гадна AdSense-д өөрийн бүртгэлээ хийсэн байх шаардлагатай аж.
          Youtuber-үүд ойролцоогоор 1,000 зар сурталчилгааны үзэлтээс 18
          ам.долларын орлого олдог ба энэ нь 1,000 үзэлт тутмаас 3-5 ам.доллар
          олохтой тэнцэнэ.
        </Text>
        <Text style={styles.textStatus}>
          Сүүлийн үед энэ зах зээлд хүүхдүүд их хэмжээний орлого олж байгаа нь
          дэлхий нийтийн анхаарлыг татаж буй. Жишээлбэл, 8 настай хүү “Ryan of
          Ryan’s” сувгаараа 26 сая ам.долларын орлого, Настяа 18 сая ам.доллар,
          тавдугаар ангийн найзууд хамтран хөтөлдөг ”Dude Perfect” суваг 20 сая
          ам.долларын орлогыг жилд олдог ажээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/tik-tok-logo-33093.png")}
          source={{ uri: api + "/upload/" + "tik-tok-logo-33093.png" }}
          style={{
            width: 150,
            height: 100,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.textStatus}>
          Tik Tok нь youtube-тэй адилхан “Tik Tok Creater Fund” хэмээх
          түншлэлийн хөтөлбөртэй. Тус хөтөлбөрт хамрагдахын тулд Америк, Англи,
          Франц, Герман, Итали улсын бүртгэлтэй байх, хамгийн багадаа 18 нас
          хүрсэн, 100,000 дагагчтай байхаас гадна сүүлийн 30 хоногийн үзэлт нь
          100,000-аас багагүй байх шаардлагыг тавьдаг аж. Tik Tok нь инфлүнсер
          маркетингийн зах зээлд Instagram-ийн араас хүчтэй орж ирж байгаа
          платформ бөгөөд бусад платформуудтай адил механизмаар орлого олох
          боломжтой. Жишээлбэл, ASMR бичлэг хийдэг Tik Tok хэрэглэгч Лиүси Девис
          нэг шууд дамжуулалтыг 20-300 ам.доллароор хийдэг ажээ.
        </Text>
        <Text
          style={[
            styles.textTitle,
            { fontFamily: "Cambria-italic", fontSize: 25, color: "#5e8aa4" },
          ]}
        >
          ИНФЛҮНСЕР МАРКЕТИНГИЙН ЗАХ ЗЭЭЛИЙН ХЭМЖЭЭ 16.4 ТЭРБУМ АМ.ДОЛЛАР БАЙНА
        </Text>
        <Text style={styles.textStatus}>
          “Хэрэв та аливаа үйлчилгээг авахдаа төлбөр төлөхгүй байгаа бол үүний
          төлөөс нь таны цаг хугацаа юм” хэмээх үг байдаг. Дэлхийн хүн амын 58
          хувь нь сошиал медиа ашигладаг бөгөөд өдөрт дунджаар 2 цаг 27 минутыг
          энд зарцуулдаг гэнэ. Энэ нь байгууллагууд бүтээгдэхүүн,
          үйлчилгээнийхээ маркетингийн төсөвт “сошиал маркетинг” хэмээх нэг
          категорийг нэмэх шалтгаан болсон юм. Өдөр ирэх тусам энэ зах зээлийн
          хэмжээ тэлж 2018 онд 1.7 тэрбум ам.доллар байсан бол 2021 онд 13.8
          тэрбум, 2022 онд 16.4 тэрбум ам.долларт хүрчээ. “Statista”- ийн хийсэн
          судалгаагаар инфлүнсер маркетингийн нөлөөллөөр Бразилын дараа буюу
          дэлхийд хоёрдугаарт ордог БНХАУ-д л гэхэд хүмүүс худалдан авалтынхаа
          40 хувийг инфлүнсерүүдийн нөлөөгөөр хийдэг гэсэн байна. Энэ зах зээл
          рүү чиглэсэн агентлагуудын тоо 2016 онд ердөө 190 байсан бол таван
          жилийн дараа 1,360 гаруй болж өсжээ.
        </Text>
        <Image
          // source={require("../../../assets/newF/chart.jpg")}
          source={{ uri: api + "/upload/" + "chart.jpg" }}
          style={{ width: "100%", height: 250, resizeMode: "contain" }}
        />
        <Text style={[styles.textTitle, { color: "#5e8aa4" }]}>
          ДАВУУ ТАЛ ҮР ДҮНГ ХЭМЖИХ БОЛОМЖ
        </Text>
        <Text style={styles.textStatus}>
          Уламжлалт сурталчилгааны хэлбэрүүд буюу телевизийн реклам, сонин болон
          хэвлэмэл сурталчилгаанууд, радио зарын нэг сул тал нь тухайн
          сурталчилгааг бодитойгоор хэдэн хүн үзэж, ямар сэтгэгдэл төрснийг
          тооцоолох боломжгүй юм. Харин сошиал маркетингийн тухайд тухай
          сурталчилгааг үзсэн хүний тоо, сэтгэгдэл зэргийг тооцож үнэлэх бүрэн
          боломжтой байдаг. Маркетеруудын 80 хувь нь инфлүнсер маркетинг үр
          дүнтэй гэдэгтэй бүрэн санал нийлдэг бөгөөд 89 хувь нь хамгийн шилдэг
          нь биш ч бусад сурталчилгааны сувгуудаас хамгийн үр дүнтэй гэж үздэг
        </Text>
        <Text
          style={[
            styles.textTitle,
            { fontFamily: "Cambria-italic", fontSize: 25, color: "#5e8aa4" },
          ]}
        >
          КОМПАНИУД ӨНДӨР ҮНЭТЭЙ МЕГА ИНФЛҮНСЕРҮҮДЭЭС ИЛҮҮ ХАНДАЛТ ӨНДӨРТЭЙ,
          ОЛОН МИКРО ИНФЛҮНСЕРТЭЙ ХАМТАРЧ АЖИЛЛАХ ХАНДЛАГАТАЙ БАЙНА.
        </Text>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={{ width: "40%" }} />
          <Image
            style={{ width: "20%", resizeMode: "contain", height: 50 }}
            // source={require("../../../assets/newF/31m3.png")}
            source={{ uri: api + "/upload/" + "31m3.png" }}
          />
          <Image
            style={{ width: "20%", resizeMode: "contain", height: 50 }}
            // source={require("../../../assets/newF/soloyoutube.png")}
            source={{ uri: api + "/upload/" + "soloyoutube.png" }}
          />
          <Image
            style={{ width: "20%", resizeMode: "contain", height: 50 }}
            // source={require("../../../assets/newF/solotiktok.png")}
            source={{ uri: api + "/upload/" + "solotiktok.png" }}
          />
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "#cccccccc", marginTop: 10 }}
        />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Микро-инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>3.86% </Text>
          <Text style={{ width: "20%" }}>1.63% </Text>
          <Text style={{ width: "20%" }}>17.96%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Энгийн-инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>2.39% </Text>
          <Text style={{ width: "20%" }}>0.51% </Text>
          <Text style={{ width: "20%" }}>9.75%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Өсөж буй инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>1.87%</Text>
          <Text style={{ width: "20%" }}>0.46%</Text>
          <Text style={{ width: "20%" }}>8.37%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Дундаж инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>1.62%</Text>
          <Text style={{ width: "20%" }}>0.43%</Text>
          <Text style={{ width: "20%" }}>6.67%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Макро-инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>1.36%</Text>
          <Text style={{ width: "20%" }}>0.44%</Text>
          <Text style={{ width: "20%" }}>6.2%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ width: "40%", marginVertical: 10 }}>
            Мега-инфлүнсер
          </Text>
          <Text style={{ width: "20%" }}>1.21%</Text>
          <Text style={{ width: "20%" }}>0.37%</Text>
          <Text style={{ width: "20%" }}>4.96%</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccccc" }} />
        <Text style={[styles.textStatus, { textAlign: "right" }]}>
          Instagram, Youtube, Tik Tok дээрх инфлүнсерүүдийн түвшин ба хүлээн
          авагчдад хүрч буй байдал
        </Text>
        <Text style={styles.textStatus}>
          Дээрх судалгаанаас харахад олон дагагчтай инфлүнсерүүдээс илүү цөөн
          дагагчтай нөлөөлөгчдийн Instagram, Youtube, Tik Tok-ийн хандалтын
          түвшин өндөр байгаа юм. Жишээлбэл, микро инфлүнсерүүдийн Instagram
          пост, story-ны хандалт 3.36 хувь байхад 1 саяас дээш нөлөөлөөгчийнх
          1.21 хувь байна. Энэ зөрүү Tik Tok дээр илүү өндөр ажиглагдаж байгаа
          бөгөөд микро инфлүнсерүүдийн хандалт 17.96 хувь байхад мега
          инфлүнсерүүдийнх түүнээс 4 дахин бага хандалттай байна. Энэ нь
          компаниуд өндөр үнэтэй мега инфлүнсерүүдээс илүү хандалт өндөртэй олон
          микро инфлүнсертэй хамтарч ажиллах хандлага Instagram, youtube, tik
          tok-ийн зах зээлүүдэд бий болж буйг харуулж байна.
        </Text>
        <Text style={styles.textTitle}>
          Инфлүнсер маркетингийн хамгийн түгээмэл төлбөрийн хэлбэр нь бартердах
          буюу бараа, бүтээгдэхүүн санал болгох байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/chart2.jpg")}
          source={{ uri: api + "/upload/" + "chart2.jpg" }}
          style={{ height: 150, width: "100%", resizeMode: "contain" }}
        />
        <Text style={styles.textStatus}>
          Инфлүнсерийн зар сурталчилгааны төлбөрийг төлөх хэлбэрийн тухайд
          хамгийн өндөр нь буюу 36 хувь нь байгууллагууд бүтээгдэхүүн,
          үйлчилгээгээрээ “бартердах”, хөнгөлөлт үзүүлэх байсан бол дараагийн
          хэлбэр нь бэлэн мөнгөний төлөлт орж байна. Инфлүнсерүүд нь тухайн
          компанийн хувьд гэрээгээр гүйцэтгэгч гэсэн статустайгаар явдаг. Иймд
          тэд статусын ангиллын хувьд бие даасан хувиараа хөдөлмөр эрхлэгчийн
          ангилалд багтах нь тодорхой.{" "}
        </Text>
        <Text style={styles.textStatus}>
          АНУ-ын хувьд инфлүнсерүүдийн орлого 600 ам.доллар хүрч байвал орлогын
          тайлан шаардаж татвар авдаг байна. Мөн тухайн үйлчилгээний төлбөрт
          бүтээгдэхүүн үйлчилгээ өгсөн бол тухайн зүйлийг зах зээлийн
          үнэлгээгээр тооцож татвар төлөх үүрэгтэй. Харин Өмнөд Солонгос улсын
          тухайд жилийн орлого нь 10,000 ам.доллараас давсан бол татварын
          тайлангаа өгөх шаардлагатай байдаг.
        </Text>
        <Text style={[styles.textTitle, { color: "#5e8aa4" }]}>
          YOUTUBE, INSTAGRAM, TIK TOK-ООС 100,000 АМ.ДОЛЛАР ОЛОХЫН ТУЛД ХЭДЭН
          ДАГАГЧТАЙ БАЙХ ШААРДЛАГАТАЙ ВЭ?
        </Text>
        <Text style={styles.textStatus}>
          CNBC-ээс Lickd.co тооцооллын платформ ашиглан дараах платформууд дээр
          100,000 ам.доллар олохын тулд хэдэн дагагчтай байх шаардлагатайг
          тооцоолсон байна.
        </Text>
        <Image
          // source={require("../../../assets/newF/31m2.png")}
          source={{ uri: api + "/upload/" + "31m2.png" }}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
        <Text style={styles.textStatus}>
          Та уг платформ дээр 100.000 ам.доллар олохын тулд хамгийн багадаа
          1,000 захиалагч, жилийн үзэлт 24 сая байх хэрэгтэй
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#cccccc", marginTop: 20 }}
        />
        <Image
          // source={require("../../../assets/newF/31m3.png")}
          source={{ uri: api + "/upload/" + "31m3.png" }}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
        <Text style={styles.textStatus}>
          Дээрх орлогыг олохын тулд та багадаа 5,000 дагагчтай байхаас гадна нэг
          жилийн дотор 308 постыг бүүстлэсэн байх хэрэгтэй.
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#cccccc", marginTop: 20 }}
        />
        <Image
          // source={require("../../../assets/newF/tik-tok-logo-33093.png")}
          source={{ uri: api + "/upload/" + "tik-tok-logo-33093.png" }}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
        <Text style={styles.textStatus}>
          Дор хаяж 10.000 дагагчтай байхаас гадна жилийн үзэлт 270 сая байх
          хэрэгтэй.
        </Text>
        <View
          style={{ borderWidth: 1, borderColor: "#cccccc", marginTop: 20 }}
        />
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/tugsuu.jpg")}
              source={{ uri: api + "/upload/" + "tugsuu.jpg" }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#323232",
              }}
            />
            <Text
              style={[styles.textStatus, { marginTop: 10, color: "#5e8aa4" }]}
            >
              С.ТӨГС
            </Text>
            <Text>Топ модел</Text>
          </View>
          <Text
            style={[
              styles.textTitle,
              { width: "70%", marginLeft: 10, color: "#5e8aa4" },
            ]}
          >
            “БИ АНХНААСАА НӨЛӨӨЛӨГЧ БОЛОХЫГ ХҮСЭЖ, ЗОРИЛГО ТАВЬЖ БАЙГААГҮЙ.
            ӨӨРӨӨР ХЭЛБЭЛ, ДАГАГЧАА ӨСГӨХ ТОДОРХОЙ БОДЛОГО, ТӨЛӨВЛӨГӨӨ
            ГАРГАДАГГҮЙ. ХИЙЖ БАЙГАА АЖЛААР МААНЬ ДАМЖУУЛЖ СОШИАЛ ХУУДАСНЫ МААНЬ
            ДАГАГЧИД ӨСДӨГ.”
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccc" }} />
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              // source={require("../../../assets/newF/ruby.jpg")}
              source={{ uri: api + "/upload/" + "ruby.jpg" }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                borderRadius: 50,
                borderWidth: 2,
                borderColor: "#323232",
              }}
            />
            <Text style={{ marginTop: 10, color: "#5e8aa4" }}>РУБИ</Text>
            <Text>Бүжигчин</Text>
          </View>
          <Text
            style={[
              styles.textTitle,
              { width: "70%", marginLeft: 10, color: "#5e8aa4" },
            ]}
          >
            “ОЛОН ДАГАГЧТАЙ БОЛЖ, СОШИАЛ ХАЯГУУДААРАА ДАМЖУУЛАН ТОДОРХОЙ
            ХЭМЖЭЭНИЙ ОРЛОГО ОЛНО ГЭДЭГ ХАРАГДАЖ БАЙГАА ШИГЭЭ АМАРХАН ЗҮЙЛ БИШ.
            ХҮМҮҮС СОШИАЛ ДЭЭР ХЭН НЭГЭНД ХАРУУЛАХЫГ ХҮССЭН ДҮРЭЭ Л ХАРУУЛЖ
            БАЙГАА. ГЭТЭЛ ТҮҮНИЙ АРД ЯГ Л ХҮН БҮРД БАЙДАГ ШИГ АСУУДЛУУДТАЙ
            БАЙГАА ГЭДГИЙГ ОЙЛГООСОЙ ГЭЖ ХҮСЭЖ БАЙНА.”
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#cccccc" }} />
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

export default Page6;

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
