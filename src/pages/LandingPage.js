import React from 'react'
import AppShell from '../components/AppShell'
import LandingPageBody from '../components/LandingPageBody'
import LandingPageHeading from '../components/LandingPageHeading'

function LandingPage() {
  return (
    <AppShell>
      <LandingPageHeading />
      <LandingPageBody />
    </AppShell>
  )
}

export default LandingPage