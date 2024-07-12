// components/Header.js
export default function Header() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl">Skill Test</h1>
        <div className="flex items-center">
          <span className="mr-4">Rahil Siddique</span>
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="rounded-full w-8 h-8"
          />
        </div>
      </header>
    );
  }
  