'use client'

import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import AboutPreview from '@/components/sections/AboutPreview'
import InspiringQuotes from '@/components/sections/InspiringQuotes'
import ContactPreview from '@/components/sections/ContactPreview'
import FloatingShapes from '@/components/ui/FloatingShapes'
import AnimatedGradient from '@/components/ui/AnimatedGradient'
import ParallaxSection from '@/components/ui/ParallaxSection'
import JourneyTimeline from '@/components/sections/JourneyTimeline'
import SkillsCloud from '@/components/sections/SkillsCloud'
import ProjectShowcase from '@/components/sections/ProjectShowcase'
import ParticleEffect from '@/components/ui/ParticleEffect'

export default function Home() {
  return (
    <main className="relative">
      <AnimatedGradient />
      <FloatingShapes />
      <ParticleEffect />
      
      <ParallaxSection speed={0.02}>
        <Hero />
      </ParallaxSection>
      
      <JourneyTimeline />
      
      <ParallaxSection speed={0.03}>
        <AboutPreview />
      </ParallaxSection>
      
      <SkillsCloud />
      <ProjectShowcase />\
      <InspiringQuotes />
      <ContactPreview />
    </main>
  )
}