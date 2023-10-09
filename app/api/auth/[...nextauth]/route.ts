import NextAuth, {AuthOptions} from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
    }
}

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            NEXTAUTH_SECRET: string
            AUTH_GITHUB_ID: string
            AUTH_GITHUB_SECRET: string
            AUTH_GOOGLE_ID: string
            AUTH_GOOGLE_SECRET: string
        }
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}