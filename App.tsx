import React from "react";
import { StyleSheet } from "react-native";

import { Container, Header, View, Body, Title } from "native-base";
import QuotesDeck from "./src/components/QuotesDeck";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "Merienda-Bold": require("./assets/fonts/Merienda-Bold.ttf"),
    "Merienda-Regular": require("./assets/fonts/Merienda-Regular.ttf"),
    "Pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
    "PermanentMarker-Regular": require("./assets/fonts/PermanentMarker-Regular.ttf"),
  });
};

export default function App() {
  const [loaded, setLoaded] = React.useState(false);
  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoaded(true)} />
    );
  }
  return (
    <Container style={styles.container}>
      <Header>
        <Body style={{ flex: 3 }}>
          <Title style={{ color: "#fff", fontFamily: "Pacifico-Regular" }}>
            Quotes
          </Title>
        </Body>
      </Header>
      <View padder>
        <QuotesDeck />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00FFFF",
  },
});
