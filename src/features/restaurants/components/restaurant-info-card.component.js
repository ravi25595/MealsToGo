import { Card } from "react-native-paper";
import { StyleSheet, View, Text, Image, Platform } from "react-native";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.sizes[0]};
  margin: ${(props) => props.theme.space[1]};
  //background-color: ${(props) => props.theme.colors.brand.secondary};
`;
const Cover = styled(Card.Cover)`
  border-color: red;
  boder-radiud: 4px;
`;
const Info = styled.View`
  padding: 8px;
`;
const Title = styled.Text``;
const Address = styled.Text``;
const Rating = styled.View`
  flex-direction: row;
`;
const Icons = styled(Image)`
  width: 20px;
  height: 20px;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://picsum.photos/4000",
      "https://picsum.photos/3000",
      "https://picsum.photos/5000",
    ],
    address = "8dlp Random food corner",
    isOpenNow = true,
    rating = 5,
    isClosedTemprarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{restaurant.name}</Title>
        <Rating>
          <Rating>
            {ratingArray.map((_, index) =>
              Platform.OS === "web" ? (
                <Icons source={require("../../../../assets/star.png")} />
              ) : (
                <SvgXml xml={star} width={20} height={20} key={index} />
              ),
            )}
          </Rating>
          <View style={{ flex: 1 }} />
          {isClosedTemprarily && (
            <Text style={{ color: "red", alignSelf: "center" }}>
              CLOSED TEMPRARILY
            </Text>
          )}
          <Spacer position="left" size="large">
            {isOpenNow &&
              (Platform.OS === "web" ? (
                <Icons source={require("../../../../assets/open.png")} />
              ) : (
                <SvgXml xml={open} width={20} height={20} />
              ))}
          </Spacer>
          <Spacer position="left" size="large">
            {isOpenNow && <Icons source={{ uri: icon }} />}
          </Spacer>
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
