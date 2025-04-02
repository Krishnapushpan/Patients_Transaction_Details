import React from 'react';
import List from '../assets/images/list.png';
import Logo from '../assets/images/logo.jpg';

const Navbar = ({ setSidebarOpen }) => {
  return (
    <>
      <div className="bg-blue-900 text-white flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {/* Clicking the list image toggles the sidebar */}
          <img 
            src={List} 
            className="w-[30px] h-[30px] cursor-pointer" 
            alt="Menu"
            onClick={() => setSidebarOpen(prev => !prev)}
          />
          <img src={Logo} className="w-[100px] h-[50px] rounded" alt="Logo" />
          <span className="font-bold text-lg">Oncolab Diagnostics LLC</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>THOMAS</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
