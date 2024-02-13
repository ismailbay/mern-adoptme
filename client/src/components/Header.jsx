import { FaPaw, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const getInitials = (currentUser) => {
    if (currentUser && currentUser.firstname && currentUser.lastname) {
      return currentUser.firstname[0] + currentUser.lastname[0];
    }
    return "";
  };

  return (
    <header className="bg-sky-950 shadow-md text-sky-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-3xl flex flex-wrap items-center">
            <FaPaw className="text-sky-100" />
            <span className="text-sky-200">Adopt</span>
            <span className="text-sky-400">Me</span>
          </h1>
        </Link>
        <form className="bg-sky-900 p-2 rounded-md flex items-center">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-72"
            placeholder="Suche..."
          />
          <FaSearch className="text-sky-100" />
        </form>
        <ul className="flex gap-4">
          <Link to="/about">
            <li>Über uns</li>
          </Link>
          <Link to="/profile">
            {currentUser ? getInitials(currentUser) : <li>Login</li>}
          </Link>
        </ul>
      </div>
    </header>
  );
}
