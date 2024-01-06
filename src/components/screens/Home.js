import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Platform,
  Image,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import Stories from "../screenComponents/Stories";
import Post from "../screenComponents/Post";
import image from "../../Utils/image";
import { BottomSheet } from "react-native-btr";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 40 : 0,
        }}
      >
        <View>
          <Image
            source={image.logo}
            resizeMode={"contain"}
            style={styles.imgStyle}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 70,
            // backgroundColor: "red",
            justifyContent: "space-around",
          }}
        >
          <FontAwesome
            name="plus-square-o"
            style={{ fontSize: 24 }}
            onPress={toggleBottomNavigationView}
          />

          <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Ionic
            name="ios-reload-circle-sharp"
            style={{ fontSize: 60, opacity: 0.2 }}
          />
        </View>

        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                borderBottomWidth: 3,
                fontWeight: "800",
                borderBottomColor: "gray",
                marginVertical: 10,
                width: 40,
              }}
            ></View>

            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <MaterialIcons name="post-add" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.icon_text}> Add a story</Text>
                </View>
              </View>

              <View style={styles.line}></View>

              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <MaterialCommunityIcons
                    name="postage-stamp"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.icon_text}> Add a post</Text>
                </View>
              </View>

              <View style={styles.line}></View>

              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Entypo name="video" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.icon_text}> Add a Reel</Text>
                </View>
              </View>

              <View style={styles.line}></View>

              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <MaterialIcons name="live-tv" size={24} color="red" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={[styles.icon_text, { color: "red" }]}>
                    {" "}
                    Live
                  </Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          </View>
        </BottomSheet>
      </ScrollView>
      {/* <BottomTabScreen /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imgStyle: {
    height: 50,
    width: 150,
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  circle: {
    borderWidth: 0.8,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  icon_style: {
    fontSize: 28,
    alignSelf: "center",
  },
  line: {
    // borderWidth: 0.2,
    borderBottomWidth: 0.3,
    borderColor: "gray",
    width: 400,
    marginVertical: 12,
  },

  icon_text: {
    fontSize: 17,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});
