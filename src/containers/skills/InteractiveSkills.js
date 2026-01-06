import React, {useState, useContext} from "react";
import {Fade} from "react-reveal";
import "./InteractiveSkills.scss";
import StyleContext from "../../contexts/StyleContext";
import {interactiveSkillsSection} from "../../portfolio";

// Icon mapping for different skill categories
function getIconForTab(tabId) {
  const iconMap = {
    "CAD & Design Tools": "✏️",
    "Structural Analysis": "🔧",
    "Systems Integration": "⚙️",
    "Standards & Quality": "✅",
    "Programming & Tools": "💻",
    "Data Analysis": "📊",
    "BI & Visualization": "📈",
    "Statistical Methods": "📉",
    "ML & Analytics": "🤖",
    "Cloud & Tools": "☁️"
  };
  return iconMap[tabId] || "🔹";
}

export default function InteractiveSkills() {
  const {isDark} = useContext(StyleContext);

  // Get tabs from portfolio.js and set default active tab to first one
  const tabs = interactiveSkillsSection.tabs
    ? interactiveSkillsSection.tabs.map(tab => ({
        id: tab.id,
        label: tab.id,
        icon: getIconForTab(tab.id)
      }))
    : [];

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  if (!interactiveSkillsSection.display) {
    return null;
  }

  const renderSkillItem = (skill, index) => (
    <div key={index} className="skill-item">
      {skill}
    </div>
  );

  const renderSection = (section, index) => (
    <div key={index} className="skill-section">
      <h3 className="section-title">{section.title}</h3>
      <div className="skills-grid">
        {section.skills.map((skill, skillIndex) =>
          renderSkillItem(skill, skillIndex)
        )}
      </div>
    </div>
  );

  const activeTabData = interactiveSkillsSection.tabs.find(
    tab => tab.id === activeTab
  );

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="interactive-skills-section" id="interactive-skills">
        <div className="skills-main">
          <h1 className={isDark ? "dark-mode skills-title" : "skills-title"}>
            {interactiveSkillsSection.title}
          </h1>
          <p
            className={isDark ? "dark-mode skills-subtitle" : "skills-subtitle"}
          >
            {interactiveSkillsSection.subtitle}
          </p>

          <div className="skills-content">
            <div className="tabs-container">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="tab-content">
              <div className="content-container">
                {activeTabData &&
                  activeTabData.sections.map((section, index) =>
                    renderSection(section, index)
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
