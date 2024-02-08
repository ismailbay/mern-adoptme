import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Registrieren</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Vorname"
            className="border p-2 rounded-md"
            id="firstname"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            placeholder="Nachname"
            className="border p-2 rounded-md"
            id="lastname"
            onChange={handleChange}
          ></input>
        </div>
        <input
          type="email"
          placeholder="E-Mail Adresse"
          className="border p-2 rounded-md"
          id="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Passwort"
          className="border p-2 rounded-md"
          id="password"
          onChange={handleChange}
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
