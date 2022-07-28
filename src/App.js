import { useState, useEffect } from "react";
import "./App.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://62e2b9d23891dd9ba8eec3f3.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <Header />
        <Categories />
        <div className="cards">
          {items.map((item) => (
            <Products key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
