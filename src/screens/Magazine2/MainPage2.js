import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Page from "./Page";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page9 from "./Page9";
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";
import Ads1 from "./Ads1";
import Ads2 from "./Ads2";
import Ads3 from "./Ads3";
import Ads4 from "./Ads4";
import Ads5 from "./Ads5";
import Ads6 from "./Ads6";
import Ads7 from "./Ads7.js";
import Ads8 from "./Ads8";
import Ads9 from "./Ads9";

import PagerView from "react-native-pager-view";
import Page8 from "./Page8";
import Page15 from "./Page15";
import Page16 from "./Page16";
import Ads10 from "./Ads10";
import Loading from "../../components/Loading";
const MainPage2 = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <PagerView initialPage={0} style={{ flex: 1 }}>
        <View key={"1"}>
          <Page setLoading={setLoading} />
        </View>
        <View key={"2"}>
          <Ads1 />
        </View>
        <View key={"3"}>
          <Page1 />
        </View>
        <View key={"4"}>
          <Page2 />
        </View>
        <View key={"5"}>
          <Ads2 />
        </View>
        <View key={"6"}>
          <Page3 />
        </View>
        <View key={"7"}>
          <Page4 />
        </View>
        <View key={"8"}>
          <Ads3 />
        </View>
        <View key={"9"}>
          <Page5 />
        </View>
        <View key={"10"}>
          <Ads4 />
        </View>
        <View key={"11"}>
          <Page6 />
        </View>
        <View key={"12"}>
          <Ads5 />
        </View>
        <View key={"13"}>
          <Page7 />
        </View>
        <View key={"14"}>
          <Page8 />
        </View>
        <View key={"15"}>
          <Page9 />
        </View>
        <View key={"16"}>
          <Ads6 />
        </View>

        <View key={"17"}>
          <Page10 />
        </View>
        <View key={"18"}>
          <Ads10 />
        </View>
        <View key={"19"}>
          <Page11 />
        </View>
        <View key={"20"}>
          <Ads7 />
        </View>
        <View key={"21"}>
          <Page12 />
        </View>
        <View key={"22"}>
          <Page13 />
        </View>

        <View key={"23"}>
          <Page14 />
        </View>
        <View key={"24"}>
          <Page15 />
        </View>
        <View key={"25"}>
          <Page16 />
        </View>
        <View key={"26"}>
          <Ads8 />
        </View>
        <View key={"27"}>
          <Ads9 />
        </View>
      </PagerView>
    </>
  );
};

export default MainPage2;

const styles = StyleSheet.create({});
