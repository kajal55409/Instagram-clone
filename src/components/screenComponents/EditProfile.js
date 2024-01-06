import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
const EditProfile = ({ route, navigation }) => {
  const [image, setImage] = useState(null);

  const { name, accountName, profileImage } = route.params;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // const TostMessage = () => {
  //   ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  // };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            // TostMessage();
            navigation.goBack();
          }}
        >
          <Ionic name="checkmark" style={{ fontSize: 35, color: "#3493D9" }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ padding: 20, alignItems: "center" }}
        onPress={pickImage}
      >
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        {/* {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        )} */}
        <Text
          style={{
            color: "#3493D9",
            marginTop: 10,
          }}
        >
          Change profile photo
        </Text>
      </TouchableOpacity>
      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}
          >
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 13,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}
          >
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 13,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            // marginVertical: 10,
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#EFEFEF",
          }}
        >
          Switch to Professional account
        </Text>
        <Text
          style={{
            // marginVertical: 10,
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#EFEFEF",
          }}
        >
          Create Avtar
        </Text>
        <Text
          style={{
            // marginVertical: 10,
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#EFEFEF",
          }}
        >
          Personal information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
