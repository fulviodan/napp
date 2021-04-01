import Head from 'next/head'
import { motion } from 'framer-motion'
import { Flex, chakra, Heading, Text, Divider, Button, useColorModeValue, useMediaQuery } from '@chakra-ui/react'
import { Card } from '../shared/Card'
const MotionBox = chakra(motion.div)

const plans = [
  {
    name: 'Free',
    price: 'Free',
    details: 'Editor / Month (excl. VAT)',
    description: 'For anyone validating Framer as a professional prototyping tool.',
    action: () => console.log('action free'),
    label: 'Currently selected',
    selected: true,
    features: [
      { name: 'Unlimited viewers' },
      { name: 'Up to 2 editors' },
      { name: 'Up to 3 projects' },
      { name: 'One manager' },
    ],
  },
  {
    name: 'Premium',
    price: '49$/month',
    details: 'Editor / Month (excl. VAT)',
    description: 'For teams that want to manage users and work with developers.',
    action: () => console.log('action premium'),
    label: 'Upgrade',
    selected: false,
    features: [
      { name: 'Unlimited projects' },
      { name: 'Private share links' },
      { name: 'Offline editing' },
      { name: 'Desktop app' },
      { name: 'Local file access' },
      { name: 'Custom fonts' },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams that want to manage users and work with developers.',
    action: () => console.log('action enterprise'),
    label: 'Contact us',
    selected: false,
    features: [
      { name: 'Everything in Premium' },
      { name: 'Enterprise SSO' },
      { name: 'Dedicated support ' },
      { name: 'Onboarding & training' },
      { name: 'Centralized billing' },
      { name: 'Custom security' },
    ],
  },
]

export default function Pricing() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.05,
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
    hidden: (i) => ({
      x: 0,
      scale: 0,
      opacity: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
    visible: (i) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      delay: 1000,
      transition: {
        delay: i * 0.05,
      },
    }),
  }
  const [isDesktop] = useMediaQuery("(min-width: 991px)")

  return (
    <Flex
        p={16}
      minW="100vw"
      minH="100vh"
      align="center"
      justify="center"
      flexDirection="column"
      bgGradient="linear(to-l, #E9E9E9, #F0F0F0)"
    >
      <Heading as="h1" size="md">
        Pricing
      </Heading>
      <Text maxW={['100%, 70%', '50%']} mt={6} mx="auto" textAlign="center" color="gray.500">
        Vel consectetur veritatis dolor tempore. Reiciendis est distinctio eos est et cupiditate in
        aut. Minima rem voluptas voluptatem distinctio enim. Provident ut vero.
      </Text>
      <Divider my="4" />
      <MotionBox
        initial="hidden"
        animate='visible'
        variants={list}
        d="flex"
        flexDirection={isDesktop ? "row" : "column"}
        mx={20}
        alignItems="center"
        justifyContent="center"
      >
        {plans.map((plan, i) => (
          <MotionBox key={i} custom={i} variants={item}>
            <Card
              name={plan.name}
              features={plan.features}
              price={plan.price}
              details={plan.details}
              description={plan.description}
              action={plan.action}
              label={plan.label}
              selected={plan.selected}
              valuedChoice={i === 1}
            />
          </MotionBox>
        ))}
      </MotionBox>
      <Text maxW={['100%, 70%', '50%']} mt={6} mx="auto" textAlign="center" color="gray.400" fontSize="xs">
          © Loko AI is a low code platform.
      </Text>
    </Flex>
  )
}
