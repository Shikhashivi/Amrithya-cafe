import React from 'react';
import m1 from "../assets/m1.png";
import m2 from '../assets/m2.png';
import Navbar from './Navbar';


const Menu = () => {
    return (
        <>
        <Navbar />
            <section className="min-h-screen bg-cover bg-center bg-[url('../assets/m2.png')] mt-20 flex flex-col items-center justify-center text-center py-12 "
                style={{ backgroundImage: `url(${m1})` }}
            >
                <h1 className="text-black text-3xl font-serif mb-8">Menu</h1>

                <div className="flex justify-center ml-25">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl gap-8">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-white rounded-2xl shadow-lg w-full ">
                                    <img src={m2} alt="Protein Shake" className="w-70 h-90px rounded-xl" />
                                </div>
                                <h4 className="text-black  mt-2 font-serif p-1 rounded-lg bg-white text-sm">Protein Shake</h4>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </>
    );
};

export default Menu;