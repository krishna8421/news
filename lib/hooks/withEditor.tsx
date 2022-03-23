import { useAuth } from "@lib/context/AuthContext";
import { ComponentType } from "react";
import PageLoading from "@components/PageLoading";
import { useRouter } from "next/router";

export function withEditor(Component: ComponentType) {
  return function WithEditor(props: any) {
    const { isAuth, loading, isEditor } = useAuth();
    const router = useRouter();
    if (!loading && (!isAuth || !isEditor)) {
      typeof window !== "undefined" && router.push("/");
      return <PageLoading />;
    }
    return <Component {...props} />;
  };
}
