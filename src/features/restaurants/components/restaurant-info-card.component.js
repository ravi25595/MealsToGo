import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Text} from 'react-native';
import { Card } from 'react-native-paper'
import styled from 'styled-components';

const RestaurantCard = styled(Card)`
    font-size: ${props => props.theme.fontSizes.h1};
    padding: ${props => props.theme.sizes[0]};
    background-color: ${props => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)``;
const Title = styled(Text)`
    color: ${props => props.theme.colors.ui.error};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://www.google.com/logos/doodles/2020/st-davids-day-2020-6753651837108303-2xa.gif",
        photos = ["https://www.google.com/logos/doodles/2023/kings-day-2023-6753651837109863.2-2xa.gif",
                "https://media1.giphy.com/media/AJ85Ie15uFoYU5B0vN/200w.gif?cid=6c09b9526raw21js37sugxgbcdeftd066caqd2coait8l1id&ep=v1_gifs_search&rid=200w.gif&ct=g"
        ],
        address = '8dlp Random food corner',
        isOpenNow = true,
        rating = 4,
        isClosedTemprarily,
    } = restaurant;

    return <RestaurantCard>
            <RestaurantCardCover source={{uri: photos[0]}}/>
            <Title>{name}</Title>
        </RestaurantCard>
}
