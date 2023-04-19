import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((resp) => setList(resp));
  }, []);

  return (
    <div>
      <h3>{list.name}</h3>
      <img src={list.url} alt="" />
    </div>
  );
}
