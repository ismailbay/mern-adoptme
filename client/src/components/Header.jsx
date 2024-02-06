import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-3xl flex flex-wrap">
            <span className="text-indigo-400">Adopt</span>
            <span className="text-indigo-900">Me</span>
          </h1>
        </Link>
        <form className="bg-indigo-50 p-2 rounded-md flex items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-96"
            placeholder="Suche..."
          />
          <FaSearch className="text-indigo-300" />
        </form>
        <ul className="flex gap-4">
          <Link to="/about">
            <li>Über uns</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
