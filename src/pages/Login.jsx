import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex h-screen justify-center bg-gray-100">
            <div className="w-80 bg-white shadow-lg flex flex-col  h-full p-6">
                <h1 className="text-xl font-bold text-gray-900">
                    Signin to your <br /> PopX account
                </h1>

                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                <div className="mt-4">
                    <label className="text-sm font-semibold text-purple-600">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full p-2 border rounded-md mt-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="text-sm font-semibold text-purple-600 mt-4">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full p-2 border rounded-md mt-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className={`w-full py-2 mt-4 rounded-md font-semibold ${email && password ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-300 text-gray-500"
                            }`}
                        disabled={!email || !password}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
