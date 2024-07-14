// pages/index.tsx
"use client";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent'; 
import SkillTest  from '../pages/skill-test';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <SkillTest />
      </div>
    </div>
  );
};

export default Home;
