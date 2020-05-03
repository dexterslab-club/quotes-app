import React from "react";
import { StyleSheet } from "react-native";

import {
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
} from "native-base";
import data from "./../data/data";

export default function QuotesDeck() {
  const cards = data;
  return (
    <DeckSwiper
      dataSource={cards}
      renderItem={(item: any) => (
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              {/* <Thumbnail source={item.image} /> */}
              <Body>
                <Text>{item.author}</Text>
                <Text note>{item.genre}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={{ fontSize: 30, fontFamily: "Merienda-Bold" }}>
              {item.quote}
            </Text>
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: "#ED4A6A" }} />
            <Text>70%</Text>
          </CardItem>
        </Card>
      )}
    />
  );
}
