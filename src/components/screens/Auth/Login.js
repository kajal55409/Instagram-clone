import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../../../Utils/Colors";
import image from "../../../Utils/image";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View style={{ marginTop: 50 }}>
            <Image
              source={image.logo}
              resizeMode="contain"
              style={styles.image}
            />
          </View>

          <View style={{ bottom: 60 }}>
            <View style={[styles.Inputview]}>
              <TextInput
                placeholder="Phone Number,email or username"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="gray"
                keyboardType="name-phone-pad"
              />
            </View>

            <View
              style={[
                styles.Inputview,
                {
                  marginTop: "5%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                value={Password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="gray"
                keyboardType="name-phone-pad"
              />
              <Ionicons name="eye" size={24} color="gray" />
            </View>

            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={styles.button}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Forgot_Otp")}
              style={{
                marginTop: 15,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={styles.forgot_text}>
                Forgot your login details?{" "}
              </Text>
              <Text
                style={[
                  styles.forgot_text,
                  { color: "black", fontWeight: "600" },
                ]}
              >
                Get help logging in.
              </Text>
            </Pressable>

            <View style={{ marginTop: 20, flexDirection: "row" }}>
              <View style={styles.border_line}></View>
              <Text> OR </Text>
              <View style={styles.border_line}></View>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="facebook" size={24} color={colors.primary} />
              <Text
                style={[
                  styles.forgot_text,
                  {
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 15,
                    marginHorizontal: 5,
                    top: 3,
                  },
                ]}
              >
                Login with facebook
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.sectionBottom}
            onPress={() => navigation.navigate("Sign_up")}
          >
            <View style={styles.bottomContainer}>
              <Text style={styles.subTitle}>
                <Text style={styles.noAccount}>Dont Have an account?</Text>{" "}
                <Text style={styles.link}>Sign up.</Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Inputview: {
    // backgroundColor: colors.secondary,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    elevation: 5,
    borderColor: "lightgray",
    // justifyContent: "center",
    padding: 13,
    fontSize: 14,
    color: "black",
    // backgroundColor: "red",
  },

  button: {
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "5%",
    // marginHorizontal: 20,
  },
  image: {
    // height: "50%",
    width: "40%",
    alignSelf: "center",
    // marginTop: 70,
  },
  forgot_text: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
    textAlign: "center",
  },
  sectionBottom: {
    display: "flex",
    top: 110,
    justifyContent: "flex-end",
    flex: 1,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  subTitle: {
    textAlign: "center",
  },
  link: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
  },
  noAccount: {
    color: colors.gray,
  },
  border_line: {
    width: 150,
    borderColor: "gray",
    borderBottomWidth: 0.5,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
