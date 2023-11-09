import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-row items-center justify-between mb-5 bg-slate-500 h-14 shadow-md">
        <Link href="/">
          <img
            className="ml-4 w-12"
            src="/icons/rmicon.png"
            alt="rmprincipal.png"
          />
        </Link>
        <ul className="flex flex-row mr-4">
          <li className="font-bold mr-3">
            <Link href="/favorites">Favoritos</Link>
          </li>
          <li className="font-bold mr-3">
            <Link href="/characters">Personajes</Link>
          </li>
          <li className="font-bold mr-3">
            <Link href="/episodes">Episodios</Link>
          </li>
          <li className="font-bold mr-3">
            <Link href="/locations">Ubicaciones</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
