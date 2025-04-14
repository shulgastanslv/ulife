"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LifeTimer } from "@/components/life-timer";
import { TimeUsage } from "@/components/time-usage";
import { QuoteSection } from "@/components/quote-section";
import { useState, useEffect } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] overflow-x-hidden">
      <header className="top-0 left-0 right-0 z-50 fixed flex items-center justify-between p-6 bg-transparent bg-opacity-50 backdrop-blur-xl">
        <div className="flex space-x-2">
          <span className="ml-2 text-2xl tracking-widest font-serif">
            you know...
          </span>
          <div className="h-4 w-4 rounded-full bg-black animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-32">
        <div
          className="absolute right-1/2 top-2 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-emerald-500 opacity-50 blur-3xl"
          aria-hidden="true"
          style={{
            transform: `translate(${scrollPosition * 0.1}px, ${
              scrollPosition * 0.05
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute left-[10%] top-[30%] h-[400px] w-[400px] animate-pulse-slow rounded-full bg-gradient-to-br from-yellow-400 via-orange-300 to-red-200 opacity-40 blur-3xl"
          aria-hidden="true"
          style={{
            transform: `translate(${scrollPosition * -0.08}px, ${
              scrollPosition * 0.03
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        <div
          className="absolute right-[5%] top-[60%] h-[500px] w-[500px] animate-pulse-slower rounded-full bg-gradient-to-br from-purple-400 via-indigo-300 to-blue-200 opacity-30 blur-3xl"
          aria-hidden="true"
          style={{
            transform: `translate(${scrollPosition * 0.05}px, ${
              scrollPosition * -0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        <div className="relative max-w-[95vw]">
          <h1 className="md:text-9xl font-light leading-tight tracking-tight mb-24 text-9xl ml-40">
            <span className="relative inline-block justify-center items-center">
              <span className="text-black font-medium px-4 py-4">
                TIME
                <br />
                IS NOT INFINITE,
              </span>
              <div className="absolute -inset-1 opacity-10 blur-md"></div>
            </span>
            <br />
            <span className="opacity-90">USE IT</span>
            <span className="text-5xl md:text-7xl opacity-70 ml-2">
              Wisely.
            </span>
          </h1>

          <div className="flex flex-col items-center justify-center mb-48">
            <Button
              variant="default"
              size="lg"
              className="rounded-full border border-black p-8 text-lg bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300"
              onClick={() => {
                document
                  .getElementById("timer")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative">Find your date</span>
            </Button>
          </div>

          <h2 className="text-5xl md:text-8xl leading-relaxed mt-48 mb-48 text-left md:text-center">
            VISUALIZE YOUR LIFE.
            <br />
            <span className="opacity-70">REALIZE ITS FINITUDE.</span>
          </h2>

          <div className="space-y-24 mb-64">
            <p className="max-w-full mx-auto mt-96 font-light text-8xl md:text-8xl leading-relaxed relative z-10 flex bg-opacity-70 p-4 backdrop-blur-sm">
              The average person spends 26 years sleeping,
            </p>

            <p className="max-w-full ml-48 mx-auto mt-96 font-light text-6xl md:text-8xl justify-end items-end flex">
              13 years on the job and 8 years on social media.{" "}
            </p>

            <p className="max-w-full mx-auto text-9xl  mt-96 font-light md:text-8xl justify-start items-start flex">
              How much time do you have left{" "}
            </p>

            <p className="max-w-full mx-auto text-6xl mt-96 md:text-8xl justify-center items-center flex opacity-90">
              and...
            </p>

            <p className="max-w-full mx-auto text-9xl md:text-8xl mt-96 justify-start items-start flex">
              how do you use it?{" "}
            </p>
          </div>

          <div className="fixed top-1/3 left-10 h-[2px] w-[100px] bg-black opacity-20 rotate-45"></div>
          <div className="fixed top-2/3 right-10 h-[2px] w-[120px] bg-black opacity-5 -rotate-45"></div>
          <div className="fixed top-1/2 left-1/2 h-[3px] w-[3px] rounded-full bg-black opacity-50"></div>
          <div className="fixed top-1/4 left-1/4 h-[5px] w-[5px] rounded-full bg-black opacity-30"></div>
          <div className="fixed top-3/4 right-1/4 h-[4px] w-[4px] rounded-full bg-black opacity-40"></div>
        </div>

        <section id="timer" className="mt-64 mb-64 relative">
          <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse-slowest rounded-full bg-gradient-to-br from-green-400 via-teal-300 to-blue-200 opacity-40 blur-3xl"></div>
          <LifeTimer />
        </section>

        <section id="time-usage" className="mt-64 mb-64 relative">
          <div className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse-slowest rounded-full bg-gradient-to-br from-blue-400 via-teal-300 to-red-200 opacity-40 blur-3xl"></div>
          <QuoteSection />
        </section>
      </main>

      <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <blockquote className="text-xl italic text-gray-300 max-w-2xl mx-auto">
              "Dance like no one's looking at you. Sing as if no one could hear you. Love as if you've never been betrayed, and live as if earth were heaven.”              "
              <cite className="block mt-2 not-italic text-blue-400">
                - Mark Twain
              </cite>
            </blockquote>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 transition-all hover:scale-105"
              variant="default"
              size="lg"
            >
              <a href="https://t.me/shulgastanslv" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5 mr-2" />
                Telegram
              </a>
            </Button>
            <Button
              asChild
              className="bg-gray-800 text-white hover:bg-gray-700 transition-all hover:scale-105"
              variant="default"
              size="lg"
            >
              <a href="https://github.com/shulgastanslv?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white mb-4 md:mb-0 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
