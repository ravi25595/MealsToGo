import React, { useState } from 'react';
import { SafeAreaView, StatusBar,StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.secondary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[2]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[2]}
`;
export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState(''); 
    const onChangeSearch = (query) => {
        setSearchQuery(query);
    };
    return(
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard/>
      </RestaurantListContainer>
    </SafeArea>
    );
}