import { useParams, Link } from "react-router-dom";

function Post() {
  const { slug } = useParams();

  return (
    <div className="post">
      <h1>Post: {slug}</h1>
      <p>This is a sample post page for testing routes.</p>
      <p>Current slug parameter: <strong>{slug}</strong></p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Post;
