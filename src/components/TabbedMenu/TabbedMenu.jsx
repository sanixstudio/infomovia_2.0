import React, { useState } from "react";
import "./tabbedMenu.styles.css";

const TabbedMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tabbed-menu">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs[activeTab].label}
      <div className="tab-content">{tabs[activeTab].component}</div>
    </div>
  );
};

export default TabbedMenu;
