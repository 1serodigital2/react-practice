import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/test">test meals</Link>
        <Link href="/meals/test-b">test meals b</Link>
      </p>
    </main>
  );
}
