import React, { useEffect, useState } from 'react'
import AppShell from '../components/AppShell'
import LandingPageBody from '../components/LandingPageBody'
import LandingPageHeading from '../components/LandingPageHeading'
import LoadingComponent from '../components/LoadingComponent';

function LandingPage() {
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  
    return () => {}
  }, [])
  
  return (
    <AppShell>

      <LandingPageHeading />

      {loading ? 
        [...Array(4)].map((_, index) => (
            <LoadingComponent key={index}/> 
        ))
        :
        <LandingPageBody />
      }

    </AppShell>
  )
}

export default LandingPage