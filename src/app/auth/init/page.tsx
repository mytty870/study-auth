import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/login')
  }

  if (session.user.userName) {
    redirect(`/${session.user.userName}`)
  }

  return (
    <div>Init Page</div>
  )
}