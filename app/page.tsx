import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { BenefitsSection } from "@/components/benefits-section"
import { InstructorsSection } from "@/components/instructors-section"
import { RegisterSection } from "@/components/register-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <BenefitsSection />
      {/* <InstructorsSection /> */}
      <RegisterSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
