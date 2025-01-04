import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title || !body) {
      alert("Wypełnij wszystkie pola!");
      return;
    }

    const blog = { id: `blog-${uuidv4()}`, title, body };

    localStorage.setItem(blog.id, JSON.stringify(blog));
    setTitle("");
    setBody("");
    navigate("/blogs");
  }

  return (
    <div className="add">
      <h1>Stwórz nowego bloga</h1>

      <form action="" className="add-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="title">Tytuł</label>
          <input
            type="text"
            id="title"
            placeholder="Tytuł..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Treść</label>
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={10}
            placeholder="Treść..."
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}
