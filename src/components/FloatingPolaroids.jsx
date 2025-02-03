import { motion } from "framer-motion";
import React from "react";

// Add your images here
const images = [
	"D:\p-p\src\images\teddy.jpg",
	"/images/pic2.jpg",
	"/images/pic3.jpg",
	"/images/pic4.jpg",
];

const FloatingPolaroids = () => {
	return (
		<div className="floating-container">
			{images.map((src, index) => {
				// Random motion values for more movement
				const xMovement = Math.random() > 0.5 ? 150 : -150; // Increased movement
				const yMovement = Math.random() > 0.5 ? 100 : -100;
				const rotation = Math.random() > 0.5 ? 20 : -20; // More rotation

				return (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 1.2, rotate: rotation }} // Increased scale
						animate={{
							x: [0, xMovement, 0],
							y: [0, yMovement, 0],
							rotate: [rotation, -rotation, rotation],
							opacity: [0, 1, 1],
							scale: [1.2, 1.4, 1.2], // Dynamic scaling effect
						}}
						transition={{
							duration: Math.random() * 4 + 3, // Slightly longer duration
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut",
						}}
						className="floating-polaroid"
						style={{
							top: `${Math.random() * 90}%`, // More spread out
							left: `${Math.random() * 90}%`,
						}}
					>
						<div className="polaroid">
							<img src={src} alt="Memories" />
							<p className="caption">💖 Our Memories 💖</p>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default FloatingPolaroids;
