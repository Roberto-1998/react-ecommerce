import i18n from "i18next";

import * as ES from "./locales/es";
import * as EN from "./locales/en";

// the translations
const resources = {
  es: ES,
  en: EN,
};

let lng = localStorage.getItem("i18nextLng");
if (!lng) {
  lng = "es";
  localStorage.setItem("i18nextLng", lng);
}

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: process.env.NODE_ENV !== "production",
  lng,
  resources,

  fallbackLng: lng,

  ns: ["common"],

  defaultNS: "common",

  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
};

i18n.on("languageChanged", function (lng) {
  localStorage.setItem("i18nextLng", lng);
});

i18n.init(options).then();

export default i18n;
