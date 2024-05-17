import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await getServerSession()

  console.log(session)

  if (!session || !session.user) {
    redirect('/login')
  }

  if (session.user.displayName) {
    redirect(`/${session.user.displayName}`)
  }

  return (
    <div>Init Page</div>
  )
}