import { Link, useNavigate } from "react-router-dom";
import { User } from "./Login";
import { ChangeEvent, FormEvent, useState } from "react";
import { BASE_URL } from "../constant";

export default function Signup() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev: User) => ({ ...prev, [name]: value } as User));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        username: user.username,
      }),
    });
    const json = await response.json();
    alert(json.msg);
    navigate("/login");
  };
  return (
    <div className="flex justify-center mt-20 h-fit">
      <div className="w-[25rem] h-fit bg-white">
        <div className="flex flex-col  p-8 gap-4 text-center">
          <div className="flex flex-col items-center">
            <img
              className="w-12"
              src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png"
              alt="logo"
            />
            <h1 className="text-4xl">NeetCode</h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 mt-8">
              <input
                className="outline-none px-4 py-2 border border-gray-400 placeholder:text-xl text-xl"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={user.username}
                name="username"
              />
              <input
                className="outline-none px-4 py-2 border border-gray-400 placeholder:text-xl text-xl"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <input
                className="outline-none px-4 py-2 border border-gray-400 placeholder:text-xl text-xl"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                name="password"
              />
            </div>
            <button className="text-xl bg-[#4D6570] text-white py-1 px-2 mt-4">
              Sign up
            </button>
          </form>
          <p className="text-xl text-gray-400">
            Have an account?
            <Link className="ml-1 text-[#4D6570]" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
