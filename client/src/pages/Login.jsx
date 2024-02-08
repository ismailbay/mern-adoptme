import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div>Login</div>
      <Link to={"/signup"}>
        <span className="text-sky-700">Registrieren</span>
      </Link>
    </div>
  );
}
