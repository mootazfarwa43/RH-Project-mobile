import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text ,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AjouterUnEmploy1 = () => {
  const navigation = useNavigation();
  const NavToADD2 = () => {
    // Navigate to SuccessScreen when "S’enregistrer" button is pressed
    navigation.navigate("AjouterUnEmploy2");
    console.log("Please work"); // Check if this console log works
  };
  const [check2checked, setCheck2checked] = useState(false);
  const [check21checked, setCheck21checked] = useState(false);
  const [check22checked, setCheck22checked] = useState(false);

  return (
    <View style={styles.ajouterUnEmploy}>
      <View style={[styles.buttonPrimaryActiveCopy, styles.user013Layout]}>
        <View style={[styles.group11BackgroundMask, styles.rectangleLayout1]} />
        <TouchableOpacity  onPress={NavToADD2}>
        <View style={[styles.rectangle, styles.rectangleLayout1]}>
        
        <View style={styles.signIn}>
        </View>
        <Text style={styles.continue}>Continue</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.header}>
          <View style={styles.header}>
            <View style={styles.rectangle1122} />
          </View>
        </View>
        <View style={[styles.title, styles.titleLayout]}>
          <View style={[styles.payBill, styles.titleLayout]}>
            <Text style={styles.payBill1}>Type de paiement</Text>
          </View>
        </View>
        <View style={[styles.statusBar, styles.jenningsLayout]}>
          <View style={styles.timePosition}>
            <View style={[styles.view, styles.timePosition]}>
              <Text style={styles.jhonyTypo}>9:41</Text>
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
            <View style={[styles.rectangle99, styles.rectangleLayout]} />
          </View>
        </View>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
      </View>
      <View style={[styles.user01, styles.userLayout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact, styles.cardLayout3]}>
          <View style={[styles.cardBeneficiary, styles.cardLayout3]}>
            <View
              style={[styles.cardBeneficiaryBackgroundMa, styles.cardLayout3]}
            />
            <View style={[styles.cardBeneficiary, styles.cardLayout3]}>
              <View style={[styles.group12749, styles.groupPosition]}>
                <View style={[styles.jenningsChamplin, styles.jenningsLayout]}>
                  <Text style={styles.jhonyTypo}>Par mois</Text>
                </View>
                <View style={[styles.view1, styles.viewPosition]}>
                  <Text
                    style={[styles.admingmailcom, styles.admingmailcomPosition]}
                  >
                    Salaire fixe
                  </Text>
                </View>
              </View>
              <View
                style={[styles.component4Component3Avatar, styles.cardLayout3]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <CheckBox
          checked={check2checked}
          onPress={() => setCheck2checked(!check2checked)}
          containerStyle={styles.check2Layout}
        />
      </View>
      <View style={[styles.user011, styles.userLayout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact1, styles.cardLayout2]}>
          <View style={[styles.cardBeneficiary1, styles.cardLayout2]}>
            <View
              style={[styles.cardBeneficiaryBackgroundMa, styles.cardLayout3]}
            />
            <View style={[styles.cardBeneficiary1, styles.cardLayout2]}>
              <View style={[styles.group127491, styles.view2Layout]}>
                <View style={[styles.jenningsChamplin1, styles.jenningsLayout]}>
                  <Text style={[styles.jhonyVegan1, styles.jhonyTypo]}>
                    Par base horraire
                  </Text>
                </View>
                <View style={[styles.view2, styles.view2Layout]}>
                  <Text
                    style={[
                      styles.admingmailcom1,
                      styles.admingmailcomPosition,
                    ]}
                  >
                    Système de paiement horaire
                  </Text>
                </View>
              </View>
              <View
                style={[styles.component4Component3Avatar, styles.cardLayout3]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.check22, styles.check22Layout1]}>
          <View style={[styles.check2Background2, styles.check22Layout1]} />
          <CheckBox
            style={styles.check2}
            checked={check21checked}
            onPress={() => setCheck21checked(!check21checked)}
            checkedColor="#d7d7d7"
            containerStyle={styles.check21Layout}
          />
        </View>
      </View>
      <View style={[styles.user012, styles.userLayout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact2, styles.cardLayout1]}>
          <View style={[styles.cardBeneficiary2, styles.cardLayout1]}>
            <View
              style={[
                styles.cardBeneficiaryBackgroundMa2,
                styles.component4Component3Avatar4Position,
              ]}
            />
            <View style={[styles.cardBeneficiary2, styles.cardLayout1]}>
              <View style={[styles.group127492, styles.view3Layout]}>
                <View style={[styles.jenningsChamplin2, styles.jenningsLayout]}>
                  <Text style={[styles.jhonyVegan2, styles.jhonyTypo]}>
                    Par jour de travail
                  </Text>
                </View>
                <View style={[styles.view3, styles.view3Layout]}>
                  <Text
                    style={[
                      styles.admingmailcom2,
                      styles.admingmailcomPosition,
                    ]}
                  >{`Paiement en fonction du
nombre de jours travaillés`}</Text>
                </View>
              </View>
              <View
                style={[
                  styles.component4Component3Avatar4,
                  styles.component4Component3Avatar4Position,
                ]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval2.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <CheckBox
          checked={check22checked}
          onPress={() => setCheck22checked(!check22checked)}
          containerStyle={styles.check22Layout}
        />
      </View>
      <View style={[styles.user013, styles.user013Layout]}>
        <View style={[styles.bg2, styles.userLayout]}>
          <View style={[styles.bg2, styles.userLayout]}>
            <View style={styles.rectangleShadowBox} />
          </View>
        </View>
        <View style={[styles.cardContact3, styles.cardLayout]}>
          <View style={[styles.cardBeneficiary3, styles.cardLayout]}>
            <View
              style={[styles.cardBeneficiaryBackgroundMa3, styles.cardLayout3]}
            />
            <View style={[styles.cardBeneficiary3, styles.cardLayout]}>
              <View style={[styles.group127493, styles.cardLayout]}>
                <View style={[styles.jenningsChamplin2, styles.jenningsLayout]}>
                  <Text style={[styles.jhonyVegan3, styles.jhonyTypo]}>
                    Par base de travail
                  </Text>
                </View>
                <View style={styles.view4}>
                  <Text
                    style={[
                      styles.admingmailcom3,
                      styles.admingmailcomPosition,
                    ]}
                  >{`Paiement par lot, paiement à
base de travail`}</Text>
                </View>
              </View>
              <View
                style={[styles.component4Component3Avatar6, styles.cardLayout3]}
              >
                <View
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                />
                <Image
                  style={[
                    styles.component4Component3Avatar,
                    styles.cardLayout3,
                  ]}
                  contentFit="cover"
                  source={require("../assets/oval3.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.check22, styles.check22Layout1]}>
          <View style={[styles.check2Background2, styles.check22Layout1]} />
          <Image
            style={[styles.check2Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-22-check2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  check2Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 266,
    top: 29,
    position: "absolute",
  },
  check21Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 4,
    top: 2,
    position: "absolute",
  },
  check22Layout: {
    backgroundColor: "transparent",
    padding: 0,
    left: 262,
    top: 28,
    position: "absolute",
  },
  user013Layout: {
    width: 315,
    position: "absolute",
  },
  rectangleLayout1: {
    height: 52,
    left: 0,
    width: 315,
    position: "absolute",
  },
  titleLayout: {
    height: 25,
    width: 204,
    position: "absolute",
  },
  jenningsLayout: {
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
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    position: "absolute",
  },
  userLayout: {
    height: 80,
    width: 315,
    position: "absolute",
  },
  cardLayout3: {
    height: 48,
    position: "absolute",
  },
  groupPosition: {
    height: 40,
    left: 64,
    top: 5,
  },
  viewPosition: {
    height: 16,
    top: 24,
    left: 0,
    overflow: "hidden",
  },
  admingmailcomPosition: {
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  cardLayout2: {
    width: 253,
    height: 48,
    position: "absolute",
  },
  view2Layout: {
    width: 189,
    position: "absolute",
  },
  jhonyTypo: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  check22Layout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  cardLayout1: {
    width: 251,
    height: 53,
    position: "absolute",
  },
  component4Component3Avatar4Position: {
    top: 3,
    height: 48,
    left: 0,
    position: "absolute",
  },
  view3Layout: {
    width: 187,
    position: "absolute",
  },
  cardLayout: {
    height: 74,
    position: "absolute",
  },
  group11BackgroundMask: {
    top: 0,
  },
  rectangle: {
    top: 104,
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorMediumslateblue,
  },
  continue: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "39%",
    top: "50%",
    position: "absolute",
  },
  signIn: {
    top: 121,
    left: 132,
    width: 61,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  buttonPrimaryActiveCopy: {
    top: 448,
    left: 27,
    height: 156,
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
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  header: {
    height: 100,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  payBill1: {
    marginTop: -12.5,
    width: "260.83%",
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    position: "absolute",
  },
  payBill: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 92,
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
    left: 5,
    height: 6,
    top: 5,
    width: 3,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_11xs_5,
    position: "absolute",
  },
  rectangle98: {
    left: 9,
    height: 9,
    top: 2,
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
    width: 345,
    left: 15,
  },
  backIcon: {
    top: 56,
    left: 21,
    width: 12,
  },
  rectangleShadowBox: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 80,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    top: 0,
    width: 315,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bg2: {
    left: 0,
    top: 0,
  },
  cardBeneficiaryBackgroundMa: {
    width: 204,
    left: 0,
    top: 0,
  },
  jenningsChamplin: {
    width: 94,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  admingmailcom: {
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
    width: "100%",
  },
  view1: {
    width: 166,
    position: "absolute",
  },
  group12749: {
    width: 166,
    position: "absolute",
  },
  component4Component3Avatar: {
    width: 48,
    left: 0,
    top: 0,
  },
  cardBeneficiary: {
    width: 230,
    left: 0,
    top: 0,
  },
  cardContact: {
    width: 230,
    top: 16,
    left: 15,
  },
  user01: {
    top: 150,
    left: 30,
  },
  jhonyVegan1: {
    width: "131.94%",
  },
  jenningsChamplin1: {
    width: 134,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  admingmailcom1: {
    width: "152.96%",
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
    marginTop: -8,
  },
  view2: {
    height: 16,
    top: 24,
    left: 0,
    overflow: "hidden",
  },
  group127491: {
    height: 40,
    left: 64,
    top: 5,
  },
  cardBeneficiary1: {
    left: 0,
    top: 0,
  },
  cardContact1: {
    top: 16,
    left: 15,
  },
  check2Background2: {
    left: 0,
    top: 0,
  },
  check2: {
    borderStyle: "solid",
    borderColor: "#d7d7d7",
    borderWidth: 2,
  },
  check22: {
    top: 28,
    left: 262,
  },
  user011: {
    top: 244,
    left: 30,
  },
  cardBeneficiaryBackgroundMa2: {
    width: 204,
  },
  jhonyVegan2: {
    width: "135.07%",
  },
  jenningsChamplin2: {
    width: 140,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  admingmailcom2: {
    marginTop: -7.5,
    width: "126.36%",
    fontSize: FontSize.size_sm,
    height: 43,
  },
  view3: {
    height: 49,
    top: 4,
    left: 0,
    overflow: "hidden",
  },
  group127492: {
    height: 53,
    left: 64,
    top: 0,
  },
  component4Component3Avatar4: {
    width: 48,
  },
  cardBeneficiary2: {
    height: 53,
    left: 0,
    top: 0,
  },
  cardContact2: {
    top: 13,
    height: 53,
    left: 15,
  },
  user012: {
    top: 338,
    left: 30,
  },
  cardBeneficiaryBackgroundMa3: {
    top: 4,
    width: 204,
    left: 0,
  },
  jhonyVegan3: {
    width: "142.57%",
  },
  admingmailcom3: {
    marginTop: -25,
    width: "213.43%",
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray_200,
    fontFamily: FontFamily.robotoRegular,
  },
  view4: {
    height: 50,
    top: 24,
    width: 166,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  group127493: {
    width: 166,
    left: 64,
    top: 0,
  },
  component4Component3Avatar6: {
    width: 48,
    top: 4,
    left: 0,
  },
  cardBeneficiary3: {
    width: 230,
    left: 0,
    top: 0,
  },
  cardContact3: {
    top: 12,
    width: 230,
    left: 15,
  },
  check2Icon: {
    left: 4,
    width: 20,
    top: 2,
  },
  user013: {
    top: 432,
    height: 86,
    left: 30,
  },
  ajouterUnEmploy: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AjouterUnEmploy1;
