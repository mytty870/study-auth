import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma} from "@/lib/prisma";
import { Adapter, AdapterUser } from "next-auth/adapters";

export const customPrismaAdapter: Adapter = {
  ...PrismaAdapter(prisma),
  createUser: async (data) => {
    const { image, ...userData} = data

    const user = await prisma.user.create({
      data: {
        ...userData,
        profile: {
          create: {
            avatarImageUrl: image
          },
        },
      },
      include: { profile: true}
    })
    return user as AdapterUser
  }
}