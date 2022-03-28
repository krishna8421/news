import { useEffect, useState, useContext, createContext, ReactNode } from "react";
import { auth, db } from "@lib/firebase/client/";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Cookie from "js-cookie";
import { User } from "@firebase/auth-types";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

interface IAuthContext {
  user: User | null;
  loading: boolean;
  isAuth: boolean;
  isEditor: boolean;
  uid: null | string;
  signOutUser: () => void;
}

interface Props {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  isAuth: false,
  isEditor: false,
  uid: null,
  signOutUser: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [isEditor, setIsEditor] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const route = useRouter();

  /*
   * Check if user the auth state has changes and update the state
   */
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        setUid(null);
        setIsAuth(false);
        Cookie.set("token", "");
        setLoading(false);
        return;
      }
      setUser(user);
      setUid(user.uid);
      setIsAuth(true);
      const token = await user.getIdToken();
      Cookie.set("token", token);
      /**
       * Check if the user is an editor
       */
      const UserDocRef = doc(db, "users", user.uid);
      const UserData = await getDoc(UserDocRef);
      const isEditor = UserData.data()?.isEditor || false;
      setIsEditor(isEditor);
      setLoading(false);
    });
  }, []);

  /*
   * Refreshes the token every 10 minutes
   */
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
    setUser(null);
    setIsAuth(false);
    route.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuth, isEditor, signOutUser, uid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
