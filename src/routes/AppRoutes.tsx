import { useState } from "react";
import YesNoPage from "../features/yesno/components/YesNoPage";
import MultiChoicePage from "../features/multi/components/MultiChoicePage";
import { useFadeIn } from "../hooks/useFadein";

function AppRoutes() {
  const [currentTab, setCurrentTab] = useState("yesno");
  const { className: fadeClassName } = useFadeIn(500);

  const tabs = [
    { id: "yesno", label: "Yes or No", component: <YesNoPage /> },
    { id: "multi", label: "여러 선택지", component: <MultiChoicePage /> },
  ];

  return (
    <>
      <nav className="flex border-b mb-4 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`flex-1 px-4 py-2 text-center ${
              currentTab === tab.id
                ? "border-b-2 border-gray-800 text-gray-800"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className={fadeClassName}>
        {tabs.find((tab) => tab.id === currentTab)?.component}
      </div>
    </>
  );
}

export default AppRoutes;
