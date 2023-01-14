import React from "react";

function Intro() {
    return (
        <div className="py-5 text-center">
            {/* Social Icons */}
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()}{' '}
                Orkun Alp Ünlü. All rights reserved.
            </p>
        </div>
    )
}

export default Intro;