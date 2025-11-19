import { useEffect, useState } from "react";
import { Link } from "react-router";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="post-list-page">
      <h1>Post List</h1>
      <Link className="create-post-link" to={"/private/posts/mutate"}>
        Create Post
      </Link>
      <div className="post-list-container">
        {loading && <p>Loading posts...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <ul className="post-list">
            {posts.map((post) => (
              <li className="post-list-item" key={post.id}>
                <Link className="post-link" to={`/private/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostList;
