import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center w-full max-w-md">

        <h1 className="text-4xl font-bold mb-4">
          Dashboard 🚀
        </h1>

        <p className="text-gray-600 mb-8">
          You are successfully logged in.
        </p>

        <button
          onClick={logout}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}