import React, { useState,useEffect, createContext, useMemo, useContext} from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);
    
    const retriveRestaurants = (loc) =>{
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantsTransform).then((restaurants) => {
                setIsLoading(false);
                setRestaurants(restaurants);
            }).catch((error)=>{
                setIsLoading(false);
                setError(error);
            });
        }, 2000)
    }
    useEffect(() =>{
        if (location){
            const locationString = `${location.lat},${location.lng}`;
            retriveRestaurants(locationString);
        }
    },[location]);
    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}