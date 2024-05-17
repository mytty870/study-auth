import { getServerSession } from "@/lib/auth"
import { notFound } from "next/navigation"

export default async function Page() {
  const session = await getServerSession()

  if (!session || !session.user) {
    notFound()
  }

  return (
    <div>Dashboard Page</div>
  )
}