import React from 'react';

function Footer() {
    return (
        <div className="text-white text-center flex justify-center w-full" style={{height: '3%', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
            <div className="w-full md:w-2/3 md:text-center text-black text-left pl-6 pt-2 text black text-xs font-bold">
            Copyright © 2021 Adirondack Foot Care, all rights reserved.
            <br />
            Clifton Park, NY 12065  ||  <a href="tel:5183830302">(518) 383 - 0302</a>
            </div>
        </div>
    )
}

export default Footer;

