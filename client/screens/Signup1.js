import * as React from "react";
import { StyleSheet, View, Text, TextInput,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Signup1 = () => {

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("SuccessScreen");
    console.log("Please work");
  };
  return (
    <View style={styles.signup}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
      </View>
      <View style={styles.signup1}>
        <View style={[styles.text, styles.alreadyLayout]}>
          <View style={[styles.alreadyHaveAnAcco, styles.alreadyLayout]}>
            <View style={[styles.alreadyHaveAnAccount, styles.alreadyLayout]}>
              <Text style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}>
                Vous avez déjà un compte ?
              </Text>
            </View>
            <View style={[styles.signIn, styles.alreadyLayout]}>
              <Text style={[styles.signIn1, styles.or1Typo]}>Se connecter</Text>
            </View>
          </View>
        </View>
        <View style={[styles.title, styles.emailLayout]}>
          <View style={[styles.signUpWithEmailAndPhoneN, styles.emailLayout]}>
            <View style={styles.signUpWith}>
              <Text style={[styles.signUpWith1, styles.signTypo]}>
                S’inscrire
              </Text>
            </View>
            <View style={[styles.group, styles.groupLayout]}>
              <View style={[styles.emailAndPhoneNumber, styles.groupLayout]}>
                <Text style={[styles.emailAndPhone, styles.alreadyHaveAnTypo]}>
                  Email et numéro de téléphone
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TextInput
          style={[styles.email, styles.emailLayout ,styles.emailLayoutt]}
          placeholder="ahmed.aaaaaa@ddddd.fr"
          placeholderTextColor="#8a8d9f"
        />
        <TextInput
          style={[styles.enterPhoneNumber, styles.emailLayout ,styles.emailLayoutt]}
          placeholder="+216 111 222 333"
          placeholderTextColor="#8a8d9f"
        />
        <View style={[styles.or, styles.alreadyLayout]}>
        <View style={[styles.or2, styles.or2Layout]}>
        <View style={[styles.or22, styles.or2Layout]}>
        <Text style={[styles.or1, styles.or1Typo]}>OU</Text>
        </View>
        </View>
        <Image
        style={[styles.line165Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-165.png")}
        />
        <Image
        style={[styles.line166Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-166.png")}
        />
        </View>
        <View
        style={[styles.getStartedBtn, styles.emailLayout]}
        placeholder="S’inscrire"
        />
        </View>
        <View style={[styles.keyboard, styles.keyboardLayout]}>
        <TouchableOpacity style={styles.blueButton} onPress={handleSignUp}>
        <Text style={styles.blueButtonText}>S’inscrire</Text>
      </TouchableOpacity>
      
        <Image
          style={styles.uiBarsHomeIndicatorHomeInIcon}
          contentFit="cover"
          source={require("../assets/ui-bars-home-indicator-home-indicator--on-light.png")}
        />
      </View>
      <View style={styles.headerPosition}>
        <View style={styles.headerPosition}>
          <View style={[styles.rectangle1122, styles.headerPosition]} />
        </View>
        <View style={[styles.title2, styles.title2Layout]}>
          <View style={[styles.signUp, styles.title2Layout]}>
            <Text style={[styles.signUp1, styles.signTypo]}>S’inscrire</Text>
          </View>
        </View>
       
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 836,
  },
  blueButton: {
    backgroundColor: "#0057FC", // Adjusted blue color
    borderRadius: 26, // Updated border radius value
    height: 50,
    width: 315,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -120,
    marginLeft:25
  },
  blueButtonText: {
    color: "#FFFFFF", // White text color
    fontSize: 16, // Adjusted font size
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },  
  alreadyLayout: {
    height: 19,
    position: "absolute",
  },
  alreadyHaveAnTypo: {
    textAlign: "left",
    top: "50%",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  or1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    top: "50%",
    marginTop: -9.5,
    position: "absolute",
  },
  emailLayout: {
    height: 50,
    position: "absolute",
  },
  emailLayoutt: {
    borderRadius:20,
    backgroundColor:"#F4F5F7"
  },
  signTypo: {
    fontSize: FontSize.size_3xl,
    marginTop: -12.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 238,
    left: 0,
    position: "absolute",
  },
  or2Layout: {
    width: 22,
    height: 19,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    opacity: 0.14,
    height: 1,
    width: 121,
    top: 7,
    position: "absolute",
  },
  keyboardLayout: {
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
  },
  headerPosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title2Layout: {
    width: 124,
    height: 25,
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
  alreadyHaveAn: {
    width: "107.14%",
    left: "-0.49%",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    top: "50%",
  },
  alreadyHaveAnAccount: {
    width: 203,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  signIn1: {
    width: "190%",
    color: Color.colorMediumslateblue,
  },
  signIn: {
    left: 203,
    width: 104,
    top: 0,
    overflow: "hidden",
  },
  alreadyHaveAnAcco: {
    width: 307,
    height: 19,
    left: 0,
    top: 0,
  },
  text: {
    top: 348,
    left: 8,
    width: 307,
    height: 19,
  },
  signUpWith1: {
    left: "11.48%",
  },
  signUpWith: {
    left: 58,
    width: 122,
    height: 25,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  emailAndPhone: {
    marginTop: -10.5,
    width: "119.58%",
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_200,
    left: "0%",
    textAlign: "left",
    top: "50%",
  },
  emailAndPhoneNumber: {
    top: 0,
    overflow: "hidden",
  },
  group: {
    top: 29,
  },
  signUpWithEmailAndPhoneN: {
    width: 238,
    height: 50,
    top: 0,
    left: 0,
  },
  title: {
    left: 39,
    width: 238,
    height: 50,
    top: 0,
  },
  email: {
    top: 82,
    fontFamily: FontFamily.robotoRegular,
    height: 50,
    fontSize: FontSize.size_base,
    width: 315,
    left: 0,
  },
  enterPhoneNumber: {
    top: 176,
    fontFamily: FontFamily.robotoRegular,
    height: 50,
    fontSize: FontSize.size_base,
    width: 315,
    left: 0,
  },
  or1: {
    color: Color.colorGray_100,
  },
  or22: {
    left: 0,
    overflow: "hidden",
  },
  or2: {
    left: 146,
  },
  line165Icon: {
    left: 0,
  },
  line166Icon: {
    left: 194,
  },
  or: {
    top: 147,
    left: 1,
    width: 315,
  },
  getStartedBtn: {
    top: 262,
    width: 315,
    left: 0,
  },
  signup1: {
    top: 148,
    left: 30,
    height: 367,
    width: 315,
    position: "absolute",
  },
  iphoneXKeyboardAbcBackgrou: {
    backgroundColor: "rgba(4, 4, 15, 0.4)",
    top: 0,
  },
  keyboard2Icon: {
    top: 0,
  },
  uiBarsHomeIndicatorHomeInIcon: {
    top: 277,
    left: 121,
    width: 134,
    height: 5,
    position: "absolute",
  },
  keyboard: {
    top: 545,
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
  },
  signUp1: {
    width: "78.23%",
    left: "0%",
  },
  signUp: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title2: {
    top: 54,
    left: 141,
  },
  view: {
    overflow: "hidden",
  },
  batteryIcon: {
    left: 322,
    height: 11,
    top: 4,
    width: 22,
    position: "absolute",
  },
  wifiIcon: {
    left: 300,
    height: 12,
  },
  rectangle96: {
    height: 4,
    top: 7,
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    left: 0,
  },
  rectangle97: {
    top: 5,
    left: 5,
    height: 6,
  },
  rectangle98: {
    top: 2,
    left: 9,
    height: 9,
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
  signup: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 836,
    backgroundColor: Color.colorWhite,
  },
});

export default Signup1;
