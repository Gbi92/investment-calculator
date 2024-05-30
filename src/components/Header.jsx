import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="Bag of money with dollar sign" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
