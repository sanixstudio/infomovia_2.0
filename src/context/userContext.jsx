import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies();
  const [user, setUser] = useState(null);
  const [wishList, setWishList] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setWishList([]);
  };

  const addToWishList = (item) => {
    setWishList([...wishList, item]);
  };

  const removeFromWishList = (item) => {
    const updatedWishList = wishList.filter(
      (wishListItem) => wishListItem.id !== item.id
    );
    setWishList(updatedWishList);
  };

  useEffect(() => {
    if (cookies.token) {
      // TODO: Authenticate using cookies
      setUser({ name: "Adi", email: "adi@gmail.com" })
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
