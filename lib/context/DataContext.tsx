import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useAuth } from "@lib/context/AuthContext";
import { auth, db, storage } from "@firebase/client";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile, User } from "firebase/auth";

interface Props {
  children: ReactNode;
}
interface IDataType {
  name: string;
  updateName: (name: string, uid: string) => void;
  designation: string;
  updateDesignation: (designation: string, uid: string) => Promise<void>;
  bio: string;
  updateBio: (bio: string, uid: string) => void;
  profileImage: string;
  updateProfileImage: (file: File, uid: string) => Promise<void>;
  likedArticles: string[];
  updateLikedArticles: (likedArticleID: string, uid: string) => Promise<void>;
  likedArticlesCount: number;
  preferencesTags: string[];
  updatePreferencesTags: (preferencesTag: string, uid: string) => Promise<void>;
  isEditor: boolean;
  updateIsEditor: (isEditor: boolean, uid: string) => void;
  articles: string[];
  updateArticles: (articleID: string, uid: string) => Promise<void>;
  getArticle: (articleID: string) => void;
  draftArticles: string[];
  updateDraftArticles: (draftArticleId: string, uid: string) => Promise<void>;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const DataContext = createContext<IDataType>({
  name: "",
  updateName: () => {},
  designation: "",
  updateDesignation: async () => {},
  bio: "",
  updateBio: () => {},
  profileImage: "",
  updateProfileImage: async () => {},
  likedArticles: [],
  updateLikedArticles: async () => {},
  likedArticlesCount: 0,
  preferencesTags: [],
  updatePreferencesTags: async () => {},
  isEditor: false,
  updateIsEditor: () => {},
  articles: [],
  updateArticles: async () => {},
  getArticle: () => {},
  draftArticles: [],
  updateDraftArticles: async () => {},
  loading: true,
  setLoading: () => {},
});

export const DataProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [likedArticles, setLikedArticles] = useState<string[]>([]);
  const [likedArticlesCount, setLikedArticlesCount] = useState(0);
  const [preferencesTags, setPreferencesTags] = useState<string[]>([]);
  const [isEditor, setIsEditor] = useState(false);
  const [articles, setArticles] = useState<string[]>([]);
  const [draftArticles, setDraftArticles] = useState<string[]>([]);

  const { uid, loading: loadingUser } = useAuth();

  useEffect(() => {
    setLoading(true);
    const loadDataFromFireBase = async (uid: string) => {
      const UserDocRef = doc(db, "users", uid as string);
      const UserData = await getDoc(UserDocRef);
      const isEditor = UserData.data()?.isEditor || false;
      const name = UserData.data()?.name || "";
      const designation = UserData.data()?.designation || "";
      const bio = UserData.data()?.bio || "";
      const profileImage = UserData.data()?.profileImage || "";
      const likedArticles = UserData.data()?.likedArticles || [];
      const likedArticlesCount = likedArticles.length || 0;
      const preferencesTags = UserData.data()?.preferencesTags || [];
      const articles = UserData.data()?.articles || [];
      const draftArticles = UserData.data()?.draftArticles || [];

      setIsEditor(isEditor);
      setName(name);
      setDesignation(designation);
      setBio(bio);
      setProfileImage(profileImage);
      setLikedArticles(likedArticles);
      setLikedArticlesCount(likedArticlesCount);
      setPreferencesTags(preferencesTags);
      setArticles(articles);
      setDraftArticles(draftArticles);
    };
    if (!loadingUser && uid) {
      loadDataFromFireBase(uid).then();
      setLoading(false);
    }
    setLoading(false);
  }, [loadingUser, uid]);

  const uploadImage = async (file: File, filename: string, uid: string): Promise<string> => {
    const storageRef = ref(storage, `/users/${uid}/${filename}.png`);
    try {
      const uploadTask = await uploadBytes(storageRef, file);
      return await getDownloadURL(uploadTask.ref);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const getArticle = async (articleID: string) => {
    const ArticleDocRef = doc(db, "articles", articleID);
    const articleData = await getDoc(ArticleDocRef);
    return articleData.data();
  };

  const updateName = async (name: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    setName(name);
    await updateDoc(UserDocRef, {
      name,
    });
  };
  const updateDesignation = async (designation: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    setDesignation(designation);
    await updateDoc(UserDocRef, {
      designation,
    });
  };
  const updateBio = async (bio: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    setBio(bio);
    await updateDoc(UserDocRef, {
      bio,
    });
  };
  const updateProfileImage = async (file: File, uid: string) => {
    const filename = "profile";
    const profileImageUrl = await uploadImage(file, filename, uid);
    setProfileImage(profileImageUrl);
    await updateProfile(auth.currentUser as User, {
      photoURL: profileImageUrl,
    });
  };
  const updateLikedArticlesCount = async (uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    setLikedArticlesCount(likedArticles.length);
    await updateDoc(UserDocRef, {
      likedArticlesCount,
    });
  };
  const updateIsEditor = async (isEditor: boolean, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    setIsEditor(isEditor);
    await updateDoc(UserDocRef, {
      isEditor,
    });
  };
  const updateLikedArticles = async (likedArticleID: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    const UpdatedLikedArticles = [...likedArticles, likedArticleID];
    setLikedArticles(UpdatedLikedArticles);
    await updateDoc(UserDocRef, {
      UpdatedLikedArticles,
    });
    await updateLikedArticlesCount(uid);
  };
  const updateArticles = async (articleID: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    const UpdatedArticles = [...articles, articleID];
    setArticles(UpdatedArticles);
    await updateDoc(UserDocRef, {
      articles: UpdatedArticles,
    });
  };
  const updateDraftArticles = async (draftArticleId: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    const UpdatedDraftArticles = [...draftArticles, draftArticleId];
    setDraftArticles(UpdatedDraftArticles);
    await updateDoc(UserDocRef, {
      draftArticles: UpdatedDraftArticles,
    });
  };
  const updatePreferencesTags = async (preferencesTag: string, uid: string) => {
    const UserDocRef = doc(db, "users", uid as string);
    const UpdatedPreferencesTag = [...preferencesTags, preferencesTag];
    setPreferencesTags(UpdatedPreferencesTag);
    await updateDoc(UserDocRef, {
      preferencesTags: UpdatedPreferencesTag,
    });
  };

  // console.log("Context: "+loading);
  return (
    <DataContext.Provider
      value={{
        name,
        updateName,
        designation,
        updateDesignation,
        bio,
        updateBio,
        profileImage,
        updateProfileImage,
        likedArticles,
        updateLikedArticles,
        likedArticlesCount,
        preferencesTags,
        updatePreferencesTags,
        isEditor,
        updateIsEditor,
        articles,
        updateArticles,
        draftArticles,
        updateDraftArticles,
        loading,
        setLoading,
        getArticle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
