import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ICategoryContext {
  category: string;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<ICategoryContext>({
  category: "recommended",
  setCategory: () => {},
});

export const CategoryProvider = ({ children }: Props) => {
  const [category, setCategory] = useState("recommended");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
