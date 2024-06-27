import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function NewConfetti() {
    // Get window size on first render
    const { width, height } = useWindowSize()
    return (
      <Confetti
        width={width}
        height={height}
        numberOfPieces={20}
        //colors={["#FF0000", "#FF6600", "#00FF00", "#FF00FF"]}

        
        
      />
    )
  }

export default NewConfetti