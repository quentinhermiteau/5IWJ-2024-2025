"use client";

export default function List() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" },
  ];

  const friendsNoKey = ["Ben", "Lynn", "Alex"];

  return (
    <>
      <div id="notice">
        <p>
          Modifie ce code pour qu'il affiche les listes correctement, attention
          de ne pas oublier l'attribut key!
        </p>
        <p>
          Pour le deuxième tableau, trouve un moyen de lui donner une key
          unique, utilise tes connaissances de la fonction map
        </p>
      </div>
      <div>
        Friends:
        {friends.length > 0 && (
          <ul>
            {/* <li v-for="friend in friends"></li> */}
            {friends.map((friend) => {
              return <li key={friend.id}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        Friends no key:
        <ul>
          {friendsNoKey.map((friend, index) => {
            return <li key={index}>{friend}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
