import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../Store/favorite-context";
import  classes  from "./Navigation.module.css";

function Navigation() {
const FavoritesCtx=useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav >
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
            My Favorites
            <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
