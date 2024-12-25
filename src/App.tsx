import { useTranslation } from "react-i18next";
import { MainContent } from "./components";
import { Select } from "antd";

const App = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {/* Til tanlash select */}
      <div className="flex items-center justify-end ">
        <Select
          className="min-w-28"
          onChange={(value) => {
            i18n.changeLanguage(value); // Tanlangan tilni o'zgartirish
            localStorage.setItem("selectedLanguage", value); // Tilni localStorage'ga saqlash
          }}
          defaultValue={i18n.language} // Hozirgi tilni ko'rsatish
        >
          <Select.Option value="En">English</Select.Option>
          <Select.Option value="Uz">O‘zbekcha</Select.Option>
          <Select.Option value="Ru">Русский</Select.Option>
        </Select>
      </div>

      {/* Asosiy kontent */}
      <MainContent />
    </>
  );
};

export default App;
