import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const getWishListFromStorage = () => {
    const wishList = JSON.parse(localStorage.getItem("wishList"));
    if (wishList) return wishList;
    return [];
  };

  const [cookies, setCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);
  const [wishList, setWishList] = useState(getWishListFromStorage());

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setWishList([]);
    localStorage.removeItem("wishList");
  };

  const addToWishList = (item) => {
    const newList = [...wishList, item];
    setWishList(newList);
    localStorage.setItem("wishList", JSON.stringify(newList));
  };

  const removeFromWishList = (item) => {
    const updatedWishList = wishList.filter(
      (wishListItem) => wishListItem.id !== item.id
    );
    setWishList(updatedWishList);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
  };

  useEffect(() => {
    if (cookies.token) {
      // TODO: Authenticate using cookies
      setUser({ name: "Adi", email: "adi@gmail.com" });
    }
  }, [cookies.token]);

  const userContextValues = {
    user,
    wishList,
    login,
    logout,
    addToWishList,
    removeFromWishList,
  };

  return (
    <UserContext.Provider value={userContextValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
