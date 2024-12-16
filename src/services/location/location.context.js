import React from "react";
import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
// eslint-disable-next-line react/prop-types
export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("san francisco");
    const [location, setLocation] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                console.log(result);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
                console.log(error);
            });
    };
    useEffect (() => {
        onSearch(keyword)
    }, [])
    return <LocationContext.Provider
    value ={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
    }}>
        {children}
    </LocationContext.Provider>
}