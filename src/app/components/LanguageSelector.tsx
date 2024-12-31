import React from "react";
import { LANGUAGE_VERSIONS } from "../constants/constants";

interface LanguageSelectorProps {
  language: keyof typeof LANGUAGE_VERSIONS;
  onSelect: (language: keyof typeof LANGUAGE_VERSIONS) => void; 
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  const languages = Object.entries(LANGUAGE_VERSIONS); 

  return (
    <div className="flex items-center space-x-3">
    
      <label
        htmlFor="language-select"
        className="text-sm font-medium text-gray-200"
      >
        Language:
      </label>

    
      <select
        id="language-select"
        value={language}
        onChange={(e) => onSelect(e.target.value as keyof typeof LANGUAGE_VERSIONS)}
        className="bg-gray-700 text-gray-200 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang}>
            {lang} ({version})
          </option>
        ))}
      </select>

     
      <div className="text-sm text-gray-300 hidden md:block">
        Selected: {language} ({LANGUAGE_VERSIONS[language]})
      </div>
    </div>
  );
};

export default LanguageSelector;
