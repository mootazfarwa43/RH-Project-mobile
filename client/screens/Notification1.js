import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={styles.headerPosition}>
        <View style={styles.headerPosition}>
          <View style={styles.headerPosition}>
            <View style={[styles.rectangle1122, styles.headerPosition]} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.notification1, styles.titleLayout]}>
            <Text style={styles.notification2}>Notification</Text>
          </View>
        </View>
        <View style={[styles.statusBar, styles.bankLayout1]}>
          <View style={[styles.time, styles.bankLayout1]}>
            <View style={[styles.view, styles.bankLayout1]}>
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
            <View style={[styles.rectangle96, styles.rectangleLayout]} />
            <View style={styles.rectangle97} />
            <View style={[styles.rectangle98, styles.rectangleLayout]} />
            <View style={styles.rectangle99} />
          </View>
        </View>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <View style={styles.notification04}>
        <View style={[styles.group3, styles.groupLayout1]}>
          <View style={[styles.group2, styles.groupLayout1]}>
            <View style={[styles.group2, styles.groupLayout1]}>
              <View style={[styles.bankOfAmerica, styles.bankLayout1]}>
                <Text style={styles.textTypo}>Avance</Text>
              </View>
              <View style={[styles.bankOfAmerica25, styles.bankLayout]}>
                <Text style={[styles.yourAccountHas, styles.yourPosition]}>
                  Vous atteint la limite des avances préétablie
                </Text>
              </View>
              <View style={[styles.today, styles.todayPosition]}>
                <Text style={[styles.text1, styles.textPosition]}>1/21</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectanglePosition} />
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["#ffe00d", "#fea127"]}
        />
        <Image
          style={[styles.walletIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wallet.png")}
        />
      </View>
      <View style={[styles.notification02, styles.notificationLayout]}>
        <View style={[styles.group32, styles.groupLayout]}>
          <View style={[styles.group22, styles.groupLayout]}>
            <View style={[styles.group22, styles.groupLayout]}>
              <View style={[styles.bankOfAmerica2, styles.bankLayout1]}>
                <Text style={styles.textTypo}>Compte</Text>
              </View>
              <View style={[styles.bankOfAmerica252, styles.bankLayout]}>
                <Text style={[styles.yourAccountIs, styles.yourPosition]}>
                  Vous avez atteint la limite d’ajout
                </Text>
              </View>
              <View style={[styles.today, styles.todayPosition]}>
                <Text style={[styles.text2, styles.textPosition]}>2/21</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectanglePosition} />
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["rgba(35, 210, 195, 0.6)", "#01bcad"]}
        />
        <Image
          style={[styles.userIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
      </View>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line.png")}
      />
      <View style={[styles.notification03, styles.notificationLayout]}>
        <View style={[styles.group32, styles.groupLayout]}>
          <View style={[styles.group22, styles.groupLayout]}>
            <View style={[styles.group22, styles.groupLayout]}>
              <View style={[styles.bankOfAmerica4, styles.bankLayout1]}>
                <Text style={styles.textTypo}>Alert</Text>
              </View>
              <View style={[styles.bankOfAmerica254, styles.bankLayout]}>
                <Text style={[styles.yourStatementIs, styles.yourPosition]}>
                  5 employé avec des profils incomplet
                </Text>
              </View>
              <View style={[styles.today, styles.todayPosition]}>
                <Text style={[styles.text1, styles.textPosition]}>2/21</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectanglePosition} />
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["rgba(255, 65, 65, 0.5)", "#eb2323"]}
        />
        <Image
          style={[styles.chatLeftTextFillIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/chatlefttextfill.png")}
        />
      </View>
      <View style={[styles.notification01, styles.notificationLayout]}>
        <View style={[styles.group32, styles.groupLayout]}>
          <View style={[styles.group22, styles.groupLayout]}>
            <View style={[styles.group22, styles.groupLayout]}>
              <View style={[styles.bankOfAmerica5, styles.bankLayout1]}>
                <Text style={[styles.bankOfRussia, styles.textTypo]}>
                  Ajouter un employé
                </Text>
              </View>
              <View style={[styles.bankOfAmerica255, styles.bankLayout]}>
                <Text style={[styles.bankOfRussia1, styles.yourPosition]}>
                  Un administrateur a ajouté un employé
                </Text>
              </View>
              <View style={[styles.today5, styles.todayPosition]}>
                <Text style={[styles.text1, styles.textPosition]}>Today</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectanglePosition} />
        <LinearGradient
          style={[styles.rectangle, styles.rectanglePosition]}
          locations={[0, 1]}
          colors={["rgba(108, 77, 218, 0.6)", "#522ed2"]}
        />
        <Image
          style={styles.bankIcon}
          contentFit="cover"
          source={require("../assets/bank.png")}
        />
      </View>
      <View style={[styles.barsHomeIndicatorOnLight, styles.barsLayout]}>
        <View style={[styles.barsHomeIndicatorOnLightB, styles.barsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 117,
    position: "absolute",
  },
  bankLayout1: {
    height: 19,
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
  groupLayout1: {
    height: 40,
    width: 285,
    position: "absolute",
  },
  bankLayout: {
    height: 16,
    position: "absolute",
  },
  yourPosition: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    marginTop: -8,
    color: Color.colorLightslategray_200,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  todayPosition: {
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    fontSize: FontSize.size_xs,
    marginTop: -7,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  rectanglePosition: {
    width: 48,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    left: 14,
  },
  notificationLayout: {
    width: 316,
    height: 48,
    left: 24,
    position: "absolute",
  },
  groupLayout: {
    width: 252,
    height: 40,
    position: "absolute",
  },
  iconPosition: {
    top: 14,
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
  barsLayout: {
    height: 34,
    width: 375,
    left: 0,
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
    backgroundColor: Color.colorWhite,
  },
  notification2: {
    marginTop: -12.5,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  notification1: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 130,
  },
  view: {
    width: 33,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  time: {
    width: 33,
    left: 0,
    top: 0,
  },
  batteryIcon: {
    left: 322,
    height: 11,
    width: 22,
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
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
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
    height: 20,
    position: "absolute",
  },
  bankOfAmerica: {
    width: 69,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  yourAccountHas: {
    width: "121.79%",
    color: Color.colorLightslategray_200,
  },
  bankOfAmerica25: {
    top: 24,
    height: 16,
    left: 0,
    overflow: "hidden",
    width: 285,
  },
  text1: {
    color: Color.colorDarkgray,
  },
  today: {
    left: 226,
    width: 26,
  },
  group2: {
    left: 0,
    top: 0,
  },
  group3: {
    left: 64,
    top: 5,
  },
  rectangle: {
    borderRadius: Border.br_5xl,
    opacity: 0.1,
    backgroundColor: "transparent",
  },
  walletIcon: {
    top: 16,
    height: 16,
    position: "absolute",
  },
  notification04: {
    top: 385,
    width: 349,
    height: 48,
    left: 24,
    position: "absolute",
  },
  bankOfAmerica2: {
    width: 60,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  yourAccountIs: {
    color: Color.colorLightslategray_200,
  },
  bankOfAmerica252: {
    width: 226,
    top: 24,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  text2: {
    color: Color.colorLightslategray_200,
  },
  group22: {
    left: 0,
    top: 0,
  },
  group32: {
    left: 64,
    top: 5,
  },
  userIcon: {
    width: 20,
    left: 14,
    height: 20,
  },
  notification02: {
    top: 215,
  },
  lineIcon: {
    top: 190,
    width: 315,
    height: 256,
    left: 24,
    position: "absolute",
  },
  bankOfAmerica4: {
    width: 36,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  yourStatementIs: {
    width: "104.51%",
    color: Color.colorLightslategray_200,
  },
  bankOfAmerica254: {
    width: 244,
    top: 24,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  chatLeftTextFillIcon: {
    left: 13,
    height: 21,
    width: 22,
  },
  notification03: {
    top: 300,
  },
  bankOfRussia: {
    width: "129.62%",
  },
  bankOfAmerica5: {
    width: 159,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  bankOfRussia1: {
    width: "114.3%",
    color: Color.colorLightslategray_200,
  },
  bankOfAmerica255: {
    width: 249,
    top: 24,
    height: 16,
    left: 0,
    overflow: "hidden",
  },
  today5: {
    left: 219,
    width: 33,
  },
  bankIcon: {
    height: 22,
    width: 22,
  },
  notification01: {
    top: 130,
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
  notification: {
    flex: 1,
    width: "100%",
    height: 821,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Notification1;
