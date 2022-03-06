import { useEffect, useState, useContext, createContext, ReactNode } from "react";
import { auth } from "@lib/firebase/client/";
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
interface Props {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  isAuth: false,
  error: null,
  setError: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState<any>(null);

  /*
   * Check if user the auth state has changes and update the state
   */
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
  /*
   * Refreshes the token every 10 minutes
   */
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      console.log(await user?.getIdToken());
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuth, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
