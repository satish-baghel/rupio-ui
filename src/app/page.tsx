import Analysts from '@/components/Analysts/Analysts'
import HeroBanner from '@/components/heroBanner/heroBanner'
import OurMission from '@/components/ourMission/ourMission'
import Stock from '@/components/stock/stock'
import StockList from '@/components/stockList/stockList'
import TIpSection from '@/components/TipSection/TIpSection'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <HeroBanner />
      {/* Indices Section */}

      <Stock />
      <StockList />
      <OurMission />
      <TIpSection />
      <Analysts />
    </React.Fragment>
  )
}
