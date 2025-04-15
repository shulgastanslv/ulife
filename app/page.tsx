"use client"
import { Button } from "@/components/ui/button"
import { LifeTimer } from "@/components/life-timer"
import { QuoteSection } from "@/components/quote-section"
import { useState, useEffect, useRef } from "react"
import { Github, Send, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isNearFooter = useRef(false)
  useEffect(() => {
    const checkFooterVisibility = () => {
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top
        isNearFooter.current = footerTop < window.innerHeight
      }
    }

    window.addEventListener("scroll", checkFooterVisibility)
    return () => window.removeEventListener("scroll", checkFooterVisibility)
  }, [])

  const blobOneX = useTransform(smoothScrollYProgress, [0, 1], [0, 200])
  const blobOneY = useTransform(smoothScrollYProgress, [0, 1], [0, 100])

  const blobTwoX = useTransform(smoothScrollYProgress, [0, 1], [0, -150])
  const blobTwoY = useTransform(smoothScrollYProgress, [0, 1], [0, 80])

  const blobThreeX = useTransform(smoothScrollYProgress, [0, 1], [0, 120])
  const blobThreeY = useTransform(smoothScrollYProgress, [0, 1], [0, -60])

  const headingY = useTransform(smoothScrollYProgress, [0, 1], [0, -50])
  const textParallax = useTransform(smoothScrollYProgress, [0, 1], [0, -30])

  const scrollIndicatorOpacity = useTransform(
    smoothScrollYProgress,
    [0, 0.05],
    [1, 0]
  )

  return (
    <div className="min-h-screen bg-[#f8f8f8] overflow-x-hidden">
      <header className="top-0 left-0 right-0 z-50 fixed flex items-center justify-between p-6 bg-transparent bg-opacity-50 backdrop-blur-xl">
        <div className="flex space-x-2">
          <span className="ml-2 text-xl tracking-widest font-serif">uLife.</span>
          <div className="h-3 w-3 rounded-full bg-black animate-pulse"></div>
        </div>
      </header>

      <main className="relative px-6 pt-32">
        <motion.div
          className="absolute right-1/2 top-2 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-emerald-500 opacity-50 blur-3xl"
          aria-hidden="true"
          style={{ x: blobOneX, y: blobOneY }}
        />
        <motion.div
          className="absolute left-[10%] top-[30%] h-[400px] w-[400px] animate-pulse-slow rounded-full bg-gradient-to-br from-yellow-400 via-orange-300 to-red-200 opacity-40 blur-3xl"
          aria-hidden="true"
          style={{ x: blobTwoX, y: blobTwoY }}
        />
        <motion.div
          className="absolute right-[5%] top-[60%] h-[500px] w-[500px] animate-pulse-slower rounded-full bg-gradient-to-br from-purple-400 via-indigo-300 to-blue-200 opacity-30 blur-3xl"
          aria-hidden="true"
          style={{ x: blobThreeX, y: blobThreeY }}
        />

        <div className="relative max-w-[95vw]">
          <motion.h1
            className="md:text-9xl font-light leading-tight tracking-tight mb-48 text-9xl ml-40"
            style={{ y: headingY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
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
            <span className="text-5xl md:text-7xl opacity-70 ml-2">Wisely.</span>
          </motion.h1>

          <motion.div 
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-sm mb-2 text-black/70">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="h-8 w-8 text-black/70" />
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center justify-center mb-96">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full border border-black p-8 text-lg bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => {
                  document.getElementById("timer")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span className="relative">Find your date</span>
              </Button>
            </motion.div>
          </div>

          <motion.h2
            className="text-5xl md:text-8xl leading-relaxed mt-96 mb-96 text-left md:text-center"
            style={{ y: textParallax }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            VISUALIZE YOUR LIFE.
            <br />
            <span className="opacity-70">REALIZE ITS FINITUDE.</span>
          </motion.h2>

          <div className="space-y-64 mb-96">
            <motion.p
              className="max-w-full mx-auto mt-96 font-light text-8xl md:text-8xl leading-relaxed relative z-10 flex bg-opacity-70 p-4 backdrop-blur-sm"
              style={{ y: textParallax }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              The average person spends 26 years sleeping,
            </motion.p>

            <motion.p
              className="max-w-full ml-48 mx-auto mt-96 font-light text-6xl md:text-8xl justify-end items-end flex"
              style={{ y: textParallax }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              13 years on the job and 8 years on social media.{" "}
            </motion.p>

            <motion.p
              className="max-w-full mx-auto text-9xl mt-96 font-light md:text-8xl justify-start items-start flex"
              style={{ y: textParallax }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              How much time do you have left{" "}
            </motion.p>

            <motion.p
              className="max-w-full mx-auto text-6xl mt-96 md:text-8xl justify-center items-center flex opacity-90"
              style={{ y: textParallax }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              and...
            </motion.p>

            <motion.p
              className="max-w-full mx-auto text-9xl md:text-8xl mt-96 justify-start items-start flex"
              style={{ y: textParallax }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              how do you use it?{" "}
            </motion.p>
          </div>

          <div className="fixed top-1/3 left-10 h-[2px] w-[100px] bg-black opacity-20 rotate-45"></div>
          <div className="fixed top-2/3 right-10 h-[2px] w-[120px] bg-black opacity-5 -rotate-45"></div>
          <div className="fixed top-1/2 left-1/2 h-[3px] w-[3px] rounded-full bg-black opacity-50"></div>
          <div className="fixed top-1/4 left-1/4 h-[5px] w-[5px] rounded-full bg-black opacity-30"></div>
          <div className="fixed top-3/4 right-1/4 h-[4px] w-[4px] rounded-full bg-black opacity-40"></div>
        </div>

        <section id="timer" className="mt-96 mb-96 relative">
          <motion.div
            className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse-slowest rounded-full bg-gradient-to-br from-green-400 via-teal-300 to-blue-200 opacity-40 blur-3xl"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <LifeTimer />
          </motion.div>
        </section>

        <section id="time-usage" className="mt-96 mb-96 relative">
          <motion.div
            className="absolute -left-[10%] top-[20%] h-[300px] w-[300px] animate-pulse-slowest rounded-full bg-gradient-to-br from-blue-400 via-teal-300 to-red-200 opacity-40 blur-3xl"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <QuoteSection />
          </motion.div>
        </section>
      </main>

      <motion.footer
        ref={footerRef}
        className="bg-gradient-to-b from-gray-950 to-black text-white py-16 px-6 relative"
        initial={{ height: "auto" }}
        animate={{
          height: isNearFooter.current ? "100vh" : "auto",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-xl italic text-gray-300 max-w-2xl mx-auto">
              "Dance like no one's looking at you. Sing as if no one could hear you. Love as if you've never been
              betrayed, and live as if earth were heaven."
              <cite className="block mt-2 not-italic text-blue-400">- Mark Twain</cite>
            </blockquote>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-100 transition-all"
                variant="default"
                size="lg"
              >
                <a href="https://t.me/shulgastanslv" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gray-800 text-white hover:bg-gray-700 transition-all"
                variant="default"
                size="lg"
              >
                <a href="https://github.com/shulgastanslv?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-white mb-4 md:mb-0 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}