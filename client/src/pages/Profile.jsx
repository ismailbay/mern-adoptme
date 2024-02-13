import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailed,
  logoutStart,
  logoutFailed,
  logoutSuccess,
} from "../redux/user/userSlice";

export default function Profile() {
  const [formData, setFormData] = useState({});
  const [updated, setUpdated] = useState(false);
  const { loading, error, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      dispatch(logoutStart());
      const res = await fetch("/api/auth/logout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(logoutFailed(data));
        return;
      }
      dispatch(logoutSuccess(data));
      navigate("/");
    } catch (e) {
      dispatch(logoutFailed(e.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/users/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(updateFailed(data));
        return;
      }

      dispatch(updateSuccess(data));
      setUpdated(true);
    } catch (e) {
      dispatch(updateFailed(e.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7">Konto bearbeiten</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <input
            required
            type="text"
            defaultValue={currentUser.firstname}
            className="border p-2 rounded-md"
            id="firstname"
            onChange={handleChange}
          ></input>
          <input
            required
            type="text"
            defaultValue={currentUser.lastname}
            className="border p-2 rounded-md"
            id="lastname"
            onChange={handleChange}
          ></input>
        </div>
        <input
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
          {loading ? "..." : "Speichern"}
        </button>
      </form>
      <div className="flex gap-2 mt-3 justify-end">
        <Link to={"/logout"}>
          <span className="text-sky-700" onClick={handleLogout}>
            Ausloggen
          </span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">{error.message}</p>}
      {updated && (
        <p className="text-green-700 mt-5">Änderungen wurden gespeichert.</p>
      )}
    </div>
  );
}
