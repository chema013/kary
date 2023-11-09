import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-14">
            <Link href="/">
              <img src="./icons/papas3.png" alt="Papas a la francesa" />
            </Link>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="2x"
                    className={`col-span-1 row-span-1 col-start-3 col-end-4 justify-self-end mr-3 text-orange-600`}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
