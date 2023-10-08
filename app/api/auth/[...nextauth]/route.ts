import NextAuth, {AuthOptions} from "next-auth";
// import {PrismaAdapter} from "@auth/prisma-adapter";
// import {PrismaClient} from "@prisma/client";
// import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
    ],
    // session: {strategy: 'jwt'},
    // callbacks: {
    //     async jwt({ token, account }) {
    //         // Persist the OAuth access_token to the token right after signin
    //         if (account) {
    //             token.accessToken = account.access_token
    //         }
    //         return token
    //     },
    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token from a provider.
    //         session.accessToken = token.accessToken
    //         return session
    //     }
    // }
    pages: {
        signIn: '/login',
    }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}