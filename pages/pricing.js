import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import {
  Flex,
  chakra,
  Heading,
  List,
  ListItem,
  ListIcon,
  Divider,

} from '@chakra-ui/react'
import { useState } from 'react'
import {CheckIcon, CloseIcon} from '@chakra-ui/icons'
const MotionBox = chakra(motion.div)

const plans = [
  {
    name: 'Free',
    price: 'Free',
    features: [
      { name: 'Lorem', included: true },
      { name: 'Ipsum', included: true },
      { name: 'Dolor', included: false },
      { name: 'Sit amet', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '49$/month',
    features: [
      { name: 'Lorem', included: true },
      { name: 'Ipsum', included: true },
      { name: 'Dolor', included: true },
      { name: 'Sit amet', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Call for enquire',
    features: [
      { name: 'Lorem', included: true },
      { name: 'Ipsum', included: true },
      { name: 'Dolor', included: true },
      { name: 'Sit amet', included: true },
    ],
  },
]

export default function Pricing() {
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
    hidden: { x: 0, scale: 0, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      delay: 1000,
      transition: {
        delay: i * 0.1,
      },
    }),
  }
  const [animate, setAnimate] = useState(false)

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDirection="column"
      bgGradient="linear(to-l, #E9E9E9, #F0F0F0)"
    >
      <Heading as="h1" size="2xl">
        Pricing
      </Heading>
      <Divider my="4" />
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={list}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        {plans.map((plan, i) => (
          <MotionBox
            key={i}
            custom={i}
            variants={item}
            border="1px solid"
            textAlign="center"
            borderColor="gray.200"
            my={2}
            mx={4}
            py={16}
            w={i === 1 ? '300px' : '250px'}
            minH={i === 1 ? '350px' : '200px'}
            borderRadius={12}
            justifyContent="space-between"
            alignItems="center"
            overflow="hidden"
            bg="whiteAlpha.800"
            pos="relative"
          >
            <Flex
              pos="absolute"
              px={8}
              py={4}
              w="full"
              h="60px"
              top="0"
              bg="gray.100"
              justifyContent="center"
              alignItems="center"
            >
              <Heading as="h2" size="md" px={8} py={4}>
                {plan.name}
              </Heading>
            </Flex>
            {plan.features && (
              <List variant="simple" p={4}>
                {plan.features.map((feature, i) => (
                  <ListItem key={i} py={2} d="flex" justifyContent="space-between" alignItems="center" borderBottom="1px dotted" borderColor="gray.200">
                    {feature.name}
                    <ListIcon boxSize="10px" as={plan.included ? CheckIcon : CloseIcon} color="green.500" />
                  </ListItem>
                ))}
              </List>
            )}
            <Flex
              pos="absolute"
              px={8}
              py={4}
              w="full"
              h="60px"
              bottom="0"
              bg="red.300"
              justifyContent="center"
              alignItems="center"
            >
              {plan.price}
            </Flex>
          </MotionBox>
        ))}
      </MotionBox>
    </Flex>
  )
}
