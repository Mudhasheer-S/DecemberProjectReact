import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from './planete-soleil-qui-brille-dessus_1297-3126.avif';
import image2 from './pristine-reflective-lake-show-image-260nw-2305485315.webp';
import './toogler.css';

const ImageToggler = () => {
  const [currentImg, setCurrentImg] = useState(1);

  const toggleImage = () => {
    setCurrentImg(currentImg === 1 ? 2 : 1);
  };

  return (
    <div>
        <div className="flex flex-col justify-center items-center h-screen bg-emerald-100">
            <div className="border-4 p-8 border-teal-600">
                <div className="flex">
                    <h1 className="mb-4 text-4xl ml-6">My Image Toggler</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2 mt-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <motion.img
                    key={currentImg}
                    src={currentImg === 1 ? image1 : image2}
                    alt="flower img"
                    onClick={toggleImage}
                    className="object-cover h-48 w-96 cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    />
                    <p className="text-2xl mt-3 border-4 border-teal-600 px-8">Click The Image To Toggle It</p>     
                </div>
         </div>
    </div>
  );
};

export default ImageToggler;