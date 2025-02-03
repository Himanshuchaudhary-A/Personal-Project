import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AnimatedTeddy.css';

const messages = [
  "Hello there!",
  "How are you doing today?",
  "I hope you're having a great day!",
  "Would you like to play a game?",
  "I'm here to chat anytime!",
];

const AnimatedTeddy = ({ onYesClick }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typedMessage, setTypedMessage] = useState('');
  const [showLetter, setShowLetter] = useState(false);

  const typingSpeed = 100; // Adjust the speed of typing (in ms)

  // Type each message letter by letter
  useEffect(() => {
    setTypedMessage(''); // Reset the typed message before typing the next one
    const message = messages[currentMessageIndex];

    let index = 0;
    const interval = setInterval(() => {
      setTypedMessage((prev) => prev + message[index]);
      index += 1;

      if (index === message.length) {
        clearInterval(interval);
      }
    }, typingSpeed);
  }, [currentMessageIndex]);

  const nextMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  const handleYesClick = () => {
    onYesClick();
  };

  const handleNoClick = () => {
    setShowLetter(false);
    nextMessage();
  };

  return (
    <div className="interactive-teddy-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="teddy-container"
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
        }}
      >
        <div className="message-container">
          <div className="handwritten-paper">
            <div className="speech-bubble">
            {messages[currentMessageIndex]}
            </div>
          </div>
          <div className="message-controls">
            {currentMessageIndex === messages.length - 1 ? (
              <>
                <button className="yes-btn" onClick={handleYesClick}>
                  Yes
                </button>
                <button className="no-btn" onClick={handleNoClick}>
                  No
                </button>
              </>
            ) : (
              <>
                <button className="prev-btn" onClick={previousMessage}>
                  Previous
                </button>
                <button className="next-btn" onClick={nextMessage}>
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedTeddy;
