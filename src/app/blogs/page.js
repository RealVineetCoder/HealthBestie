import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 

export default function BlogPage() {
  const cards = [
    {
      title: "Understanding Mental Health",
      description:
        "Mental health is more than just the absence of mental illness. Learn about emotional, psychological, and social well-being.",
      link: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    },
    {
      title: "How to Manage Stress Effectively",
      description:
        "Stress can impact your mental and physical health. Explore ways to cope with stress and improve your well-being.",
      link: "https://kidshealth.org/en/teens/stress-tips.html",
    },
    {
      title: "The Importance of Sleep for Mental Health",
      description:
        "Quality sleep is essential for mental health. Understand the connection between sleep and emotional well-being.",
      link: "https://www.columbiapsychiatry.org/news/how-sleep-deprivation-affects-your-mental-health",
    },
    {
      title: "The Role of Nutrition in Mental Wellness",
      description:
        "Discover how nutrition affects brain health and how you can optimize your diet to support mental wellness.",
      link: "https://www.mcleanhospital.org/essential/nutrition#:~:text=For%20this%20reason%2C%20there%20is,an%20otherwise%20mildly%20stressful%20situation.",
    },
    {
      title: "Breaking the Stigma Around Mental Health",
      description:
        "Learn about the stigma that surrounds mental health and how we can work towards greater understanding and support.",
      link: "https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/mental-health/art-20046477#:~:text=Reach%20out%20to%20people%20you,say%20%22I%20have%20schizophrenia.%22",
    },
  ];
    return (
      <main className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto w-4/5">
          <h1 className="text-3xl font-bold text-center mb-8">Mental Health Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild>
                    <Link href={card.link}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    )
}