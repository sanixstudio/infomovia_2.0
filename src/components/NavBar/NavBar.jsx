import React, { useEffect, useState } from "react";
import { GENRES } from "../../utils/constants";
import "./navBar.styles.css";
import { supabase } from "../../utils/supabaseClient";

const genreList = Object.keys(GENRES.movies);

const NavBar = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from("wishlist").select('*');
    setWishlist(data);
  }

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
        <span className="wish-items">{wishlist.length || 0}</span>
      </a>
    </div>
  );
};

export default NavBar;
