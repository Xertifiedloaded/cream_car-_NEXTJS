import HeroContent from '@/components/Hero-content/HeroContent'
import Hero from '@/components/hero/Hero'
import React from 'react'

export default function RealEstate({children}) {
    return (
      <>
        <Hero>
            {children}
       <p>hello</p>
        </Hero>
      </>

    )
}
