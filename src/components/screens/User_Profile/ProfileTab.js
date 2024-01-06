import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Ionic, MaterialIcons } from "@expo/vector-icons";
import TopTabNavigation from "../../screenComponents/TopTabNavigation";
const ProfileTab = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#DEDEDE",
          marginTop: 50,
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
            fontWeight: "500",
            marginHorizontal: 20,
          }}
        >
          Pv_Sindhu
        </Text>
      </View>

      <TopTabNavigation />
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
