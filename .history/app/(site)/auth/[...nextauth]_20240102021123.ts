import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


export const authOptions : AuthOptions = {
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email'},
                password: { label: 'Password', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing credentials')
                }
                const user = await fetch('http://localhost:4000/api/users/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify(credentials)
                })
                if (!user.ok) {
                    throw new Error('Invalid credentials')
                }
                return await user.json()
            }
        })
    ],
    pages: {
        signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    }
}