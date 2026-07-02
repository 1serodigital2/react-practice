import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
