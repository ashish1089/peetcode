import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export type User = {
  username: string;
  email: string;
  password: string;
};

export default function Login() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });
  const authContext = useContext(AuthContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev: User) => ({ ...prev, [name]: value } as User));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (authContext?.login) {
      await authContext.login(user.email, user.password);
    }
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
              Login
            </button>
          </form>
          <p className="text-xl text-gray-400">
            Don't have an account?
            <Link className="ml-1 text-[#4D6570]" to={"/signup"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
