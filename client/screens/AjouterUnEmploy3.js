import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput ,ScrollView,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AjouterUnEmploy3 = () => {
  const [check22checked, setCheck22checked] = useState(false);
  const navigation = useNavigation();
  const NavToHome = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("HomeIZIP");
    console.log("Please work"); // Check if this console log works
  };
  return (
    <ScrollView>
    <View style={styles.ajouterUnEmploy}>
      <View style={styles.header}>
        <View style={styles.header}>
          <View style={styles.header}>
            <View style={styles.rectangle1122} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.internetPayment, styles.titleLayout]}>
            <Text style={[styles.internetPayment1, styles.text1Typo]}>
              Solde d’ouverture
            </Text>
          </View>
        </View>
        <View style={[styles.statusBar, styles.jenningsLayout]}>
          <View style={styles.timePosition}>
            <View style={[styles.view, styles.timePosition]}>
              <Text style={styles.textTypo}>9:41</Text>
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
            <View style={[styles.rectangle96, styles.rectangleLayout1]} />
            <View style={styles.rectangle97} />
            <View style={[styles.rectangle98, styles.rectangleLayout1]} />
            <View style={[styles.rectangle99, styles.rectangleLayout1]} />
          </View>
        </View>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <View style={[styles.user01, styles.userLayout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact, styles.cardLayout1]}>
          <View style={[styles.cardBeneficiary, styles.cardLayout1]}>
            <View
              style={[styles.cardBeneficiaryBackgroundMa, styles.cardLayout1]}
            />
            <View style={[styles.cardBeneficiary, styles.cardLayout1]}>
            <CheckBox
            checked={check22checked}
            onPress={() => setCheck22checked(!check22checked)}
            containerStyle={styles.check222Layout}
          />
              <View style={[styles.group12749, styles.groupPosition]}>
                <View style={[styles.jenningsChamplin, styles.jenningsLayout]}>
                  <Text style={styles.textTypo}>Avance</Text>
                </View>
                <View style={[styles.view1, styles.viewPosition]}>
                  <Text
                    style={[styles.admingmailcom, styles.admingmailcomPosition]}
                  >
                    Compte créditeur
                  </Text>
                </View>
              </View>
              <View
                style={[styles.component4Component3Avatar, styles.cardLayout1]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout1,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
              </View>
            </View>
          </View>
        </View>
        
      </View>
      <View style={[styles.accountHolderName, styles.bg21Layout]}>
        <TextInput style={[styles.bg21, styles.bg21Layout]} />
        <View style={[styles.accountHolderName2, styles.jenningsLayout]}>
          <Text
            style={[styles.accountHolderName1, styles.admingmailcomPosition]}
          >{`Veuillez Tapez le montant de l’avance `}</Text>
        </View>
      </View>
      <View style={styles.buttonPrimaryActiveCopy}>
        <View style={[styles.group11BackgroundMask, styles.rectangleLayout]} />
        <TouchableOpacity onPress={NavToHome}>
        <TextInput style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={styles.signIn}>
        
        <Text style={[styles.continue, styles.text1Typo]}>
        Ajouter le personnel
        </Text>
        </View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text1, styles.text1Typo]}>€</Text>
      <View style={[styles.user011, styles.userLayout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact1, styles.cardLayout]}>
          <View style={[styles.cardBeneficiary1, styles.cardLayout]}>
            <View
              style={[styles.cardBeneficiaryBackgroundMa, styles.cardLayout1]}
            />
            <View style={[styles.cardBeneficiary1, styles.cardLayout]}>
              <View style={[styles.group127491, styles.view2Layout]}>
                <View style={[styles.jenningsChamplin1, styles.jenningsLayout]}>
                  <Text style={[styles.jhonyVegan1, styles.textTypo]}>
                    Crédit
                  </Text>
                </View>
                <View style={[styles.view2, styles.view2Layout]}>
                  <Text
                    style={[
                      styles.admingmailcom1,
                      styles.admingmailcomPosition,
                    ]}
                  >
                    Compte débiteur
                  </Text>
                </View>
              </View>
              <View
                style={[styles.component4Component3Avatar, styles.cardLayout1]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout1,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <CheckBox
          checked={check22checked}
          onPress={() => setCheck22checked(!check22checked)}
          containerStyle={styles.check22Layout}
        />
      </View>
      <Image
      style={styles.imageIcon}
      source={{ uri: "https://cdn-icons-png.freepik.com/512/7758/7758096.png" }}
    />
    
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  check22Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 262,
    top: 28,
    position: "absolute",
  },
  check222Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 245,
    top: 20,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 171,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  jenningsLayout: {
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
  rectangleLayout1: {
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
  },
  userLayout: {
    height: 80,
    width: 315,
    position: "absolute",
  },
  cardLayout1: {
    height: 48,
    position: "absolute",
  },
  groupPosition: {
    height: 40,
    left: 64,
    top: 5,
  },
  viewPosition: {
    height: 16,
    top: 24,
    left: 0,
    overflow: "hidden",
  },
  admingmailcomPosition: {
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  bg21Layout: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  rectangleLayout: {
    height: 52,
    width: 315,
    left: 0,
    position: "absolute",
  },
  cardLayout: {
    width: 253,
    height: 48,
    position: "absolute",
  },
  view2Layout: {
    width: 189,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  header: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  internetPayment1: {
    marginTop: -13.5,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
  },
  internetPayment: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 103,
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
    left: 5,
    height: 6,
    top: 5,
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
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
    width: 345,
    left: 15,
    height: 19,
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
    height: 20,
    position: "absolute",
  },
  rectangleShadowBox: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 80,
    width: 315,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bg2: {
    left: 0,
    top: 0,
  },
  cardBeneficiaryBackgroundMa: {
    width: 204,
    left: 0,
    top: 0,
  },
  jenningsChamplin: {
    width: 94,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  admingmailcom: {
    fontSize: FontSize.size_xs,
    marginTop: -8,
    fontFamily: FontFamily.robotoRegular,
    width: "100%",
  },
  view1: {
    width: 166,
    position: "absolute",
  },
  group12749: {
    width: 166,
    position: "absolute",
  },
  component4Component3Avatar: {
    width: 48,
    left: 0,
    top: 0,
  },
  cardBeneficiary: {
    width: 230,
    height: 48,
    left: 0,
    top: 0,
  },
  cardContact: {
    width: 230,
    height: 48,
    top: 16,
    left: 15,
  },
  check2Icon: {
    top: 29,
    left: 208,
    width: 78,
    height: 34,
    position: "absolute",
  },
  user01: {
    top: 406,
    left: 27,
    height: 80,
  },
  bg21: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
  },
  accountHolderName1: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -9.5,
    width: "100%",
  },
  accountHolderName2: {
    top: 17,
    left: 20,
    width: 238,
    overflow: "hidden",
  },
  accountHolderName: {
    top: 612,
    left: 30,
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
    width: "201.64%",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    textAlign: "left",
    left: "0%",
  },
  signIn: {
    top: 121,
    left: 88,
    width: 140,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  buttonPrimaryActiveCopy: {
    top: 590,
    left: 31,
    height: 156,
    width: 315,
    position: "absolute",
  },
  text1: {
    marginTop: 212,
    width: "4.53%",
    left: "80.27%",
    fontSize: 32,
    color: "#111",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    textAlign: "left",
  },
  jhonyVegan1: {
    width: "131.94%",
  },
  jenningsChamplin1: {
    width: 134,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  admingmailcom1: {
    width: "152.96%",
    fontSize: FontSize.size_xs,
    marginTop: -8,
    fontFamily: FontFamily.robotoRegular,
  },
  view2: {
    height: 16,
    top: 24,
    left: 0,
    overflow: "hidden",
  },
  group127491: {
    height: 40,
    left: 64,
    top: 5,
  },
  cardBeneficiary1: {
    left: 0,
    top: 0,
  },
  cardContact1: {
    top: 16,
    left: 15,
  },
  user011: {
    top: 500,
    left: 27,
    height: 80,
  },
  imageIcon: {
    top: 137,
    left: 77,
    width: 225,
    height: 224,
    position: "absolute",
  },
  ajouterUnEmploy: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AjouterUnEmploy3;
