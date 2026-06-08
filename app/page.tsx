import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SocialProofBar from './components/SocialProofBar'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  )
}
