'use client'

import { signIn } from "next-auth/react"
import { GoogleIcon } from "./icons/GoogleIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { Button } from "./Button"

export const LoginButtonGroup = () => {
  const callbackUrl = 'http://localhost:3000/auth/init'

  return (
    <>
    <div className="flex flex-col space-y-3">
      {/* <button onClick={() => signIn('google', { callbackUrl: "http://localhost:3000/dashboard"})}>Google</button>
      <button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000/dashboard"})}>Github</button> */}
      {/* <Button onClick={() => signIn('google', { callbackUrl: "http://localhost:3000/dashboard"})} color="default" variant="bordered" radius="full" startContent={<GoogleIcon />}>Login with Google</Button>
      <Button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000/dashboard"})} color="default" variant="bordered" radius="full" startContent={<GithubIcon width="1.4rem" height="1.4rem" />}>Login With Github</Button> */}
      {/* <NextButton fullWidth>
        <span className="inline-flex items-center">
          <GoogleIcon />
        </span>
        Login with Google
      </NextButton> */}
      <Button onClick={() => signIn('google', {callbackUrl: callbackUrl})} startContent={<GoogleIcon />} variant="defaultOutline" radius="full">
        Login with Google
      </Button>
      <Button onClick={() => signIn('github', {callbackUrl: callbackUrl})} startContent={<GithubIcon />} variant="defaultOutline" radius="full">
        Login with Github
      </Button>
    </div>
    </>
  )
}
