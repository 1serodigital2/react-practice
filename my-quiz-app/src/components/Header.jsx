import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex justify-center flex-col items-center">
      <img width={100} height={80} src={logo} alt="" />
      <h1 className="text-amber-50 font-bold text-5xl mt-5">REACTQUIZ</h1>
    </header>
  );
}
