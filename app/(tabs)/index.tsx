import { View } from "@/components/Themed";
import React, { useMemo } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";

import BadgeIcon from "@/assets/images/badge.svg";
import CrownIcon from "@/assets/images/crown.svg";
import FishIcon from "@/assets/images/fish.svg";
import SnakeIcon from "@/assets/images/snake.svg";
import StarIcon from "@/assets/images/star.svg";

import ChallengeImage from "@/assets/images/tuiuiu.png";

import Colors from "@/constants/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
SplashScreen.preventAutoHideAsync();

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type ProgressBarProps = {
  progress: number;
  colorScheme: "light" | "dark";
};

const ProgressBar = ({ progress, colorScheme }: ProgressBarProps) => {
  const barWidth = windowWidth * 0.4;
  const progressFillWidth = (progress / 100) * barWidth;

  return (
    <View
      style={[
        progressStyles.progressBarContainer,
        {
          backgroundColor: Colors[colorScheme].progressBarBackground,
          width: barWidth,
        },
      ]}
    >
      <View
        style={[
          progressStyles.progressBarFill,
          {
            width: progressFillWidth,
            backgroundColor: Colors[colorScheme].progressBarFill,
          },
        ]}
      />
    </View>
  );
};

const progressStyles = StyleSheet.create({
  progressBarContainer: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
});

export default function TabOneScreen() {
  const nome = "Pedro";
  const points = 368;
  const nivel = "Onça";

  // const colorScheme = useColorScheme() ?? "light";
  const colorScheme = "light";

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

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: Colors[colorScheme].background,
        },

        headerContainer: {
          width: windowWidth,
          height: windowHeight * 0.25,
          paddingVertical: 30,
          backgroundColor: Colors[colorScheme].headerBackground,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          flexDirection: "column",
          justifyContent: "center",
          gap: 40,
          marginBottom: 20,
        },

        headerTittle: {
          color: Colors[colorScheme].headerText,
          fontSize: 36,
          fontFamily: "Roboto-Condensed",
          alignSelf: "center",
          fontWeight: "bold",
        },
        headerData: {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 50,

          backgroundColor: "transparent",
        },

        headerDataContainers: {
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          backgroundColor: "transparent",
        },

        headerDataText: {
          fontWeight: "600",
          fontSize: 24,
          color: Colors[colorScheme].headerText,
        },

        challengeContainer: {
          alignItems: "center",
          marginHorizontal: 20,
          backgroundColor: "transparent",
        },

        challengeHeaderButton: {
          backgroundColor: Colors[colorScheme].challengeButtonBackground,
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },

        challengeHeaderButtonText: {
          color: Colors[colorScheme].challengeButtonText,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "Roboto-Condensed",
        },

        challengeCard: {
          width: windowWidth * 0.85,
          height: windowHeight * 0.25,
          backgroundColor: "transparent",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },

        challengeImage: {
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 20,
          borderColor: "#FF7900",
          borderWidth: 4,
        },

        challengeLevelTag: {
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,

          top: 10,
          right: 10,
          backgroundColor: Colors[colorScheme].challengeTagBackground,
          borderTopRightRadius: 10,
          borderRadius: 4,
          paddingHorizontal: 10,
          zIndex: 1,
        },

        challengeLevelText: {
          color: Colors[colorScheme].challengeTagText,
          fontWeight: "bold",
          fontSize: 12,
        },

        challengeTitleButton: {
          backgroundColor: Colors[colorScheme].challengeButtonBackground,
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 20,
        },

        challengeTitleButtonText: {
          color: Colors[colorScheme].challengeButtonText,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "Roboto-Condensed",
        },

        startButton: {
          backgroundColor: Colors[colorScheme].startButtonBackground,
          paddingVertical: 15,
          paddingHorizontal: 50,
          borderRadius: 30,
          marginBottom: 30,
          width: windowWidth * 0.6,
          alignItems: "center",

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },

        startButtonText: {
          color: Colors[colorScheme].startButtonText,
          fontSize: 22,
          fontWeight: "bold",
          fontFamily: "Roboto-Condensed",
        },

        categoryButton: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: Colors[colorScheme].categoryButtonBackground,
          padding: 15,
          borderRadius: 30,
          marginBottom: 15,
          width: windowWidth * 0.85,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
        categoryButtonIcon: {
          marginRight: 15,
          backgroundColor: "transparent",
        },
        categoryButtonContent: {
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        },
        categoryButtonText: {
          color: Colors[colorScheme].categoryButtonText,
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "Roboto-Condensed",
        },
      }),
    [colorScheme]
  );

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTittle}>Olá, {nome}!</Text>

        <View style={styles.headerData}>
          <View style={styles.headerDataContainers}>
            <StarIcon width={24} height={24} fill="#FFD700" />
            <Text style={styles.headerDataText}>{points}</Text>
          </View>

          <View style={styles.headerDataContainers}>
            <CrownIcon width={24} height={24} fill="#FFD700" />
          </View>

          <View style={styles.headerDataContainers}>
            <BadgeIcon width={24} height={24} fill="#FFD700" />
            <Text style={styles.headerDataText}>{nivel}</Text>
          </View>
        </View>
      </View>

      {/* Conteúdo principal abaixo do header */}
      <View style={styles.challengeContainer}>
        {/* Botão "Desafio Diário" */}
        <Pressable style={styles.challengeHeaderButton}>
          <Text style={styles.challengeHeaderButtonText}>Desafio Diário</Text>
        </Pressable>

        {/* Card do Desafio */}
        <View style={styles.challengeCard}>
          <View style={styles.challengeLevelTag}>
            <Text style={styles.challengeLevelText}>74</Text>
            <StarIcon width={12} height={12} fill="#FF7900" />
          </View>
          <Image source={ChallengeImage} style={styles.challengeImage} />
        </View>

        {/* Botão "Aves do pantanal" */}
        <Pressable style={styles.challengeTitleButton}>
          <Text style={styles.challengeTitleButtonText}>Aves do pantanal</Text>
        </Pressable>

        {/* Botão "Começar" */}
        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>Começar</Text>
        </Pressable>

        {/* Botões de Categoria */}
        <Pressable style={styles.categoryButton}>
          <View style={styles.categoryButtonIcon}>
            <FishIcon width={40} height={40} fill="#FFF" />
          </View>
          <View style={styles.categoryButtonContent}>
            <Text style={styles.categoryButtonText}>Peixes</Text>
            <ProgressBar progress={70} colorScheme={colorScheme} />{" "}
          </View>
        </Pressable>

        <Pressable style={styles.categoryButton}>
          <View style={styles.categoryButtonIcon}>
            <SnakeIcon width={40} height={40} fill="#FFF" />
          </View>
          <View style={styles.categoryButtonContent}>
            <Text style={styles.categoryButtonText}>Répteis</Text>
            <ProgressBar progress={30} colorScheme={colorScheme} />{" "}
          </View>
        </Pressable>
      </View>
    </View>
  );
}
