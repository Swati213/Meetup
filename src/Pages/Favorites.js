import React, { useContext } from "react";
import MeetupList from "../Components/Meetups/MeetupList";
import FavoritesContext from "../Store/favorite-context";

function Favorites() {
  const favoritesCtx=useContext(FavoritesContext);

  let content;
  if(favoritesCtx.totalFavorites===0){
    content= <p>You got no favorites Yet. Start adding some?</p>
  }else{
  content= <MeetupList meetups={favoritesCtx.favorites}/>

  }
  
  return(
  <section>
     <h1>Favorites Page</h1>
     {content}
  </section>
  );
}

export default Favorites;
