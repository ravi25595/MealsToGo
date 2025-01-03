import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";
import { Text } from "../../components/typography/text.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate}) => {
    if (!favourites.length) {return null}
    return(
        <FavouritesWrapper>
            <Spacer position="left" size="large">
                <Text va>Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer position="left" size="large" key={key}>
                            <TouchableOpacity onPress={() => onNavigate("RestaurantDetail", { restaurant: restaurant })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}