import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>Newspage</h1>
      <ul>
        <li>
          <Link href="/news/link-one">Link 1</Link>
        </li>
        <li>
          <Link href="/news/link-two">Link 2</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
