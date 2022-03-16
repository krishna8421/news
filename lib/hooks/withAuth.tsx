import { useAuth } from "@lib/context/AuthContext";
import { ComponentType } from "react";
import PageLoading from "@components/PageLoading";
import { useRouter } from "next/router";

export function withAuth(Component: ComponentType) {
  return function WithAuth(props: any) {
    const { isAuth, loading } = useAuth();
    const router = useRouter();
    if (!loading && !isAuth) {
      typeof window !== "undefined" && router.push("/");
      return <PageLoading />;
    }
    return <Component {...props} />;
  };
}
