"use client";

import { createContext } from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = createContext({
  language: "en",
  changeLanguage: () => {},
  translate: (key) => key,
});

function LanguageProvider({ children }) {
  const language = "en";

  const changeLanguage = () => {};

  const translate = () => {};

  return null;
}

function LanguageSwitcher() {
  const language = null;
  const changeLanguage = () => {};

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const translate = () => {};

  return (
    <div>
      <h1>{translate("hello")}</h1>
      <p>{translate("welcome")}</p>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Greeting />
    </LanguageProvider>
  );
}
