import React, { useState } from "react";

import { useRickContext } from "../context/ContextRM";
import Character from "../components/Character";
import Search from "../components/Search";
import NavBar from "../components/Nav";
import Link from "next/link";

const Favorites = () => {
  const { searchedFavValue, setSearchFavValue } = useRickContext();
  const [activeSearch, setActiveSearch] = useState(false);

  const toggleSearch = () => {
    setActiveSearch(!activeSearch);
    setSearchFavValue("");
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center flex-col favorite">
        {activeSearch ? (
          <>
            <Search isFavorite={true} />
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
          {searchedFavValue.length > 0 ? (
            searchedFavValue.map((character) => {
              return (
                <Character
                  key={character.id}
                  data={character}
                  isFavorite={true}
                />
              );
            })
          ) : (
            <>
              <div className="flex flex-col">
                <h1 className="text-orange-400 font-bold text-center mb-4 text-lg col-span-1 row-span-1 col-start-2 col-end-3">
                  Aun no tienes Favoritos
                </h1>
                <Link
                  href="/characters"
                  className="bg-slate-50 hover:bg-orange-300 text-orange-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  Agregar
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
