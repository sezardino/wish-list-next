import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
