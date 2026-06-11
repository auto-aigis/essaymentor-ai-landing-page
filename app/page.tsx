"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Brain,
  Target,
  TrendingUp,
  BookOpen,
  CheckCircle,
  Zap,
  BarChart3,
  Repeat,
  PenTool,
  ArrowRight,
  Star,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Official Band Score Criteria",
      description:
        "Get scored using real IELTS, TOEFL, and GRE rubrics. See exactly where you stand on Task Achievement, Coherence, Lexical Resource, and Grammar.",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Pattern Memory Across Sessions",
      description:
        "Unlike generic AI, EssayMentor remembers your recurring mistakes. It tracks patterns across all your essays to identify deep-rooted habits.",
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Personalized Micro-Exercises",
      description:
        "Get targeted drills designed to fix YOUR specific weaknesses. No generic grammar exercises — only practice that moves your score up.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Measurable Score Improvement",
      description:
        "Track your band score progress over weeks and months. See visual charts showing improvement in each scoring criterion.",
    },
    {
      icon: <Repeat className="h-6 w-6 text-blue-600" />,
      title: "Weekly Improvement Plans",
      description:
        "Receive a structured weekly plan with practice prompts, targeted exercises, and review sessions tailored to your current level.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Teaching, Not Just Correcting",
      description:
        "Every piece of feedback explains WHY something is wrong and HOW to fix it permanently. Build lasting writing ability, not temporary fixes.",
    },
  ];

  const steps: Step[] = [
    {
      number: "01",
      title: "Submit Your Essay",
      description: "Paste or type your practice essay. Choose your target exam (IELTS, TOEFL, or GRE) and task type.",
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
    },
    {
      number: "02",
      title: "Get Instant Scored Feedback",
      description:
        "Receive a detailed band-score breakdown in seconds with specific annotations on every paragraph.",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
    },
    {
      number: "03",
      title: "Practice Your Weak Areas",
      description:
        "Work through personalized micro-exercises that target your exact patterns of mistakes.",
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
    {
      number: "04",
      title: "Watch Your Score Climb",
      description:
        "Track measurable improvement over time as the system adapts to your growing abilities.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Try EssayMentor with basic feedback",
      features: [
        "3 essay reviews per month",
        "Basic band score breakdown",
        "General improvement tips",
        "IELTS & TOEFL support",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Full coaching experience for serious learners",
      features: [
        "Unlimited essay reviews",
        "Detailed band score criteria",
        "Pattern memory across sessions",
        "Personalized micro-exercises",
        "Weekly improvement plans",
        "Progress tracking dashboard",
        "IELTS, TOEFL & GRE support",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Premium",
      price: "$39",
      period: "per month",
      description: "Maximum preparation for exam day",
      features: [
        "Everything in Pro",
        "Priority AI processing",
        "Advanced analytics & insights",
        "Mock exam simulations",
        "Vocabulary builder integration",
        "Email progress reports",
        "Priority support",
      ],
      highlighted: false,
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "How is EssayMentor different from Grammarly?",
      answer:
        "Grammarly corrects individual errors but doesn't teach you why mistakes happen or track patterns over time. EssayMentor scores your essays using official exam criteria, remembers your recurring weaknesses across sessions, and prescribes targeted practice to permanently fix those patterns. It's a writing coach, not just a spell checker.",
    },
    {
      question: "Does it really use official IELTS/TOEFL band criteria?",
      answer:
        "Yes. Our AI is trained on official scoring rubrics including Task Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy for IELTS, as well as equivalent criteria for TOEFL and GRE analytical writing.",
    },
    {
      question: "How quickly will I see band score improvement?",
      answer:
        "Most users see measurable improvement within 2-4 weeks of consistent practice. The key is following your personalized weekly plan and completing the micro-exercises targeting your specific weaknesses.",
    },
    {
      question: "Can I use it for all three exams — IELTS, TOEFL, and GRE?",
      answer:
        "Absolutely. You can switch between exam types at any time. Each exam has its own scoring criteria and task types, and EssayMentor adapts its feedback accordingly.",
    },
    {
      question: "Is my essay data private and secure?",
      answer:
        "Yes. Your essays are encrypted and stored securely. We never share your writing with third parties or use it to train models without your explicit consent.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">EssayMentor AI</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="/login">
                <Button variant="ghost" className="text-sm">
                  Sign In
                </Button>
              </a>
              <a href="/register">
                <Button className="text-sm bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                  How It Works
                </a>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                  Pricing
                </a>
                <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 py-2">
                  FAQ
                </a>
                <Separator />
                <div className="flex gap-3 pt-2">
                  <a href="/login">
                    <Button variant="outline" className="text-sm">
                      Sign In
                    </Button>
                  </a>
                  <a href="/register">
                    <Button className="text-sm bg-blue-600 hover:bg-blue-700">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
            <Star className="h-3.5 w-3.5 mr-1.5" />
            Trusted by 10,000+ IELTS & TOEFL students
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Your AI Writing Coach That{" "}
            <span className="text-blue-600">Actually Teaches</span> Essay Skills
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Not just corrections — real feedback that builds lasting writing ability. Get scored on official band criteria, track your patterns, and watch your IELTS/TOEFL/GRE score climb.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-base px-8 py-6">
                Start Improving For Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                See How It Works
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • 3 free essays per month • Cancel anytime
          </p>

          {/* Hero visual */}
          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">Band 7.5</div>
                <div className="text-sm text-gray-600 mt-1">Average score improvement</div>
                <div className="text-xs text-green-600 mt-2 font-medium">+1.5 bands in 8 weeks</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">47 Patterns</div>
                <div className="text-sm text-gray-600 mt-1">Weaknesses tracked per student</div>
                <div className="text-xs text-green-600 mt-2 font-medium">Personalized to you</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">{"<"}5 sec</div>
                <div className="text-sm text-gray-600 mt-1">Feedback delivery time</div>
                <div className="text-xs text-green-600 mt-2 font-medium">Instant scoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The Problem With Current Options
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Non-native English speakers are stuck between expensive tutors and tools that {"don't"} actually improve their scores.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-red-100 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Human Tutors</CardTitle>
                <CardDescription className="text-red-700">$80–$150 per hour</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Expensive and hard to schedule</li>
                  <li>• Inconsistent feedback quality</li>
                  <li>• Limited availability for practice</li>
                  <li>• No automated pattern tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-red-100 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Grammarly & Similar</CardTitle>
                <CardDescription className="text-red-700">Corrects but {"doesn't"} teach</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Only fixes surface errors</li>
                  <li>• No exam-specific scoring</li>
                  <li>• {"Doesn't"} remember your patterns</li>
                  <li>• No improvement tracking</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-green-100 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">EssayMentor AI</CardTitle>
                <CardDescription className="text-green-700">Teaching + Tracking + Drills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Official band score criteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Remembers your patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Personalized exercises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Measurable improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Everything You Need to Raise Your Band Score
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A complete AI writing coach that adapts to your level and targets your specific weaknesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              From Essay to Improvement in 4 Simple Steps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Submit your essay, get instant feedback, practice your weak areas, and track your progress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-blue-600 mb-2">STEP {step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Students Love EssayMentor
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real results from real students preparing for their exams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {"\"I went from Band 6.0 to 7.5 in just 6 weeks. The pattern tracking showed me I was making the same coherence mistakes in every essay — something no tutor had ever pointed out.\""}
                </p>
                <div className="text-sm font-medium text-gray-900">Priya S.</div>
                <div className="text-xs text-gray-500">IELTS Academic • India</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {"\"The micro-exercises are amazing. Instead of just telling me my vocabulary is limited, it gives me targeted practice with academic collocations specific to my essay topics.\""}
                </p>
                <div className="text-sm font-medium text-gray-900">Chen W.</div>
                <div className="text-xs text-gray-500">TOEFL iBT • China</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {"\"Worth every penny compared to the $120/hour tutor I was seeing. The weekly improvement plan keeps me accountable and I can see my GRE writing score climbing in the dashboard.\""}
                </p>
                <div className="text-sm font-medium text-gray-900">Ahmed K.</div>
                <div className="text-xs text-gray-500">GRE Analytical Writing • Egypt</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Affordable Plans for Every Learner
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A fraction of the cost of a human tutor, with 24/7 availability and personalized tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.highlighted
                    ? "border-blue-600 border-2 shadow-lg scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">{plan.badge}</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="/register" className="w-full">
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-blue-600 hover:bg-blue-700"
                          : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Raise Your Band Score?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of students who are improving their IELTS, TOEFL, and GRE writing scores with personalized AI coaching.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-base px-8 py-6">
                Start For Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            No credit card required • Start with 3 free essays • Upgrade anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">EssayMentor AI</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                AI writing coach that teaches IELTS/TOEFL/GRE essay skills to non-native English speakers — not just corrections, but real feedback that builds lasting writing ability.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 text-sm hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Account</h4>
              <ul className="space-y-2">
                <li><a href="/login" className="text-gray-400 text-sm hover:text-white transition-colors">Sign In</a></li>
                <li><a href="/register" className="text-gray-400 text-sm hover:text-white transition-colors">Get Started</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-500 text-sm">
            © 2024 EssayMentor AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}