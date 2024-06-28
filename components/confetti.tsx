//https://github.com/alampros/react-confetti

import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function NewConfetti() {
    // Get window size on first render
    const { width, height } = useWindowSize()
    return (
      <Confetti
        width={width}
        height={6000}
        numberOfPieces={20}
        // wind={0.020}
        // gravity={0.1}
     


        
        
      />
    )
  }

export default NewConfetti