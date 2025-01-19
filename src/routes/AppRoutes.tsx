import { useState } from "react";
import YesNoPage from "../features/yesno/components/YesNoPage";
import MultiChoicePage from "../features/multi/components/MultiChoicePage";

function AppRoutes() {
  const [currentTab, setCurrentTab] = useState("yesno");

  return (
    <>
      <nav className="flex border-b mb-4">
        <button
          onClick={() => setCurrentTab("yesno")}
          className={`flex-1 px-4 py-2 text-center ${
            currentTab === "yesno"
              ? "border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          Yes or No
        </button>
        <button
          onClick={() => setCurrentTab("multi")}
          className={`flex-1 px-4 py-2 text-center ${
            currentTab === "multi"
              ? "border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
        >
          여러 선택지
        </button>
      </nav>

      {currentTab === "yesno" && <YesNoPage />}
      {currentTab === "multi" && <MultiChoicePage />}
    </>
  );
}

export default AppRoutes;
