// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Home_page_components/hero'
import TopPicks from '../components/Home_page_components/TopPicks'
import Community from '../components/Home_page_components/Community'
import StatsBar from '../components/Home_page_components/StatsBar'
import FeaturedCourses from '../components/Home_page_components/FeaturedCourses'
import WhyChooseUs from '../components/Home_page_components/WhyChooseUs'
import Testimonial from '../components/Home_page_components/Testimonial'
import Instructors from '../components/Home_page_components/Instructors'
import LatestNews from '../components/Home_page_components/LatestNews'
import TransformCTA from '../components/Home_page_components/TransformCTA'
import FAQ from '../components/Home_page_components/FAQ'
import Footer from '../components/Home_page_components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
             {/* small three‑column info under hero */}
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

