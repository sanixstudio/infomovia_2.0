import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons//ai";
import "./loginModal.styles.css";

function RegisterForm({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const handleCancel = () => {
    // TODO: handle cancel action
  };

  return (
    <div
      className={`register-form-container ${
        !isOpen ? "hidden" : "show-width-flex"
      }`}
    >
      <form className="register-form" onSubmit={handleSubmit}>
        <button className="modal-close-btn">
          <AiOutlineCloseCircle />
        </button>
        <h2 className="form-title">Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="form-button submit-button">
            Submit
          </button>
          <button
            type="button"
            className="form-button cancel-button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
