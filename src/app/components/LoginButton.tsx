'use client'

import { signIn } from "next-auth/react"

export const LoginButton = () => {

  return (
    <>
      <button onClick={() => signIn('google', { callbackUrl: "http://localhost:3000/dashboard"})}>Google</button>
      <button onClick={() => signIn('github', { callbackUrl: "http://localhost:3000/dashboard"})}>Github</button>
    </>
  )
}
