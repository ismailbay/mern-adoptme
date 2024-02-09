import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch("/api/auth/login", {
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
      <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <div className="flex gap-2 mt-3 justify-end">
        <p>Noch kein Konto?</p>
        <Link to={"/signup"}>
          <span className="text-sky-700">Hier registrieren.</span>
        </Link>
      </div>
    </div>
  );
}
