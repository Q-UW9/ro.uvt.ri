import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <div>
        <h2>Sample Posts</h2>
        <ul>
          <li>
            <Link to="/hello-world">Hello World</Link>
          </li>
          <li>
            <Link to="/my-first-post">My First Post</Link>
          </li>
          <li>
            <Link to="/react-routing">React Routing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
