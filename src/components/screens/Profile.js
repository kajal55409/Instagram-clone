import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ProfileBody, ProfileButtons } from "../screenComponents/ProfileBody";
import Entypo from "react-native-vector-icons/Entypo";
import BottomTabView from "../screenComponents/BottomTabView";
import { BottomSheet } from "react-native-btr";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
  let circuls = [];
  let numberofcircels = 10;

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="plus" style={{ fontSize: 40, color: "black" }} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "black",
              opacity: 0.1,
              marginHorizontal: 5,
            }}
          ></View>
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        marginTop: 50,
      }}
    >
      <View style={{ width: "100%", padding: 10 }}>
        <Pressable onPress={() => navigation.navigate("ProfileTab")}>
          <ProfileBody
            name="PV Sindhu"
            accountName="Pv_sindhu"
            profileImage={require("../../storage/images/story3.jpg")}
            followers="3.6M"
            following="35"
            post="458"
          />
        </Pressable>
        <ProfileButtons
          id={0}
          name="Pv Sindhu"
          accountName="Pv_Sindhu"
          profileImage={require("../../storage/images/story3.jpg")}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 10,
            letterSpacing: 1,
            fontSize: 14,
          }}
        >
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;
