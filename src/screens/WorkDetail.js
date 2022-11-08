import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useWorks from "../hooks/useWorks";
import CustomHeader from "../components/CustomHeader";
import { api } from "../../Constants";
import Footer from "../components/Footer";
import axios from "axios";
const WorkDetail = () => {
  const [works] = useWorks();
  const [workData, setWorkData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pagination, setPagination] = useState();
  const [noMore, setNoMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const getWorkData = () => {
    axios
      .get(`${api}/api/v1/works?limit=10&sort=-createdAt&page=${pageCurrent}`)
      .then((res) => {
        setWorkData([...workData, ...res.data.data]);
        setPagination(res.data.pagination);
        // setErrorMessage(null);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setIsLoading(false);
    setIsFetching(false);
    getWorkData();
    return () => {};
  }, [pageCurrent, isFetching]);
  const onRefresh = () => {
    setIsFetching(true);
  };
  const renderFooter = () => {
    return isLoading ? (
      <View style={{ marginBottom: 100 }}>
        <ActivityIndicator />
      </View>
    ) : null;
  };
  const handleMore = () => {
    if (pageCurrent >= pagination.pageCount) {
      setNoMore(true);
    } else {
      setPageCurrent(pageCurrent + 1);
      setIsLoading(true);
    }
  };

  const NoMoreData = () => {
    return noMore ? (
      <View style={{ marginBottom: 100 }}>
        <Footer />
      </View>
    ) : null;
  };
  return (
    <>
      <View style={{ backgroundColor: "#041C32" }}>
        <CustomHeader />

        <FlatList
          data={workData}
          onRefresh={onRefresh}
          refreshing={isFetching}
          ListFooterComponent={noMore ? NoMoreData : renderFooter}
          onEndReached={handleMore}
          initialNumToRender={5}
          onEndReachedThreshold={0}
          ListHeaderComponent={
            <>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "white",
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  marginLeft: 20,
                  marginVertical: 10,
                }}
              >
                Нээлттэй ажлын байр
              </Text>
            </>
          }
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      justifyContent: "center",
                      alignContent: "center",
                      left: 10,
                      flex: 1,
                      marginTop: 10,
                    }}
                  >
                    <Image
                      source={{ uri: api + "/upload/" + item.photo }}
                      style={{
                        height: 100,
                        width: 100,
                        resizeMode: "stretch",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <View style={{ marginTop: 10, flex: 1, right: 65 }}>
                    <Text style={styles.companyInfo}>Компани: {item.name}</Text>
                    <Text style={styles.companyInfo}>
                      Утас: {item.phoneNumber}
                    </Text>
                    <Text style={styles.companyInfo}>И-мэйл: {item.email}</Text>
                  </View>
                </View>

                <View
                  style={{
                    paddingVertical: 10,
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {item.work1 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work1} </Text>
                  )}
                  {item.work2 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work2} </Text>
                  )}
                  {item.work3 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work3} </Text>
                  )}
                  {item.work4 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work4} </Text>
                  )}
                  {item.work5 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work5} </Text>
                  )}
                  {item.work6 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work6} </Text>
                  )}
                  {item.work7 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work7} </Text>
                  )}
                  {item.work8 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work8} </Text>
                  )}
                  {item.work9 === "0" ? null : (
                    <Text style={styles.workName}> •︎ {item.work9} </Text>
                  )}
                </View>

                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: "white",
                    marginTop: 10,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default WorkDetail;

const styles = StyleSheet.create({
  workName: {
    color: "white",
    fontSize: 14,
    paddingLeft: 18,
  },

  companyInfo: {
    color: "white",
    fontSize: 15,
    paddingVertical: 2,
  },
  infoContainer: {
    flexDirection: "row",
  },
});
