import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Share,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
// import BottomSheet from "react-native-bottomsheet";
import { BottomSheet } from "react-native-btr";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Post = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const postInfo = [
    {
      postTitle: "Pv_Sindhu",
      postPersonImage: require("../../storage/images/story3.jpg"),
      postImage: require("../../storage/images/post1.jpg"),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: "Saina",
      postPersonImage: require("../../storage/images/story3.jpg"),
      postImage: require("../../storage/images/post2.jpg"),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: "saniya_mirza",
      postPersonImage: require("../../storage/images/profile4.jpg"),
      postImage: require("../../storage/images/post3.jpg"),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: "Saina",
      postPersonImage: require("../../storage/images/profile3.jpg"),
      postImage: require("../../storage/images/post4.jpg"),
      likes: 875,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={data.postPersonImage}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>

              <Feather
                name="more-vertical"
                style={{ fontSize: 20 }}
                onPress={toggleBottomNavigationView}
              />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? "red" : "black",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{ fontSize: 20 }}
                    onPress={onShare}
                  />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? "you and" : ""}{" "}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  paddingVertical: 2,
                }}
              >
                Excellent Keep up the good work.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("View_All_Comments")}
              >
                <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                  View all comments
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment "
                    style={{ opacity: 0.5 }}
                  />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="emoji-happy"
                    style={{
                      fontSize: 15,
                      color: "lightgreen",
                      marginRight: 10,
                    }}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{ fontSize: 15, color: "pink", marginRight: 10 }}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{ fontSize: 15, color: "red" }}
                  />
                </View>
              </View>
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
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={onShare}>
                      <View style={styles.circle}>
                        <Feather
                          name="share-2"
                          color="black"
                          style={styles.icon_style}
                        />
                      </View>
                      <Text style={{ textAlign: "center", marginVertical: 4 }}>
                        share
                      </Text>
                    </TouchableOpacity>

                    <View>
                      <View style={styles.circle}>
                        <Feather
                          name="link"
                          color="black"
                          style={styles.icon_style}
                        />
                      </View>
                      <Text style={{ textAlign: "center", marginVertical: 4 }}>
                        Link
                      </Text>
                    </View>

                    <View>
                      <View style={styles.circle}>
                        <Feather
                          name="save"
                          color="black"
                          style={styles.icon_style}
                        />
                      </View>
                      <Text style={{ textAlign: "center", marginVertical: 4 }}>
                        Save
                      </Text>
                    </View>

                    <View>
                      <View style={styles.circle}>
                        <MaterialIcons
                          name="music-video"
                          color="black"
                          style={styles.icon_style}
                        />
                      </View>
                      <Text style={{ textAlign: "center", marginVertical: 4 }}>
                        Remix
                      </Text>
                    </View>

                    <View>
                      <View style={styles.circle}>
                        <MaterialCommunityIcons
                          name="qrcode-scan"
                          color="black"
                          style={styles.icon_style}
                        />
                      </View>
                      <Text style={{ textAlign: "center", marginVertical: 4 }}>
                        QR code
                      </Text>
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
                        name="star-outline"
                        size={28}
                        color="black"
                      />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.icon_text}> Add to favorites</Text>
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
                      <SimpleLineIcons
                        name="user-unfollow"
                        size={25}
                        color="black"
                      />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.icon_text}> Unfollow </Text>
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
                      <Ionicons
                        name="alert-circle-outline"
                        size={28}
                        color="black"
                      />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.icon_text}>
                        {" "}
                        Why you're seeing this post
                      </Text>
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
                      <Octicons name="eye-closed" size={24} color="black" />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.icon_text}> Hide</Text>
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
                      <Octicons name="report" size={23} color="red" />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={[styles.icon_text, { color: "red" }]}>
                        {" "}
                        Report
                      </Text>
                    </View>
                  </View>
                  <View style={styles.line}></View>
                </View>
              </View>
            </BottomSheet>
          </View>
        );
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 470,
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
