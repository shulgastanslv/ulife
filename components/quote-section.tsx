"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

type Quote = {
  text: string
  author: string
}

export function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState<Quote>({
    text: "We think we'll live forever. We won't.",
    author: "Steve Jobs",
  })

  const quotes: Quote[] = [
    {
      text: "We think we'll live forever. We won't.",
      author: "Steve Jobs",
    },
    {
      text: "Lost time is never found again.",
      author: "Benjamin Franklin",
    },
    {
      text: "Life is what happens while you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "Time waits for no one. It passes you by.",
      author: "Leo Tolstoy",
    },
    {
      text: "Time is the most valuable commodity because it's irreplaceable.",
      author: "Theophrastus",
    },
    {
      text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      text: "Don't put off until tomorrow what you can do today.",
      author: "Benjamin Franklin",
    },
    {
      text: "Memento mori - remember you must die.",
      author: "Ancient Roman wisdom",
    },
  ]

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomQuote()
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light mb-16 text-center tracking-tight text-black bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
          Words of Wisdom
        </h2>
        <div className="relative  backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
          <div className="text-center space-y-8">
            <blockquote className="text-3xl md:text-5xl font-light italic leading-tight text-black">
              "{currentQuote.text}"
            </blockquote>
            <cite className="block text-xl md:text-2xl text-black">
              — {currentQuote.author}
            </cite>
            <div className="pt-6">
              <Button 
                onClick={getRandomQuote} 
                size="lg"
                className="rounded-2xl h-14 w-full p-2"
              >
                <RefreshCw className="h-5 w-5 mr-2 transition-transform group-hover:rotate-180" />
                New Quote
              </Button>
            </div>
          <div className="absolute -bottom-4 -right-4 w-96 h-96 z-[-50] opacity-25 rounded-full bg-purple-500/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}