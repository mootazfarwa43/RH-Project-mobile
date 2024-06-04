import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Switch ,ScrollView} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GestionDeVariablesDePaies = () => {
  const [switchSwitchValueState, setSwitchSwitchValueState] = useState(false);
  const [switch1SwitchValueState, setSwitch1SwitchValueState] = useState(false);
  const [switch2SwitchValueState, setSwitch2SwitchValueState] = useState(false);
  const [switch3SwitchValueState, setSwitch3SwitchValueState] = useState(false);

  return (
    <ScrollView>
    <View style={styles.gestionDeVariablesDePaies}>
    <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
    <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
    <View style={[styles.homeIndicator, styles.view5Position]} />
      </View>
      <View style={[styles.chooseAmount, styles.chooseLayout]}>
      <View style={[styles.chooseAmount2, styles.chooseLayout]}>
          <Text style={[styles.chooseAmount1, styles.textTypo1]}>
            Choissir vos paramétres de paies :
          </Text>
        </View>
        </View>
        <Image
        style={styles.personnelBoxIcon}
        contentFit="cover"
        source={require("../assets/personnel-box.png")}
      />
      <View style={[styles.searchDisable, styles.groupLayout]}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.rectangle16, styles.groupLayout]} />
        </View>
        <View style={styles.searchInbox}>
        <Text style={styles.searchInbox1}>
        Rechercher une variable de paie
        </Text>
        </View>
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/icon-search.png")}
        />
      </View>
      <Pressable style={[styles.continue, styles.rectangleLayout1]}>
        <View style={[styles.rectangle562, styles.rectanglePosition1]} />
        <View style={styles.continue2}>
          <Text style={[styles.continue1, styles.confirm1Typo]}>
          Enregistrer
          </Text>
        </View>
      </Pressable>
      <View style={[styles.visa, styles.visaLayout]}>
        <View style={[styles.bg, styles.visaLayout]}>
          <View style={styles.rectangleShadowBox} />
        </View>
        <View style={[styles.visaMastercard, styles.visaPosition]}>
          <Text style={styles.visaTypo}>ID Employé</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Text
            style={[styles.text, styles.textTypo]}
          >{`Texte & caractère`}</Text>
        </View>
        <View style={[styles.switchOn, styles.switchLayout1]}>
        <View style={[styles.switchOnBackground, styles.switchLayout1]} />
          <Switch
          style={[styles.switch, styles.switchLayout]}
            value={switchSwitchValueState}
            onValueChange={setSwitchSwitchValueState}
          />
          </View>
      </View>
      <View style={[styles.visa1, styles.visaLayout]}>
      <View style={[styles.bg, styles.visaLayout]}>
      <View style={styles.rectangleShadowBox} />
      </View>
        <View style={[styles.visaMastercard2, styles.visaPosition]}>
          <Text style={[styles.visaMastercard3, styles.visaTypo]}>
            Type de paiement
          </Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
        <Text style={[styles.text, styles.textTypo]}>Liste déroulante</Text>
        </View>
        <View style={[styles.switchOn, styles.switchLayout1]}>
          <View style={[styles.switchOnBackground, styles.switchLayout1]} />
          <Switch
            style={[styles.switch, styles.switchLayout]}
            value={switch1SwitchValueState}
            onValueChange={setSwitch1SwitchValueState}
            />
            </View>
            </View>
            <View style={[styles.master, styles.visaLayout]}>
        <View style={[styles.bg, styles.visaLayout]}>
          <View style={styles.rectangleShadowBox} />
        </View>
        <View style={[styles.mastercardGold, styles.visaPosition]}>
          <Text style={styles.visaTypo}>Horraire de travail</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text2, styles.textTypo]}>Calendrier</Text>
        </View>
        <View style={[styles.switchOff, styles.switchLayout1]}>
        <View style={[styles.switchOnBackground, styles.switchLayout1]} />
          <Switch
            style={[styles.switch2, styles.switchLayout]}
            value={switch2SwitchValueState}
            onValueChange={setSwitch2SwitchValueState}
          />
        </View>
      </View>
      <View style={[styles.master1, styles.visaLayout]}>
        <View style={[styles.bg, styles.visaLayout]}>
          <View style={styles.rectangleShadowBox} />
        </View>
        <View style={[styles.mastercardGold, styles.visaPosition]}>
          <Text style={styles.visaTypo}>Salaire</Text>
        </View>
        <View style={styles.view2}>
          <Text style={[styles.text2, styles.textTypo]}>Calendrier</Text>
          </View>
          <View style={[styles.switchOff, styles.switchLayout1]}>
          <View style={[styles.switchOnBackground, styles.switchLayout1]} />
          <Switch
            style={[styles.switch2, styles.switchLayout]}
            value={switch3SwitchValueState}
            onValueChange={setSwitch3SwitchValueState}
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
        <View style={[styles.addPaymentMethod, styles.titleLayout]}>
        <Text style={[styles.addPaymentMethod1, styles.textTypo1]}>
              Gestion des variables
            </Text>
          </View>
          </View>
          <View style={styles.statusBar}>
          <View style={styles.timePosition}>
            <View style={[styles.view4, styles.timePosition]}>
            <Text style={[styles.text4, styles.textTypo1]}>9:41</Text>
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
            source={require("../assets/wifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.rectangle96, styles.rectangleLayout]} />
            <View style={[styles.rectangle97, styles.rectangleLayout]} />
            <View style={[styles.rectangle98, styles.rectangleLayout]} />
            <View style={[styles.rectangle99, styles.rectangleLayout]} />
            </View>
            </View>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
      </View>
      <View style={[styles.amount, styles.bg21Layout]}>
        <View style={[styles.bg21, styles.bg21Layout]}>
          <View style={[styles.rectangle19, styles.bg21Layout]} />
        </View>
        <View style={[styles.view5, styles.view5Position]}>
          <Text style={[styles.text5, styles.textTypo1]}>
            Nom de la variable de paie
          </Text>
        </View>
      </View>
      <View style={[styles.addContact, styles.rectangleLayout1]}>
        <View style={[styles.group2, styles.rectangleLayout1]}>
          <View style={[styles.rectangle564, styles.rectanglePosition]} />
        </View>
        <View style={[styles.addContact2, styles.viewPosition]}>
          <Text style={[styles.addContact1, styles.textTypo1]}>
            Type de l’attribut
          </Text>
        </View>
      </View>
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon1.png")}
      />
      <View style={[styles.processToCheckoutBtn, styles.rectangle5621Layout]}>
        <View style={[styles.rectangle5621, styles.rectangle5621Layout]} />
        <View style={styles.confirm}>
          <Text style={styles.confirm1Typo}>Ajouter</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  barsLayout: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  view5Position: {
    top: 15,
    position: "absolute",
  },
  chooseLayout: {
    width: 262,
    height: 19,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 315,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  rectanglePosition1: {
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  confirm1Typo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: "0%",
    top: "50%",
    marginTop: -9.5,
    position: "absolute",
  },
  visaLayout: {
    height: 81,
    width: 315,
    position: "absolute",
  },
  visaPosition: {
    height: 18,
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  viewPosition: {
    left: 31,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorLightslategray_300,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  switchLayout1: {
    width: 189,
    height: 44,
    position: "absolute",
  },
  switchLayout: {
    height: 31,
    width: 51,
    top: 7,
    position: "absolute",
  },
  visaTypo: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_mini,
    marginTop: -9,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  headerPosition: {
    height: 100,
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 214,
    position: "absolute",
  },
  timePosition: {
    width: 33,
    height: 19,
    top: 0,
    left: 0,
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
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  bg21Layout: {
    width: 318,
    height: 50,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  rectangle5621Layout: {
    width: 166,
    height: 50,
    position: "absolute",
  },
  barsHomeIndicatorOnLightB: {
    backgroundColor: Color.colorGray_300,
    top: 0,
  },
  homeIndicator: {
    left: 121,
    borderRadius: Border.br_10xs_5,
    width: 134,
    height: 5,
    backgroundColor: Color.colorSlateblue_100,
  },
  barsHomeIndicatorOnLight: {
    top: 923,
  },
  chooseAmount1: {
    width: "101.91%",
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
  },
  chooseAmount2: {
    height: 19,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  chooseAmount: {
    top: 403,
    height: 19,
    left: 30,
  },
  personnelBoxIcon: {
    top: 92,
    height: 176,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle16: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    top: 0,
    left: 0,
  },
  group: {
    top: 0,
    left: 0,
  },
  searchInbox1: {
    width: "192.57%",
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  searchInbox: {
    left: 41,
    width: 206,
    height: 16,
    top: 17,
    position: "absolute",
    overflow: "hidden",
  },
  iconSearch: {
    top: 14,
    left: 13,
    width: 16,
    height: 16,
    position: "absolute",
  },
  searchDisable: {
    top: 335,
    left: 30,
  },
  rectangle562: {
    shadowColor: "rgba(108, 77, 218, 0.6)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 13,
    },
    height: 50,
    width: 315,
    position: "absolute",
    backgroundColor: Color.colorSlateblue_100,
  },
  continue1: {
    width: "123.02%",
  },
  continue2: {
    left: 125,
    width: 86,
    top: 17,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  continue: {
    top: 853,
    left: 27,
  },
  rectangleShadowBox: {
    borderRadius: Border.br_sm,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 81,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 13,
    },
    backgroundColor: Color.colorWhite,
    width: 315,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bg: {
    top: 0,
    left: 0,
  },
  visaMastercard: {
    width: 117,
    top: 23,
    height: 18,
  },
  text: {
    width: "138.9%",
    marginTop: -8,
    color: Color.colorLightslategray_300,
    fontSize: FontSize.size_smi,
    left: "0%",
  },
  view: {
    top: 42,
    width: 163,
    height: 16,
  },
  switchOnBackground: {
    top: 0,
    left: 0,
  },
  switch: {
    left: 128,
  },
  switchOn: {
    top: 19,
    left: 115,
  },
  visa: {
    top: 446,
    left: 30,
  },
  visaMastercard3: {
    width: "112.8%",
  },
  visaMastercard2: {
    width: 132,
    top: 23,
    height: 18,
  },
  visa1: {
    top: 644,
    left: 32,
  },
  mastercardGold: {
    top: 24,
    width: 121,
  },
  text2: {
    marginTop: -5,
    width: "123.81%",
    left: "1.55%",
  },
  view2: {
    top: 43,
    left: 28,
    width: 194,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  switch2: {
    left: 132,
  },
  switchOff: {
    left: 112,
    top: 17,
  },
  master: {
    top: 545,
    left: 30,
  },
  master1: {
    top: 739,
    left: 30,
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
  addPaymentMethod1: {
    marginTop: -12.5,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
  },
  addPaymentMethod: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 81,
  },
  text4: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
  },
  view4: {
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
    height: 19,
    position: "absolute",
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
  },
  rectangle19: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  bg21: {
    top: 0,
    left: 0,
  },
  text5: {
    marginTop: -12,
    width: "92.86%",
    color: "#7853ff",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    fontSize: FontSize.size_base,
  },
  view5: {
    left: 34,
    width: 213,
    height: 24,
    overflow: "hidden",
  },
  amount: {
    top: 130,
    left: 30,
  },
  rectangle564: {
    opacity: 0.1,
    height: 50,
    width: 315,
    position: "absolute",
  },
  group2: {
    top: 0,
    left: 0,
  },
  addContact1: {
    width: "135.95%",
    color: Color.colorDarkturquoise,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
  },
  addContact2: {
    top: 13,
    width: 131,
    height: 19,
  },
  addContact: {
    top: 196,
    left: 33,
  },
  icon: {
    top: 211,
    left: 302,
    width: 21,
  },
  rectangle5621: {
    shadowColor: "rgba(50, 214, 216, 0.3)",
    backgroundColor: Color.colorDarkturquoise,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 13,
    },
  },
  confirm: {
    left: 50,
    width: 59,
    top: 17,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  processToCheckoutBtn: {
    top: 266,
    left: 111,
  },
  gestionDeVariablesDePaies: {
    backgroundColor: "#f0efef",
    flex: 1,
    width: "100%",
    height: 968,
    overflow: "hidden",
  },
});

export default GestionDeVariablesDePaies;
