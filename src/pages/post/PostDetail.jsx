import { useParams } from "react-router";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch post");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="post-detail-page">
      {loading && <p>Loading post...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && post && (
        <div className="post-detail-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div className="post-detail-meta">
            Post ID: {post.id} | User ID: {post.userId}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
