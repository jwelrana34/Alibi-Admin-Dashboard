import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/alibiLogo.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/dashboard/overview");
  };

  return (
    <div className="min-h-screen bg-[#10141D] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#17202C] space-y-6 text-[#F5F5F5] px-6 sm:px-12 md:px-24 pt-8 pb-12 sm:pb-16 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img
              width={80}
              height={80}
              className="rounded"
              src={logo}
              alt="Alibi Logo"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wider text-center">
            ALIBI
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative mt-4">
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              className="peer w-full bg-transparent text-[#F5F5F5] border border-[#F5F5F5] rounded-md px-4 pt-6 pb-2 focus:outline-none focus:border-[#F2B100] text-lg"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-3 px-1 bg-[#17202C] text-[#F5F5F5] text-sm transition-all duration-200 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#F5F5F5]
               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F5F5F5]"
            >
              Email
            </label>
          </div>
          {/* Password */}
          <div className="relative mt-4">
            <input
              type="password"
              id="password"
              placeholder=" "
              required
              className="peer w-full bg-transparent text-white border border-[#F5F5F5] rounded-md px-4 pt-6 pb-2 focus:outline-none focus:border-[#F2B100] text-lg"
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-3 px-1 bg-[#17202C] text-[#F5F5F5] text-sm transition-all duration-200 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#F5F5F5]
               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F5F5F5]"
            >
              Password
            </label>
          </div>
          {/* 2FA code */}
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              id="2ba"
              placeholder=" "
              className="no-spinner peer w-full bg-transparent text-white border border-[#F5F5F5] rounded-md px-4 pt-6 pb-2 focus:outline-none focus:border-[#F2B100] text-lg"
            />
            <label
              htmlFor="2ba"
              className="absolute left-3 -top-3 px-1 bg-[#17202C] text-[#F5F5F5] text-sm transition-all duration-200 
               peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:text-[#F5F5F5]
               peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F5F5F5] cursor-text"
            >
              2FA Code
            </label>
            <Link
              to="/password_recovery"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-sm sm:text-md text-gray-400 hover:underline transition-all duration-300"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#F2B100] text-[#F5F5F5] hover:scale-[1.03] transition duration-300 py-3 rounded-md font-semibold cursor-pointer"
          >
            Log In
          </button>

          {/* Role Dropdown */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-transparent border border-[#F5F5F5] rounded-md px-4 py-3 appearance-none text-white focus:outline-none cursor-pointer"
            >
              <option className="text-black cursor-pointer" value="Admin">
                Admin
              </option>
              <option className="text-black cursor-pointer" value="Supervisor">
                Supervisor
              </option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F5F5F5] pointer-events-none" />
          </div>
        </form>
      </div>
    </div>
  );
}
