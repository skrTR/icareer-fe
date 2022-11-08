import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WorkDetail from "../screens/WorkDetail";
import MainPage from "../screens/Magazine/MainPage";
import UserContext from "../contexts/UserContex";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen2 from "../screens/LoginScreen2";
import RegisterScreen2 from "../screens/RegisterScreen2";
import Terms from "../components/Terms";
import ForgetPassword from "../screens/ForgetPassword";
import ResetPassword from "../screens/ResetPassword";
import SplashScreen from "../screens/SplashScreen";

import MainPage2 from "../screens/Magazine2/MainPage2";
import Page3 from "../screens/Magazine2/Page3";
import Page4 from "../screens/Magazine2/Page4";
import Page5 from "../screens/Magazine2/Page5";
import Page6 from "../screens/Magazine2/Page6";
import Page8 from "../screens/Magazine2/Page8";
import Page9 from "../screens/Magazine2/Page9";
import Page11 from "../screens/Magazine2/Page11";
import Page13 from "../screens/Magazine2/Page10";
import Page16 from "../screens/Magazine2/Page16";
const Stack = createNativeStackNavigator();

const MyStackNavigator = () => {
  const state = useContext(UserContext);
  if (state.isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      {state.isLoggedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="WorkDetail"
            component={WorkDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MagazineDetail"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MagazineDetail2"
            component={MainPage2}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page3"
            component={Page3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page4"
            component={Page4}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page5"
            component={Page5}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page6"
            component={Page6}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page8"
            component={Page8}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page9"
            component={Page9}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page11"
            component={Page11}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page13"
            component={Page13}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Page16"
            component={Page16}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Terms"
            component={Terms}
            // options={{ headerShown: false }}
            options={() => ({
              title: "Үйлчилгээний нөхцөл",
            })}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
