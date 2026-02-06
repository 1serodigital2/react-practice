import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handlePageRedirection = () => {
    navigate("products");
  };
  return (
    <>
      <h1>Homepage</h1>
      <p>
        {" "}
        Go to <Link to="products">Products page</Link>
      </p>
      <button onClick={handlePageRedirection}>Go to Product page</button>
    </>
  );
};

export default HomePage;
