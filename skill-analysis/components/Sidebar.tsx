// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link href="/skill-test">Skill Test</Link>
        </li>
        <li className="mb-2">
          <Link href="/internship">Internship</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
