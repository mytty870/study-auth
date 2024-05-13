import { useSession, signIn, signOut } from 'next-auth/react';
import { getServerSession } from "@/lib/auth";
import { LoginContent } from './components/LoginContent';
import Link from 'next/link';
import { Button } from './components/Button';


export default async function Home() {
  const session = await getServerSession()

  return (
    <>
      {/* {session ? (
        <div>aaa</div>
      ): (
    <LoginButton />
      )}
      {session ? (
        <LogoutButton />
      ) : (
        <div>bbb</div>
      )} */}
      <div className="text-5xl">HOMEページ</div>
      {(!session || !session?.user) && (
        <Button>
        <Link href="/login">ログイン</Link>
        </Button>
      )}
    </>
  );
}
