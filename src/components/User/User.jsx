import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import "./user.styles.css";

const User = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      {user ? (
        <div>
          <span>Hi, {user}</span>
          <a href="#">Logout</a>
        </div>
      ) : (
        <div className="user-button" onClick={() => alert("hi")}>
          <FaUserCircle size={24} />
          <span>Login/ Register</span>
        </div>
      )}
    </div>
  );
};

export default User;
