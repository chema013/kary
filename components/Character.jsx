import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useRickContext } from "../context/ContextRM";

const Character = ({ data, isFavorite = false }) => {
  const { addFavorite, dropFavorite } = useRickContext();

  const addToFavorite = (data) => {
    addFavorite(data);
  };

  const dropToFavorite = (data) => {
    dropFavorite(data);
  };

  console.log("gato: ", data);

  return (
    <>
      <div className="flex justify-center items-center flex-col mb-5">
        <div className="bg-purple-50 rounded-lg p-4 shadow-2xl w-72">
          <img
            className="w-full rounded-lg mb-4"
            src={data.image}
            alt={data.name}
          />
          <div className="grid grid-cols-3 grid-rows-1 items-center">
            <h1 className="text-orange-700 font-bold text-center mb-4 text-lg col-span-1 row-span-1 col-start-2 col-end-3">
              {data.name}
            </h1>
            {isFavorite ? (
              <FontAwesomeIcon
                icon={faTrashCan}
                size="2x"
                className="col-span-1 row-span-1 col-start-3 col-end-4 justify-self-end mr-3 text-slate-600"
                onClick={() => dropToFavorite(data)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                className={`col-span-1 row-span-1 col-start-3 col-end-4 justify-self-end mr-3 ${
                  data.isFavorite ? "text-orange-600" : "text-slate-600"
                }`}
                onClick={() => addToFavorite(data)}
              />
            )}
          </div>
          <p className="text-slate-600">
            <span className="font-bold">Fecha de creacion:</span>
            {data.created}
          </p>
          <p className="text-slate-600">
            <span className="font-bold">Genero: </span>
            {data.gender}
          </p>
          <p className="text-slate-600">
            <span className="font-bold">Especie: </span>
            {data.species}
          </p>
          <p className="text-slate-600">
            <span className="font-bold">Estatus: </span>
            {data.status}
          </p>
        </div>
      </div>
    </>
  );
};

export default Character;
