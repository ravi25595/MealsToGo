import { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors} from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 4,
  },
})``;
const ActivityIndicatorContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
  color: red;
`;
export const RestaurantsScreen = ({navigation}) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [ isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search 
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled&&<FavouritesBar favourites={favourites} 
            onNavigate={navigation.navigate}/>}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Spacer>
              <TouchableOpacity onPress={() => {navigation.navigate("RestaurantDetail", {restaurant: item})}}>
                <RestaurantInfoCard restaurant={item}/>
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      {isLoading && (
        <ActivityIndicatorContainer>
          <Loading size={50} color={MD2Colors.blue300}/>
        </ActivityIndicatorContainer>
      )}
    </SafeArea>
  );
};