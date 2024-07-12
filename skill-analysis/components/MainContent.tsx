// components/MainContent.tsx
"use client";

import Graph from './Graph';

const MainContent = () => {
  return (
    <div className="flex-grow p-6 bg-gray-100 flex flex-col lg:flex-row">
      <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-6">
        <h2 className="text-2xl font-bold mb-4">Skill Test</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-bold mb-2">Quick Statistics</h3>
          <div className="flex space-x-4">
            <div className="text-center">
              <span className="block text-2xl font-bold">4</span>
              <span className="text-gray-600">Your Rank</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">90%</span>
              <span className="text-gray-600">Percentile</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold">12 / 15</span>
              <span className="text-gray-600">Correct Answers</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-bold mb-2">Comparison Graph</h3>
          <Graph />
        </div>
      </div>
      <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Syllabus Wise Analysis</h3>
        <ul>
          <li className="flex items-center justify-between mb-2">
            <span>HTML Tools, Forms, History</span>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '80%' }}></div>
            </div>
            <span className="ml-2">80%</span>
          </li>
          <li className="flex items-center justify-between mb-2">
            <span>Tags & References in HTML</span>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: '60%' }}></div>
            </div>
            <span className="ml-2">60%</span>
          </li>
          <li className="flex items-center justify-between mb-2">
            <span>Tables & References in HTML</span>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '24%' }}></div>
            </div>
            <span className="ml-2">24%</span>
          </li>
          <li className="flex items-center justify-between mb-2">
            <span>Tables & CSS Basics</span>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '96%' }}></div>
            </div>
            <span className="ml-2">96%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
