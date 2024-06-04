import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.group}>
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.xmlid585Icon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/xmlid-585.png")}
      />
      <Image
        style={[styles.xmlid584Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/xmlid-584.png")}
      />
      <Image
        style={[styles.xmlid581Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/xmlid-581.png")}
      />
      <Image
        style={[styles.xmlid579Icon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/xmlid-579.png")}
      />
      <Image
        style={[styles.xmlid577Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/xmlid-577.png")}
      />
      <Image
        style={[styles.xmlid576Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/xmlid-576.png")}
      />
      <Image
        style={[styles.xmlid573Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/xmlid-573.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.xmlid567Icon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/xmlid-567.png")}
      />
      <Image
        style={[styles.xmlid565Icon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/xmlid-565.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={[styles.xmlid561Icon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/xmlid-561.png")}
      />
      <Image
        style={[styles.xmlid549Icon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/xmlid-549.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition3: {
    left: "31.02%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition1: {
    left: "59.92%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "58.71%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    height: "50.1%",
    width: "68.75%",
    top: "49.9%",
    right: "0%",
    bottom: "0%",
    left: "31.25%",
  },
  vectorIcon1: {
    height: "30.81%",
    width: "42.26%",
    top: "68.7%",
    right: "53.86%",
    bottom: "0.49%",
    left: "3.88%",
  },
  xmlid585Icon: {
    height: "98.52%",
    width: "30.4%",
    top: "0%",
    right: "38.58%",
    bottom: "1.48%",
  },
  xmlid584Icon: {
    height: "2.41%",
    right: "39.12%",
    bottom: "72.98%",
    top: "24.61%",
    left: "59.92%",
    width: "0.96%",
  },
  xmlid581Icon: {
    height: "2.21%",
    width: "0.65%",
    right: "39.42%",
    bottom: "73.18%",
    top: "24.61%",
    left: "59.92%",
  },
  xmlid579Icon: {
    height: "1.33%",
    width: "0.88%",
    top: "25.94%",
    right: "38.81%",
    bottom: "72.74%",
    left: "60.31%",
  },
  xmlid577Icon: {
    height: "1.48%",
    width: "1.11%",
    top: "25.74%",
    right: "38.96%",
    bottom: "72.79%",
  },
  xmlid576Icon: {
    height: "4.87%",
    width: "1.31%",
    top: "36.37%",
    right: "38.77%",
    bottom: "58.76%",
  },
  xmlid573Icon: {
    height: "4.63%",
    top: "36.66%",
    right: "38.66%",
    left: "60.38%",
    width: "0.96%",
  },
  groupIcon: {
    height: "3.49%",
    width: "1.42%",
    top: "43.6%",
    right: "38.69%",
    bottom: "52.9%",
    left: "59.88%",
  },
  xmlid567Icon: {
    height: "97.24%",
    width: "28.68%",
    top: "1.08%",
    right: "40.31%",
    bottom: "1.67%",
  },
  xmlid565Icon: {
    height: "92.57%",
    width: "25.99%",
    top: "3.4%",
    right: "41.88%",
    bottom: "4.04%",
    left: "32.13%",
  },
  vectorIcon2: {
    height: "30.71%",
    width: "20.12%",
    top: "45.03%",
    right: "44.88%",
    bottom: "24.26%",
    left: "35.01%",
  },
  groupIcon1: {
    height: "24.61%",
    width: "15.2%",
    top: "16.68%",
    right: "47.29%",
    left: "37.5%",
  },
  groupIcon2: {
    height: "47.19%",
    width: "68.06%",
    top: "48.92%",
    right: "31.94%",
    bottom: "3.89%",
    left: "0%",
  },
  xmlid561Icon: {
    height: "0.98%",
    width: "0.58%",
    top: "7.97%",
    right: "57.2%",
    bottom: "91.04%",
    left: "42.23%",
  },
  xmlid549Icon: {
    height: "4.58%",
    width: "5.64%",
    top: "8.96%",
    right: "50.52%",
    bottom: "86.47%",
    left: "43.84%",
  },
  group: {
    width: 261,
    height: 203,
  },
});

export default Group;
