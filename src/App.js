import "./App.scss";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <Header />
        <Products />
      </div>
    </div>
  );
}

export default App;
