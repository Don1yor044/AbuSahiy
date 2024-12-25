import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Ru from "./Ru";
import Uz from "./Uz";
import En from "./En";
i18n.use(initReactI18next).init({
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
