import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const MiContext = createContext();

export const useRickContext = () => {
  return useContext(MiContext);
};

export const ContextProvider = ({ children }) => {
  // Estados
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchFavValue, setSearchFavValue] = useState("");
  const [favoriteChart, setFavoriteChart] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  // Definir el reductor
  const urlReducer = (state, action) => {
    switch (action.type) {
      case "NEXT":
        return { url: nextPage };
      case "PREV":
        return { url: prevPage };
      default:
        return state;
    }
  };

  // Reducers
  const [currentURl, dispatch] = useReducer(urlReducer, {
    url: "https://rickandmortyapi.com/api/character",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = currentURl.url;
        const {
          data: {
            results,
            info: { next, prev },
          },
        } = await axios.get(url);
        setCharacters(results);
        setLoading(false);
        setPrevPage(prev);
        setNextPage(next);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentURl]);

  let searchedChart = characters.filter((character) => {
    if (
      character.name.toLowerCase().search(searchValue.toLocaleLowerCase()) >= 0
    ) {
      return character;
    }
    return false;
  });

  let searchedFavValue = favoriteChart.filter((character) => {
    if (
      character.name.toLowerCase().search(searchFavValue.toLocaleLowerCase()) >=
      0
    ) {
      return character;
    }
    return false;
  });

  const addFavorite = (item) => {
    /* Agrega al nuevo arreglo de favoritos */
    const alreadyExist = favoriteChart.find(
      (character) => character.id === item.id
    );
    if (!alreadyExist) {
      setFavoriteChart([...favoriteChart, item]);
    }

    /* Agrega propiedad isfavorite en true al arreglo original */
    const index = characters.findIndex((character) => character.id === item.id);
    let newCharacters = [...characters];
    newCharacters[index].isFavorite = true;
    console.log("newCharacters:", newCharacters);
    setCharacters(newCharacters);
  };

  const dropFavorite = (item) => {
    /* Elimina del arreglo original */
    const filteredFavs = favoriteChart.filter(
      (character) => character.id !== item.id
    );
    setFavoriteChart(filteredFavs);

    /* Agrega propiedad isfavorite en false al arreglo original */
    const index = characters.findIndex((character) => character.id === item.id);
    let newCharacters = [...characters];
    newCharacters[index].isFavorite = false;
    console.log("newCharacters:", newCharacters);
    setCharacters(newCharacters);
  };

  const sharedData = {
    characters,
    searchedChart,
    loading,
    searchValue,
    favoriteChart,
    searchedFavValue,
    currentURl,
    nextPage,
    prevPage,
    setCharacters,
    setLoading,
    setSearchValue,
    setSearchFavValue,
    addFavorite,
    dropFavorite,
    dispatch,
  };

  return <MiContext.Provider value={sharedData}>{children}</MiContext.Provider>;
};
