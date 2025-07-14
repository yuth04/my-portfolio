import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/english/translate.json";
import kh from "./locales/khmer/translate.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      kh: { translation: kh },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
