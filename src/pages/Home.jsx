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
  selectorFilter,
} from "./../features/filter/filterSlice";
import { fetchGames, selectorGames } from "../features/gamesSlice/gamesSlice";
import ErrorBlock from "../components/ErrorBlock/ErrorBlock";

export const SearchContext = createContext();

const Home = () => {
  const dispatch = useDispatch();
  const { categoryIndex, currentPage } = useSelector(selectorFilter);
  const { items, status } = useSelector(selectorGames);
  const onChangeCategory = (index) => {
    dispatch(setCategoryIndex(index));
  };

  const [searchValue, setSearchValue] = useState("".trim());

  const handleChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const getAxios = () => {
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchGames({
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getAxios();
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
        <Categories onClickCategory={onChangeCategory} />
        <p className="mainTitle">
          {searchValue
            ? "Поиск по значению: " + searchValue
            : `Категория: ${categories[categoryIndex].toLowerCase()}`}
        </p>
        {status === "error" ? (
          <ErrorBlock />
        ) : (
          <div className="cards">
            {status === "loading" ? skeletons : games}
          </div>
        )}
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
