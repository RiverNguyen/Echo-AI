"use client";

import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { Loader2 } from "lucide-react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <div className="flex flex-col gap-4 items-center justify-center min-h-svh">
            <Loader2 className="w-10 h-10 animate-spin" />
            <p>Loading...</p>
          </div>
        </AuthLayout>
      </AuthLoading>

      <Authenticated>{children}</Authenticated>

      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
