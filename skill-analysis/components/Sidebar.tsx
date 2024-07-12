// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <div className="text-2xl font-bold mb-6">WhatBytes</div>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" legacyBehavior>
          <a className="text-lg text-gray-700">Dashboard</a>
        </Link>
        <Link href="/skill-test" legacyBehavior>
          <a className="text-lg text-gray-700">Skill Test</a>
        </Link>
        <Link href="/internship" legacyBehavior>
          <a className="text-lg text-gray-700">Internship</a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
