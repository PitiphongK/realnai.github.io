import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import path2 from "./browserLookups/path2.jsx";

import "../node_modules/flag-icon-css/css/flag-icons.min.css";

import "./index.css";

import App from "./App.jsx";

const languageDetector = new LanguageDetector();
languageDetector.addDetector(path2);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "th", "jp"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path2", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
      lookupFromPathIndex: 1,
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json", // lng is detected language
    },
  });

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
