import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ProfilSalariUpdateVariable = () => {
  return (
    <ScrollView>
    <View style={styles.profilSalariUpdateVariable}>
    <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
      <View style={styles.welcomeText}>
        <View style={styles.hello}>
          <Text style={styles.hello1}>Project Manager</Text>
        </View>
        <View style={[styles.alexanderBill, styles.alexanderBillLayout]}>
          <Text style={styles.alexaSmith}>Alexa Smith</Text>
        </View>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <Image
          style={styles.oval3Icon}
          contentFit="cover"
          source={require("../assets/oval3.png")}
        />
      </View>
      <Image
        style={styles.videoCameraIcon}
        contentFit="cover"
        source={require("../assets/videocamera.png")}
      />
      <View style={[styles.statusBar, styles.name21Layout]}>
        <View style={styles.timePosition}>
          <View style={[styles.view, styles.timePosition]}>
            <Text style={styles.textTypo2}>9:41</Text>
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
          <View style={[styles.rectangle96, styles.rectangleLayout1]} />
          <View style={[styles.rectangle97, styles.rectangleLayout1]} />
          <View style={[styles.rectangle98, styles.rectangleLayout1]} />
          <View style={[styles.rectangle99, styles.view9Position]} />
        </View>
      </View>
      <Image
        style={[styles.bottomNavigationIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bottom-navigation.png")}
      />
      <View style={[styles.send2, styles.send2Layout]}>
        <View style={[styles.group, styles.send2Layout]}>
          <View style={[styles.rectangle59222, styles.rectanglePosition1]} />
        </View>
      </View>
      <View style={[styles.continue, styles.bg2Layout]}>
        <View style={styles.rectangle562} />
        <View style={[styles.continue2, styles.view7Layout]}>
        <Text style={[styles.continue1, styles.textTypo2]}>Enregistrer</Text>
        </View>
      </View>
      <View style={[styles.nomPrnom, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <View style={[styles.chooseBank2, styles.choosePosition]}>
          <Text style={[styles.chooseBank, styles.nameTypo]}>Alexa Smith</Text>
        </View>
        <Image
          style={[styles.group3ClippedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-3-clipped.png")}
        />
      </View>
      <View style={[styles.typeDePaiement, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <View style={[styles.chooseBranch2, styles.choosePosition]}>
          <Text style={[styles.chooseBranch, styles.nameTypo]}>
            Salaire mensuel
          </Text>
        </View>
        <Image
        style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={[styles.salaireMensuel, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <View style={[styles.name2, styles.choosePosition]}>
          <Text style={[styles.name, styles.nameTypo]}>{`3500 €  `}</Text>
        </View>
      </View>
      <View style={[styles.cycleMensuelDePaiement, styles.cardNumberLayout]}>
        <View style={[styles.name21, styles.name21Layout]} />
        <View style={[styles.bg24, styles.bg2Layout]}>
        <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <Image
          style={[styles.calendar1Icon, styles.alexanderBillLayout]}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
          />
        <Text style={[styles.name1, styles.nameTypo]}>Cycle Mensuel 01-01</Text>
      </View>
      <View style={[styles.cardNumber, styles.cardNumberLayout]}>
        <View style={[styles.name21, styles.name21Layout]} />
        <View style={[styles.bg24, styles.bg2Layout]}>
          <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <Text style={[styles.name3, styles.nameTypo]}>09-09-2020</Text>
        <Image
          style={[styles.calendar1Icon, styles.alexanderBillLayout]}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
        />
      </View>
      <View style={[styles.amount, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.rectangle195, styles.rectanglePosition]} />
        </View>
        <View style={[styles.amount2, styles.choosePosition]}>
          <Text style={[styles.amount1, styles.nameTypo]}>
            Matricule d’employé ..
          </Text>
        </View>
      </View>
      <View style={[styles.note, styles.noteLayout]}>
        <View style={[styles.bg26, styles.noteLayout]}>
          <View style={[styles.rectangle196, styles.noteLayout]} />
        </View>
        <View style={[styles.note2, styles.choosePosition]}>
        <Text style={[styles.note1, styles.nameTypo]}>Note</Text>
        </View>
        </View>
      <View style={[styles.check, styles.checkLayout]}>
      <View style={[styles.saveToDirectoryOf, styles.checkLayout]}>
          <Text style={styles.saveToDirectory}>
            Enregistrer dans le répertoire du bénéficiaire
          </Text>
        </View>
        <Image
          style={[styles.boxIcon, styles.checkLayout]}
          contentFit="cover"
          source={require("../assets/box.png")}
        />
      </View>
      <Image
      style={[styles.darkBgIcon, styles.iconPosition]}
      contentFit="cover"
        source={require("../assets/dark-bg.png")}
      />
      <View style={[styles.bg4, styles.bg4Layout]}>
        <View style={[styles.rectangle243, styles.bg4Layout]} />
      </View>
      <View style={[styles.matriculeFiscal, styles.otherLayout]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={[styles.texteMatriculeFiscal, styles.view13Layout]}>
          <Text style={[styles.text1, styles.textTypo1]}>ID Employé</Text>
        </View>
      </View>
      <View style={[styles.view1, styles.viewLayout1]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={[styles.view2, styles.viewPosition1]} />
        <Text style={[styles.text2, styles.textTypo1]}>{`Nom & Prénom`}</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout1]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <Text style={[styles.text3, styles.textTypo1]}>Salaire</Text>
      </View>
      <View style={[styles.view4, styles.viewLayout]}>
        <View style={[styles.rectangle4, styles.view7Position]} />
        <View style={styles.view5}>
          <Text style={[styles.text4, styles.textTypo1]}>{`Type de
 paiement`}</Text>
        </View>
      </View>
      <View style={[styles.view6, styles.viewPosition]}>
        <View style={styles.rectangle41} />
        <View style={[styles.view7, styles.view7Position]}>
          <Text style={[styles.text5, styles.textTypo]}>{`Type de 
contrat`}</Text>
        </View>
      </View>
      <View style={styles.view8}>
        <View style={[styles.rectangle5, styles.rectangleLayout]} />
        <View style={[styles.view9, styles.viewLayout]}>
          <Text style={[styles.text6, styles.textTypo1]}>{`Date de
 début`}</Text>
        </View>
      </View>
      <View style={[styles.view10, styles.viewPosition]}>
        <View style={styles.rectangle41} />
        <View style={styles.view11}>
        <Text style={[styles.text7, styles.textTypo]}>{`Horraire
        de travail`}</Text>
        </View>
      </View>
      <View style={[styles.other, styles.otherLayout]}>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={[styles.view12, styles.viewPosition1]} />
        <Text style={[styles.other1, styles.textTypo1]}>Cycle mensuel</Text>
      </View>
      <View style={[styles.other2, styles.viewPosition]}>
        <View style={styles.rectangle41} />
        <View style={[styles.view13, styles.view13Layout]}>
          <Text style={[styles.other3, styles.textTypo]}>Jour de congé</Text>
          </View>
      </View>
      <View style={[styles.areYouSureYouWantToSign, styles.areLayout]}>
      <View style={[styles.areYouSure, styles.areLayout]}>
          <Text style={[styles.areYouSure1, styles.youTypo]}>
            Renouvelé les variables de paies !
          </Text>
        </View>
      </View>
      <Text style={[styles.youWantTo, styles.youTypo]}>
        Cocher les cases correspondante
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alexanderBillLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  name21Layout: {
    height: 19,
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
  rectangleLayout1: {
    width: 3,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  view9Position: {
    left: 14,
    top: 0,
  },
  iconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  send2Layout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  rectanglePosition1: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  bg2Layout: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  view7Layout: {
    width: 84,
    overflow: "hidden",
  },
  textTypo2: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  choosePosition: {
    left: 22,
    top: 16,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  nameTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 21,
    height: 20,
    position: "absolute",
  },
  cardNumberLayout: {
    width: 315,
    height: 100,
    position: "absolute",
  },
  noteLayout: {
    height: 73,
    width: 315,
    position: "absolute",
  },
  checkLayout: {
    height: 16,
    position: "absolute",
  },
  bg4Layout: {
    height: 383,
    width: 315,
    position: "absolute",
  },
  otherLayout: {
    height: 52,
    width: 86,
    position: "absolute",
  },
  rectangleLayout: {
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_xs,
    height: 52,
    width: 86,
    left: 0,
  },
  view13Layout: {
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  viewLayout1: {
    width: 88,
    height: 52,
    top: 383,
    position: "absolute",
  },
  viewPosition1: {
    height: 17,
    top: 20,
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout: {
    height: 59,
    position: "absolute",
  },
  view7Position: {
    top: 6,
    position: "absolute",
  },
  viewPosition: {
    top: 516,
    height: 52,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslateblue,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  areLayout: {
    width: 301,
    height: 19,
    position: "absolute",
  },
  youTypo: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  bgIcon: {
    top: -139,
    width: 487,
    height: 337,
    left: 0,
    position: "absolute",
  },
  backIcon: {
    top: 73,
    left: 18,
    width: 12,
    height: 20,
    position: "absolute",
  },
  hello1: {
    marginTop: -10,
    width: "51.8%",
    fontSize: 13,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  hello: {
    top: 54,
    width: 222,
    height: 62,
    left: 76,
    position: "absolute",
    overflow: "hidden",
  },
  alexaSmith: {
    marginTop: -11,
    fontSize: 20,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  alexanderBill: {
    top: 47,
    width: 109,
    left: 76,
  },
  notificationIcon: {
    left: 305,
    width: 20,
    height: 22,
    top: 0,
    position: "absolute",
  },
  oval3Icon: {
    top: 40,
    height: 60,
    width: 60,
    left: 0,
    position: "absolute",
  },
  welcomeText: {
    top: 76,
    left: 24,
    width: 325,
    height: 116,
    position: "absolute",
  },
  videoCameraIcon: {
    top: 138,
    left: 330,
    width: 18,
    height: 18,
    position: "absolute",
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
    height: 9,
    left: 9,
  },
  rectangle99: {
    width: 3,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: 11,
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
  bottomNavigationIcon: {
    top: 797,
    height: 111,
  },
  rectangle59222: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  group: {
    top: 0,
    left: 0,
  },
  send2: {
    top: 508,
    left: 360,
  },
  rectangle562: {
    shadowColor: "rgba(50, 214, 216, 0.3)",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorSlateblue_200,
    borderRadius: Border.br_6xl,
    height: 50,
    width: 315,
    top: 0,
    left: 0,
    position: "absolute",
  },
  continue1: {
    width: "123.1%",
  },
  continue2: {
    left: 116,
    top: 16,
    height: 19,
    position: "absolute",
  },
  continue: {
    top: 747,
    left: 30,
  },
  rectangle19: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  bg2: {
    top: 0,
    left: 0,
  },
  chooseBank: {
    width: "117.23%",
    marginTop: -9.5,
    left: "0%",
  },
  chooseBank2: {
    width: 119,
  },
  group3ClippedIcon: {
    top: 0,
    left: 0,
  },
  nomPrnom: {
    top: 292,
    left: 30,
  },
  chooseBranch: {
    width: "110.29%",
    marginTop: -9.5,
    left: "0%",
  },
  chooseBranch2: {
    width: 139,
  },
  icon: {
    left: 273,
    top: 16,
  },
  typeDePaiement: {
    top: 357,
    left: 30,
  },
  name: {
    width: "114.04%",
    marginTop: -9.5,
    left: "0%",
  },
  name2: {
    width: 57,
  },
  salaireMensuel: {
    top: 422,
    left: 30,
  },
  name21: {
    left: 141,
    width: 162,
    top: 0,
    overflow: "hidden",
  },
  bg24: {
    top: 50,
    left: 0,
  },
  calendar1Icon: {
    top: 63,
    left: 265,
    width: 24,
  },
  name1: {
    marginTop: 15,
    width: "48.89%",
    left: "6.98%",
  },
  cycleMensuelDePaiement: {
    top: 438,
    left: 30,
  },
  name3: {
    marginTop: 14,
    width: "59.37%",
    left: "7.3%",
  },
  cardNumber: {
    top: 503,
    left: 29,
  },
  rectangle195: {
    borderStyle: "solid",
    borderColor: "#ff6556",
    borderWidth: 1,
    width: 316,
    height: 51,
    position: "absolute",
  },
  amount1: {
    width: "150.85%",
    marginTop: -9.5,
    left: "0%",
  },
  amount2: {
    width: 153,
  },
  amount: {
    top: 227,
    left: 30,
  },
  rectangle196: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  bg26: {
    top: 0,
    left: 0,
  },
  note1: {
    marginTop: -9.5,
    left: "0%",
  },
  note2: {
    width: 35,
  },
  note: {
    top: 618,
    left: 30,
  },
  saveToDirectory: {
    marginTop: -8,
    width: "142.48%",
    color: Color.colorLightslategray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  saveToDirectoryOf: {
    left: 28,
    width: 286,
    top: 0,
    overflow: "hidden",
  },
  boxIcon: {
    width: 16,
    top: 0,
    left: 0,
  },
  check: {
    top: 709,
    width: 314,
    left: 30,
  },
  darkBgIcon: {
    top: 0,
    height: 914,
  },
  rectangle243: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  bg4: {
    top: 258,
    left: 31,
  },
  rectangle: {
    top: 0,
    position: "absolute",
  },
  text1: {
    marginTop: -13,
    left: "3.13%",
    width: "100%",
  },
  texteMatriculeFiscal: {
    width: 64,
    left: 9,
    top: 0,
  },
  matriculeFiscal: {
    left: 53,
    top: 383,
    height: 52,
  },
  view2: {
    left: 31,
    width: 24,
  },
  text2: {
    marginTop: -17.2,
    left: "0%",
    width: "100%",
  },
  view1: {
    left: 147,
  },
  text3: {
    marginTop: -8.2,
    left: "0%",
    width: "100%",
  },
  view3: {
    left: 241,
  },
  rectangle4: {
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_xs,
    height: 52,
    width: 86,
    left: 0,
  },
  text4: {
    marginTop: -8.5,
    width: "151.74%",
    left: "-39.53%",
  },
  view5: {
    height: 47,
    width: 86,
    left: 9,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  view4: {
    top: 443,
    width: 95,
    left: 53,
  },
  rectangle41: {
    backgroundColor: Color.colorSlateblue_100,
    opacity: 0.1,
    borderRadius: Border.br_xs,
    height: 52,
    width: 86,
    top: 0,
    left: 0,
    position: "absolute",
  },
  text5: {
    width: "66.67%",
    left: "3.57%",
    height: 38,
    marginTop: -19,
    color: Color.colorDarkslateblue,
  },
  view7: {
    left: 12,
    height: 46,
    width: 84,
    overflow: "hidden",
  },
  view6: {
    left: 52,
    width: 96,
  },
  rectangle5: {
    top: 10,
    position: "absolute",
  },
  text6: {
    left: "-1.67%",
    marginTop: -9.5,
    width: "100%",
  },
  view9: {
    left: 14,
    top: 0,
    width: 60,
    overflow: "hidden",
  },
  view8: {
    top: 439,
    height: 63,
    left: 147,
    width: 86,
    position: "absolute",
  },
  text7: {
    marginTop: -17.6,
    width: "188.91%",
    left: "-42.34%",
  },
  view11: {
    top: 12,
    left: 11,
    height: 31,
    width: 64,
    position: "absolute",
    overflow: "hidden",
  },
  view10: {
    left: 146,
    width: 86,
  },
  view12: {
    left: 26,
    width: 35,
  },
  other1: {
    marginTop: -17.5,
    width: "68.93%",
    left: "18.22%",
  },
  other: {
    top: 449,
    left: 242,
  },
  other3: {
    left: "-8.77%",
    marginTop: -19,
    color: Color.colorDarkslateblue,
    width: "100%",
  },
  view13: {
    left: 21,
    width: 57,
    top: 4,
  },
  other2: {
    left: 241,
    width: 86,
  },
  areYouSure1: {
    width: "84.05%",
    left: "3.32%",
    marginTop: -9.5,
  },
  areYouSure: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  areYouSureYouWantToSign: {
    top: 299,
    left: 51,
  },
  youWantTo: {
    marginTop: -130,
    width: "68.53%",
    left: "15.73%",
  },
  profilSalariUpdateVariable: {
    flex: 1,
    overflow: "hidden",
    height: 914,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ProfilSalariUpdateVariable;
