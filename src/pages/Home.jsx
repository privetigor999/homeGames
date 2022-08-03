import { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination/Pagination";
import {
  setCategoryIndex,
  setCurrentPage,
} from "./../features/filter/filterSlice";

export const SearchContext = createContext();

const Home = () => {
  const dispatch = useDispatch();
  const { categoryIndex, currentPage } = useSelector((state) => state.filter);

  const onChangeCategory = (index) => {
    dispatch(setCategoryIndex(index));
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [searchValue, setSearchValue] = useState("".trim());
  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  const handleChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsloading(true);
    axios
      .get(
        `https://62e2b9d23891dd9ba8eec3f3.mockapi.io/items?page=${currentPage}&limit=12&${category}${search}`
      )
      .then((response) => {
        setItems(response.data);
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
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Categories
          onClickCategory={onChangeCategory}
          setCurrentPage={setCurrentPage}
        />
        <p className="mainTitle">
          {searchValue
            ? "Поиск по значению: " + searchValue
            : `Категория: ${categories[categoryIndex].toLowerCase()}`}
        </p>
        <div className="cards">{isLoading ? skeletons : games}</div>
        {categoryIndex === 0 && (
          <Pagination
            currentPage={currentPage}
            onChangePage={handleChangePage}
          />
        )}
      </SearchContext.Provider>
    </>
  );
};

export default Home;
