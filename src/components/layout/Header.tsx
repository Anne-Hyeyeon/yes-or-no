import headerBunny from "../../assets/images/header/header-bunny.jpeg";

export default function Header() {
  return (
    <header className="px-4 py-3 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={headerBunny}
            alt="header bunny"
            className="w-6 h-6 object-contain"
          />
          <h1 className="text-xl font-bold">결정토끼</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
