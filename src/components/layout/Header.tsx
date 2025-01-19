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
          <a
            href="/"
            className="text-xl font-bold text-grey-500 hover:bg-gray-50"
          >
            결정토끼
          </a>{" "}
        </div>
        <p className="text-xs underline text-gray-500">
          <a
            href="https://buymeacoffee.com/annehyeyeon"
            target="_blank"
            rel="noopener noreferrer"
          >
            개발자 응원하기 ☕️
          </a>
        </p>
      </div>
    </header>
  );
}
