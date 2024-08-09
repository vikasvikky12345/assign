import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaBolt, FaShieldAlt, FaHeart } from 'react-icons/fa'; // Import icons

const FastAnimation = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0);

  // Define contents with icons
  const contents = [
    { text: 'Fast', icon: <FaBolt /> },
    { text: 'Safe', icon: <FaShieldAlt /> },
    { text: 'Yours', icon: <FaHeart /> },
  ];
  
  const divColors = ['lightgreen', 'lightblue', 'lightcoral'];
  const textColors = ['green', 'blue', 'red'];

  useEffect(() => {
    // Background color animation for the rectangular div
    const colorTimeline = gsap.timeline({ repeat: -1 });

    divColors.forEach((color) => {
      colorTimeline
        .to(boxRef.current, { backgroundColor: color, duration: 2 })
        .to(boxRef.current, { delay: 1.6 }); // To sync with text change
    });

    // Text animation and color change
    const textTimeline = gsap.timeline({ repeat: -1 });

    contents.forEach((content, index) => {
      textTimeline
        .set(textRef.current, { y: '100%', opacity: 0, color: textColors[index] }) // Start text from below the box
        .call(() => setContentIndex(index))
        .to(textRef.current, { y: '-50%', opacity: 1, duration: 1.8, ease: 'power4.in' }) // Move text to center
        .to(textRef.current, { delay: 1.8 }); // Wait before the next transition
    });

    return () => {
      colorTimeline.kill(); // Clean up the timeline on component unmount
      textTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: '150px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        fontSize: '24px',
        borderRadius: '30px',
        backgroundColor: 'lightgreen'
      }}
    >
      <div
        ref={textRef}
        style={{
          position: 'absolute',
          bottom: '-10%',
          transform: 'translateY(50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px', // Space between icon and text
        }}
      >
        {contents[contentIndex].icon}
        {contents[contentIndex].text}
      </div>
    </div>
  );
};

export default FastAnimation;
