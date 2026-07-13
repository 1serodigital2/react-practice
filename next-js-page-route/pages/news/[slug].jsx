import { useRouter } from "next/router";

const SomethingNew = () => {
  const router = useRouter();

  const slug = router.query.slug;
  console.log("slug", slug);

  return <h1>Somethig new</h1>;
};

export default SomethingNew;
