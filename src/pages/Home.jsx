import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("".trim());
  const [currentPage, setCurrentPage] = useState(1);

  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  console.log(searchValue);
  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://62e2b9d23891dd9ba8eec3f3.mockapi.io/items?page=${currentPage}&limit=12&${category}${search}`
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsloading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, searchValue, currentPage]);

  const categories = [
    "Все",
    "Для компании",
    "Для семьи",
    "Для влюбленных",
    "Для детей",
  ];

  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const games = items.map((item) => <Products key={item.id} {...item} />);
  return (
    <>
      <Categories
        categoryIndex={categoryIndex}
        onClickCategory={(i) => setCategoryIndex(i)}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setCurrentPage={setCurrentPage}
      />
      <p className="mainTitle">
        {searchValue
          ? "Поиск по значению: " + searchValue
          : `Категория: ${categories[categoryIndex].toLowerCase()}`}
      </p>
      <div className="cards">{isLoading ? skeletons : games}</div>
      {categoryIndex === 0 && (
        <Pagination onChangePage={(num) => setCurrentPage(num)} />
      )}
    </>
  );
};

export default Home;
