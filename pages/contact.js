import Head from 'next/head'
import { motion } from 'framer-motion'
import { Flex, chakra, Heading, useMediaQuery } from '@chakra-ui/react'
import { Card } from '../shared/Card'
import { Switch } from '../shared/Switch'
import { TypeText } from '../shared/Input'
import { useState } from 'react'

const MotionBox = chakra(motion.div)

export default function Contact() {
  const fields = [
    {
      group: [
        {
          label: 'Name',
          type: 'text',
          placeholder: 'Your name',
        },
        {
          label: 'Your family name',
          type: 'text',
          placeholder: 'Your name',
        },
      ],
    },
    {
      group: [
        {
          label: 'Your email',
          type: 'email',
          placeholder: 'Your email',
          isRequired: true,
        },
        {
          label: 'Your password',
          type: 'password',
          placeholder: 'Choose a strong password',
        },
      ],
    },
    {
      group: [
        {
          label: 'Gender',
          type: 'select',
          options: [
            { value: 'm', label: 'Male' },
            { value: 'f', label: 'Female' },
          ],
          placeholder: 'Select a value',
        },
      ],
    },
    {
      group: [
        {
          label: [{ checked: 'Enable form' }, { unchecked: 'Disable form' }],
          type: 'switch',
          defaultValue: true,
          action: () => console.log('Switch'),
        },
      ],
    },
    {
      group: [
        {
          label: 'Submit',
          type: 'button',
          action: () => {
            setSubmitted(true)
            console.log('Submit')
          },
        },
      ],
    },
  ]

  const form = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      transition: {
        when: 'afterChildren',
      },
    },
  }
  const heading = {
    hidden: {
      height: 0,
      opacity: 0,
      scale: 0,
    },
    visible: {
      transition: {delay: 0},
      height: "auto",
      opacity: 1,
      scale: 1,
    },
  }
  const item = {
    hidden: (i) => ({
      scale: 0,
      height: 0,
      opacity: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
    visible: (i) => ({
      scale: 1,
      height: "auto",
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  }
  const submission = {
    hidden: (i) => ({
      transition: {delay: .25},
      opacity: 1,
      height: "auto",
      scale: 1,
    }),
    visible: (i) => ({
      opacity: 0,
      height: 0,
      scale: 0,
    }),
  }
  const [isTablet] = useMediaQuery('(max-width: 992px)')
  const [submitted, setSubmitted] = useState(false)

  return (
    <Flex w="100vw" h="100vh" bg="gray.200" alignItems="center" justifyContent="center">
      <Flex
        p={12}
        shadow="lg"
        rounded="2xl"
        minHeight="640px"
        maxWidth="640px"
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgGradient={
          submitted ? 'linear(to-tr, cyan.400, cyan.300)' : 'linear(to-tr, white, gray.50)'
        }
      >
        <MotionBox
          my="6"
          d="flex"
          mx="auto"
          variants={form}
          flexWrap="wrap"
          initial="hidden"
          direction="column"
          alignItems="center"
          animate={submitted ? 'hidden' : 'visible'}
          justifyContent="center"
          flexDirection={isTablet ? 'column' : 'row'}
        >
          <MotionBox variants={submission}>
            <Heading
              as="h1"
              fontSize="3xl"
              fontWeight="black"
              color="white"
              textAlign="center"
              // letterSpacing="0.05rem"
              // fontFamily="'Fredoka One'"
            >
              Thank you!
              <br />
              <small>You succesfully submitted the survey.</small>
            </Heading>
          </MotionBox>

          <MotionBox variants={heading}>
            <Heading as="h1" fontSize="2xl" mb={8} fontWeight="900">
              Contact us
            </Heading>
          </MotionBox>
          {fields.map((group, i) => (
            <Flex id={i} key={i} w="full" flexWrap="nowrap">
              {group.group.map((field, j) => (
                <MotionBox
                  key={j}
                  custom={j}
                  variants={item}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <TypeText
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    action={field.action}
                    isRequired={field.isRequired}
                    options={field.options}
                  />
                </MotionBox>
              ))}
            </Flex>
          ))}
        </MotionBox>
      </Flex>
    </Flex>
  )
}
