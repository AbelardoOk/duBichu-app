// constants/Colors.ts

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#F7E6D8",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    headerBackground: "#9D4EDD",
    headerText: "#FFFFFF",
    challengeButtonBackground: "#FCA311",
    challengeButtonText: "#5A189A",
    challengeTagBackground: "#5A189A",
    challengeTagText: "#FF7900",
    startButtonBackground: "#9D4EDD",
    startButtonText: "#FFFFFF",
    categoryButtonBackground: "#FCA311",
    categoryButtonText: "#FFFFFF",
    progressBarBackground: "#E0E0E0",
    progressBarFill: "#9D4EDD",
    cardBackground: "#FFFFFF",
  },
  dark: {
    text: "#fff",
    background: "#1E1E2C", // Cor de fundo do corpo da tela para o tema escuro
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    headerBackground: "#3c096c",
    headerText: "#FFFFFF",
    // NOVAS CORES (ajustadas para o tema escuro)
    challengeButtonBackground: "#FFA500", // Mais visível no escuro
    challengeButtonText: "#FFFFFF",
    startButtonBackground: "#6C0B7B", // Mais escura para o tema escuro
    startButtonText: "#FFFFFF",
    categoryButtonBackground: "#FFA500",
    categoryButtonText: "#FFFFFF",
    progressBarBackground: "#444444",
    progressBarFill: "#BB86FC", // Uma cor que combine com o dark
    cardBackground: "#2A2A3D", // Fundo do card principal
  },
};
