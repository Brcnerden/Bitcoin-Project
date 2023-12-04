import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./component/Layout/Layout";
import { Shopping } from "./component/Shopping/Shopping";
import { Banner } from "./component/Banner/Banner";
import { CreditCard } from "./component/CreditCard/CreditCard";
import { GetStart } from "./component/GetStart/GetStart";
import { Support } from "./component/Support/Support";
import { MoneyBoard } from "./component/Board/MoneyBoard";

function App() {
  return (
    <Layout>
      <MoneyBoard />
      <Shopping />
      <Banner />
      <CreditCard />
      <GetStart />
      <Support />
    </Layout>
  );
}

export default App;
