import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

// Importing Dise Images Source PNG's
const diseImage = {
  1: require("./assets/1.png"),
  2: require("./assets/2.png"),
  3: require("./assets/3.png"),
  4: require("./assets/4.png"),
  5: require("./assets/5.png"),
  6: require("./assets/6.png"),
};

export default function App() {
  const [firstDise, setFirstDise] = React.useState(2);
  const [secondDise, setSecondDise] = React.useState(4);

  const randomNum = (min = 1, max = 6) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getDiseNum = (prev) => {
    let num = randomNum();

    if (prev === num) {
      return randomNum();
    }
    return num;
  };

  const rollDiseNumOnTap = (prev) => {
    setFirstDise((prev) => getDiseNum(prev));
    setSecondDise((prev) => getDiseNum(prev));
  };

  return (
    <View style={styles.section}>
      <Text style={styles.name}>Simple Dise App</Text>
      <View style={styles.container}>
        <View style={styles.diseContainer}>
          <Image style={styles.diseImg} source={diseImage[firstDise]} />
          <Image
            style={[styles.diseImg, styles.lite]}
            source={diseImage[secondDise]}
          />
        </View>
        <View>
          <Pressable onPress={rollDiseNumOnTap}>
            <Text style={styles.rollDiseBtnText} selectable={false}>
              Roll the Dise!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#252525",
    color: "#fff",
  },
  name: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    textTransform: "uppercase",
  },
  container: {
    marginTop: 150,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 2,
  },
  diseContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  diseImg: {
    marginHorizontal: 10,
    width: 125,
    height: 125,
    borderRadius: 15,
  },
  lite: {
    opacity: 0.8,
    // Color: "blue",
  },
  rollDiseBtnText: {
    marginTop: 70,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 2,
    fontSize: 16,
    borderRadius: 8,
    textTransform: "uppercase",
    fontWeight: "bold",
    backgroundColor: "#252525",
    color: "#ffff",
  },
});
