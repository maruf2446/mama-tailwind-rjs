import img1 from "../assets/img/download (1).png" 

import { useState } from 'react';

const Navbar = () => {
  const Links = [
    {name: "SOLUTIONS", link:"/"},
    {name: "ZERO-LOSS FAILOVER", link:"/"},
    {name: "MULTI-TENANT ", link:"/"},
    {name: "ENTERPRISE NNI", link:"/"},
    {name: "LEARN", link:"/"},
    {name: "SUPPORT", link:"/"},
  ]
  const [open, setOpen]=useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-20 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span>
            <img className="h-10 w-10" src={img1} alt="" />
          </span>
          Desinger
        </div>
        <div onClick={()=>setOpen(!open)}
        className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
          {
           Links.map((Link)=>(
            <li key={Link.name} className="md:ml-8 text-xs md:my-0 my-7">
              <a href={Link.link} className="text-gray-800 hover:text-gray-200 duration-200">{Link.name}</a>
            </li>
           ))
          }
          <button className="bg-emerald-400 text-xs text-white font-[Poppins] py-4 px-6 rounded-full p-10 md:ml-8 hover:text-black duration-500">MAKE AN ENQUIRY</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;