import { SiteNav } from '@/components/site/SiteNav'
import { Hero } from '@/components/site/Hero'
import { ServicesSection } from '@/components/site/ServicesSection'
import { GallerySection } from '@/components/site/GallerySection'
import { TeamSection } from '@/components/site/TeamSection'
import { BeforeAfterShowcase } from '@/components/site/BeforeAfterShowcase'
import { AchievementsSection } from '@/components/site/AchievementsSection'
import { TestimonialsSection } from '@/components/site/TestimonialsSection'
import { LeadCaptureForm } from '@/components/site/LeadCaptureForm'
import { SiteFooter } from '@/components/site/SiteFooter'
import { AIChatWidget } from '@/components/site/AIChatWidget'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNav />
      <Hero />
      <ServicesSection />
      <TeamSection />
      <BeforeAfterShowcase />
      <AchievementsSection />
      <GallerySection />
      <TestimonialsSection />
      <LeadCaptureForm />
      <SiteFooter />
      <AIChatWidget />
    </main>
  )
}
