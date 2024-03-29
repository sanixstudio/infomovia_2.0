import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdLogout } from "react-icons/md";

import "./user.styles.css";
import Modal from "../LoginModal/LoginModal";

const User = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {user ? (
        <div className="user-controls">
          <div className="user-menu" onClick={() => setIsOpen(!isOpen)}>
            <FaUserCircle size={24} />
            <span>{user}</span>
          </div>
          <div
            className="user-options"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            <div className="user-profile">
              <FaUserCircle size={24} />
              <span>Profile</span>
            </div>
            <div className="user-wishlist">
              <IoMdHeart size={24} />
              <span>My Wish List</span>
            </div>
            <div className="user-logout">
              <MdLogout size={24} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="user-button" onClick={() => setIsOpen(true)}>
          <FaUserCircle size={24} />
          <span>Login/ Register</span>
        </div>
      )}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default User;
