import React, { useState, useEffect } from 'react';
import cover from '../assets/goku.png';
import avt from '../assets/frieza.png';

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('header').offsetHeight;
      setIsSticky(window.scrollY > navHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky nav bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-pink-600 to-black text-white z-50 transition-opacity duration-300 ${
          isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex justify-center gap-4 py-3 text-sm sm:text-base font-medium">
          {['Home', 'Skills', 'Codeforces', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 rounded-lg hover:text-pink-300 hover:bg-white/10 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Header with cover, avatar, name and nav */}
      <header className="w-full shadow-xl">
        {/* Cover */}
        <div className="relative h-40 sm:h-48 md:h-64 bg-gray-900">
          <img
            src={cover}
            alt="Cover"
            className="w-full h-full object-cover opacity-80 transition-opacity duration-300"
          />
          {/* Avatar in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] sm:bottom-[-50px] md:bottom-[-68px]">
            <img
              src={avt}
              alt="Avatar"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Name and nav */}
        <div className="bg-gradient-to-r from-pink-600 to-black pt-20 pb-6 text-center">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            Đỗ Quốc Huy
          </h1>
          <p className="text-pink-200 text-xs sm:text-sm mt-1">
            Software Engineer
          </p>

          {/* Always-visible horizontal nav */}
          <nav className="flex justify-center flex-wrap gap-2 mt-4 text-white text-sm sm:text-base font-medium">
            {['Home', 'Skills', 'Codeforces', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 rounded-lg hover:text-pink-300 hover:bg-white/10 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
