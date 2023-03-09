import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app container mx-auto">
      <div className="upperleavel-contents min-h-screen">
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Chat />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"*"} element={<Navigate to={"/"} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
