import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Group from "../components/Group";
import { useNavigation } from "@react-navigation/native";

const AjouterUnEmploy2 = () => {
  const navigation = useNavigation();
  const NavToADD3 = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("AjouterUnEmploy3");
    console.log("Please work"); // Check if this console log works
  };
  return (
    <View style={styles.ajouterUnEmploy}>
    <Image
    style={styles.imageIcon}
    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRK0e-rVLH01edz9UldNUAvjUp1hyE-1nXmW2-yDld1Q&s" }}
  />
    <View style={styles.buttonPrimaryActiveCopy}>
    <TouchableOpacity style={styles.button} onPress={NavToADD3}>
    <View style={[styles.group11BackgroundMask, styles.rectangleLayout1]} />
    <Pressable style={[styles.rectangle, styles.rectangleLayout1]} />
    <View style={styles.signIn}>
    <Text style={styles.continue}>Continue</Text>
    </View>
    </TouchableOpacity>
    </View>
    <TextInput
    style={[styles.cardNumber, styles.cardNumberTypo]}
    placeholder="Le cycle de salaire de votre personnel"
    placeholderTextColor="#8a8d9f"
    />
      <Image
        style={styles.calendar1Icon}
        contentFit="cover"
        source={require("../assets/calendar-1.png")}
      />
      <TextInput
        style={[styles.accountHolderName, styles.cardNumberTypo]}
        placeholder="Salaire mensuel du personnel"
        placeholderTextColor="#8a8d9f"
      />
      <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
        <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.headerPosition}>
        <View style={styles.headerPosition}>
          <View style={styles.headerPosition}>
            <View style={[styles.rectangle1122, styles.headerPosition]} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.addPaymentMethod, styles.titleLayout]}>
            <Text style={[styles.addPaymentMethod1, styles.textTypo]}>
              Ajouter le salaire
            </Text>
          </View>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.timePosition}>
            <View style={[styles.view, styles.timePosition]}>
              <Text style={[styles.text, styles.textTypo]}>9:41</Text>
            </View>
          </View>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.rectangle96, styles.rectangleLayout]} />
            <View style={[styles.rectangle97, styles.rectangleLayout]} />
            <View style={[styles.rectangle98, styles.rectangleLayout]} />
            <View style={[styles.rectangle99, styles.rectangleLayout]} />
          </View>
        </View>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout1: {
    height: 52,
    left: 0,
    width: 315,
    position: "absolute",
  },
  imaage:{
    // marginTop:-70,
    marginBottom:-200,
    marginLeft:200
  },
  cardNumberTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    height: 50,
    left: 30,
    position: "absolute",
  },
  barsLayout: {
    height: 34,
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
  titleLayout: {
    height: 25,
    width: 214,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
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
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "40%",
    left: "0%",
    position: "absolute",
  },
  signIn: {
    top: 121,
    left: 132,
    width: 61,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  buttonPrimaryActiveCopy: {
    top: 474,
    height: 156,
    width: 315,
    left: 30,
    position: "absolute",
  },
  cardNumber: {
    top: 489,
    width: 362,
  },
  calendar1Icon: {
    top: 501,
    left: 299,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  accountHolderName: {
    top: 429,
    width: 315,
  },
  barsHomeIndicatorOnLightB: {
    backgroundColor: Color.colorGray_300,
    top: 0,
  },
  homeIndicator: {
    top: 15,
    left: 121,
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorDarkturquoise,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorOnLight: {
    top: 778,
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
  addPaymentMethod1: {
    marginTop: -12.5,
    left: "10.65%",
    fontSize: FontSize.size_3xl,
  },
  addPaymentMethod: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 81,
  },
  text: {
    marginTop: -9.5,
    fontSize: FontSize.size_base,
    left: "0%",
    color: Color.colorGray_100,
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
    height: 19,
    position: "absolute",
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
    height: 20,
    position: "absolute",
  },
  ajouterUnEmploy: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  imageIcon: {
    top: 137,
    left: 77,
    width: 225,
    height: 224,
    position: "absolute",
  },
});

export default AjouterUnEmploy2;
