import React, { useState, useEffect } from "react";
import Letter from './components/Letter.jsx'
import FloatingPolaroids from "./components/FloatingPolaroids.jsx";
import AnimatedTeddy from "./components/AnimatedTeddy.tsx";
import AnimatedBackground from "./components/AnimatedBackground.tsx";

const messages = [
	"Hello! 🧸",
];

const App = () => {
  const [showLetter, setShowLetter] = useState(false);

  const handleYesClick = () => {
    setShowLetter(true); // Show the Letter component when "Yes" is clicked
  };


	return (
		<div>
      {/* Conditionally render AnimatedTeddy or Letter */}
      {!showLetter ? (
        <AnimatedTeddy onYesClick={handleYesClick} />
      ) : (
        <Letter />
      )}
      <AnimatedBackground/>
		</div>
	);
};

export default App;