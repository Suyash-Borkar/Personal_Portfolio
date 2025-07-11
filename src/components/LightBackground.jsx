// import React, { useState, useEffect } from "react";

// export const LightBackground = () => {
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     const generateBubbles = () => {
//       const count = Math.floor(window.innerWidth / 20);
//       const newBubbles = Array.from({ length: count }, (_, i) => ({
//         id: `bubble-${i}-${Math.random()}`,
//         size: Math.random() * 12 + 8,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         delay: Math.random() * 10,
//         duration: Math.random() * 10 + 10,
//       }));
//       setBubbles(newBubbles);
//     };

//     generateBubbles();
//     window.addEventListener("resize", generateBubbles);
//     return () => window.removeEventListener("resize", generateBubbles);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none dark:hidden">
//       {bubbles.map((bubble) => (
//         <div
//           key={bubble.id}
//           className="absolute rounded-full bg-primary/10 backdrop-blur-sm animate-bubble mix-blend-lighten"
//           style={{
//             width: `${bubble.size}px`,
//             height: `${bubble.size}px`,
//             left: `${bubble.x}%`,
//             top: `${bubble.y}%`,
//             animationDelay: `${bubble.delay}s`,
//             animationDuration: `${bubble.duration}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };
