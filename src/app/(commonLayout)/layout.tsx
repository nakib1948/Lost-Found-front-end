"use client";

import { isLoggedIn } from "@/services/authService";
import { useRouter } from "next/navigation";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }

  return <div className="min-h-screen">{children}</div>;
};

export default CommonLayout;
