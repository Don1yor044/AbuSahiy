import { useTranslation } from "react-i18next";
import { MainContent } from "./components/mainContent";

const App = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };
  return (
    <>
      {/* Til tanlash select */}
      <div className="flex items-center justify-end">
        <form className="w-24">
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            onChange={handleLanguageChange}
            value={i18n.language}
          >
            <option value="En">{t("English")}</option>
            <option value="Uz">{t("Uzbek")}</option>
            <option value="Ru">{t("Russian")}</option>
          </select>
        </form>
      </div>

      {/* Asosiy kontent */}
      <MainContent />
    </>
  );
};

export default App;
