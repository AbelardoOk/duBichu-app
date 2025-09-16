import { Dimensions, StyleSheet, Text } from "react-native";

import StarIcon from "@/assets/images/star.svg";

import { View } from "@/components/Themed";
import React from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

export default function TabOneScreen() {
  const nome = "Pedro";
  const points = 368;
  const nivel = "Onça";

  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTittle}>Olá, {nome}!</Text>

        <View style={styles.headerData}>
          <View style={styles.headerDataContainers}>
            <StarIcon width={24} height={24} fill="#FFD700" />
            <Text style={styles.headerDataText}>{points}</Text>
          </View>

          <View style={styles.headerDataContainers}>
            <StarIcon width={24} height={24} fill="#FFD700" />
          </View>

          <View style={styles.headerDataContainers}>
            <StarIcon width={24} height={24} fill="#FFD700" />
            <Text style={styles.headerDataText}>{nivel}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Tab</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  headerContainer: {
    width: windowWidth,
    height: windowHeight * 0.25,
    paddingVertical: 30,

    backgroundColor: "#9D4EDD",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 40,
  },
  headerTittle: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "Roboto-Condensed",
    alignSelf: "center",
    fontWeight: "bold",
  },
  headerData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    backgroundColor: "none",
  },
  headerDataContainers: {
    backgroundColor: "none",
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  headerDataText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#fff",
  },
});
