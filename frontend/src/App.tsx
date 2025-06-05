import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Problem from "./components/Problem";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/problems/:id" element={<Problem />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
