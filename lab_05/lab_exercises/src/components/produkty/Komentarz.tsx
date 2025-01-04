import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
    fullName: string;
  };
}

export default function Komentarz(props: KomentarzProps) {
  const [likes, setLikes] = useState(props.likes);

  return (
    <div className="comment">
      <div>
        Autor: {props.user.fullName} (@{props.user.username})
      </div>
      <div className="comment-body">{props.body}</div>
      <div className="comment-actions">
        <p>{likes} polubień</p>
        <button onClick={() => setLikes((prev) => prev + 1)}>
          <FaThumbsUp />
        </button>
        <button onClick={() => setLikes((prev) => prev - 1)}>
          <FaThumbsDown />
        </button>
      </div>
    </div>
  );
}
