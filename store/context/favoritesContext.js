import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

export const FavoritesContextProvider = ({ children }) => {

    const [ids, setIds] = useState([]);

    const addFavorite = (id) => {
        setIds(prev => [...prev, id])
    }
    const removeFavorite = (id) => {
        setIds(currIDs => currIDs.filter((currID) => currID !== id));
    }

    return <FavoritesContext.Provider value={{ids, addFavorite, removeFavorite}}> 
        {children}
    </FavoritesContext.Provider>
}