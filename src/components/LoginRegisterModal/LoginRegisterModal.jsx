import React, { useState } from "react";
import "./loginRegisterModal.styles.css";
import { RxCross1 } from "react-icons/rx";

function Modal({ closeModal, openModal }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // TODO: handle register
  };

  return (
    <div className="modal" style={{ display: openModal ? "flex" : "none" }}>
      <div className="login-container">
        <form className="login-form" action="#" method="post">
          <span className="close-btn">
            <RxCross1 onClick={() => closeModal()} />
          </span>
          <h2 className="form-title">Log in</h2>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button className="form-button" type="submit">
              Log in
            </button>
          </div>
          <div className="form-group">
            <span className="form-link">Forgot password?</span>
            <span className="form-link">New user? Register</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
