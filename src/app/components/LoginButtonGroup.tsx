'use client'

import { Button } from "@nextui-org/react"
import { signIn } from "next-auth/react"
import { GoogleIcon } from "./icons/GoogleIcon"
import { GithubIcon } from "./icons/GithubIcon"

export const LoginButtonGroup = () => {

  return (
    <div className="flex flex-col space-y-3">
      {/* <button onClick={() => signIn('google', { callbackUrl: "http://localhost:3000/dashboard"})}>Google</button>
      <button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000/dashboard"})}>Github</button> */}
      <Button onClick={() => signIn('google', { callbackUrl: "http://localhost:3000/dashboard"})} color="default" variant="bordered" radius="full" startContent={<GoogleIcon />}>Login with Google</Button>
      <Button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000/dashboard"})} color="default" variant="bordered" radius="full" startContent={<GithubIcon width="1.4rem" height="1.4rem" />}>Login With Github</Button>
      <Button>
        <span className="inline-flex items-center">
          <GoogleIcon />
        </span>
        Login with Google
      </Button>
    </div>
  )
}
