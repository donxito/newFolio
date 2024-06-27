import React from 'react'
import { motion } from 'framer-motion'


// removed "hidden" from tailwind styles
function Divider() {
  return (

    <motion.div className='bg-gray-200 my-24 h-16 w-1 rounded-full sm:block dark:bg-opacity-20'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    ></motion.div>

  )
}

export default Divider