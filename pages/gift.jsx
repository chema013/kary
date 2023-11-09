import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../components/NavBar";
import YouTubePlayer from "../components/YoutubePlayer";

const Gift = () => {
  const [counter, setcounter] = useState(1);

  const addCounter = () => {
    if (counter <= 10) {
      setcounter(counter + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen max-h-screen flex justify-start items-center pt-12 flex-col fondo-regalo">
        <h1 className="font-mono text-5xl text-center color text-slate-100">
          Te amo mucho Kary
        </h1>
        <p className="text-slate-100 text-center text-xl mt-8">
          Mi gordita hermosa te amo mucho...
        </p>
        <p className="text-center text-2xl mt-3 text-amber-500">
          Este es un cupon valido para un dia de compras(mañana)...
        </p>
        <p className="text-slate-100 text-center text-xl mt-3 mb-40">
          <span className="text-amber-500 text-2xl">Posdata:</span> No seas
          mula, Te amo.
        </p>
        {counter < 10 && (
          <button
            className="bg-slate-50 hover:bg-orange-300 text-orange-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-5 mt-5"
            onClick={() => addCounter()}
          >
            Te amo
          </button>
        )}

        {counter === 10 ? (
          <YouTubePlayer videoId={"G6Dqqc7icCk"} />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            size={`${counter}x`}
            className={`col-span-1 row-span-1 col-start-3 col-end-4 justify-self-end mr-3 text-orange-600`}
          />
        )}
      </div>
    </>
  );
};

export default Gift;
