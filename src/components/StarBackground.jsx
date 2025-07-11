import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();

    // Delay meteor rendering by 1 second to prevent flash/dash
    const meteorTimer = setTimeout(() => {
      generateMeteors();
    }, 1000);

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(meteorTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate stars based on screen area
  const generateStars = () => {
    const count = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const generated = Array.from({ length: count }, (_, i) => ({
      id: `star-${i}-${Math.random()}`,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));
    setStars(generated);
  };

  // Generate meteors with delay/position/size
  const generateMeteors = () => {
    const count = 6;
    const generated = Array.from({ length: count }, (_, i) => ({
      id: `meteor-${i}-${Math.random()}`,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 10 + 1, // start falling 1-11s
      animationDuration: Math.random() * 3 + 3,
    }));
    setMeteors(generated);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            position: "absolute",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            position: "absolute",
            opacity: 0, // initial opacity
            animationFillMode: "forwards",
          }}
        />
      ))}
    </div>
  );
};
