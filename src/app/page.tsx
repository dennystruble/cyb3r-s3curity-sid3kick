'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Brain, Target, ArrowRight } from 'lucide-react'

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleGetStarted = () => {
    if (session) {
      router.push('/dashboard')
    } else {
      router.push('/auth/signin')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="border-b border-gray-700 bg-gray-800/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-xl font-bold text-white">Cybersecurity Platform</h1>
          </div>
          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="text-gray-300">Loading...</div>
            ) : session ? (
              <>
                <span className="text-gray-300">Welcome, {session.user?.name}</span>
                <Button onClick={() => router.push('/dashboard')}>
                  Dashboard
                </Button>
              </>
            ) : (
              <Button onClick={() => router.push('/auth/signin')}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Master Cybersecurity with AI-Powered Learning
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn the latest cybersecurity skills through interactive lessons, 
            real-time AI assistance, and hands-on practice. From beginner to expert, 
            we've got you covered.
          </p>
          <Button 
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            {session ? 'Go to Dashboard' : 'Get Started'}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Comprehensive Curriculum</CardTitle>
              <CardDescription className="text-gray-300">
                From basic security concepts to advanced penetration testing techniques
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">AI-Powered Learning</CardTitle>
              <CardDescription className="text-gray-300">
                Get personalized help and explanations from our AI assistant 24/7
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Hands-On Practice</CardTitle>
              <CardDescription className="text-gray-300">
                Real-world scenarios and interactive labs to build practical skills
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gray-800/50 border-gray-700 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Ready to Start Your Journey?</CardTitle>
              <CardDescription className="text-gray-300">
                Join thousands of learners mastering cybersecurity with our platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleGetStarted}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {session ? 'Access Your Dashboard' : 'Create Free Account'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
