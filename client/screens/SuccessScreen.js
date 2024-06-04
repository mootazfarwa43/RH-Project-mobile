import React from "react";
import { StyleSheet, View, Text, ScrollView ,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = () => {
  const navigation = useNavigation(); // Get the navigation object
  const handleSignUp = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("HomeIZIP");
    console.log("Please work"); // Check if this console log works
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.successScreen, styles.rectangleBg]}>
        <View style={[styles.background, styles.statusPosition]}>
          <View style={[styles.rectangle, styles.statusPosition]} />
        </View>
        <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
          <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
          <View style={styles.homeIndicator} />
        </View>
        <View style={styles.accountCreated}>
          <View style={[styles.text, styles.yourLayout]}>
            <View style={[styles.accountCreated1, styles.accountLayout]}>
              <View style={[styles.accountCreated2, styles.accountLayout]}>
                <Text style={styles.accountCreated3}>Compte créé !</Text>
              </View>
            </View>
            <View style={[styles.yourAccountHadBee, styles.yourLayout]}>
              <View
                style={[styles.yourAccountHadBeedCreated, styles.statusBarLayout]}
              >
                <Text style={[styles.yourAccountHad, styles.pleaseSignInClr]}>
                  Votre compte a été créé avec succès.
                </Text>
              </View>
              <View style={[styles.pleaseSignInToUseYourAcc, styles.yourLayout]}>
                <Text
                  style={[styles.pleaseSignIn, styles.takeMeToTypo]}
                >{`Veuillez vous connecter pour utiliser votre
    compte et profiter`}</Text>
              </View>
            </View>
          </View>
<TouchableOpacity onPress={handleSignUp}>
<View style={[styles.takeMeToSignIn, styles.rectangle119Layout]}>
<View style={[styles.rectangle119, styles.rectangle119Layout]} />
<View style={[styles.signIn, styles.signLayout]}>
<View style={[styles.takeMeToSignIn2, styles.signLayout]}>
<Text style={[styles.takeMeTo, styles.takeMeToTypo]}>
Me connecter
</Text>
</View>
</View>
</View>
</TouchableOpacity>
</View>
        <Image
          style={styles.doneIcon}
          contentFit="cover"
          source={require("../assets/done.png")}
        />
        <View style={[styles.iphoneXStatusBarsStatusBa, styles.statusPosition]}>
          <View style={[styles.iphoneXStatusBarsStatusBa, styles.statusPosition]}>
            <View
              style={[styles.iphoneXStatusBarsStatusBa, styles.statusPosition]}
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
  rectangleBg: {
    backgroundColor: Color.colorWhite,
    height: 812,
  },
  statusPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  barsLayout: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  yourLayout: {
    width: 354,
    position: "absolute",
  },
  accountLayout: {
    height: 25,
    width: 172,
    top: 0,
    position: "absolute",
  },
  statusBarLayout: {
    height: 19,
    position: "absolute",
  },
  pleaseSignInClr: {
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
  },
  takeMeToTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  rectangle119Layout: {
    height: 50,
    width: 315,
    left: 0,
    position: "absolute",
  },
  signLayout: {
    width: 132,
    height: 19,
    position: "absolute",
  },
  timePosition: {
    width: 33,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1Position: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    top: "50%",
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
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  background: {
    height: 812,
  },
  barsHomeIndicatorOnLightB: {
    backgroundColor: Color.colorGray_300,
    top: 0,
  },
  homeIndicator: {
    top: 15,
    left: 121,
    borderRadius: Border.br_10xs_5,
    width: 134,
    height: 5,
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
  barsHomeIndicatorOnLight: {
    top: 778,
  },
  accountCreated3: {
    marginTop: -12.5,
    left: "11.05%",
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorGray_100,
    top: "50%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  accountCreated2: {
    left: 0,
    overflow: "hidden",
  },
  accountCreated1: {
    left: 63,
  },
  yourAccountHad: {
    width: "120.37%",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
  },
  yourAccountHadBeedCreated: {
    left: 27,
    width: 269,
    top: 0,
    overflow: "hidden",
  },
  pleaseSignIn: {
    marginTop: -17,
    width: "87.01%",
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
  },
  pleaseSignInToUseYourAcc: {
    top: 19,
    height: 40,
    left: 0,
    overflow: "hidden",
  },
  yourAccountHadBee: {
    top: 73,
    height: 59,
    left: 0,
  },
  text: {
    height: 132,
    left: 5,
    top: 0,
  },
  rectangle119: {
    shadowColor: "rgba(74, 78, 190, 0.5)",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumslateblue,
    top: 0,
  },
  takeMeTo: {
    marginTop: -10.5,
    width: "75.59%",
    left: "11.56%",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  takeMeToSignIn2: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  signIn: {
    top: 17,
    left: 93,
  },
  takeMeToSignIn: {
    top: 243,
  },
  accountCreated: {
    top: 414,
    left: 30,
    width: 359,
    height: 293,
    position: "absolute",
  },
  doneIcon: {
    top: 183,
    left: 91,
    width: 194,
    height: 194,
    position: "absolute",
  },
  iphoneXStatusBarsStatusBa: {
    height: 44,
  },
  text1: {
    left: "0%",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
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
    height: 6,
    left: 5,
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
    top: 13,
    left: 15,
    width: 345,
  },
  successScreen: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    marginTop:-140
  },
});

export default SuccessScreen;
