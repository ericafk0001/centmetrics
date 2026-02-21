"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const signInWithGitHub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="w-full max-w-sm rounded-2xl bg-gray-900 p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Sign In
        </h1>
        <div className="flex flex-col gap-3">
          <button
            onClick={signInWithGitHub}
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-4 py-3 text-white hover:bg-gray-700 transition"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-500 transition"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
