import { BackgroundVideo } from './components/BackgroundVideo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Query } from './components/Query'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div id="top" className="relative min-h-screen bg-black text-white">
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Query />
      <Footer />
    </div>
  )
}
