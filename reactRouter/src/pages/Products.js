import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product one", slug: "product-one" },
  { id: "p2", title: "product two", slug: "product-two" },
  { id: "p3", title: "product three", slug: "product-three" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>My Products page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductsPage;
