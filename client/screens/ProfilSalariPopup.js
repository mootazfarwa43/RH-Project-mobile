import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput ,ScrollView} from "react-native";
import { CheckBox } from "@rneui/themed";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfilSalariPopup = () => {
  const [boxchecked, setBoxchecked] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

    <View style={styles.profilSalariPopup}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={styles.backIcon}
        contentFit="cover"
        // source={require("../assets/back11.png")}
      />
      <View style={styles.welcomeText}>
        <View style={styles.hello}>
          <Text style={styles.hello1}>Project Manager</Text>
        </View>
        <View style={[styles.alexanderBill, styles.alexanderBillLayout]}>
          <Text style={styles.alexaSmith}>Ahmed </Text>
        </View>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          // source={require("../assets/notification1.png")}
        />
        <Image
          style={styles.oval3Icon}
          contentFit="cover"
          source={require("../assets/oval31.png")}
        />
      </View>
      <Image
        style={styles.videoCameraIcon}
        contentFit="cover"
        source={require("../assets/videocamera.png")}
      />
      <Image
        style={styles.bottomNavigationIcon}
        contentFit="cover"
        source={require("../assets/bottom-navigation1.png")}
      />
      <View style={[styles.send2, styles.send2Layout]}>
        <View style={[styles.group, styles.send2Layout]}>
          <View style={[styles.rectangle59222, styles.send2Layout]} />
        </View>
      </View>
      <View style={[styles.continue, styles.bg2Layout]}>
        <View style={styles.rectangle562} />
        <View style={[styles.continue2, styles.name21Layout]}>
          <Text style={styles.continue1}>Enregistrer</Text>
        </View>
      </View>
      <View style={[styles.nomPrnom, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.rectangle19, styles.rectanglePosition]} />
        </View>
        <View style={[styles.chooseBank2, styles.choosePosition]}>
          <Text style={[styles.chooseBank, styles.nameTypo]}>Ahmed Smith</Text>
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
          // source={require("../assets/icon11.png")}
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
      <View
        style={[styles.amount, styles.bg2Layout]}
        placeholder="Matricule d’employé .."
      />
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
        <CheckBox
          checked={boxchecked}
          onPress={() => setBoxchecked(!boxchecked)}
          containerStyle={styles.boxLayout}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxLayout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  alexanderBillLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  send2Layout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  bg2Layout: {
    height: 50,
    width: 315,
    position: "absolute",
  },
  name21Layout: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_6xl,
    top: 0,
    left: 0,
  },
  choosePosition: {
    left: 22,
    height: 19,
    top: 16,
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
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorWhite,
    left: "0%",
    top: "50%",
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
    fontSize: FontSize.size_xl,
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
    width: 60,
    height: 60,
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
  bottomNavigationIcon: {
    top: 797,
    width: 375,
    height: 111,
    left: 0,
    position: "absolute",
  },
  rectangle59222: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
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
    shadowColor: "rgba(63, 81, 181, 0.5)",
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_6xl,
    height: 50,
    width: 315,
    top: 0,
    left: 0,
    position: "absolute",
  },
  continue1: {
    width: "123.1%",
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
  continue2: {
    left: 116,
    width: 84,
    top: 16,
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
    color: Color.colorGray_100,
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
    color: Color.colorGray_100,
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
    color: Color.colorGray_100,
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
    color: Color.colorGray_100,
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
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray_200,
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
  check: {
    top: 709,
    width: 314,
    left: 30,
  },
  profilSalariPopup: {
    flex: 1,
    width: "100%",
    height: 914,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ProfilSalariPopup;
