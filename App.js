import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/screens/Home";
import Search from "./src/components/screens/Search";
import Reels from "./src/components/screens/Reels";
import Activity from "./src/components/screens/Activity";
import Profile from "./src/components/screens/Profile";
import Ionic from "react-native-vector-icons/Ionicons";
import Status from "./src/components/screenComponents/Status";
import FriendProfile from "./src/components/screenComponents/FriendProfile";
import EditProfile from "./src/components/screenComponents/EditProfile";
import { Platform } from "react-native";
import Login from "./src/components/screens/Auth/Login";
import Splash from "./src/components/screens/Auth/Splash";
import Landing from "./src/components/screens/Auth/Landing";
import Sign_up from "./src/components/screens/Auth/Sign_up";
import Forgot_Otp from "./src/components/screens/Auth/Forgot_Otp";
import Forgot_Password from "./src/components/screens/Auth/Forgot_Password";
import View_All_Comments from "./src/components/screens/Home_Components/View_All_Comments";
import Settings from "./src/components/screens/User_Profile/Settings";
import ProfileTab from "./src/components/screens/User_Profile/ProfileTab";

const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 70 : 50,
          },

          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "ios-search-outline";
            } else if (route.name === "Reels") {
              iconName = focused
                ? "caret-forward-circle"
                : "caret-forward-circle-outline";
            } else if (route.name === "Activity") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Bottom" component={BottomTabScreen} /> */}
        <Stack.Screen name="Home" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="Forgot_Otp" component={Forgot_Otp} />
        <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
        <Stack.Screen name="View_All_Comments" component={View_All_Comments} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProfileTab" component={ProfileTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
