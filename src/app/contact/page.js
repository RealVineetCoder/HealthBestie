import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, BrainCircuit, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact AI Health Bestie</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="mr-2" />
                AI Chatbot for Mental Health
              </CardTitle>
              <CardDescription>
                Our AI-powered chatbot is available 24/7 to provide support and guidance for various mental health concerns.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BrainCircuit className="mr-2" />
                Mental Health Assessments
              </CardTitle>
              <CardDescription>
                Take our quick assessments to gain insights into your mental well-being.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sleep Disorder Assessment</li>
                <li>Mania Assessment</li>
                <li>Depression Assessment</li>
                <li>Anxiety Assessment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below, and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Your Name" required aria-label="Your Name" />
                <Input type="email" placeholder="Your Email" required aria-label="Your Email" />
                <Textarea placeholder="Your Message" required aria-label="Your Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>contact@aihealthbestie.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>123 Mental Health Street, Wellness City, 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

