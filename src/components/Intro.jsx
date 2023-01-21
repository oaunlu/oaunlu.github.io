import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img
                src="/assets/Orkun.jpg"
                alt="Orkun Alp Ünlü"
                className="w-32 h-full md:w-48 md:h-48 rounded-full object-cover object-top mb-3 
                hover:md:scale-110 transition duration-500 ease-in-out transform hover:scale-110"
            />
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 mb-1 md:mb-3 font-bold">
                Orkun Alp Ünlü
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer & Web Dev
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am a full-stack software developer @ Airties Wireless Networks.
            </p>
        </div>
    )
}

export default Intro;