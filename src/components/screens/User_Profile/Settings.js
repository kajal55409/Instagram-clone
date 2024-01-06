import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SearchBox from "../../screenComponents/SearchBox";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  Ionic,
  MaterialIcons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "#DEDEDE",
            // marginTop: 50,
            padding: 10,
            flexDirection: "row",
            //   justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-backspace" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginHorizontal: 20,
            }}
          >
            Settings
          </Text>
        </View>
        <SearchBox />
        <View style={{ marginHorizontal: 15 }}>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <FontAwesome5 name="user-plus" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Follow and invite friends</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <Ionicons name="notifications" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Notifications</Text>
            </View>
          </View>

          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons name="lock" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Privacy</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="account-supervisor"
                size={24}
                color="black"
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Supervision</Text>
            </View>
          </View>

          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons name="security" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Security</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons name="bullhorn" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Ads</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons name="account-circle" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Account</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <Entypo name="help-with-circle" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Help</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialIcons name="error-outline" size={24} color="black" />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>About</Text>
            </View>
          </View>
          <View style={styles.icon_text_view}>
            <View style={{ justifyContent: "center" }}>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={24}
                color="black"
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.text_heading}>Theme</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text_bold_heading}>Accounts Center</Text>
            <Text style={{ color: "gray", marginVertical: 10 }}>
              Control settings for connected experiences across Instagram,the
              Facebook app and Messenger, including story and post sharing and
              logging in.{" "}
            </Text>
            <Text style={[styles.text_bold_heading, { color: "black" }]}>
              Logins
            </Text>
            <Text style={styles.text_bold_heading}>Add Account</Text>
            <Text style={styles.text_bold_heading}>Log out</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  text_heading: {
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: "600",
  },
  icon_text_view: {
    flexDirection: "row",
    height: 30,
    marginTop: 15,
    // backgroundColor: "red",
  },
  text_bold_heading: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "600",
    color: "#3897f0",
    marginVertical: 10,
  },
});
