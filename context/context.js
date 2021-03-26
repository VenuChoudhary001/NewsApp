import React, { useState, useEffect } from "react";

const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [search, setSearch] = useState("");

  const [getSearch, setGetSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearch = () => {
    setGetSearch(search);
  };

  const getData = async () => {
    const res = await fetch(
      ` https://newsapi.org/v2/everything?q=${search}&apiKey=1cb83cccf37a4b1b84942ce07256e529`
    );
    const data = await res.json();
    const { articles } = data;
    setPosts(articles);
  };

  useEffect(() => {
    getData();
  }, [getSearch]);

  return (
    <GlobalContext.Provider
      value={{
        setSearch: setSearch,
        search: search,
        handleSearch: handleSearch,
        searchPosts: posts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
