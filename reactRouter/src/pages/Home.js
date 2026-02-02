import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <p>
        {" "}
        Go to <Link to="/products">Products page</Link>
      </p>
    </>
  );
};

export default HomePage;
