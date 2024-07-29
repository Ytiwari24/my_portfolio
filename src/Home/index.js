

// import React, { useEffect, useRef } from 'react';
// import './Home.css';

// const Home = () => {
//     const scrollContainerRef = useRef(null);

//     useEffect(() => {
//         const scrollContainer = scrollContainerRef.current;
//         let scrollAmount = 0;
//         const scrollSpeed = 0.5; // Adjust the speed of scrolling here

//         const scrollHorizontally = () => {
//             scrollAmount += scrollSpeed;
//             if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
//                 scrollAmount = 0;
//             }
//             scrollContainer.scrollLeft = scrollAmount;
//             requestAnimationFrame(scrollHorizontally);
//         };

//         scrollHorizontally();
//     }, []);

//     return (
//         <section id="home" className="home">
//             <div ref={scrollContainerRef} className="scroll-container">
//                 <div className="scroll-content">
//                     <div className="scroll-item item1">Welcome to MySoftwareCo</div>
//                     <div className="scroll-item item2">We Provide Quality Services</div>
//                     <div className="scroll-item item3">Your Satisfaction is Our Priority</div>
//                     <div className="scroll-item item4">Contact Us for More Information</div>
//                     {/* Duplicate items for seamless scrolling */}
//                     <div className="scroll-item item1">Welcome to MySoftwareCo</div>
//                     <div className="scroll-item item2">We Provide Quality Services</div>
//                     <div className="scroll-item item3">Your Satisfaction is Our Priority</div>
//                     <div className="scroll-item item4">Contact Us for More Information</div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Home;

import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2; // Adjusted speed for smoother scrolling

    const scrollHorizontally = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // Reset when halfway through
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollHorizontally);
    };

    scrollHorizontally();
  }, []);

  return (
    <section id="home" className="home">
      <div ref={scrollContainerRef} className="scroll-container">
        <div className="scroll-content">
          <div className="scroll-item item1">Welcome to MySoftwareCo</div>
          <div className="scroll-item item2">We Provide Quality Services</div>
          <div className="scroll-item item3">Your Satisfaction is Our Priority</div>
          <div className="scroll-item item4">Contact Us for More Information</div>
          {/* Duplicate items for seamless scrolling */}
          <div className="scroll-item item1">Welcome to MySoftwareCo</div>
          <div className="scroll-item item2">We Provide Quality Services</div>
          <div className="scroll-item item3">Your Satisfaction is Our Priority</div>
          <div className="scroll-item item4">Contact Us for More Information</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
