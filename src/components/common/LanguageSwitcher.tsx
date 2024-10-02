// src/components/common/LanguageSwitcher.tsx

import i18next from "i18next";



const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage("en")} className="p-2">
        English
      </button>
      <button onClick={() => changeLanguage("ar")} className="p-2">
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
