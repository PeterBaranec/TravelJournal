import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  let cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
}

export default App;
