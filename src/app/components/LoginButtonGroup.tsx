'use client'

import { signIn } from "next-auth/react"
import { GoogleIcon } from "./icons/GoogleIcon"
import { GithubIcon } from "./icons/GithubIcon"
import { Button } from "./Button"
import { Button as NextButton } from "@nextui-org/react"

export const LoginButtonGroup = () => {

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
      <Button startContent={<GoogleIcon />} variant="defaultOutline" radius="full">
        Login with Google
      </Button>
      <Button startContent={<GithubIcon />} variant="defaultOutline" radius="full">
        Login with Github
      </Button>
    </div>
    {/* <div>
      <Button fullWidth>aa</Button>
      <Button fullWidth>aa</Button>
    </div> */}
    </>
  )
}
