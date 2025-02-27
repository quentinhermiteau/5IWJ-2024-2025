"use client";

import { useState } from "react";

export default function Exo4() {
  const [length, setLength] = useState(0);

  const handleChange = (event) => {
    if (length < 10) {
      setLength(event.target.value.length);
      return;
    }
    alert("size limit");
  };

  return (
    <>
      <div id="notice">
        <p>
          Modifie ce code pour que lorsque tu rajoutes une lettre dans l'input,
          la longueur de l'input est vérifiée.
        </p>
        <p>
          Si l'input dépase les 10 caractères, afficher une alert qui indique
          que la taille maximum est dépassée.
        </p>
      </div>
      <section>
        <h1>Character Limit: {length}</h1>
        <input placeholder="Enter some text" onChange={handleChange} />
      </section>
    </>
  );
}
