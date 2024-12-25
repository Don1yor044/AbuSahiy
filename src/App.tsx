import { useTranslation } from "react-i18next";
import { MainContent } from "./components";

const App = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {/* Til tanlash select */}
      <div className="flex items-center justify-end">
        <form className="w-24">
          <select
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
              localStorage.setItem("selectedLanguage", e.target.value);
            }}
            defaultValue={i18n.language}
          >
            <option value="En">English</option>
            <option value="Uz">O‘zbekcha</option>
            <option value="Ru">Русский</option>
          </select>
        </form>
      </div>

      {/* Asosiy kontent */}
      <MainContent />
    </>
  );
};

export default App;
