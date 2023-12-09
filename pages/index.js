import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/layout";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return <Layout></Layout>;
  }
  return (
    <div className=" w-screen h-screen bg-black flex justify-center items-center">
      <button
        className=" p-3 rounded-lg bg-white text-black"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </div>
  );
}
