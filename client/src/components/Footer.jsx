import { FaPaw } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full bg-sky-950 text-sky-100">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://github.com/ismailbay" className="hover:underline">
            AdoptME™
          </a>
          . Alle Rechte vorbehalten.
        </span>
        <ul className="flex flex-wrap items-end mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Impressum
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
