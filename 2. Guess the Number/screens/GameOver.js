import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER !</Title>

        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needs{" "}
          <Text style={styles.higlightText}>{roundsNumber}</Text> rounds to
          guess the value <Text style={styles.higlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOver;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  higlightText: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
