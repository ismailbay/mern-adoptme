import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Registrieren</h1>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Benutzername"
          className="border p-2 rounded-md"
          id="username"
        ></input>
        <input
          type="email"
          placeholder="E-Mail Adresse"
          className="border p-2 rounded-md"
          id="email"
        ></input>
        <input
          type="password"
          placeholder="Passwort"
          className="border p-2 rounded-md"
          id="password"
        ></input>
        <button className="bg-sky-950 p-3 text-white rounded-md hover:opacity-90 disabled:opacity-30">
          Registrieren
        </button>
      </form>
      <div className="flex gap-2 mt-3 justify-end">
        <p>Bereits registriert?</p>
        <Link to={"/login"}>
          <span className="text-sky-700">Zum Login</span>
        </Link>
      </div>
    </div>
  );
}
