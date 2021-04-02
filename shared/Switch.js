import React, { useState } from 'react'
import { chakra, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const MotionBox = chakra(motion.div)

export function Switch({ label, color = 'gray.400', size, defaultValue }) {
  const switcher = {
    checked: {
      x: 2,
      transition: {
        delay: 0.05,
      },
    },
    unchecked: {
      x: 18,
      transition: {
        delay: 0.05,
      },
    },
  }
  const [value, setValue] = useState(defaultValue)
  return (
    <chakra.div
      w="full"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => setValue(!value)}
      cursor="pointer"
    >
      <Text fontSize="xs" fontWeight="bold" color={color}>
        {value ? label.checked : label?.unchecked || label.checked}
      </Text>
      <chakra.div
        bg="gray.200"
        border="1px solid"
        borderColor="gray.300"
        rounded="full"
        w="36px"
        h="18px"
        d="flex"
        alignItems="center"
      >
        <MotionBox
          variants={switcher}
          initial={value ? 'unchecked' : 'checked'}
          animate={value ? 'checked' : 'unchecked'}
          bg="gray.400"
          rounded="full"
          w="14px"
          h="14px"
        />
      </chakra.div>
    </chakra.div>
  )
}

Switch.propTypes = {
  label: PropTypes.shape({
      checked: PropTypes.string.isRequired,
      unchecked: PropTypes.string,
  }),
  color: PropTypes.string,
  size: PropTypes.string,
  defaultValue: PropTypes.bool,
}
