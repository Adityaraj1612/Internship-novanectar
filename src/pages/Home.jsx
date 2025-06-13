// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/hero'
import InfoBanner from '../components/InfoBanner'
import TopPicks from '../components/TopPicks'
import Community from '../components/Community'
import StatsBar from '../components/StatsBar'
import FeaturedCourses from '../components/FeaturedCourses'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonial from '../components/Testimonial'
import Instructors from '../components/Instructors'
import LatestNews from '../components/LatestNews'
import TransformCTA from '../components/TransformCTA'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBanner />        {/* small three‑column info under hero */}
      <TopPicks />
      <Community />
      <StatsBar />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonial />
      <Instructors />
      <LatestNews />
      <TransformCTA />
      <FAQ />
      <Footer />
    </>
  )
}

