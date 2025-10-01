import { Outlet } from "react-router";

import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../../constants";

function LayoutPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const onSearch = () => {
    console.log("Searching for:", search);

    const searchFields = ["title", "description", "address"];

    const filteredProducts = cardArray.filter((card) => {
      return searchFields.some((field) => {
        return card[field]
          .toLocaleLowerCase()
          .trim()
          .includes(search.toLocaleLowerCase().trim());
      });
    });

    setProducts(filteredProducts);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />

      <main>
        <Search
          searchChange={handleSearch}
          onSearchClick={onSearch}
          searchText={search}
        />

        <section className="content">
          <div className="container">
            <Outlet context={{ products }} />
          </div>
        </section>
      </main>
    </>
  );
}

export default LayoutPage;
