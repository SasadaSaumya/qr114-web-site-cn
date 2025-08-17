// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// We remove LanguageDetector because we want to force a specific default language.
// import LanguageDetector from "i18next-browser-languagedetector";

// Import your translation files
import enTranslation from '../public/locales/en/translation.json';
import zhTranslation from '../public/locales/zh/translation.json';

i18n
  // .use(LanguageDetector) // <-- 1. Remove or comment out this line
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development', // Show logs only in development
    
    // 2. Set the initial language to Chinese ('zh')
    lng: "zh", 

    // 3. Set a fallback language in case 'zh' fails or a language is missing
    fallbackLng: "en", 

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
    },
  });

export default i18n;