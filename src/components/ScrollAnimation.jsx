import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
    useEffect(() => {
        gsap.fromTo(
          '.video-container',
          { height: '100%', width: '100%' },
          {
            height: '60%',
            width: '60%',
            top: '30%',
            right: '40%',
            scrollTrigger: {
              trigger: '.scroll-animation-container',
              start: 'top 50%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
        );
    }, []);
  
    return (
        <div className="scroll-container flex flex-col md:flex-row overflow-x-scroll space-y-6 md:space-y-0 md:space-x-10 mt-10">
            <div className="scroll-animation-container flex items-center text-center justify-center flex-shrink-0 w-full md:w-3/5 h-[300px] md:h-[500px] relative border border-gray-300 rounded-2xl">
                <div className="video-container absolute inset-0 flex justify-center items-center z-10 overflow-hidden rounded-2xl">
                    <video
                        className="w-full h-full object-cover"
                        src="video.webm"
                        autoPlay
                        muted
                        loop
                    />
                </div>

                <div className="relative w-full h-full flex flex-col pt-6 bg-white z-1 border border-gray-300 rounded-2xl px-4 md:px-6">
                    <h1 className="text-lg md:text-2xl">Prioritise performance</h1>
                    <h5 className="text-sm md:text-lg text-gray-400 mt-2">Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.</h5>
                </div>
            </div>
            <div className="image-container flex-shrink-0 w-full md:w-3/5 h-[300px] md:h-[500px] bg-gray-200 rounded-2xl">
                <img src="stay.jpeg" alt="Image 1" className="w-full h-full object-cover  rounded-2xl" />
            </div>
            <div className="image-container flex-shrink-0 w-full md:w-3/5 h-[300px] md:h-[500px] bg-gray-200 rounded-2xl">
                <img src="optimise.jpeg" alt="Image 2" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="image-container flex-shrink-0 w-full md:w-3/5 h-[300px] md:h-[500px] bg-gray-200 rounded-2xl">
                <img src="auto.jpeg" alt="Image 3" className="w-full h-full object-cover rounded-2xl" />
            </div>
        </div>
    );
};

export default ScrollAnimation;
