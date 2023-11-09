import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="fondo">
        <div className="flex items-center justify-center flex-col  h-screen w-screen">
          <div className="self-center flex justify-center bg-slate-300 opacity-75 w-2/3 rounded-lg mb-7">
            <img
              src="./icons/KarinaName.png"
              alt="nombre"
              className="w-52 mb-5"
            />
          </div>
          <nav className="flex w-full justify-evenly">
            <Link
              href="/gift"
              className="bg-slate-50 hover:bg-orange-300 text-orange-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Regalo
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
