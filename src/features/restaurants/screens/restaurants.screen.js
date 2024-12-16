import { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, MD2Colors} from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

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
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  //console.log(restaurantContext);
  return (
    <SafeArea>
      <Search/> 
      <RestaurantList 
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Spacer>
              <RestaurantInfoCard restaurant={item}/>
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
