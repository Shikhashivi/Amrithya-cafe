import React from "react";
import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import Navbar from "./Navbar";

const About = () => {
    return (
        <>
        <Navbar     />
        <section className="relative bg-gray-900 text-white    py-16 px-6 md:px-16 lg:px-24">
            
            {/* Heading */}
            <h1 className="font-serif text-4xl text-center mt-20 mb-12">ABOUT AMRITHYA</h1>

          <div className="flex flex-col md:flex-row">
    {/* Text Content Column */}
    <div className="md:w-1/2 pr-0 md:pr-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
            The Eternal Dining by <span className="text-yellow-500">Brahmastra</span>, where culinary artistry
            meets architectural elegance...
        </p>

        <h3 className="text-2xl font-light mb-6">A Symphony of Elements</h3>

        <p className="text-gray-300 mb-6">
            At Amrithya, every detail is designed to transport you to a world of luxury and serenity:
        </p>

        <ul className="text-gray-300 space-y-6">
            <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <div>
                    <span className="text-yellow-500 font-medium">The Dome</span> – A grand architectural marvel offering an
                    intimate and elegant setting.
                </div>
            </li>
            <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <div>
                    <span className="text-yellow-500 font-medium">Over-Water Glass Seating</span> – Dine atop a shimmering water
                    body with panoramic views of cascading waterfalls.
                </div>
            </li>
            <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <div>
                    <span className="text-yellow-500 font-medium">Tree Seating</span> – A secluded, elevated space that blends
                    nature and design, perfect for a memorable evening.
                </div>
            </li>
            <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <div>
                    <span className="text-yellow-500 font-medium">Retractable Glass Roof</span> – Enjoy starlit dinners or sunlit
                    brunches in our semi-open first-floor dining area.
                </div>
            </li>
        </ul>
    </div>

    {/* Image Gallery Column */}
    <div className="md:w-1/2 md:mt-40  sm:mt-30 flex flex-col justify-center items-center">
    <div className="grid mt-[120px]  md:-mt-10  ml-80 grid-cols-2 gap-4">
        <img
            src={a1}
            alt="Elegant dome seating with soft lighting"
            className=" relative  w-[140px] h-[160px] md:w-[240px] md:h-[200px]  shadow-md ml-[270px]  md:ml-100  -mt-20     md:-mt-[120px]  transform -translate-x-6  z-0"
        />
        <img
            src={a2}
            alt="Over-water glass seating with a stunning view"
            className=" relative w-[180px] h-[220px] md:w-[240px] md:h-[280px] -ml-10 shadow-md  md:-ml-24  transform -translate-x-6"
        />
        <img
            src={a1}
            alt="Tree seating with a unique dining experience"
            className=" relative  w-[140px] h-[160px] md:w-[240px] md:h-[200px] shadow-md ml-[110px] -mt-[60px]  transform -translate-x-6"
        />
    </div>
</div>

</div>

        </section >
        </>
    );
};

export default About;