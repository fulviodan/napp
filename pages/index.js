import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { Flex, chakra } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'

const MotionBox = chakra(motion.div)

const array = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      delay: 1000,
      transition: {
        delay: i * 0.02,
      },
    }),
    hover: {
      scale: 1.1
    },
  }
  const [animate, setAnimate] = useState(false)

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDirection="column">
      {/* <Button size="xs" onClick={() => setAnimate(!animate)}>Animate</Button> */}
      <MotionBox initial="hidden" animate="visible" variants={list} flexDirection="column">
        {array.map((el, i) => (
          <MotionBox key={i} custom={i} _hover={item.hover} variants={item} bg="red.200" px={8} my={2} borderRadius={4}>
            {el}
          </MotionBox>
        ))}
      </MotionBox>
    </Flex>
  )
}
