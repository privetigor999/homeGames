import "./App.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";
import data from "./db.json";
function App() {
  return (
    <div className="mainWrapper">
      <div className="wrapper">
        <Header />
        <Categories />
        <div className="cards">
          {data.map((item) => (
            <Products key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
