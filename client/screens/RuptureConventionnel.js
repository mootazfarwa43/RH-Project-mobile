import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput,ScrollView } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RuptureConventionnel = () => {
  const [typeDeContratOpen, setTypeDeContratOpen] = useState(false);
  const [typeDeContratValue, setTypeDeContratValue] = useState();
  const [typeDeContratItems, setTypeDeContratItems] = useState([
    { value: "cdi", label: "cdi" },
    { value: "civp", label: "civp" },
    { value: "cdd", label: "cdd" },
  ]);
  const [typeDePaiementOpen, setTypeDePaiementOpen] = useState(false);
  const [typeDePaiementValue, setTypeDePaiementValue] = useState();
  const [typeDePaiementItems, setTypeDePaiementItems] = useState([
    { value: "mensuel", label: "mensuel" },
    { value: "Par jour De Travail", label: "Par jour De Travail" },
    { value: "par heur", label: "par heur" },
  ]);
  const [nomPrnomOpen, setNomPrnomOpen] = useState(false);
  const [nomPrnomValue, setNomPrnomValue] = useState();
  const [nomPrnomItems, setNomPrnomItems] = useState([
    { value: "Ahmed", label: "Ahmed" },
    { value: "iheb", label: "iheb" },
    { value: "joe", label: "joe" },
  ]);

  return (
    <ScrollView>
    <View style={styles.ruptureConventionnel}>
    <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.header, styles.headerLayout]}>
            <View style={[styles.rectangle1122, styles.rectangleShadowBox]} />
            </View>
            </View>
        <View style={[styles.title, styles.titleLayout]}>
        <View style={[styles.dashboard, styles.titleLayout]}>
            <Text style={[styles.dashboard1, styles.textTypo]}>
              Rupture conventionnelle
              </Text>
          </View>
        </View>
        <View style={[styles.topIconsBarWithTextInMid, styles.topLayout]}>
        <View style={[styles.topBar, styles.topLayout]}>
        <Image
              style={[styles.notificationIcon, styles.topLayout]}
              contentFit="cover"
              source={require("../assets/notification2.png")}
            />
            <Image
              style={styles.iconShape2}
              contentFit="cover"
              source={require("../assets/icon-shape2.png")}
            />
          </View>
        </View>
      </View>
      <Pressable style={[styles.continue, styles.typeLayout]}>
        <View style={[styles.rectangle562, styles.typeLayout]} />
        <View style={[styles.continue2, styles.name2Layout]}>
          <Text style={[styles.continue1, styles.namePosition]}>
            Enregistrer
          </Text>
        </View>
      </Pressable>
      <View style={[styles.typeDeContrat, styles.typeLayout]}>
        <DropDownPicker
          open={typeDeContratOpen}
          setOpen={setTypeDeContratOpen}
          value={typeDeContratValue}
          setValue={setTypeDeContratValue}
          placeholder="Type de contrat"
          items={typeDeContratItems}
          labelStyle={styles.typeDeContratValue}
          />
      </View>
      <View style={[styles.typeDePaiement, styles.typeLayout]}>
        <DropDownPicker
          open={typeDePaiementOpen}
          setOpen={setTypeDePaiementOpen}
          value={typeDePaiementValue}
          setValue={setTypeDePaiementValue}
          placeholder="Salaire mensuel"
          items={typeDePaiementItems}
          labelStyle={styles.typeDePaiementValue}
        />
      </View>
      <TextInput
        style={[styles.salaireMensuel, styles.nameTypo, styles.inputBackground]}
        placeholder="3500 €  "
        keyboardType="numeric"
        placeholderTextColor="#262b2e"
        />
      <TextInput
        style={[styles.salaireMensuel1, styles.mensuelPosition, styles.inputBackground]}
        placeholder={`Ancienté : 2 ans & 3 mois`}
        placeholderTextColor="#262b2e"
      />
      <View style={[styles.cycleMensuelDePaiement, styles.mensuelPosition]}>
      <View style={[styles.name2, styles.name2Layout]} />
      <TextInput style={[styles.bg24, styles.typeLayout]} />
      <Image
      style={styles.calendar1Icon}
      contentFit="cover"
      source={require("../assets/calendar-1.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>Cycle Mensuel 01-01</Text>
      </View>
      <View style={[styles.cardNumber, styles.typeLayout]}>
        <View style={[styles.name2, styles.name2Layout]} />
        <TextInput style={[styles.bg24, styles.typeLayout]} />
        <Text style={[styles.name1, styles.nameTypo]}>09-09-2020</Text>
        <Image
          style={styles.calendar1Icon}
          contentFit="cover"
          source={require("../assets/calendar-1.png")}
          />
          </View>
          <View style={[styles.nomPrnom, styles.typeLayout]}>
          <DropDownPicker
          open={nomPrnomOpen}
          setOpen={setNomPrnomOpen}
          value={nomPrnomValue}
          setValue={setNomPrnomValue}
          placeholder="Alexa Smith"
          items={nomPrnomItems}
          labelStyle={styles.nomPrnomValue}
        />
      </View>
      <TextInput
      style={[styles.note, styles.mensuelPosition, styles.inputBackground]}
      placeholder="Raison de rupture"
        placeholderTextColor="#262b2e"
      />
      <Image
        style={styles.cardIcon}
        contentFit="cover"
        source={require("../assets/card1.png")}
      />
      <View style={[styles.balance, styles.viewLayout]}>
        <View style={[styles.balance2, styles.balance2Layout]}>
          <Text style={[styles.balance1, styles.balance1Position]}>
          Total des contrats de repture
          </Text>
          <Image
            style={styles.company1Icon}
            contentFit="cover"
            source={require("../assets/company-11.png")}
          />
        </View>
        <View style={[styles.view, styles.viewLayout]}>
          <Text style={[styles.text, styles.namePosition]}>20 Contrats</Text>
        </View>
      </View>
      <View style={[styles.cardHolder2, styles.balance2Layout]}>
      <Text style={[styles.cardHolder, styles.namePosition]}>
          Mois Denier
        </Text>
      </View>
      <View style={[styles.stephenKing, styles.balance2Layout]}>
        <Text style={[styles.alexaSmith, styles.balance1Position]}>
          Entreprise IZIP
        </Text>
      </View>
      <Image
        style={styles.company1Icon1}
        contentFit="cover"
        source={require("../assets/company-1.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typeDeContratValue: {
    color: "#262b2e",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  typeDePaiementValue: {
    color: "#262b2e",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  nomPrnomValue: {
    color: "#262b2e",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  headerLayout: {
    width: 375,
    height: 100,
    position: "absolute",
  },
  rectangleShadowBox: {
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
  inputBackground: {
    backgroundColor: '#F0F0F0', // Example background color
    borderRadius: 28, // You can adjust the border radius as needed
    paddingHorizontal: 12, // Adjust the padding as needed
    marginTop: 10, // Adjust the margin top as needed
  },
  titleLayout: {
    height: 25,
    width: 261,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  topLayout: {
    height: 20,
    position: "absolute",
  },
  typeLayout: {
    width: 315,
    position: "absolute",
  },
  name2Layout: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  namePosition: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  mensuelPosition: {
    left: 24,
    width: 315,
    position: "absolute",
  },
  viewLayout: {
    width: 182,
    position: "absolute",
  },
  balance2Layout: {
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  balance1Position: {
    fontSize: FontSize.size_xs,
    marginTop: -7,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.colorWhite,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    height: 100,
    width: 375,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  header: {
    height: 100,
    left: 0,
    top: 0,
  },
  dashboard1: {
    marginTop: -12.5,
    width: "92.72%",
    left: "6.51%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorGray_100,
    top: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  dashboard: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 48,
  },
  notificationIcon: {
    left: 302,
    width: 20,
    top: 0,
  },
  iconShape2: {
    height: 15,
    width: 21,
  },
  topBar: {
    width: 322,
    left: 0,
    top: 0,
  },
  topIconsBarWithTextInMid: {
    top: 55,
    width: 322,
    left: 23,
  },
  rectangle562: {
    shadowColor: "rgba(63, 81, 181, 0.5)",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorMediumslateblue,
    height: 50,
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
  continue1: {
    marginTop: -9.5,
    width: "123.1%",
    color: Color.colorWhite,
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  continue2: {
    top: 16,
    left: 116,
    width: 84,
  },
  continue: {
    top: 889,
    height: 50,
    left: 26,
    width: 315,
  },
  typeDeContrat: {
    top: 405,
    height: 50,
    left: 26,
    width: 315,
  },
  typeDePaiement: {
    top: 470,
    height: 50,
    left: 26,
    width: 315,
  },
  salaireMensuel: {
    top: 535,
    height: 50,
    width: 315,
    position: "absolute",
    left: 26,
  },
  salaireMensuel1: {
    top: 600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    height: 50,
  },
  name2: {
    left: 141,
    width: 162,
    top: 0,
  },
  bg24: {
    top: 50,
    height: 50,
    left: 0,
  },
  calendar1Icon: {
    top: 63,
    left: 265,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  name: {
    marginTop: 15,
    width: "47.21%",
    left: "6.48%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
    color: Color.colorGray_100,
  },
  cycleMensuelDePaiement: {
    top: 616,
    height: 100,
  },
  name1: {
    marginTop: 14,
    width: "57.3%",
    left: "6.79%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
    color: Color.colorGray_100,
  },
  cardNumber: {
    top: 681,
    left: 23,
    height: 100,
  },
  nomPrnom: {
    top: 340,
    height: 50,
    left: 26,
    width: 315,
  },
  note: {
    top: 796,
    height: 73,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  cardIcon: {
    top: 115,
    height: 196,
    width: 322,
    left: 23,
    position: "absolute",
  },
  balance1: {
    width: "179.06%",
  },
  company1Icon: {
    top: -255,
    left: -232,
    width: 512,
    height: 512,
    position: "absolute",
    overflow: "hidden",
  },
  balance2: {
    width: 160,
    left: 0,
    top: 0,
  },
  text: {
    marginTop: -19,
    width: "165.16%",
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  view: {
    top: 37,
    height: 38,
    left: 0,
    overflow: "hidden",
  },
  balance: {
    top: 185,
    height: 75,
    left: 57,
  },
  cardHolder: {
    marginTop: -11,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorWhite,
    left: "0%",
    textAlign: "left",
  },
  cardHolder2: {
    top: 270,
    width: 80,
    opacity: 0.6,
    left: 57,
  },
  alexaSmith: {
    width: "123.45%",
  },
  stephenKing: {
    top: 150,
    left: 86,
    width: 87,
  },
  company1Icon1: {
    top: 145,
    height: 21,
    left: 57,
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  ruptureConventionnel: {
    flex: 1,
    width: "100%",
    height: 1065,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default RuptureConventionnel;
