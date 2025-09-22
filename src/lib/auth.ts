import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // This is where you'll check credentials against your database
        // For now, we'll use a simple demo user
        if (credentials?.email === 'demo@cybersecurity.com' && credentials?.password === 'demo123') {
          return {
            id: '1',
            email: 'demo@cybersecurity.com',
            name: 'Demo User',
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
})
