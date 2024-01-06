import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import image from "../../../Utils/image";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Landing");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor={Colors.ButtonColor} animated barStyle='dark-content' networkActivityIndicatorVisible showHideTransition='slide' /> */}
      <Image source={image.splash} resizeMode="contain" style={styles.image} />
      <Text style={{ color: "gray", fontWeight: "600", top: 70 }}>from </Text>
      <Image source={image.meta} resizeMode="contain" style={styles.meta_img} />
      <Text> hii</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: "90%",
    width: "100%",
  },
  meta_img: {
    height: "20%",
    width: "25%",
  },
});
