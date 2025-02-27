"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Mauvais comportement quand on appuie plusieurs fois sur le bouton "Next"
   * Comment résoudre ce problème ?
   * Ajout d'un ignore et d'une cleanup function
   *
   * Montrer l'intérêt de la cleanup function avec un handleEventListener
   */
  useEffect(() => {
    let ignore = false

    const handleFetchTodo = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { error, response } = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        )
          .then((response) => response.json())
          .then((response) => {
            
            return { response }})
            .catch((error) => ({ error }));
            
        if (ignore) {
          return
        }

        setTodo(response);
        setLoading(false);
      }, 500);
    };

    handleFetchTodo()

    return () => {
      ignore = true
    }
  }, [id]);


  useEffect(() => {
    console.log('ici');
  }, [])

  return (
    <main>
      <div>{JSON.stringify({ todo })}</div>
      <div>
        <button onClick={() => (id > 1 ? setId(id - 1) : null)}>
          Previous
        </button>
        <button onClick={() => setId(id + 1)}>Next</button>
      </div>
      {loading && <div>Loading...</div>}
    </main>
  );
}
