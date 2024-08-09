import { useEffect } from 'react';
import { FaBolt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Fast() {
  useEffect(() => {
    gsap.fromTo(
      '.animate-icon, .animate-text',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.animate-div',
          start: 'top 80%', // Adjust based on when you want the animation to start
          end: 'top 50%', // Adjust based on when you want the animation to end
          scrub: true,
        },
        stagger: 0.2, // Adds a delay between the animations of the icon and text
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6">
        <h1 className="text-4xl lg:text-6xl font-bold">The</h1>
        {/* Animated content inside the div */}
        <div className="animate-div w-[120px] h-[50px] lg:w-[150px] lg:h-[60px] bg-green-200 rounded-full px-4 py-3 lg:px-6 lg:py-4 flex items-center justify-evenly">
          <FaBolt className="animate-icon text-green-700 text-xl lg:text-2xl" />
          <h1 className="animate-text text-xl lg:text-2xl text-green-700">Fast</h1>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold">way to do</h1>
      </div>
      <h1 className="text-center text-4xl lg:text-6xl font-bold mt-3">things online</h1>
    </>
  );
}

export default Fast;
