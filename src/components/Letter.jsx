import React, { useState } from "react";
import { motion } from "framer-motion";
import './Letter.css';

const Letter = () => {
  const [hovered, setHovered] = useState(false);
  const [password, setPassword] = useState(""); // State for password input
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // State to track password validity
  const correctPassword = "1"; // Replace with your desired password

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
    } else {
      alert("Incorrect password! Please try again.");
    }
  };

  return (
    <div className="envelope-container">
      {!isPasswordCorrect ? (
        <form onSubmit={handlePasswordSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="password-input"
          />
          <button type="submit" className="password-submit">
            Submit
          </button>
        </form>
      ) : (
        <motion.div
          className="envelope"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          transition={{ duration: 0.6 }}
        >
          {/* Envelope Front */}
          <motion.div
            className="flap"
            transition={{ duration: 0.6 }}
          />
          {/* Envelope Body */}
          <motion.div
            className="body"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>Dear Friend,</p>
              <p>I hope this letter finds you well. I'm just writing to tell you how much I appreciate your kindness!</p>
              <p>Take care!</p>
              <p>Best regards,</p>
              <p>Your Friend</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Letter;
