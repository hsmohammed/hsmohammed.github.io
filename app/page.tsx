import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
