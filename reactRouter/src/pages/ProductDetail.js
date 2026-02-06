import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Product 1 ({params.productId})</h1>
      <p>soh fwiurn iuwiufsdiufiusdbfigbs</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};
export default ProductDetails;
