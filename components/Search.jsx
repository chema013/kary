import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useRickContext } from "../context/ContextRM";

const Search = ({ isFavorite = false }) => {
  const { setSearchValue, setSearchFavValue } = useRickContext();

  const filterCharac = (event) => {
    setSearchValue(event.target.value);
  };

  const filterFavoriteCharac = (event) => {
    setSearchFavValue(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center w-96 mb-5">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="mr-3" />
        {isFavorite ? (
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 leading-5 rounded-full border border-gray-300
      focus:outline-none focus:border-orange-200 focus:ring focus:ring-orange-200
      placeholder-gray-400 bg-white shadow-md"
            onChange={(event) => filterFavoriteCharac(event)}
          />
        ) : (
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 leading-5 rounded-full border border-gray-300
    focus:outline-none focus:border-orange-200 focus:ring focus:ring-orange-200
    placeholder-gray-400 bg-white shadow-md"
            onChange={(event) => filterCharac(event)}
          />
        )}
      </div>
    </>
  );
};

export default Search;
