// components/Header.tsx
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">WhatBytes</div>
      <div className="flex items-center">
        <img
          src="/path-to-profile-pic.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2">Rahil Siddique</span>
      </div>
    </header>
  );
};

export default Header;
