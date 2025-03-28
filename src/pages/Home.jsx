import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="w-80 bg-white shadow-lg flex flex-col justify-end h-full p-6">
        <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-4">
          <Link to="/signup">
            <button className="w-full py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full py-2 mt-2 bg-purple-200 text-purple-700 rounded-md font-semibold hover:bg-purple-300 transition">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
