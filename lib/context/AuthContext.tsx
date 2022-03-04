import { useEffect, useState, useContext, createContext } from "react";
import { auth } from "@lib/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Cookie from "js-cookie";
import { User } from "@firebase/auth-types";

interface IAuthContext {
  user: User | null;
  loading: boolean;
  isAuth: boolean;
  error: string | null;
  setError: (error: string | null) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  isAuth: false,
  error: null,
  setError: () => {},
});

// @ts-ignore
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        setIsAuth(false);
        Cookie.set("token", "");
        setLoading(false);
        return;
      }
      setUser(user);
      setIsAuth(true);
      const token = await user.getIdToken();
      Cookie.set("token", token);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuth, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
