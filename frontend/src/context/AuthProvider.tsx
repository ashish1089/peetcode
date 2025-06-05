import { ReactNode, useEffect, useState } from "react";
import { BASE_URL } from "../constant";
import { UserContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export type Profile = {
  id: string;
  email: string;
  username: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);
  const navigate = useNavigate();

  const init = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(`${BASE_URL}/me`, {
          method: "GET",
          headers: { authorization: token },
        });
        const json = await response.json();
        // console.log(json);
        if (json.email) {
          setProfile(json);
        }
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      if (json.msg === "User not found") {
        alert("Signup first");
      }
      if (json.token) {
        localStorage.setItem("token", json.token);
        await init();
        navigate("/"); // Navigate to home or another page after login
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setProfile(undefined);
    // navigate('/login'); // Navigate to login or another page after logout
  };

  return (
    <UserContext.Provider value={{ profile, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
