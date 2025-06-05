import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext.js";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getCurrentProblemId = () => {
    const pathParts = window.location.pathname.split("/");
    return parseInt(pathParts[pathParts.length - 1], 10); // Get the last part of the path and convert to number
  };

  const prevQuestion = () => {
    const currentId = getCurrentProblemId();
    if (currentId > 1) {
      navigate(`/problems/${currentId - 1}`);
    } else {
      navigate(`/problems/10`)
    }
  };
  const nextQuestion = () => {
    const currentId = getCurrentProblemId();
    if (currentId === 10) {
      navigate(`/problems/1`);
    } else {
      navigate(`/problems/${currentId + 1}`)
    }
  };

  return (
    <>
      <div className="bg-[#282828] p-2 text-xl">
        <nav
          className={`flex ${
            !pathname.includes("problems")
              ? "md:mx-auto md:w-[60%] my-0  "
              : "mx-4"
          } justify-between`}
        >
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
            {pathname.includes("/problems") && (
              <div className="flex gap-2 ml-4 hover:bg-[#393939] ">
                <MdKeyboardArrowLeft
                  size={35}
                  className="cursor-pointer"
                  onClick={prevQuestion}
                />
                <div className="border-r-2 border-[#6b6a6a]"></div>
                <MdKeyboardArrowRight
                  size={35}
                  className="cursor-pointer"
                  onClick={nextQuestion}
                />
              </div>
            )}
          </div>

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
    </>
  );
}
