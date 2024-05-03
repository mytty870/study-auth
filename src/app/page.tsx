import { useSession, signIn, signOut } from 'next-auth/react';
import { getServerSession } from "@/lib/auth";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from './components/LogoutButton';


export default async function Home() {
  const session = await getServerSession()
  console.log(session)

  return (
    <>
      {session ? (
        <div>aaa</div>
      ): (
    <LoginButton />
      )}
      {session ? (
        <LogoutButton />
      ) : (
        <div>bbb</div>
      )}
    </>
  );
}
