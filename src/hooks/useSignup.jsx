import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsLoading(true);

    const res = await fetch("http://localhost:5000/api/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(data);
    }

    if (res.ok) {
      setIsLoading(false);
      setError(null);
      //update authContext
      dispatch({ type: "LOGIN", payload: data });

      //update ls
      localStorage.setItem("user", JSON.stringify(data));
    }
  };
  return {
    signup,
    isLoading,
    error,
  };
};
