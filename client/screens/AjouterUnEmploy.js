import * as React from "react";
import { Text, StyleSheet, View, TextInput,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AjouterUnEmploy = () => {
  const navigation = useNavigation();
  const NavToADD1 = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("AjouterUnEmploy1");
    console.log("Please work"); // Check if this console log works
  };
  return (
    <View style={styles.ajouterUnEmploy}>
      <View style={styles.pleaseEnterTheCor}>
        <Text style={[styles.pleaseEnterThe, styles.continueFlexBox]}>
          Vous pouvez introduire votre employé
        </Text>
        <Text style={[styles.checkInformation, styles.continueFlexBox]}>
          à partir de votre liste de contact !
        </Text>
      </View>
      <TouchableOpacity onPress={NavToADD1}>
      <View style={styles.buttonPrimaryActiveCopy}>
      <View style={[styles.group11BackgroundMask, styles.rectangleLayout1]} />
      <View style={[styles.rectangle, styles.rectangleLayout1]} />
      <View style={[styles.signIn, styles.signPosition]}>
      <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
      </View>
      </View>
      </TouchableOpacity>
      <View style={styles.buttonPrimaryActiveCopy1}>
        <View
          style={[styles.group11BackgroundMask1, styles.rectangleIconLayout]}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.signIn1, styles.signPosition]}>
          <Text style={[styles.continue1, styles.continueTypo]}>
            À partir de la liste de contact
          </Text>
          <Image
            style={styles.plus1Icon}
            contentFit="cover"
            source={require("../assets/plus-1.png")}
          />
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={styles.headerPosition}>
          <View style={styles.headerPosition}>
            <View style={[styles.rectangle1122, styles.headerPosition]} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.payBill, styles.titleLayout]}>
            <Text style={[styles.payBill1, styles.textTypo]}>
              Ajouter un employé
            </Text>
          </View>
        </View>
        
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <View style={[styles.chooseCompany, styles.bg4Layout]}>
        <View style={[styles.bg4, styles.bg4Layout]}>
          <View style={[styles.rectangle252, styles.bg4Layout]} />
        </View>
        <TextInput
          style={[styles.chooseCompany2, styles.statusBarLayout]}
          placeholder={`Nom & Prénom`}
          placeholderTextColor="#8a8d9f"
        />
      </View>
      <TextInput
        style={[styles.typeInternetBillCode, styles.bg4Layout]}
        placeholder="+033 989888999898"
        placeholderTextColor="#8a8d9f"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continueFlexBox: {
    textAlign: "left",
    left: "0%",
  },
  rectangleLayout1: {
    height: 52,
    left: 0,
    width: 315,
    position: "absolute",
  },
  signPosition: {
    top: 121,
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 229,
    height: 52,
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
    width: 204,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  statusBarLayout: {
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
  bg4Layout: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  pleaseEnterThe: {
    marginTop: -21.5,
    width: "107.96%",
    color: Color.colorLightslategray_200,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    position: "absolute",
  },
  checkInformation: {
    marginTop: 2.5,
    width: "89.64%",
    color: Color.colorLightslategray_200,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    left: "0%",
    position: "absolute",
  },
  pleaseEnterTheCor: {
    top: 274,
    left: 36,
    width: 279,
    height: 43,
    position: "absolute",
    overflow: "hidden",
  },
  group11BackgroundMask: {
    top: 0,
  },
  rectangle: {
    top: 104,
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorMediumslateblue,
  },
  continue: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    left: "0%",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signIn: {
    left: 132,
    width: 61,
    height: 18,
  },
  buttonPrimaryActiveCopy: {
    top: 355,
    height: 156,
    width: 315,
    left: 30,
    position: "absolute",
  },
  group11BackgroundMask1: {
    left: 0,
    top: 0,
  },
  rectangleIcon: {
    top: 112,
    left: 23,
    borderRadius: Border.br_mini,
  },
  continue1: {
    marginTop: -7.5,
    width: "93.64%",
    left: "6.82%",
    fontSize: 13,
    textAlign: "center",
  },
  plus1Icon: {
    top: 3,
    left: 1,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  signIn1: {
    left: 39,
    width: 220,
    height: 33,
  },
  buttonPrimaryActiveCopy1: {
    top: 248,
    left: 50,
    width: 259,
    height: 164,
    position: "absolute",
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
  payBill1: {
    marginTop: -12.5,
    width: "260.83%",
    fontSize: FontSize.size_3xl,
  },
  payBill: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 92,
  },
  text: {
    marginTop: -9.5,
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
  rectangle252: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  bg4: {
    left: 0,
    top: 0,
  },
  chooseCompany2: {
    top: 16,
    left: 20,
    width: 124,
    fontFamily: FontFamily.robotoRegular,
    height: 19,
    fontSize: FontSize.size_base,
    overflow: "hidden",
  },
  chooseCompany: {
    top: 130,
    left: 30,
    height: 50,
  },
  typeInternetBillCode: {
    top: 200,
    left: 30,
    height: 50,
    fontSize: FontSize.size_base,
    backgroundColor:"#F4F5F7",
    borderRadius:40
  },
  ajouterUnEmploy: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AjouterUnEmploy;
