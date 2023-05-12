import React, { useContext } from "react";
import { GENRES } from "../../utils/constants";
import { UserContext } from "../../context/userContext";
import { BsBasket3 } from "react-icons/bs";
import "./navBar.styles.css";

const genreList = Object.keys(GENRES.movies);

console.log(genreList);

const index = () => {
  const { wishList, addToWishList } = useContext(UserContext);
  // const [selectedGenre, setSelectedGenre] = [""];

  //TODO: make page for genre
  // Setup the Context for Add to favorites

  return (
    <div className="nav-bar">
      <a href="/">Home</a>
      <div className="genre-list-wrapper">
        <span className="genre">Genre</span>
        <ul className="genre-list">
          {genreList.map((genre) => (
            <li key={genre}>
              <a href="#">{genre}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="/wish-list">
        <span>WishList </span>
        <span className="wish-items">{wishList.length}</span>
      </a>
    </div>
  );
};

export default index;
