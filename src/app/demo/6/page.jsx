"use client";

import { useState } from "react";
import Flag from "./Flag";

export default function Page() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);

  const languages = ["Hello", "Hola", "Bonjour", "Hallo", "Привет"];
  const names = ["Quentin", "Robin", "Aurelien", "Ilyam", "Liam"];

  const handleNextLanguageClick = () => {
    const nextIndex =
      languageIndex === languages.length - 1 ? 0 : languageIndex + 1;
    setLanguageIndex(nextIndex);
  };

  const handleNextNameClick = () => {
    const nextIndex = nameIndex === languages.length - 1 ? 0 : nameIndex + 1;
    setNameIndex(nextIndex);
  };

  return (
    <main>
      <h1>
        {languages[languageIndex]}, {names[nameIndex]}
      </h1>
      <button onClick={handleNextLanguageClick}>Next language</button>
      <button onClick={handleNextNameClick}>Next name</button>
      <Flag />
    </main>
  );
}

/**
 * Instructions:
 * Ajouter memo sur Flag
 * options={{ tone: index }} => Modifier Flag pour prendre ces props
 * Problème?
 * Solution (référence)
 * Ajout un compteur
 * Problème?
 * Solution (useMemo)
 *
 * + useCallback (useCallback = useMemo)
 */
