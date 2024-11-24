import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Lightbulb, Users } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Mental Health</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Mental Health</h2>
        <p className="mb-4">
          Mental health is an essential component of overall well-being, encompassing our emotional, psychological, and social welfare. It affects how we think, feel, and act, influencing our daily lives, relationships, and ability to handle stress.
        </p>
        <p className="mb-4">
          At AI Health Bestie, we believe that mental health is just as important as physical health. Our mission is to provide accessible, personalized support to help you maintain and improve your mental well-being.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Importance of Mental Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Brain className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Cognitive Function</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Good mental health enhances our ability to think clearly, make decisions, and solve problems effectively.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Emotional Well-being</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mental health influences our capacity to manage emotions, cope with life&apos;s challenges, and maintain a positive outlook.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Social Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Healthy mental states foster better relationships, improved communication, and stronger social bonds.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Lightbulb className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Personal Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Good mental health supports personal development, self-awareness, and the pursuit of meaningful goals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How AI Health Bestie Supports Your Mental Health</h2>
        <p className="mb-4">
          AI Health Bestie leverages advanced artificial intelligence to provide personalized mental health support. Our platform offers:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>24/7 access to AI-powered mental health assessments</li>
          <li>Customized coping strategies and self-care recommendations</li>
          <li>Mood tracking and analysis to identify patterns and triggers</li>
          <li>Guided meditation and mindfulness exercises</li>
          <li>Resources for professional help when needed</li>
        </ul>
        <p className="mb-4">
          While AI Health Bestie is a powerful tool for mental health support, it&apos;s important to remember that it&apos;s not a substitute for professional medical advice, diagnosis, or treatment. If you&apos;re experiencing severe mental health issues, please consult with a qualified healthcare provider.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Start Your Mental Health Journey Today</h2>
        <p className="mb-6">
          Take the first step towards better mental health with AI Health Bestie. Our personalized approach and advanced AI technology are here to support you every step of the way.
        </p>
        <Button asChild>
          <Link href="/signup">Get Started with AI Health Bestie</Link>
        </Button>
      </section>
    </main>
  )
}


