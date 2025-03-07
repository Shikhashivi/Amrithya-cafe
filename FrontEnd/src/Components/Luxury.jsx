import React from "react";
import l1 from '../assets/l1.png'
import Navbar from "./Navbar";

const Luxury = () => {
  return (
    <>
    <Navbar />
    <section className="flex flex-col items-center text-center p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">LUXURY MEETS COMFORT</h2>
      <p className="text-gray-600 max-w-2xl mb-8">
        With interiors designed for an immersive experience, Amrithya is a
        seamless blend of sophistication and warmth. The ambiance reflects the
        elements of water, nature, and art, ensuring an unparalleled dining.
      </p>
      <div className="relative w-full max-w-4xl ml-20 flex justify-center items-center">
        {/* Wrapper for Positioning */}
        <div className="relative w-full  max-w-xs sm:max-w-md md:max-w-4xl flex">
          {/* First Image - Always Visible */}
          <img
            src={l1}
            alt="Interior 1"
            className="w-1/2 shadow-lg  transform -translate-x-6 z-0"
          />

          {/* Second Image - Overlapping, Always Visible */}
          <img
            src={l1}
            alt="Interior 2"
            className="w-1/2 shadow-lg  relative -ml-14 top-6 z-10"
          />
        </div>
      </div>




    </section>
    </>
  );
};

export default Luxury;

// {/* <div className="relative w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
//   {/* First Image - Always Visible */}
// <img
//   src={l1}
//   alt="Interior 1"
//   className="w-full md:w-1/2 shadow-lg transform md:-translate-x-10 z-0"
// />

// {/* Second Image - Hidden on Small Screens, Visible on md+ */ }
// <img
//   src={l1}
//   alt="Interior 2"
//   className="  w-1/2 md:w-1/2 shadow-lg md:relative md:-ml-30 top-0 md:top-auto z-10"
// />
// // </div> */}

// import React from "react";

// const LuxuryDining = () => {
//   return (
//     <section className="bg-white py-10 px-5 md:px-20">
//       {/* Heading */}
//       <div className="text-center">
//         <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
//           LUXURY MEETS COMFORT
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
//           With interiors designed for an immersive experience, Amrithya is a
//           seamless blend of sophistication and warmth. The ambiance reflects the
//           elements of water, nature, and art, ensuring an unparalleled dining
//           experience.
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-8">
//         <div className="w-full md:w-1/2">
//           <img
//             src="https://via.placeholder.com/500" // Replace with actual image
//             alt="Dining Interior 1"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//         <div className="w-full md:w-3/4">
//           <img
//             src="https://via.placeholder.com/700" // Replace with actual image
//             alt="Dining Interior 2"
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LuxuryDining;