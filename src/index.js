import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";

import * as ES from "./locales/es";
import * as EN from "./locales/en";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ScrollToTop } from "./helpers/ScrollToTop";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: ES,
    en: EN,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <I18nextProvider i18n={i18next}>
            <ScrollToTop />
            <App />
          </I18nextProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
