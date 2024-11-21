
import { FaArrowDown } from "react-icons/fa6";

export function HomepageIntroduction() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center
      h-[70vh] gap-4"
    >
      <div className="book">
        <div className="book__pg-shadow" />
        <div className="book__pg" />
        <div className="book__pg book__pg--2" />
        <div className="book__pg book__pg--3" />
        <div className="book__pg book__pg--4" />
        <div className="book__pg book__pg--5" />
      </div>
      <h1 className="text-3xl font-bold capitalize text-center">
        Explorando algumas{" "}
        <span className="text-5xl font-extrabold mt-1 text-blue-500 block">
          Mitologias
        </span>
      </h1>
      <p className="text-center font-medium text-base max-lg:text-sm lg:max-w-[80%]">
        Está pronto para inciar uma jornada pelas mitologias dos povos:
        <span className="mx-1 font-bold">astecas, maias, incas e gregos</span>?
      </p>
      <div className="animate-bounce mt-10 bg-blue-500 p-2 flex items-center justify-center text-white rounded-full"><FaArrowDown /></div>
    </section>
  );
}
