import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput ,ScrollView,Button} from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AccidentMaladie = () => {
  const [bg2Open, setBg2Open] = useState(false);
  const [bg2Value, setBg2Value] = useState();
  const [bg2Items, setBg2Items] = useState([
    { value: "CIVP", label: "CIVP" },
    { value: "CDI", label: "CDI" },
    { value: "CDD", label: "CDD" },
  ]);
  const [nomPrnomOpen, setNomPrnomOpen] = useState(false);
  const [nomPrnomValue, setNomPrnomValue] = useState();
  const [nomPrnomItems, setNomPrnomItems] = useState([
    { value: "Ahmd", label: "Ahmd" },
    { value: "Mohames", label: "Mohames" },
    { value: "iheb", label: "iheb" },
  ]);

    return (
    <ScrollView>
      <View style={styles.accidentMaladie}>
      
        <View style={[styles.header, styles.bgLayout]}>
        
          <View style={[styles.bg, styles.bgLayout]}>
            <View style={[styles.bg, styles.bgLayout]}>
              <View style={[styles.rectangle1122, styles.bgLayout]} />
            </View>
            
          </View>
          <View style={[styles.title, styles.titleLayout]}>
            <View style={[styles.dashboard, styles.titleLayout]}>
              <Text style={styles.dashboard1}>Accident Maladie</Text>
            </View>
          </View>
          <View style={[styles.topIconsBarWithTextInMid, styles.iconLayout]}>
            <View style={[styles.topBar, styles.iconLayout]}>
              <Image
                style={[styles.notificationIcon, styles.iconLayout]}
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
        <View style={[styles.typeDeContrat, styles.salaireLayout]}>
          <View style={[styles.bg2, styles.salaireLayout]}>
            <DropDownPicker
              open={bg2Open}
              setOpen={setBg2Open}
              value={bg2Value}
              setValue={setBg2Value}
              items={bg2Items}
            />
          </View>
          <View style={[styles.chooseBank2, styles.name2Layout]}>
            <Text style={[styles.chooseBank, styles.nameTypo]}></Text>
          </View>
          <Image
            style={[styles.group3ClippedIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-3-clipped.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
        </View>
        <TextInput
          style={[styles.dateDeConsultation, styles.salaireTypo, styles.inputBackground]}
          placeholder="Date de consultation médicale "
          placeholderTextColor="#262b2e"
        />
        <TextInput
          style={[styles.salaireMensuel, styles.salaireTypo, styles.inputBackground]}
          placeholder="Rechute du"
          placeholderTextColor="#262b2e"
        />
        <TextInput
          style={[styles.salaireMensuel1, styles.notePosition, styles.inputBackground]}
          placeholder={`Ancienté : 2 ans & 3 mois`}
          placeholderTextColor="#262b2e"
        />
        <View style={[styles.certificatMdical, styles.notePosition]}>
          <View style={[styles.name2, styles.name2Layout]} />
          <View style={[styles.bg24, styles.salaireLayout]}>
            <TextInput style={[styles.rectangle194, styles.salaireLayout]} />
          </View>
          <Text style={[styles.name, styles.nameTypo]}>Certificat Médical</Text>
        </View>
        <Image
          style={[styles.cycleMensuelDePaiement, styles.bgLayout]}
          contentFit="cover"
          source={require("../assets/cycle-mensuel-de-paiement.png")}
        />
        <View style={[styles.nomPrnom, styles.salaireLayout]}>
          <DropDownPicker
            open={nomPrnomOpen}
            setOpen={setNomPrnomOpen}
            value={nomPrnomValue}
            setValue={setNomPrnomValue}
            placeholder="Alin Smith"
            items={nomPrnomItems}
            labelStyle={styles.nomPrnomValue}
          />
        </View>
        <TextInput
          style={[styles.note, styles.notePosition, styles.inputBackground]}
          placeholder="Raison de l’accident médical"
          placeholderTextColor="#262b2e"
        />
        <Image
          style={styles.cardIcon}
          contentFit="cover"
          source={require("../assets/card1.png")}
        />
        <View style={[styles.balance, styles.viewLayout]}>
          <View style={[styles.balance2, styles.balance2Layout]}>
            <Text style={[styles.balance1, styles.textPosition]}>
              Total des accidents maladie
            </Text>
          </View>
          <View style={[styles.view, styles.viewLayout]}>
            <Text style={[styles.text, styles.textPosition]}>13 Accident</Text>
          </View>
        </View>
        <View style={[styles.cardHolder2, styles.balance2Layout]}>
          <Text style={[styles.cardHolder, styles.textPosition]}>
            Mois Denier
          </Text>
        </View>
        <View style={[styles.stephenKing, styles.balance2Layout]}>
          <Text style={[styles.alexaSmith, styles.textPosition]}>
            Entreprise IZIP
          </Text>
            {/* Button */}
        <Button
        style={styles.bou}
        title="Enregistrer"
        onPress={() => {
          // Handle button press
        }}
        color="#007BFF" // Set the button color to blue
      />
        </View>
        
        <Image
          style={styles.company1Icon}
          contentFit="cover"
          source={require("../assets/company-1.png")}
        />
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nomPrnomValue: {
    color: "#262b2e",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  inputBackground: {
    backgroundColor: '#F0F0F0', // Example background color
    borderRadius: 28, // You can adjust the border radius as needed
    paddingHorizontal: 12, // Adjust the padding as needed
    marginTop: 10, // Adjust the margin top as needed
  },
  bou:{
   
    
  },
  
  bgLayout: {
    height: 100,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 261,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  salaireLayout: {
    height: 50,
    width: 315,
  },
  name2Layout: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  salaireTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  notePosition: {
    left: 24,
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
  textPosition: {
    color: Color.colorWhite,
    textAlign: "left",
    left: "0%",
    top: "50%",
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
    left: 0,
    width: 375,
    height: 100,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  bg: {
    left: 0,
    width: 375,
    height: 100,
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
    fontFamily: FontFamily.robotoBold,
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
    left: 52,
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
    left: 27,
    width: 322,
  },
  header: {
    left: -4,
    width: 375,
    height: 100,
    top: 0,
  },
  continue: {
    top: 889,
    left: 26,
    height: 50,
    position: "absolute",
  },
  bg2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chooseBank: {
    marginTop: -9.5,
    width: "117.23%",
    left: "0%",
    textAlign: "left",
  },
  chooseBank2: {
    top: 16,
    left: 22,
    width: 119,
  },
  group3ClippedIcon: {
    display: "none",
    width: 21,
    left: 0,
    top: 0,
  },
  icon: {
    top: 17,
    left: 272,
    width: 21,
  },
  typeDeContrat: {
    top: 405,
    left: 26,
    height: 50,
    position: "absolute",
  },
  dateDeConsultation: {
    top: 470,
    height: 50,
    width: 315,
    left: 26,
    position: "absolute",
  },
  salaireMensuel: {
    top: 535,
    height: 50,
    width: 315,
    left: 26,
    position: "absolute",
  },
  salaireMensuel1: {
    top: 600,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    height: 50,
    width: 315,
  },
  name2: {
    left: 141,
    width: 162,
    top: 0,
  },
  rectangle194: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg24: {
    top: 50,
    left: 0,
    position: "absolute",
  },
  name: {
    marginTop: 15,
    width: "48.89%",
    left: "6.98%",
  },
  certificatMdical: {
    top: 616,
    width: 315,
    left: 24,
    height: 100,
  },
  cycleMensuelDePaiement: {
    top: 603,
    left: 257,
    width: 62,
  },
  nomPrnom: {
    top: 340,
    left: 26,
    height: 50,
    position: "absolute",
  },
  note: {
    top: 737,
    width: 321,
    height: 73,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
  },
  cardIcon: {
    top: 115,
    left: 23,
    height: 196,
    width: 322,
    position: "absolute",
  },
  balance1: {
    width: "179.06%",
    fontSize: FontSize.size_xs,
    marginTop: -7,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
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
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorWhite,
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
  },
  cardHolder2: {
    top: 270,
    width: 80,
    opacity: 0.6,
    left: 57,
  },
  alexaSmith: {
    width: "123.45%",
    fontSize: FontSize.size_xs,
    marginTop: -7,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
  },
  stephenKing: {
    top: 150,
    left: 86,
    width: 87,
  },
  company1Icon: {
    top: 145,
    height: 21,
    left: 57,
    width: 21,
    position: "absolute",
    overflow: "hidden",
  },
  accidentMaladie: {
    flex: 1,
    width: "100%",
    height: 1065,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AccidentMaladie;
