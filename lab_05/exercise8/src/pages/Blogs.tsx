import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: string;
  title: string;
  body: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs: Blog[] = [];
    const items = { ...localStorage };
    for (const key in items) {
      if (key.includes("blog-")) {
        const blog = JSON.parse(items[key]);
        storedBlogs.push(blog);
      }
    }
    setBlogs(storedBlogs);
  }, []);

  function handleBlogClick(blogId: string) {
    navigate(`/article/${blogId}`);
  }

  return (
    <div className="blogs">
      <h1>Blogi</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} onClick={() => handleBlogClick(blog.id)}>
            <h2>{blog.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
