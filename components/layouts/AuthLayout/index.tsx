import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/*
 * TODO
 *  - Err handling While loading
 *  - Make a floating err indicator type stuff
 */
export default function AuthLayout({ children }: Props) {
  return <div className="z-30 absolute w-screen min-h-screen flex justify-center">{children}</div>;
}
