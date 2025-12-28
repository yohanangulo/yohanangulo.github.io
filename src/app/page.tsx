import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import FeaturedWork from '@/components/FeaturedWork'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navigation>
        <a className="text-slate-300 hover:text-white text-sm font-medium transition-colors" href="#work">
          Work
        </a>
      </Navigation>
      <Hero />
      <Skills />
      <FeaturedWork />
      <About />
      <Footer />
    </main>
  )
}
