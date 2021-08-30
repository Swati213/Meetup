import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite:(favoriteMeetup)=>{},
  removeFavorite:(meetupId)=>{},
  itemIsFavorite:(meetupId)=>{}
});
export function FavoritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);
  function addFavoritesHandler(favoritesMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favoritesMeetup);
    });
  }
  function removeFavoritesHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

function itemIsFavoritesHandler(meetupId) {
  return userFavourites.some(meetup=>
      meetup.id=== meetupId
  );
}

const contetxt = {
  favorites: userFavourites,
  totalFavorites: userFavourites.length,
  addFavorite:addFavoritesHandler,
  removeFavorite:removeFavoritesHandler,
  itemIsFavorite:itemIsFavoritesHandler
};
return (
  <FavoritesContext.Provider value={contetxt}>
    {props.children}
  </FavoritesContext.Provider>
);
}

export default FavoritesContext;