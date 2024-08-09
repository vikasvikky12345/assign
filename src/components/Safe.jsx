import { useEffect } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Safe() {
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
          start: 'top 50%', 
          end: 'top 50%', 
          scrub: true,
        },
        stagger: 0.2, 
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 mt-20">
        <h1 className="text-4xl lg:text-6xl font-bold">Stay</h1>
        <div className="animate-div w-[120px] h-[50px] lg:w-[150px] lg:h-[60px] bg-blue-200 rounded-full px-4 py-3 lg:px-6 lg:py-4 flex items-center justify-evenly">
          <FaShieldAlt className="animate-icon text-blue-700 text-xl lg:text-2xl" />
          <h1 className="animate-text text-xl lg:text-2xl text-blue-700">safe</h1>
        </div>
      </div>
      <h1 className="text-center text-4xl lg:text-6xl font-bold mt-3">While you Browse</h1>
    </>
  );
}

export default Safe;
