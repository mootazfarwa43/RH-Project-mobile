import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable,ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AssignementVariablesDePaie = () => {
  return (
    <ScrollView>
    <View style={styles.assignementVariablesDePaie}>
    <View style={styles.header}>
        <View style={styles.header}>
        <View style={styles.header}>
            <View style={styles.rectangle1122} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.withdraw, styles.titleLayout]}>
            <Text style={[styles.withdraw1, styles.withdraw1Typo]}>
              Variable de paie
            </Text>
          </View>
        </View>
        <Image
          style={[styles.backIcon, styles.view11Position]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
        <Image
          style={styles.iconShape}
          contentFit="cover"
          source={require("../assets/icon-shape.png")}
        />
      </View>
      <View style={styles.chooseAmount}>
        <View style={styles.chooseAmount2}>
          <Text style={[styles.chooseAmount1, styles.jhonaKalSpaceBlock]}>
            Choissir vos paramétres de paies :
          </Text>
        </View>
        <View style={[styles.view, styles.viewLayout1]}>
        <View style={styles.rectangle} />
          <View style={[styles.view1, styles.viewPosition1]}>
            <Text style={[styles.text, styles.textPosition]}>ID Employé</Text>
          </View>
          </View>
          <View style={styles.view2}>
          <View style={[styles.rectangle2, styles.rectangleLayout]} />
          <View style={[styles.view3, styles.viewPosition]}>
            <Text style={[styles.text1, styles.textTypo]}>{`Nom &
            Prénom`}</Text>
            </View>
            </View>
        <View style={[styles.view4, styles.viewLayout1]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <View style={[styles.view5, styles.view5Position]}>
          <Text style={styles.text2}>Salaire</Text>
          </View>
          </View>
          <View style={[styles.view6, styles.viewLayout1]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <View style={[styles.view7, styles.viewPosition]}>
          <Text style={[styles.text3, styles.textTypo]}>{`Type de
          paiement`}</Text>
          </View>
          </View>
        <View style={[styles.view8, styles.viewLayout1]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <View style={[styles.view7, styles.viewPosition]}>
            <Text style={[styles.text3, styles.textTypo]}>{`Type de 
            contrat`}</Text>
          </View>
        </View>
        <View style={[styles.view10, styles.viewLayout]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <View style={[styles.view11, styles.view11Position]}>
            <Text style={[styles.text5, styles.text5Typo]}>{`Date de
 début`}</Text>
          </View>
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
        <View style={[styles.rectangle3, styles.rectangleLayout]} />
        <View style={[styles.view11, styles.view11Position]}>
        <Text style={[styles.text6, styles.textTypo]}>{`Horraire
de travail`}</Text>
</View>
</View>
<View style={[styles.other, styles.otherLayout]}>
<View style={[styles.rectangle3, styles.rectangleLayout]} />
<View style={[styles.view14, styles.viewPosition1]} />
          <Text style={[styles.other1, styles.textTypo]}>{`Cycle
          mensuel`}</Text>
          </View>
          <View style={[styles.other2, styles.otherLayout]}>
          <View style={[styles.rectangle3, styles.rectangleLayout]} />
          <View style={[styles.view14, styles.viewPosition1]} />
          <Text style={[styles.other3, styles.text5Typo]}>{`Jour de
          congé`}
          </Text>
        </View>
        </View>
      <View style={[styles.personnelBox, styles.bgIconPosition]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg1.png")}
        />
        <View style={styles.cardInbox}>
          <View style={styles.group1Position}>
            <View style={[styles.rectangle12, styles.group1Position]} />
          </View>
          <Image
            style={[styles.oval3Icon, styles.viewLayout1]}
            contentFit="cover"
            source={require("../assets/oval3.png")}
          />
          <View style={[styles.juneP3, styles.juneP3Position]}>
            <Text style={[styles.jhonaKal, styles.amTypo]}>Jhona Kal</Text>
          </View>
          <View style={[styles.howDoYouFeelToda3, styles.searchLayout]}>
            <Text style={[styles.heyHowAre, styles.heyTypo]}>
              Sep 9 - Présent
              </Text>
          </View>
          <View style={[styles.howDoYouFeelToda31, styles.searchLayout]}>
            <Text style={[styles.heyHowAre1, styles.heyTypo]}>3700 ,56 €</Text>
          </View>
          <View style={[styles.crdit, styles.view5Position]}>
            <Text style={[styles.am, styles.amTypo]}>Crédit</Text>
            </View>
          <Image
            style={styles.check2Icon}
            contentFit="cover"
            source={require("../assets/check-2.png")}
            />
        </View>
        <View style={[styles.searchDisable, styles.group2Layout]}>
        <View style={[styles.group2, styles.group2Layout]}>
            <TextInput style={[styles.rectangle16, styles.group2Layout]} />
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
      <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
        <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
      <Pressable style={[styles.continue, styles.continueLayout]}>
        <View style={[styles.rectangle562, styles.continueLayout]} />
        <View style={[styles.continue2, styles.juneP3Position]}>
          <Text style={[styles.continue1, styles.textPosition]}>
            Enregistrer
          </Text>
          </View>
          </Pressable>
          </View>
          </ScrollView>
        );
};

const styles = StyleSheet.create({
  titleLayout: {
    height: 25,
    width: 165,
    position: "absolute",
  },
  withdraw1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  view11Position: {
    left: 21,
    position: "absolute",
  },
  jhonaKalSpaceBlock: {
    marginTop: -9.5,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  viewLayout1: {
    height: 60,
    position: "absolute",
  },
  viewPosition1: {
    left: 13,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    color: Color.colorWhite,
    marginTop: -9.5,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "19%",
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    opacity: 0.1,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_xs,
    height: 60,
    width: 98,
    left: 0,
    position: "absolute",
  },
  viewPosition: {
    left: 17,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorSlateblue_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  view5Position: {
    top: 20,
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout: {
    width: 109,
    height: 60,
    position: "absolute",
  },
  text5Typo: {
    marginTop: -19,
    textAlign: "center",
    color: Color.colorSlateblue_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  otherLayout: {
    width: 128,
    height: 60,
    position: "absolute",
  },
  bgIconPosition: {
    height: 176,
    left: 0,
    position: "absolute",
  },
  group1Position: {
    width: 335,
    height: 92,
    left: 0,
    top: 0,
    position: "absolute",
  },
  juneP3Position: {
    top: 17,
    overflow: "hidden",
  },
  amTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  searchLayout: {
    height: 16,
    position: "absolute",
  },
  heyTypo: {
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  group2Layout: {
    height: 44,
    width: 327,
    position: "absolute",
  },
  barsLayout: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  continueLayout: {
    height: 50,
    width: 315,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 30,
    shadowRadius: 30,
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  header: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  withdraw1: {
    marginTop: -12.5,
    width: "170.97%",
    fontSize: 22,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
  },
  withdraw: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 53,
    left: 105,
  },
  backIcon: {
    top: 56,
    width: 12,
    height: 20,
  },
  iconShape: {
    width: 29,
    height: 23,
  },
  chooseAmount1: {
    width: "101.91%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    left: "0%",
    position: "absolute",
    marginTop: -9.5,
  },
  chooseAmount2: {
    width: 262,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    backgroundColor: Color.colorSlateblue_200,
    borderRadius: Border.br_xs,
    height: 60,
    width: 98,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    width: "253.52%",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
  },
  view1: {
    top: 23,
    width: 88,
    height: 49,
    backgroundColor:"#4742C1",
    borderRadius:20

  },
  view: {
    width: 98,
    height: 60,
    top: 43,
    left: 0,
  },
  rectangle2: {
    top: 5,
  },
  text1: {
    marginTop: -11.5,
    left: "-22%",
    height: 51,
    width: "100%",
  
  },
  view3: {
    width: 100,
    height: 55,
    top: 0,
    
  },
  view2: {
    top: 38,
    width: 117,
    height: 65,
    left: 108,
    position: "absolute",
  },
  rectangle3: {
    top: 0,
  },
  text2: {
    width: "135.09%",
    color: Color.colorSlateblue_200,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
    
  },
  view5: {
    left: 29,
    width: 53,
    height: 19,
  },
  view4: {
    left: 217,
    width: 98,
    height: 60,
    top: 43,
  },
  text3: {
    marginTop: -22.5,
    width: "194.57%",
    left: "-56.79%",
    
  },
  view7: {
    top: 1,
    width: 81,
    height: 59,
  },
  view6: {
    top: 119,
    width: 98,
    height: 60,
    left: 0,
  },
  view8: {
    left: 1,
    top: 198,
    width: 98,
    height: 60,
  },
  text5: {
    width: "118.18%",
    left: "-28.41%",
    
  },
  view11: {
    top: 4,
    width: 88,
    height: 52,
    overflow: "hidden",
  },
  view10: {
    top: 119,
    left: 108,
  },
  text6: {
    marginTop: -21,
    width: "95.45%",
    
    left: "-10.23%",
  },
  view12: {
    left: 109,
    top: 198,
  },
  view14: {
    top: 9,
    width: 115,
    height: 33,
  },
  other1: {
    marginTop: -17,
    width: "62.5%",
    left: "6.25%",
  },
  other: {
    top: 118,
    left: 217,
  },
  other3: {
    width: "50%",
    left: "13.28%",
  },
  other2: {
    top: 197,
    left: 218,
  },
  chooseAmount: {
    top: 307,
    left: 30,
    width: 346,
    height: 258,
    position: "absolute",
  },
  bgIcon: {
    width: 375,
    height: 176,
    top: 0,
  },
  rectangle12: {
    borderRadius: 5,
    backgroundColor: Color.colorWhite,
  },
  oval3Icon: {
    top: 16,
    left: 11,
    width: 60,
  },
  jhonaKal: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    color: Color.colorGray_100,
  },
  juneP3: {
    left: 91,
    width: 72,
    height: 19,
    position: "absolute",
  },
  heyHowAre: {
    left: "0%",
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
  },
  howDoYouFeelToda3: {
    top: 49,
    left: 90,
    width: 156,
    height: 16,
    overflow: "hidden",
  },
  heyHowAre1: {
    left: "6.41%",
  },
  howDoYouFeelToda31: {
    top: 50,
    left: 206,
    width: 156,
    height: 16,
    overflow: "hidden",
  },
  am: {
    marginTop: -7,
    fontSize: 12,
    color: "#14c269",
  },
  crdit: {
    left: 251,
    width: 49,
    height: 14,
  },
  check2Icon: {
    top: 35,
    left: 310,
    width: 15,
    height: 15,
    position: "absolute",
  },
  cardInbox: {
    top: 84,
    left: 20,
    width: 362,
    height: 92,
    position: "absolute",
  },
  rectangle16: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  group2: {
    left: 0,
    top: 0,
  },
  searchInbox1: {
    width: "192.57%",
    left: "0%",
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
  },
  searchInbox: {
    left: 44,
    width: 171,
    top: 17,
    overflow: "hidden",
  },
  iconSearch: {
    top: 14,
    left: 16,
    width: 16,
  },
  searchDisable: {
    top: 24,
    left: 24,
  },
  personnelBox: {
    top: 100,
    width: 382,
  },
  barsHomeIndicatorOnLightB: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    top: 0,
  },
  homeIndicator: {
    top: 15,
    left: 121,
    borderRadius: 3,
    width: 134,
    height: 5,
    backgroundColor: Color.colorSlateblue_200,
    position: "absolute",
  },
  barsHomeIndicatorOnLight: {
    top: 787,
  },
  rectangle562: {
    shadowColor: "rgba(108, 77, 218, 0.6)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorSlateblue_200,
    elevation: 30,
    shadowRadius: 30,
    height: 50,
    width: 315,
    left: 0,
    top: 0,
  },
  continue1: {
    width: "123.02%",
    fontSize: FontSize.size_base,
  },
  continue2: {
    left: 65,
    width: 206,
    height: 69,
    position: "absolute",
    backgroundColor:"#4742C1",
    borderRadius:40

  },
  continue: {
    top: 621,
    left: 27,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
  },
  assignementVariablesDePaie: {
    backgroundColor: "#f0efef",
    flex: 1,
    height: 859,
    overflow: "hidden",
    width: "100%",
  },
});

export default AssignementVariablesDePaie;
