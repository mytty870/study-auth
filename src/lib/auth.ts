import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import {prisma} from "@/lib/prisma"
import { getServerSession as originalGetServerSession } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
    })
  ],
  pages: {
    // 認証許可が必要なページにアクセスした際のリダイレクト先
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {

      const dbUser = await prisma.user.findFirst({
        where: { email: token.email},
        include: { profile: true}
      })
      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        displayNmae: dbUser.profile?.displayName,
      }
    },
    async session({ session, token }) {
      if (session.user) {
          session.user.id = token.id as string;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
          session.user.displayName = token.userName as string;
      }
      return session
    },
  },
}

export const getServerSession = async () => {
  return originalGetServerSession(authOptions)
}