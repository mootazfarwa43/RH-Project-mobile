import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Setting = () => {
  return (
    <View style={styles.setting}>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.header, styles.headerLayout]}>
          <View style={[styles.header, styles.headerLayout]}>
            <View style={[styles.rectangle1122, styles.rectangleShadowBox]} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.setting1, styles.titleLayout]}>
            <Text style={[styles.setting2, styles.setting2Typo]}>Setting</Text>
          </View>
        </View>
        <View style={[styles.statusBar, styles.logoutLayout]}>
          <View style={styles.timePosition}>
            <View style={[styles.view, styles.timePosition]}>
              <Text style={styles.text}>9:41</Text>
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
            <View style={[styles.rectangle98, styles.passwordPosition1]} />
            <View style={[styles.rectangle99, styles.rectangleLayout]} />
          </View>
        </View>
        <Image
          style={[styles.backIcon, styles.iconLayout5]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
        <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.profile, styles.bg1Layout]}>
        <View style={[styles.bg1, styles.bg1Layout]}>
          <View style={[styles.rectangle59312, styles.bg1Layout]} />
        </View>
        <View style={[styles.alexaSmith, styles.groupIconLayout]}>
          <Text style={[styles.alexaSmith1, styles.setting2Typo]}>
            Bacem Ben Yahya
          </Text>
        </View>
        <View style={[styles.adminGmailcom, styles.logoutLayout]}>
          <Text style={[styles.admingmailcom, styles.faceIdPosition]}>
            bbenyahya@emilex.fr
          </Text>
        </View>
        <Image
          style={[styles.imageIcon, styles.headerLayout]}
          contentFit="cover"
          // source={require("../assets/image1.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          // source={require("../assets/group3.png")}
        />
        <Image
          style={styles.cameraIcon}
          contentFit="cover"
          source={require("../assets/camera.png")}
        />
      </View>
      <View style={styles.tab}>
        <Image
          style={[styles.filtterIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/filtter.png")}
        />
        <View style={[styles.password, styles.passwordPosition]}>
          <Text style={[styles.password1, styles.faceIdPosition]}>
            Mot de passe
          </Text>
        </View>
        <Image
          style={[styles.pathIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Image
          style={[styles.password2Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/password2.png")}
        />
        <Image
          style={[styles.filtter2Icon, styles.password3Position]}
          contentFit="cover"
          source={require("../assets/filtter.png")}
        />
        <View style={[styles.password3, styles.password3Position]}>
          <Text style={[styles.languages, styles.faceIdPosition]}>
            Languages
          </Text>
        </View>
        <Image
          style={[styles.path2Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Image
          style={[styles.languagesIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/languages.png")}
        />
        <Image
          style={[styles.filtter3Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/filtter.png")}
        />
        <Image
          style={[styles.filtter4Icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/filtter.png")}
        />
        <View style={[styles.password4, styles.passwordPosition]}>
          <Text style={[styles.languages, styles.faceIdPosition]}>
            App Information
          </Text>
        </View>
        <Image
          style={[styles.path3Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Image
          style={[styles.informationIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/information.png")}
        />
        <View style={[styles.password5, styles.passwordPosition]}>
          <Text style={[styles.languages, styles.faceIdPosition]}>
            Touch ID
          </Text>
        </View>
        <Image
          style={[styles.path4Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Image
          style={[styles.touchIdIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/touch-id.png")}
        />
        <Image
          style={[styles.switchOnIcon, styles.switchPosition]}
          contentFit="cover"
          source={require("../assets/switch-on.png")}
        />
        <View style={[styles.password6, styles.passwordPosition]}>
          <Text style={[styles.faceId, styles.faceIdPosition]}>Entreprise</Text>
        </View>
        <Image
          style={[styles.path5Icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/path.png")}
        />
        <Image
          style={[styles.faceIdIcon, styles.switchOffPosition]}
          contentFit="cover"
          source={require("../assets/face-id.png")}
        />
        <View style={[styles.switchOff, styles.switchOffPosition]}>
          <View style={[styles.switchOffBackground, styles.iconLayout5]} />
        </View>
        <View style={[styles.logout, styles.logoutLayout]}>
          <Image
            style={[styles.cardColorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/card-color.png")}
          />
          <View style={[styles.text1, styles.text1Layout]}>
            <View style={[styles.chooseAnotherStore, styles.text1Layout]}>
              <Text style={[styles.logout1, styles.faceIdPosition]}>
                Déconnecter
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.filtter2Icon1, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/filtter2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
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
    backgroundColor: Color.colorWhite,
  },
  titleLayout: {
    height: 25,
    width: 71,
    position: "absolute",
  },
  setting2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  logoutLayout: {
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
  rectangleLayout: {
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
  },
  passwordPosition1: {
    top: 2,
    position: "absolute",
  },
  iconLayout5: {
    height: 20,
    position: "absolute",
  },
  barsLayout: {
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bg1Layout: {
    height: 210,
    width: 315,
    position: "absolute",
  },
  groupIconLayout: {
    height: 24,
    position: "absolute",
  },
  faceIdPosition: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  iconLayout3: {
    height: 14,
    width: 8,
  },
  passwordPosition: {
    left: 40,
    height: 19,
    overflow: "hidden",
  },
  iconLayout2: {
    height: 1,
    left: 2,
    width: 315,
    position: "absolute",
  },
  iconLayout1: {
    width: 20,
    left: 2,
  },
  password3Position: {
    top: 198,
    position: "absolute",
  },
  iconLayout: {
    height: 17,
    position: "absolute",
  },
  switchPosition: {
    left: 276,
    width: 36,
  },
  switchOffPosition: {
    top: 130,
    height: 20,
    position: "absolute",
  },
  text1Layout: {
    width: 94,
    height: 19,
    top: 0,
    position: "absolute",
  },
  rectangle1122: {
    shadowColor: "rgba(50, 214, 216, 0.1)",
    height: 100,
    position: "absolute",
    width: 375,
  },
  header: {
    width: 375,
    height: 100,
    left: 0,
    top: 0,
  },
  setting2: {
    marginTop: -12.5,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_100,
  },
  setting1: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 152,
  },
  text: {
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
    position: "absolute",
  },
  rectangle97: {
    top: 5,
    left: 5,
    height: 6,
    position: "absolute",
  },
  rectangle98: {
    left: 9,
    height: 9,
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
  },
  rectangle99: {
    left: 14,
    height: 11,
    top: 0,
    position: "absolute",
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
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
  },
  barsHomeIndicatorOnLightB: {
    backgroundColor: Color.colorGray_300,
    top: 0,
  },
  homeIndicator: {
    top: 15,
    left: 121,
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.colorSlateblue_100,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorOnLight: {
    top: 787,
  },
  rectangle59312: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  bg1: {
    left: 0,
    top: 0,
  },
  alexaSmith1: {
    marginTop: -12,
    width: "148.61%",
    fontSize: FontSize.size_xl,
    color: Color.colorSlateblue_100,
  },
  alexaSmith: {
    top: 138,
    left: 71,
    width: 173,
    overflow: "hidden",
  },
  admingmailcom: {
    width: "105.19%",
    color: Color.colorDarkgray,
  },
  adminGmailcom: {
    top: 167,
    left: 75,
    width: 183,
    overflow: "hidden",
  },
  imageIcon: {
    top: 26,
    left: 103,
    width: 100,
  },
  groupIcon: {
    top: 92,
    left: 179,
    width: 24,
  },
  cameraIcon: {
    top: 99,
    left: 184,
    width: 13,
    height: 11,
    position: "absolute",
  },
  profile: {
    top: 128,
    left: 30,
  },
  filtterIcon: {
    top: 3,
    left: 296,
    height: 14,
    width: 8,
    position: "absolute",
  },
  password1: {
    width: "136.61%",
    color: Color.colorGray_100,
  },
  password: {
    width: 115,
    top: 2,
    position: "absolute",
  },
  pathIcon: {
    top: 38,
  },
  password2Icon: {
    height: 20,
    position: "absolute",
    top: 0,
  },
  filtter2Icon: {
    height: 14,
    width: 8,
    left: 296,
  },
  languages: {
    color: Color.colorGray_100,
  },
  password3: {
    width: 79,
    left: 40,
    height: 19,
    overflow: "hidden",
  },
  path2Icon: {
    top: 233,
  },
  languagesIcon: {
    top: 195,
    height: 20,
    position: "absolute",
  },
  filtter3Icon: {
    top: 263,
    left: 296,
    height: 14,
    width: 8,
    position: "absolute",
  },
  filtter4Icon: {
    top: 322,
    left: 296,
    height: 14,
    width: 8,
    position: "absolute",
  },
  password4: {
    top: 261,
    width: 116,
    position: "absolute",
  },
  path3Icon: {
    top: 298,
  },
  informationIcon: {
    top: 260,
    height: 20,
    position: "absolute",
  },
  password5: {
    width: 63,
    top: 66,
    position: "absolute",
  },
  path4Icon: {
    top: 103,
  },
  touchIdIcon: {
    top: 66,
    width: 20,
    left: 2,
  },
  switchOnIcon: {
    top: 65,
    width: 36,
    height: 20,
    position: "absolute",
  },
  faceId: {
    width: "135.81%",
    color: Color.colorGray_100,
  },
  password6: {
    top: 131,
    width: 86,
    position: "absolute",
  },
  path5Icon: {
    top: 168,
  },
  faceIdIcon: {
    width: 20,
    left: 2,
  },
  switchOffBackground: {
    width: 36,
    left: 0,
    top: 0,
  },
  switchOff: {
    width: 36,
    left: 276,
  },
  cardColorIcon: {
    width: 19,
    left: 0,
    top: 0,
  },
  logout1: {
    width: "182.02%",
    color: Color.colorGray_100,
  },
  chooseAnotherStore: {
    left: 0,
    overflow: "hidden",
  },
  text1: {
    left: 42,
  },
  logout: {
    top: 319,
    width: 136,
    left: 0,
  },
  tab: {
    top: 372,
    left: 28,
    width: 317,
    height: 338,
    position: "absolute",
  },
  filtter2Icon1: {
    top: 507,
    left: 324,
    position: "absolute",
  },
  setting: {
    flex: 1,
    width: "100%",
    height: 821,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Setting;
