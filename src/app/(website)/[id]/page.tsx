import { notFound } from "next/navigation"

export default async function Page({ params}: { params: {id: string}}) {
  const id = params.id

  const data = await prisma?.user.findFirst({
    where: { userName: id }
  })

  console.log(data)
  if (!data) {
    notFound()
  }


  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.userName}</p>
    </div>
  )

}