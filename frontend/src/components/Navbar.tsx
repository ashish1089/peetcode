import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";

export default function Navbar() {
  const user = useContext(AuthContext);

  return (
    <div className="bg-[#282828] p-2 text-xl">
      <nav className="flex md:mx-auto md:w-[60%] my-0 justify-between">
        <div className=" flex justify-center items-center">
          <Link className="" to={"/"}>
            <div className="flex justify-center items-center">
              <img
                className="w-8 mr-1"
                src="https://user-images.githubusercontent.com/63964149/152531278-5e01909d-0c2e-412a-8acc-4a06863c244d.png"
                alt="logo"
              />
              <p>NeetCode</p>
            </div>
          </Link>
        </div>

        <div className="flex gap-4 grow px-2 items-center "></div>
        <div className="">
          {user?.profile ? (
            <div className="flex justify-center items-center gap-4 text-[#9f9a9a]">
              <p>{user.profile.username}</p>
              <p
                className="cursor-pointer rounded-[8px] border-gray-700 bg-[#ffa1161f] text-[#ffa116] px-2 py-1"
                onClick={user?.logout}
              >
                Log out
              </p>
            </div>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <Link to={"/signup"} className=" hover:text-slate-300">
                Register
              </Link>
              <span className="text-[#9f9a9a]">or</span>
              <Link
                to={"/login"}
                className="rounded-[8px] border-gray-700 bg-[#ffa1161f] text-[#ffa116] px-2 py-1 hover:bg-[#ffa21648]"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
