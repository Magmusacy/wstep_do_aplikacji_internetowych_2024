import { useEffect, useState } from "react";
import Komentarz, { KomentarzProps } from "./Komentarz";
export default function Komentarze() {
  const [comments, setComments] = useState<KomentarzProps[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("https://dummyjson.com/comments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <>
      {comments.map((comment: KomentarzProps) => {
        return <Komentarz key={comment.id} {...comment} />;
      })}
    </>
  );
}
