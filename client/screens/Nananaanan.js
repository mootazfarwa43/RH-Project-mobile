
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";


const SignUp = () => {
  const [checkboxchecked, setCheckboxchecked] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SuccessScreen");
    console.log("Please work");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.signUp}>
        <View style={styles.rectanglePosition}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
        </View>
        <View style={styles.signupArea}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.signUpBtn, styles.passwordLayout]}
          >
            <View style={[styles.rectangle119, styles.rectangleShadowBox]} />
            <View style={[styles.signIn, styles.signLayout]}>
              <View style={[styles.signUp1, styles.signLayout]}>
                <Text style={[styles.signUp2, styles.signPosition]}>
                  S’enregistrer
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TextInput
            style={[styles.phoneNumber, styles.passwordLayout]}
            placeholder="Numéro de téléphone"
            placeholderTextColor="#8a8d9f"
          />
          <TextInput
            style={[styles.fullName, styles.passwordLayout]}
            placeholder={`Nom & Prénom`}
            placeholderTextColor="#8a8d9f"
          />
          <TextInput
            style={[styles.email, styles.passwordLayout]}
            placeholder="Email"
            placeholderTextColor="#8a8d9f"
          />
          <TextInput
            style={[styles.password, styles.passwordLayout]}
            placeholder="Mot de passe"
            placeholderTextColor="#8a8d9f"
          />
          <TextInput
            style={[styles.confirmPassword, styles.passwordLayout]}
            placeholder="Confirmer votre mot de passe"
            placeholderTextColor="#8a8d9f"
          />
          <View style={[styles.profileImage, styles.bg2IconLayout]}>
            <Image
              style={[styles.bg2Icon, styles.bg2IconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
            <Image
              style={[styles.bg2Icon, styles.bg2IconLayout]}
              contentFit="cover"
              source={require("../assets/bg2.png")}
            />
          </View>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <View style={[styles.text, styles.textLayout]}>
            <View style={[styles.alreadyHaveAnAccount, styles.signLayout]}>
              <View style={[styles.alreadyHaveAnAccount2, styles.signLayout]}>
                <Text style={[styles.alreadyHaveAn, styles.text1Position]}>
                  Vous avez déjà un compte ?
                </Text>
              </View>
              <View style={[styles.signIn1, styles.signLayout]}>
                <Text style={[styles.signIn2, styles.signPosition]}>
                  Se connecter
                </Text>
              </View>
            </View>
            <View style={[styles.byCreatingAnAccountYouAgr, styles.textLayout]}>
              <View
                style={[styles.byCreatingAnAccountYouAgr1, styles.signLayout]}
              >
                <Text style={[styles.byCreatingAn, styles.ourTermsOfTypo]}>
                  En créant un compte, vous acceptez nos conditions
                </Text>
              </View>
              <View style={styles.ourTermsOfServiceAndPriva}>
                <Text style={[styles.ourTermsOf, styles.ourTermsOfTypo]}>
                  d'utilisation et notre politique de confidentialité
                </Text>
              </View>
            </View>
            <CheckBox
              checked={checkboxchecked}
              onPress={() => setCheckboxchecked(!checkboxchecked)}
              checkedColor="#0057fc"
              containerStyle={styles.checkboxLayout}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  checkboxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  passwordLayout: {
    height: 50,
    width: 315,
    left: 0,
    position: "absolute",
    backgroundColor: "#F4F5F7",
    borderRadius: 20,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 13,
    },
  },
  signLayout: {
    height: 19,
    position: "absolute",
  },
  signPosition: {
    textAlign: "left",
    left: "0%",
    marginTop: -9.5,
  },
  bg2IconLayout: {
    height: 99,
    width: 99,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    width: 397,
    position: "absolute",
  },
  text1Position: {
    color: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  ourTermsOfTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "2%",
    top: "80%",
    position: "absolute",
  },
  headerPosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 140,
    position: "absolute",
  },
  timePosition: {
    width: 33,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    top: 4,
    position: "absolute",
  },
  rectangleLayout: {
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorWhite,
  },
  rectangle119: {
    shadowColor: "rgba(74, 78, 190, 0.5)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumslateblue,
    height: 50,
    width: 315,
    left: 0,
    position: "absolute",
    top: 0,
  },
  signUp2: {
    width: "167.3%",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  signUp1: {
    width: 100,
    height: 19,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  signIn: {
    top: 16,
    left: 108,
    width: 100,
    height: 19,
  },
  signUpBtn: {
    top: 536,
  },
  phoneNumber: {
    top: 185,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  fullName: {
    top: 120,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  email: {
    top: 250,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  password: {
    top: 313,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  confirmPassword: {
    top: 374,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  bg2Icon: {
    opacity: 0.28,
    left: 0,
  },
  profileImage: {
    left: 98,
  },
  icon: {
    top: 34,
    left: 130,
    width: 36,
    height: 32,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    marginTop: -9.5,
  },
  alreadyHaveAnAccount2: {
    width: 182,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  signIn2: {
    fontSize: FontSize.size_mini,
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  signIn1: {
    left: 188,
    width: 102,
    top: 0,
    overflow: "hidden",
  },
  alreadyHaveAnAccount: {
    top: 159,
    left: 24,
    width: 290,
  },
  byCreatingAn: {
    width: "88.14%",
    marginTop: -9.5,
    fontSize: FontSize.size_smi,
  },
  byCreatingAnAccountYouAgr1: {
    left: 26,
    width: 371,
    top: 0,
    overflow: "hidden",
  },
  ourTermsOf: {
    marginTop: -29.5,
    width: "97.84%",
    lineHeight: 23,
  },
  ourTermsOfServiceAndPriva: {
    top: 24,
    width: 306,
    height: 49,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  byCreatingAnAccountYouAgr: {
    height: 73,
    top: 2,
    left: 0,
  },
  text: {
    top: 455,
    left: 1,
    height: 178,
  },
  signupArea: {
    top: 128,
    left: 30,
    width: 398,
    height: 633,
    position: "absolute",
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 13,
    },
    backgroundColor: Color.colorWhite,
  },
  signUp3: {
    marginTop: -12.5,
    width: "93.64%",
    left: "3.57%",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signUp21: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 117,
  },
  text1: {
    textAlign: "left",
    left: "0%",
    marginTop: -9.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  view: {
    overflow: "hidden",
  },
  batteryIcon: {
    left: 322,
    width: 22,
    height: 11,
    top: 4,
    position: "absolute",
  },
  wifiIcon: {
    left: 300,
    height: 12,
  },
  rectangle96: {
    top: 7,
    height: 4,
    left: 0,
  },
  rectangle97: {
    top: 5,
    left: 5,
    height: 6,
  },
  rectangle98: {
    left: 9,
    height: 9,
    top: 2,
  },
  rectangle99: {
    left: 14,
    height: 11,
    top: 0,
  },
  network: {
    left: 277,
    height: 11,
  },
  statusBar: {
    top: 11,
    left: 15,
    width: 345,
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
    height: 20,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;

