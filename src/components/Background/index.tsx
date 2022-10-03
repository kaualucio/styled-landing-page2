import React, { PropsWithChildren } from 'react'
import { BackgroundContainer } from './BackgroundElement'

const Background = ({ children }: PropsWithChildren) => {
  return (
    <BackgroundContainer>
      {children}
    </BackgroundContainer>
  )
}

export { Background }