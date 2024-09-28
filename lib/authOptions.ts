import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // Redirect to the dashboard after login
    async redirect({ url }) {
      return url === "/" ? "/dashboard" : url; // Always redirect to dashboard after login
    },
    // Ensure session persists
    async session({ session, user }) {
      session.user = user;
      return session; // Make sure to return the session object
    }
  },
};
