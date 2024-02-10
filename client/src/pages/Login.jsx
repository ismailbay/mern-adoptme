import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setError({ message: data.message });
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (e) {
      setLoading(false);
      setError({ message: e.message });
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7">Einloggen</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          required={true}
          type="email"
          placeholder="E-Mail Adresse"
          className="border p-2 rounded-md"
          id="email"
          onChange={handleChange}
        ></input>
        <input
          required={true}
          type="password"
          placeholder="Passwort"
          className="border p-2 rounded-md"
          id="password"
          onChange={handleChange}
        ></input>
        <button
          disabled={loading}
          className="bg-sky-950 p-3 text-white rounded-md hover:opacity-90 disabled:opacity-30"
        >
          {loading ? "..." : "Login"}
        </button>
      </form>
      <div className="flex gap-2 mt-3 justify-end">
        <p>Noch kein Konto?</p>
        <Link to={"/signup"}>
          <span className="text-sky-700">Hier registrieren!</span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">{error.message}</p>}
    </div>
  );
}
