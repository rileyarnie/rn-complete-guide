import { Button, Image, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
        />
      </View>
      <Text>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the Number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
      {/* <Button title="New Game" onPress={props.onRestart} /> */}
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
    marginHorizontal: 2,
  },
});
