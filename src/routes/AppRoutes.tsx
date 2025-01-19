import { useState } from "react";
import YesNoPage from "../features/yesno/components/YesNoPage";
import MultiChoicePage from "../features/multi/components/MultiChoicePage";
import { useFadeIn } from "../hooks/useFadein";

function AppRoutes() {
  const [currentTab, setCurrentTab] = useState("yesno");
  const { className: fadeClassName } = useFadeIn(500);

  return (
    <>
      <nav className="flex border-b mb-4 border-gray-200">
        <button
          onClick={() => setCurrentTab("yesno")}
          className={`flex-1 px-4 py-2 text-center ${
            currentTab === "yesno"
              ? "border-b-2 border-gray-800 text-gray-800"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Yes or No
        </button>
        <button
          onClick={() => setCurrentTab("multi")}
          className={`flex-1 px-4 py-2 text-center ${
            currentTab === "multi"
              ? "border-b-2 border-gray-800 text-gray-800"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          여러 선택지
        </button>
      </nav>

      <div className={fadeClassName}>
        {currentTab === "yesno" && <YesNoPage />}
        {currentTab === "multi" && <MultiChoicePage />}
      </div>
    </>
  );
}

export default AppRoutes;
