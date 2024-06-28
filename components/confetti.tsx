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
        numberOfPieces={30}
        colors={['#f44336','#e91e63','#9c27b0','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548']}
        // wind={0.020}
        // gravity={0.1}
      />
    )
  }

export default NewConfetti