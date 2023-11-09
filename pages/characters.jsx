import React, { useEffect, useState } from "react";

import Character from "../components/Character";
import NavBar from "../components/Nav";
import { useRickContext } from "../context/ContextRM";
import Search from "../components/Search";

const Characters = () => {
  const {
    searchedChart,
    setSearchValue,
    loading,
    dispatch,
    nextPage,
    prevPage,
  } = useRickContext();
  const [activeSearch, setActiveSearch] = useState(false);
  const [showNextPageButton, setShowNextPageButton] = useState(true);
  const [showPrevPageButton, setShowPrevPageButton] = useState(false);

  const toggleSearch = () => {
    setActiveSearch(!activeSearch);
    setSearchValue("");
  };

  useEffect(() => {
    const showPaginationButtons = () => {
      if (nextPage) {
        setShowNextPageButton(true);
      } else {
        setShowNextPageButton(false);
      }

      if (prevPage) {
        setShowPrevPageButton(true);
      } else {
        setShowPrevPageButton(false);
      }
    };
    showPaginationButtons();
  }, [nextPage, prevPage]);

  const nextCurrentPage = () => {
    if (nextPage) {
      dispatch({ type: "NEXT" });
    }
  };

  const prevCurrentPage = () => {
    if (prevPage) {
      dispatch({ type: "PREV" });
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center flex-col">
        {activeSearch ? (
          <>
            <Search />
            <button
              className="bg-slate-50 hover:bg-orange-300 text-orange-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-3"
              onClick={() => toggleSearch()}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            className="bg-slate-50 hover:bg-orange-300 text-orange-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-3"
            onClick={() => toggleSearch()}
          >
            Buscar
          </button>
        )}
        <div className="flex flex-row justify-around items-center flex-wrap min-w-full">
          {!loading ? (
            searchedChart.map((character) => {
              return <Character key={character.id} data={character} />;
            })
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {showPrevPageButton && (
            <button
              className="text-orange-200  px-4 py-2 border rounded hover:bg-gray-100"
              onClick={() => prevCurrentPage()}
            >
              Anterior
            </button>
          )}
          {showNextPageButton && (
            <button
              className="text-orange-200 px-4 py-2 border rounded hover:bg-gray-100"
              onClick={() => nextCurrentPage()}
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Characters;
