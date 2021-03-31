import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import {
  Flex,
  chakra,
  Heading,
  List,
  ListItem,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'

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
            w={i === 1 ? '280px' : '240px'}
            h={i === 1 ? '280px' : '240px'}
            borderRadius={12}
            justifyContent="space-between"
            alignItems="center"
            overflow="hidden"
            bg="whiteAlpha.800"
            pos="relative"
          >
            <Heading bg="gray.50" as="h2" size="md" px={8} py={4}>
              {plan.name}
            </Heading>
            {plan.features && (
              <Table variant="simple" px={8} py={4}>
                <TableCaption>Safe transaction</TableCaption>
                <Tbody>
                  {plan.features.map((feature, i) => (
                    <Tr key={i}>
                      <Td>{feature.name}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                  </Tr>
                </Tfoot>
              </Table>
            )}
            <Flex
              pos="absolute"
              px={8}
              py={4}
              w="full"
              h="60px"
              bottom="0"
              bg="cyan.300"
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
