import * as React from "react";
import { Text, StyleSheet, View, Pressable ,ScrollView,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const HomeIZIP = () => {
  const navigation = useNavigation(); // Get the navigation object
  const handleSignUp = () => {
    
    navigation.navigate("Personnel");
    console.log("Please work"); // Check if this console log works
  };
  const NaaavProfila = () => {
    
    navigation.navigate("Setting");
    console.log("Please work"); // Check if this console log works
  };
  const NavToAdd = () => {
    
    navigation.navigate("AjouterUnEmploy");
    console.log("Please work"); // Check if this console log works
  };
  const NavToPara = () => {
    
    navigation.navigate("GestionDeVariablesDePaies");
    console.log("Please work"); // Check if this console log works
  };
  const NavtoMal = () => {
    
    navigation.navigate("AccidentMaladie");
    console.log("Please work"); // Check if this console log works
  };
  const NavToRep = () => {
    
    navigation.navigate("RuptureConventionnel");
    console.log("Please work"); // Check if this console log works
  };
  const NavToNoti = () => {
    
    navigation.navigate("Notification1");
    console.log("Please work"); // Check if this console log works
  };
  const NavToUpp = () => {
    
    navigation.navigate("ProfilSalariUpdateVariable");
    console.log("Please work"); // Check if this console log works
  };
  const NavToVar = () => {
    
    navigation.navigate("AssignementVariablesDePaie");
    console.log("Please work"); // Check if this console log works
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.homeIzip}>
      <View style={styles.welcome}>
        <View style={[styles.group12703, styles.group12703Layout]}>
          <View style={styles.hello}>
            <Text style={[styles.hello1, styles.amPosition]}>Bonjour,</Text>
          </View>
          <View style={[styles.alexanderBill, styles.group12703Layout]}>
            <Text style={[styles.alexaSmith, styles.billTypo1]}>
              Ahmed Ben alia
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={NavToPara}>
        <Image
        style={styles.iconShape2}
        contentFit="cover"
        source={require("../assets/icon-shape2.png")}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={NavToNoti}>
        <Image
        style={styles.notificationIcon}
        contentFit="cover"
        source={require("../assets/notification.png")}
        />
        </TouchableOpacity>
      </View>
      <View style={[styles.title, styles.titleLayout]}>
        <View style={styles.group12721}>
          <View style={[styles.july2020, styles.am2Layout]}>
            <Text style={[styles.june2021, styles.textTypo]}>June 2021</Text>
          </View>
          <View style={styles.view}>
            <Text style={[styles.text, styles.textTypo]}>24</Text>
          </View>
        </View>
        <View style={styles.allTransaction}>
          <Text style={styles.seeAll}>See All +</Text>
        </View>
        <Image
          style={styles.line1Icon}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
      </View>
      <Image
        style={[styles.cardIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/card.png")}
      />
      <Image
        style={[styles.company1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/company-1.png")}
      />
      
      <View style={[styles.history02, styles.bg2Layout]}>
        <View style={[styles.bg2, styles.bg2Layout]}>
          <View style={[styles.bg2, styles.bg2Layout]}>
            <View style={[styles.rectangle59242, styles.rectangleShadowBox]} />
          </View>
        </View>
        <View style={styles.text2}>
          <View style={styles.bill2}>
            <Text style={[styles.bill, styles.textSpaceBlock]}>Bill</Text>
          </View>
          <View style={styles.water3}>
            <Text style={[styles.electric, styles.amTypo]}>Electric</Text>
          </View>
          <View style={styles.view1}>
            <Text style={[styles.text1, styles.textSpaceBlock]}>-$30.00</Text>
          </View>
          <View style={[styles.am2, styles.am2Layout]}>
            <Text style={[styles.am, styles.amTypo]}>11:40 AM</Text>
          </View>
        </View>
        <View style={[styles.iconButtonLarge5, styles.iconLayout2]}>
          <View
            style={[styles.iconButtonLargeBackground5, styles.iconLayout2]}
          />
          <LinearGradient
            style={[styles.rectangle5, styles.iconLayout2]}
            locations={[0, 1]}
            colors={["#ffe00d", "#fea127"]}
          />
          <View style={styles.electricBill}>
            <View style={styles.electricBillBackground} />
            <Image
              style={[styles.lightningIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/-32-lightning.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.electricBill1}>
        <View style={[styles.group1, styles.groupLayout]}>
          <View style={[styles.cardSearchBackground7, styles.cardShadowBox]} />
        </View>
        <TouchableOpacity onPress={NavToUpp}>
        
        <View style={styles.branch}>
        <Text style={[styles.electricBill2, styles.billTypo]}>{`Déclarer un 
        nouveau salarié`}</Text>
        </View>
        </TouchableOpacity>

        <Image
          style={[styles.ellipse3064Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3064.png")}
        />
        <Image
          style={[styles.bulbIcon, styles.titleLayout]}
          contentFit="cover"
          source={require("../assets/bulb.png")}
        />
      </View>
      <View style={[styles.waterBill, styles.groupLayout]}>
        <View style={[styles.group2, styles.groupLayout]}>
          <View style={[styles.cardSearchBackground10, styles.cardShadowBox]} />
        </View>
        <TouchableOpacity onPress={NavToVar}>
        
        <View style={[styles.branch4, styles.branchPosition]}>
        <Text style={[styles.waterBill1, styles.billTypo]}>
        Variables de paie
        </Text>
        </View>
        </TouchableOpacity>
        <Image
          style={[styles.ellipse3065Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3065.png")}
        />
        <Image
          style={styles.iosWaterIcon}
          contentFit="cover"
          source={require("../assets/ioswater.png")}
        />
      </View>
      <View style={[styles.mobileBill, styles.billPosition]}>
        <View style={[styles.group2, styles.groupLayout]}>
          <View style={[styles.cardSearchBackground11, styles.cardShadowBox]} />
        </View>
        <TouchableOpacity onPress={NavToRep}>
        <View style={styles.branch5}>
        <Text style={[styles.mobileBill1, styles.billTypo]}>{`Rupture 
        conventionnelle `}</Text>
        </View>
        </TouchableOpacity>
        <Image
          style={[styles.ellipse3065Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3066.png")}
        />
        <Image
          style={styles.mobileIcon}
          contentFit="cover"
          source={require("../assets/mobile.png")}
        />
      </View>
      <View style={[styles.houseBill, styles.billPosition]}>
        <View style={[styles.group2, styles.groupLayout]}>
          <View style={[styles.cardSearchBackground12, styles.cardShadowBox]} />
        </View>
        
        <TouchableOpacity onPress={NavtoMal}>
        
        <View style={[styles.branch6, styles.branchPosition]}>
        <Text style={[styles.houseBill1, styles.billTypo]}>{`Accident 
        maladie`}</Text>
        </View>
        </TouchableOpacity>
        <Image
          style={[styles.ellipse3065Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3068.png")}
        />
        <Image
          style={styles.doghouseIcon}
          contentFit="cover"
          source={require("../assets/doghouse.png")}
        />
      </View>
      <View style={[styles.bottomNavigation, styles.tabbar2IconLayout]}>
        <Image
          style={[styles.tabbar2Icon, styles.tabbar2IconLayout]}
          contentFit="cover"
          source={require("../assets/tabbar2.png")}
        />
        <View style={styles.icon}>
        
        <Image
        style={styles.fiRrHomeIcon}
        contentFit="cover"
        source={require("../assets/firrhome.png")}
        />
      
          <TouchableOpacity onPress={handleSignUp} style={[styles.view2Position]}>
          <Image
            style={styles.employees1Icon}
            contentFit="cover"
            source={require("../assets/employees-1.png")}
          />
        </TouchableOpacity>
        
        <Image
        style={styles.fiRrEnvelopeIcon}
        contentFit="cover"
        source={require("../assets/firrenvelope.png")}
        />

          <TouchableOpacity onPress={NaaavProfila} style={[styles.signInPosition]} >
          <Image
            style={[styles.fiRrUserIcon ]}
            contentFit="cover"
            source={require("../assets/firruser.png")}
          />
        </TouchableOpacity>
        
        </View>
      </View>
      <Pressable style={[styles.buttonPrimaryActive, styles.group5Layout]} onPress={NavToAdd}>
        <View style={[styles.group5, styles.group5Layout]}>
          <View style={[styles.rectangle2, styles.group5Layout]} />
        </View>
        <View style={[styles.signIn, styles.signInPosition]}>
          <Text style={[styles.ajouterUnEmploy, styles.text3Position]}>
            Ajouter un employé
          </Text>
        </View>
      </Pressable>
      <View style={[styles.view2, styles.view2Position]}>
        <Text style={[styles.text3, styles.text3Position]}>29.328%</Text>
      </View>
      <Image
        style={[styles.iconPath, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/icon-path.png")}
      />
      <Image
        style={[styles.rightArrow1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/rightarrow-1.png")}
      />
      <Image
        style={[styles.rightArrow2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/rightarrow-2.png")}
      />
      <Image
        style={styles.saspaie11}
        contentFit="cover"
        source={require("../assets/saspaie-1-1.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  group12703Layout: {
    width: 170,
    position: "absolute",
  },
  amPosition: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  billTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  titleLayout: {
    height: 34,
    position: "absolute",
  },
  am2Layout: {
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorDarkturquoise,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  iconLayout3: {
    height: 200,
    width: 315,
    position: "absolute",
  },
  iconPosition: {
    left: 51,
    position: "absolute",
  },
  bg2Layout: {
    height: 80,
    width: 315,
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
  textSpaceBlock: {
    marginTop: -8,
    fontSize: FontSize.size_sm,
  },
  amTypo: {
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
  },
  iconLayout2: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  iconLayout1: {
    width: 16,
    position: "absolute",
  },
  groupLayout: {
    width: 150,
    height: 160,
    position: "absolute",
  },
  cardShadowBox: {
    borderRadius: Border.br_base,
    width: 150,
    height: 160,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  billTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  branchPosition: {
    left: 41,
    position: "absolute",
    overflow: "hidden",
  },
  billPosition: {
    top: 656,
    height: 160,
    position: "absolute",
  },
  tabbar2IconLayout: {
    height: 111,
    width: 445,
    left: -15,
    position: "absolute",
  },
  view2Position: {
    left: 67,
    position: "absolute",
    overflow: "hidden",
  },
  signInPosition: {
    top: 20,
    position: "absolute",
  },
  group5Layout: {
    height: 52,
    width: 315,
    position: "absolute",
  },
  text3Position: {
    color: Color.colorWhite,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  hello1: {
    marginTop: -10,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "0%",
    width: "100%",
  },
  hello: {
    width: 82,
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  alexaSmith: {
    fontSize: FontSize.size_xl,
    marginTop: -12,
    color: Color.colorGray_100,
    width: "100%",
  },
  alexanderBill: {
    top: 27,
    height: 24,
    left: 0,
    overflow: "hidden",
  },
  group12703: {
    left: 1,
    height: 51,
    top: 33,
  },
  iconShape2: {
    height: 15,
    width: 21,
  },
  notificationIcon: {
    left: 306,
    width: 20,
    height: 20,
    top: 0,
    position: "absolute",
  },
  welcome: {
    top: 73,
    width: 326,
    height: 84,
    left: 30,
    position: "absolute",
  },
  june2021: {
    fontSize: FontSize.size_xs,
    marginTop: -7,
  },
  july2020: {
    top: 8,
    left: 29,
    width: 58,
  },
  text: {
    fontSize: FontSize.size_xl,
    marginTop: -12,
  },
  view: {
    width: 23,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  group12721: {
    left: 2,
    width: 87,
    height: 24,
    top: 0,
    position: "absolute",
  },
  seeAll: {
    marginTop: -7.5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorGray_100,
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  allTransaction: {
    top: 4,
    left: 262,
    width: 51,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  line1Icon: {
    height: 1,
    width: 315,
    left: 0,
    top: 33,
    position: "absolute",
  },
  title: {
    top: 610,
    left: 31,
    width: 315,
  },
  cardIcon: {
    top: 169,
    left: 30,
  },
  company1Icon: {
    height: 21,
    top: 192,
    overflow: "hidden",
    width: 21,
  },
  card2Icon: {
    marginTop: -308,
    marginLeft: 169.5,
    left: "50%",
    top: "50%",
    height: 200,
  },
  rectangle59242: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 80,
    width: 315,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bg2: {
    left: 0,
    top: 0,
  },
  bill: {
    color: "#5634d2",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  bill2: {
    height: 16,
    width: 21,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  electric: {
    marginTop: -8,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    color: Color.colorGray_100,
  },
  water3: {
    top: 24,
    width: 47,
    opacity: 0.5,
    height: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
    color: Color.colorGray_100,
  },
  view1: {
    left: 166,
    width: 50,
    top: 2,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  am: {
    color: Color.colorLightslategray_200,
    fontSize: FontSize.size_xs,
    marginTop: -7,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  am2: {
    top: 26,
    left: 165,
    width: 52,
    opacity: 0.5,
  },
  text2: {
    top: 21,
    left: 79,
    width: 217,
    height: 40,
    position: "absolute",
  },
  iconButtonLargeBackground5: {
    left: 0,
    top: 0,
  },
  rectangle5: {
    borderRadius: Border.br_5xl,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  electricBillBackground: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lightningIcon: {
    left: 4,
    top: 2,
    height: 20,
  },
  electricBill: {
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconButtonLarge5: {
    top: 16,
    left: 20,
  },
  history02: {
    top: 926,
    left: 30,
  },
  cardSearchBackground7: {
    backgroundColor: "#eaeef9",
  },
  group1: {
    left: 25,
    top: 0,
  },
  electricBill2: {
    marginTop: -21,
    width: "39.72%",
    left: "16.03%",
    height: 40,
  },
  branch: {
    top: 90,
    height: 66,
    width: 287,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  ellipse3064Icon: {
    top: 31,
    left: 73,
  },
  bulbIcon: {
    top: 44,
    left: 91,
    width: 23,
  },
  electricBill1: {
    left: 5,
    height: 160,
    width: 287,
    top: 481,
    position: "absolute",
  },
  cardSearchBackground10: {
    backgroundColor: "#d5f3f3",
  },
  group2: {
    left: 0,
    top: 0,
  },
  waterBill1: {
    marginTop: -9.8,
    height: 42,
    left: "0%",
    fontFamily: FontFamily.poppinsMedium,
    width: "100%",
  },
  branch4: {
    top: 79,
    width: 68,
    height: 64,
  },
  ellipse3065Icon: {
    left: 45,
    top: 33,
  },
  iosWaterIcon: {
    height: 29,
    width: 23,
    marginLeft:63,
    marginTop:50
  },
  waterBill: {
    left: 195,
    top: 481,
    width: 150,
  },
  cardSearchBackground11: {
    backgroundColor: "#fff4a5",
  },
  mobileBill1: {
    marginTop: -24.5,
    width: "228%",
    left: "-78.12%",
  },
  branch5: {
    top: 109,
    left: 24,
    width: 160,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  mobileIcon: {
    width: 22,
    height: 36,
    marginLeft:63,
    marginTop:47
  },
  mobileBill: {
    width: 184,
    left: 30,
  },
  cardSearchBackground12: {
    backgroundColor: "#f5b9b9",
  },
  houseBill1: {
    marginTop: -11,
    width: "170.81%",
    left: "-57.72%",
  },
  branch6: {
    top: 93,
    width: 123,
    height: 54,
  },
  doghouseIcon: {
    top: 45,
    left: 57,
    width: 36,
    height: 36,
    position: "absolute",
  },
  houseBill: {
    width: 164,
    left: 195,
  },
  tabbar2Icon: {
    top: 0,
  },
  fiRrHomeIcon: {
    width: 24,
    opacity: 0.5,
    height: 24,
    marginTop:20
  },
  employees1Icon: {
    width: 43,
    height: 43,
    top: 0,
  },
  fiRrEnvelopeIcon: {
    height: 22,
    width: 24,
    opacity: 0.5,
    marginLeft:240,
   marginTop:-20
  },
  fiRrUserIcon: {
    left: 316,
    width: 19,
    opacity: 0.5,
    height: 24,
  },
  icon: {
    top: 37,
    width: 335,
    height: 44,
    left: 20,
    position: "absolute",
  },
  bottomNavigation: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  rectangle2: {
    shadowColor: "rgba(107, 66, 221, 0.3)",
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorMediumslateblue,
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
  group5: {
    left: 0,
    top: 0,
  },
  ajouterUnEmploy: {
    marginTop: -14.5,
    width: "128.93%",
    left: "1.26%",
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  signIn: {
    left: 78,
    width: 159,
    height: 19,
    overflow: "hidden",
  },
  buttonPrimaryActive: {
    top: 397,
    left: 30,
  },
  text3: {
    fontFamily: FontFamily.robotoRegular,
    left: "0%",
    marginTop: -8,
    fontSize: FontSize.size_sm,
  },
  view2: {
    top: 307,
    width: 54,
    height: 16,
  },
  iconPath: {
    top: 308,
    width: 12,
    height: 13,
  },
  rightArrow1Icon: {
    left: 311,
    height: 16,
    top: 192,
    overflow: "hidden",
  },
  rightArrow2Icon: {
    left: 287,
    height: 16,
    top: 192,
    overflow: "hidden",
  },
  saspaie11: {
    height: "2.94%",
    width: "26.67%",
    top: "6.81%",
    right: "34.13%",
    bottom: "90.25%",
    left: "39.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIzip: {
    flex: 1,
    height: 954,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeIZIP;
