import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import En from "./En";
import Uz from "./Uz";
import Ru from "./Ru";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      En: { translation: En },
      Uz: { translation: Uz },
      Ru: { translation: Ru },
    },
    lng: localStorage.getItem("selectedLanguage") || "En",
    fallbackLng: "En",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
