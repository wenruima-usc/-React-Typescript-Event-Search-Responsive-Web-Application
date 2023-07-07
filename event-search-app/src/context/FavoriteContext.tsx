import { useContext,createContext,ReactNode, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";
const FavoriteContext= createContext({} as FavoriteContext);
export const useFavoriteContext= ()=>{
    return useContext(FavoriteContext);
}
type FavoriteProviderProps={
    children: ReactNode
}
export type Favorite={
    id: string,
    date: string,
    event:string,
    category:string,
    venue:string
}
type FavoriteContext={
    addToFavorite: (favorite:Favorite) =>void
    removeFavorite: (id:string)=>void
    getFavorite: ()=>Favorite[]
    isFavorite: (id:string)=> boolean
}
export const FavoriteProvider=({ children }: FavoriteProviderProps)=>{
    const [favoriteItems,setFavoriteItems]=useLocalStorage<Favorite[]>("favorites",[]);
    const addToFavorite=(favorite:Favorite)=>{
        const newFavoriteItems=[...favoriteItems,favorite];
        setFavoriteItems(newFavoriteItems);
    }
    const removeFavorite=(id:string)=>{
        const newFavoriteItems=favoriteItems.filter((favorite:Favorite)=>favorite.id!=id);
        setFavoriteItems(newFavoriteItems);
    }
    const getFavorite=()=>{
        return favoriteItems;
    }
    const isFavorite=(id:string)=>{
       return  favoriteItems.find(favoriteItem=>favoriteItem.id === id) !== undefined
    }
    return <FavoriteContext.Provider value={{addToFavorite,removeFavorite,getFavorite,isFavorite}}>
        {children}
    </FavoriteContext.Provider>
}