import React, { useEffect } from 'react'
import useCard from '@/hooks/useCard'
import Image from 'next/image'
import PinCardWrapper from './PinCardWrapper'

const HomeContainer: React.FC = () => {
  const { cardStore, setCardStore } = useCard()

  // retrieve most recent card/target for current session
  useEffect(() => {
    const data = sessionStorage.getItem('card')
    if (data) {
      const cache = JSON.parse(data)
      setCardStore(cache)
    }
  }, [setCardStore])

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen">
        {!cardStore ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-80 h-80 relative">
              <img alt="logo" src="/logo-bg.png" className="rounded-full primaryShadow" />
            </div>
          </div>
        ) : (
          <PinCardWrapper />
        )}
      </div>
    </>
  )
}

export default HomeContainer
