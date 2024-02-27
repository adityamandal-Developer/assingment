import "./App.css";
import award from "./assets/1.png";
import awardRecieve from "./assets/2.png";
import products from "./assets/3.png";
import logo from "./assets/logo.png";
import Footer from "./Components/footer";
import Logo from "./Components/logo";

import Section1 from "./Components/section1";
import Section2 from "./Components/section2";

export default function App() {
  return (
    <div className="main">
      <Logo logo={logo} />
      <Section1 award={award} awardRecieve={awardRecieve} />
      <Section2 products={products} />
      <Footer />
    </div>
  );
}
