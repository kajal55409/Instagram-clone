import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BottomSheet } from "react-native-btr";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  Octicons,
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
  EvilIcons,
} from "@expo/vector-icons";
export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [settingVisible, setsettingVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  const toggleBottomNavigationViewSetting = () => {
    //Toggling the visibility state of the bottom sheet
    setsettingVisible(!settingVisible);
  };
  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () => bottomSheetModalRef.current?.close();
  //   }, [])
  // );

  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {accountName}
            </Text>
            <Feather
              name="chevron-down"
              style={{
                fontSize: 20,
                color: "black",
                paddingHorizontal: 5,
                opacity: 0.5,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={toggleBottomNavigationView}>
              <Feather
                name="plus-square"
                style={{
                  fontSize: 25,
                  color: "black",
                  paddingHorizontal: 15,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleBottomNavigationViewSetting}>
              <Feather
                name="menu"
                style={{
                  fontSize: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={profileImage}
            style={{
              resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{post}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{following}</Text>
          <Text>Following</Text>
        </View>

        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: 300,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
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
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Add a story
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.6,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Add a post
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Add a Reel
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "red",
                    }}
                  >
                    {" "}
                    Live
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
            </View>
          </View>
        </BottomSheet>

        <BottomSheet
          visible={settingVisible}
          onBackButtonPress={toggleBottomNavigationViewSetting}
          onBackdropPress={toggleBottomNavigationViewSetting}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              height: 600,
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
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
                  <AntDesign name="setting" size={24} color="black" />
                </View>
                <TouchableOpacity
                  style={{ justifyContent: "center" }}
                  onPress={() => {
                    navigation.navigate("Settings");
                    // bottomSheetModalRef.current?.close();
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Settings
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.6,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                    name="progress-clock"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Your activity
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                    name="archive-sync-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                    }}
                  >
                    {" "}
                    Archive
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>

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
                    name="qrcode-scan"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "black",
                    }}
                  >
                    {" "}
                    QR code
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <MaterialIcons name="save-alt" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "black",
                    }}
                  >
                    {" "}
                    Saved
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <AntDesign name="bars" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "black",
                    }}
                  >
                    {" "}
                    Close Friends
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Entypo name="star-outlined" size={24} color="black" />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "black",
                    }}
                  >
                    {" "}
                    Favourites
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  // backgroundColor: "red",
                  marginHorizontal: 20,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <FontAwesome5
                    name="creative-commons-sampling-plus"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      marginHorizontal: 10,
                      color: "black",
                    }}
                  >
                    {" "}
                    COVID-19 Information Center
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.3,
                  borderColor: "gray",
                  width: 400,
                  marginVertical: 12,
                }}
              ></View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.push("EditProfile", {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 35,
                borderRadius: 5,
                borderColor: "#DEDEDE",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: 1,
                  opacity: 0.8,
                }}
              >
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={{ width: "42%" }}
          >
            <View
              style={{
                width: "100%",
                height: 35,
                borderRadius: 5,
                backgroundColor: follow ? null : "#3493D9",
                borderWidth: follow ? 1 : 0,
                borderColor: "#DEDEDE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: follow ? "black" : "white" }}>
                {follow ? "Following" : "Follow"}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "42%",
              height: 35,
              borderWidth: 1,
              borderColor: "#DEDEDE",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text>Message</Text>
          </View>
          <View
            style={{
              width: "10%",
              height: 35,
              borderWidth: 1,
              borderColor: "#DEDEDE",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Feather
              name="chevron-down"
              style={{ fontSize: 20, color: "black" }}
            />
          </View>
        </View>
      )}
    </>
  );
};
