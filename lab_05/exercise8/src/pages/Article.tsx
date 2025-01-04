import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem(`${id}`) || "{}");
  console.log(article);

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}
