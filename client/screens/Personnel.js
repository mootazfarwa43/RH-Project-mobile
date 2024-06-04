import * as React from "react";
import { StyleSheet, View, Text,ScrollView,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Personnel = () => {
  const navigation = useNavigation(); // Get the navigation object
  const NavToSa = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("ProfilSalariPopup");
    console.log("Please work"); // Check if this console log works
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

    <View style={styles.personnel}>
      <View style={[styles.balance, styles.groupLayout]}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.rectangle4, styles.rectangleShadowBox]} />
        </View>
        <View style={styles.view}>
          <Text style={[styles.text, styles.textTypo]}>{`176 2904.030 € `}</Text>
        </View>
        <View style={[styles.balance2, styles.searchLayout]}>
          <Text
            style={[styles.balance1, styles.ofGdp1Typo]}
          >{`Total des salaires `}</Text>
        </View>
        <View style={[styles.view1, styles.searchLayout]}>
          <Text style={[styles.text1, styles.amClr]}>33.328%</Text>
        </View>
        <Image
          style={styles.iconPath}
          contentFit="cover"
          source={require("../assets/icon-path.png")}
        />
        <Image
          style={[styles.path4Icon, styles.path4IconLayout]}
          contentFit="cover"
          source={require("../assets/path-4.png")}
        />
        <Image
          style={[styles.path4CopyIcon, styles.path4IconLayout]}
          contentFit="cover"
          source={require("../assets/path-4-copy.png")}
        />
      </View>
      <View style={styles.headerPosition}>
        <View style={styles.headerPosition}>
          <View style={styles.headerPosition}>
            <View style={[styles.rectangle1122, styles.headerPosition]} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.dashboard, styles.titleLayout]}>
            <Text style={[styles.dashboard1, styles.gdp1Typo]}>Personnel</Text>
          </View>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.timePosition}>
            <View style={[styles.view2, styles.timePosition]}>
              <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
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
        <View style={styles.topIconsBarWithTextInMid}>
          <View style={styles.topBar}>
            <Image
              style={styles.iconShape}
              contentFit="cover"
              source={require("../assets/icon-shape.png")}
            />
            <Image
              style={styles.iconShape2}
              contentFit="cover"
              source={require("../assets/icon-shape2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.dataCard, styles.group2Layout]}>
        <View style={[styles.group2, styles.group2Layout]}>
          <View style={[styles.rectangle5, styles.group2Layout]} />
        </View>
        <View style={[styles.invest, styles.gdpPosition]}>
          <Text style={[styles.invest1, styles.gdpTypo]}>IT</Text>
        </View>
        <View style={[styles.ofGdp, styles.gdpLayout]}>
          <Text style={[styles.ofGdp1, styles.gdpTypo]}>53% du Total</Text>
        </View>
        <View style={[styles.ofGdp2, styles.gdpLayout]}>
          <Text style={[styles.ofGdp1, styles.gdpTypo]}>25% du Total</Text>
        </View>
        <View style={[styles.ofGdp4, styles.gdpLayout]}>
          <Text style={[styles.ofGdp1, styles.gdpTypo]}>22% du Total</Text>
        </View>
        <View style={[styles.gdp, styles.gdpPosition]}>
          <Text style={[styles.gdp1, styles.gdpTypo]}>Marketing</Text>
        </View>
        <View style={[styles.nat, styles.gdpPosition]}>
          <Text style={[styles.nat1, styles.gdpTypo]}>Administration</Text>
        </View>
        <Image
          style={[styles.ovalIcon, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval-copy.png")}
        />
        <Image
          style={[styles.ovalCopy2Icon, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval-copy-2.png")}
        />
      </View>
      <View style={styles.personnelBox}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <View style={[styles.cardInbox, styles.cardLayout]}>
          <View style={styles.group3}>
            <View style={[styles.rectangle12, styles.rectanglePosition]} />
          </View>
          <Image
            style={[styles.oval3Icon, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval31.png")}
          />
          <View style={[styles.juneP3, styles.juneLayout]}>
          <TouchableOpacity onPress={NavToSa} style={[styles.amTypo]}> 
         <Text style={styles.jhonaKal }>Ahmed</Text>
         </TouchableOpacity>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda31, styles.howPosition]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>3700 ,56 €</Text>
          </View>
          <View style={[styles.crdit, styles.am34Layout]}>
            <Text style={[styles.am, styles.amTypo]}>Crédit</Text>
          </View>
          <Image
            style={styles.check2Icon}
            contentFit="cover"
            source={require("../assets/check-2.png")}
          />
        </View>
        <View style={[styles.cardInbox1, styles.cardPosition]}>
          <View style={styles.group3}>
            <View style={[styles.rectangle121, styles.rectanglePosition]} />
          </View>
          <Image
            style={[styles.oval3Icon, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval32.png")}
          />
          <View style={[styles.juneP3, styles.juneLayout]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>Mootaz Kal</Text>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda33, styles.howPosition]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>
              - 1300 ,52 €
            </Text>
          </View>
          <View style={[styles.crdit, styles.am34Layout]}>
            <Text style={[styles.am1, styles.amTypo]}>Débit</Text>
          </View>
          <Image
            style={styles.check2Icon1}
            contentFit="cover"
            source={require("../assets/check-21.png")}
          />
        </View>
        <View style={[styles.cardInbox2, styles.cardLayout]}>
          <View style={styles.group3}>
            <View style={[styles.rectangle12, styles.rectanglePosition]} />
          </View>
          <Image
            style={[styles.oval3Icon, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval33.png")}
          />
          <View style={[styles.juneP3, styles.juneLayout]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>Nour Kal</Text>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda31, styles.howPosition]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>3700 ,56 €</Text>
          </View>
          <View style={[styles.crdit, styles.am34Layout]}>
            <Text style={[styles.am, styles.amTypo]}>Crédit</Text>
          </View>
        </View>
        <View style={[styles.cardInbox3, styles.cardPosition]}>
          <View style={styles.group3}>
            <View style={[styles.rectangle12, styles.rectanglePosition]} />
          </View>
          <Image
            style={[styles.oval3Icon, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval34.png")}
          />
          <View style={[styles.juneP3, styles.juneLayout]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>AZIZ Kal</Text>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda37, styles.howPosition]}>
            <Text style={[styles.heyHowAre7, styles.heyTypo]}>
              - 2300 ,96 €
            </Text>
          </View>
          <View style={[styles.crdit, styles.am34Layout]}>
            <Text style={[styles.am1, styles.amTypo]}>Débit</Text>
          </View>
        </View>
        <View style={[styles.cardInbox4, styles.cardLayout]}>
          <View style={styles.group3}>
            <View style={[styles.rectangle121, styles.rectanglePosition]} />
          </View>
          <Image
            style={styles.check2Icon1}
            contentFit="cover"
            source={require("../assets/check-21.png")}
          />
          <Image
            style={[styles.oval3Icon, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval35.png")}
          />
          <View style={[styles.juneP3, styles.juneLayout]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>Jhona Doe</Text>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda31, styles.howPosition]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>2500 ,56 €</Text>
          </View>
          <View style={[styles.crdit, styles.am34Layout]}>
            <Text style={[styles.am, styles.amTypo]}>Crédit</Text>
          </View>
        </View>
        <View style={[styles.cardInbox5, styles.oval3IconLayout]}>
          <Image
            style={[styles.oval3Icon5, styles.oval3IconLayout]}
            contentFit="cover"
            source={require("../assets/oval36.png")}
          />
          <View style={[styles.juneP35, styles.juneLayout]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>Jhona Kal</Text>
          </View>
          <View style={[styles.howDoYouFeelToda310, styles.howLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
            </Text>
          </View>
          <View style={[styles.howDoYouFeelToda311, styles.howLayout]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>3700 ,56 €</Text>
          </View>
          <View style={[styles.am34, styles.am34Layout]}>
            <Text style={[styles.am, styles.amTypo]}>Crédit</Text>
          </View>
        </View>
        <View style={[styles.searchDisable, styles.group8Layout]}>
          <View style={[styles.group8, styles.group8Layout]}>
            <View style={[styles.rectangle16, styles.group8Layout]} />
          </View>
          <View style={[styles.searchInbox, styles.searchLayout]}>
            <Text style={[styles.searchInbox1, styles.heyTypo]}>
              Cherchez vos personnels
            </Text>
          </View>
          <Image
            style={[styles.iconSearch, styles.searchLayout]}
            contentFit="cover"
            source={require("../assets/icon-search.png")}
          />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 133,
    width: 315,
    position: "absolute",
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  searchLayout: {
    height: 16,
    position: "absolute",
  },
  ofGdp1Typo: {
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  amClr: {
    color: Color.colorMediumseagreen,
    left: "0%",
  },
  path4IconLayout: {
    height: 77,
    width: 165,
    left: 131,
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
    width: 107,
    position: "absolute",
  },
  gdp1Typo: {
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
  text2Position: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    color: Color.colorGray_100,
    left: "0%",
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
  group2Layout: {
    height: 129,
    width: 315,
    position: "absolute",
  },
  gdpPosition: {
    height: 14,
    top: 71,
    position: "absolute",
    overflow: "hidden",
  },
  gdpTypo: {
    fontSize: FontSize.size_xs,
    marginTop: -7,
  },
  gdpLayout: {
    width: 69,
    top: 92,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  ovalIconLayout: {
    height: 39,
    width: 39,
    top: 21,
    position: "absolute",
  },
  cardLayout: {
    width: 362,
    height: 92,
    left: 20,
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  oval3IconLayout: {
    height: 60,
    position: "absolute",
  },
  juneLayout: {
    width: 72,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  amTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  howLayout: {
    width: 156,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  heyTypo: {
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    marginTop: -8,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  howPosition: {
    top: 50,
    width: 156,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  am34Layout: {
    width: 49,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    left: 20,
    height: 92,
    position: "absolute",
  },
  group8Layout: {
    height: 44,
    width: 327,
    position: "absolute",
  },
  rectangle4: {
    borderRadius: 14,
    height: 133,
    width: 315,
    position: "absolute",
  },
  group: {
    left: 0,
    top: 0,
  },
  text: {
    marginTop: -10.5,
    width: "106.44%",
    fontSize: 18,
    color: "#3f51b5",
    left: "0%",
  },
  view: {
    width: 132,
    height: 21,
    left: 16,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  balance1: {
    width: "95.65%",
    fontSize: FontSize.size_sm,
    marginTop: -8,
    color: Color.colorLightslategray_200,
    left: "0%",
  },
  balance2: {
    top: 45,
    left: 17,
    width: 115,
    overflow: "hidden",
  },
  text1: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_sm,
    marginTop: -8,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  view1: {
    top: 97,
    left: 38,
    width: 54,
    overflow: "hidden",
  },
  iconPath: {
    top: 98,
    left: 22,
    width: 12,
    height: 13,
    position: "absolute",
  },
  path4Icon: {
    top: 35,
  },
  path4CopyIcon: {
    top: 31,
  },
  balance: {
    top: 130,
    left: 30,
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
    backgroundColor: Color.colorWhite,
  },
  dashboard1: {
    marginTop: -12.5,
    fontSize: FontSize.size_3xl,
    left: "0%",
  },
  dashboard: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    left: 135,
    top: 54,
  },
  text2: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  view2: {
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
  iconShape: {
    width: 29,
    height: 23,
  },
  iconShape2: {
    width: 21,
    height: 15,
  },
  topBar: {
    height: 23,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
  topIconsBarWithTextInMid: {
    left: 23,
    height: 23,
    width: 335,
    top: 54,
    position: "absolute",
  },
  rectangle5: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
  },
  group2: {
    left: 0,
    top: 0,
  },
  invest1: {
    left: "2.38%",
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  invest: {
    left: 53,
    width: 42,
  },
  ofGdp1: {
    width: "135.07%",
    left: "-0.72%",
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  ofGdp: {
    left: 26,
  },
  ofGdp2: {
    left: 131,
    width: 69,
    top: 92,
  },
  ofGdp4: {
    left: 224,
  },
  gdp1: {
    width: "229.22%",
    left: "3.13%",
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  gdp: {
    left: 132,
    width: 64,
  },
  nat1: {
    width: "333.29%",
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
    left: "0%",
  },
  nat: {
    left: 216,
    width: 82,
  },
  ovalIcon: {
    left: 40,
  },
  ovalCopyIcon: {
    left: 142,
  },
  ovalCopy2Icon: {
    left: 236,
  },
  dataCard: {
    top: 283,
    left: 30,
  },
  bgIcon: {
    height: 698,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangle12: {
    height: 92,
    width: 335,
  },
  group3: {
    height: 92,
    width: 335,
    left: 0,
    top: 0,
    position: "absolute",
  },
  oval3Icon: {
    top: 16,
    left: 11,
    width: 60,
    height: 60,
  },
  jhonaKal: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    color: Color.colorGray_100,
    left: "0%",
  },
  juneP3: {
    left: 91,
    top: 17,
  },
  heyHowAre: {
    left: "0%",
  },
  howDoYouFeelToda3: {
    top: 49,
    left: 90,
  },
  heyHowAre1: {
    left: "6.41%",
  },
  howDoYouFeelToda31: {
    left: 206,
  },
  am: {
    fontSize: FontSize.size_xs,
    marginTop: -7,
    color: Color.colorMediumseagreen,
    left: "0%",
  },
  crdit: {
    top: 20,
    left: 251,
  },
  check2Icon: {
    left: 310,
    width: 15,
    height: 15,
    top: 35,
    position: "absolute",
  },
  cardInbox: {
    top: 84,
    height: 92,
  },
  rectangle121: {
    borderStyle: "solid",
    borderColor: Color.colorTomato,
    borderWidth: 0.7,
    width: 336,
    height: 93,
  },
  howDoYouFeelToda33: {
    left: 200,
  },
  am1: {
    left: "12.24%",
    color: Color.colorCrimson,
    fontSize: FontSize.size_xs,
    marginTop: -7,
  },
  check2Icon1: {
    top: 37,
    left: 309,
    width: 18,
    height: 18,
    position: "absolute",
  },
  cardInbox1: {
    top: 193,
    width: 356,
    height: 92,
  },
  cardInbox2: {
    top: 301,
    height: 92,
  },
  heyHowAre7: {
    left: "4.49%",
  },
  howDoYouFeelToda37: {
    left: 204,
  },
  cardInbox3: {
    top: 409,
    width: 360,
    height: 92,
  },
  cardInbox4: {
    top: 517,
    height: 92,
  },
  oval3Icon5: {
    width: 60,
    height: 60,
    left: 0,
    top: 0,
  },
  juneP35: {
    top: 1,
    left: 80,
  },
  howDoYouFeelToda310: {
    top: 33,
    left: 79,
  },
  howDoYouFeelToda311: {
    top: 34,
    left: 209,
  },
  am34: {
    left: 254,
    top: 4,
  },
  cardInbox5: {
    top: 641,
    left: 36,
    width: 365,
  },
  rectangle16: {
    borderRadius: 20,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  group8: {
    left: 0,
    top: 0,
  },
  searchInbox1: {
    width: "192.57%",
    left: "0%",
  },
  searchInbox: {
    left: 44,
    width: 171,
    top: 17,
    overflow: "hidden",
  },
  iconSearch: {
    top: 14,
    width: 16,
    left: 16,
  },
  searchDisable: {
    left: 24,
    top: 24,
  },
  personnelBox: {
    top: 435,
    width: 401,
    height: 701,
    left: 0,
    position: "absolute",
  },
  personnel: {
    flex: 1,
    width: "100%",
    height: 1065,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Personnel;
