import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListPage() {
  const [list, setLists] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
      .then((resp) => resp.json())
      .then((resp) => setLists(resp));
  });
  return (
    <ul>
      {list.map((p) => (
        <li key={p.id}>
          <Link to={`/single/${p.id}`}> {p.name}</Link>
        </li>
      ))}
    </ul>
  );
}
