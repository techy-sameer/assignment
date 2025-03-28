import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="w-80 bg-white shadow-lg flex flex-col h-full p-6">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900">
          Create your <br /> PopX account
        </h1>

        {/* Form Fields */}
        <div className="mt-4">
          {[
            { name: "fullName", label: "Full Name" },
            { name: "phone", label: "Phone Number" },
            { name: "email", label: "Email Address" },
            { name: "password", label: "Password" },
            { name: "company", label: "Company Name" },
          ].map(({ name, label }, index) => (
            <div key={index} className="mt-3">
              <label className="text-sm font-semibold text-purple-600">
                {label} *
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                name={name}
                placeholder={`Enter ${label}`}
                className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData[name]}
                onChange={handleChange}
              />
            </div>
          ))}

          {/* Radio Buttons */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-purple-600">Are you an Agency? *</p>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="mr-2 accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="mr-2 accent-purple-600"
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-16">
          <button className="w-full py-2 mt-4 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition">
            Create Account
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
