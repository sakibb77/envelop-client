import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="app container mx-auto">
      <div className="upperleavel-contents min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path={"/"}
            element={!user ? <Navigate to={"/login"} /> : <Chat />}
          />
          <Route
            path={"/login"}
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path={"/register"}
            element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route path={"*"} element={<Navigate to={"/"} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
