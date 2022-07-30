import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://62e2b9d23891dd9ba8eec3f3.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      <Categories />
      <div className="cards">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Products key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
