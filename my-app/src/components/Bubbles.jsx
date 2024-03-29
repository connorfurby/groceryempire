import React, { useState, useEffect } from 'react';

function Bubbles() {
  const [bubbles, setBubbles] = useState([]);
  const [bubbleCount, setBubbleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const size = Math.floor(Math.random() * 3) + 3;
      const position = { top: Math.random() * 100, left: Math.random() * 100 };
      const lifetime = Math.random() * 1.5 + 0.5;
      const id = Date.now();
      setBubbles(prevBubbles => [...prevBubbles, { size, position, lifetime, id }]);
      console.log('A new bubble has been generated');
    }, Math.random() * 90000 + 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bubbles.forEach(bubble => {
      const timeout = setTimeout(() => {
        setBubbles(prevBubbles => prevBubbles.filter(b => b.id !== bubble.id));
      }, bubble.lifetime * 1000 * 3);
      return () => clearTimeout(timeout);
    });
  }, [bubbles]);

  const handleClick = id => {
    setBubbleCount(prevCount => prevCount + 1);
    setBubbles(prevBubbles => prevBubbles.filter(b => b.id !== id));
  };

  return (
    <div>
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          onClick={() => handleClick(bubble.id)}
          style={{
            position: 'absolute',
            top: `${bubble.position.top}%`,
            left: `${bubble.position.left}%`,
            width: `${bubble.size * 3}px`, // Multiply size by 3
            height: `${bubble.size * 3}px`, // Multiply size by 3
            borderRadius: '50%',
            backgroundColor: 'blue',
          }}
        />
      ))}
      <p>Bubbles: {bubbleCount}</p>
    </div>
  );

}
export default Bubbles;