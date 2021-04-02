import React, { useState } from 'react'
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { Switch } from './Switch'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Dropdown } from './Dropdown'

const MotionBox = chakra(motion.div)

export function TypeText({ label, type, placeholder, action, isRequired, options, defaultValue }) {
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
    <Flex
      px={4}
      my={type === 'button' ? 6 : 4}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {type === 'switch' ? (
        <FormControl id="email" px={4}>
          <Switch
            label={{ checked: 'Accept privacy policy' }}
            defaultValue={defaultValue}
            onClick={action}
            isRequired={isRequired}
          />
        </FormControl>
      ) : type === 'select' ? (
        <Dropdown label={label} options={options} />
      ) : type !== 'button' ? (
        <FormControl id="email">
          <FormLabel mb={1} fontSize="10px" color={useColorModeValue('gray.500', 'white')} mx={4}>
            {label}
          </FormLabel>

          <Input
            px={4}
            py={2}
            type={type}
            minW="240px"
            rounded="20px"
            isRequired={isRequired}
            placeholder={placeholder}
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.800', 'white')}
          />
        </FormControl>
      ) : (
        <Button minW="140px" rounded="20px" colorScheme="blue" onClick={action}>
          {label}
        </Button>
      )}
    </Flex>
  )
}

TypeText.propTypes = {
  //   label: PropTypes.object,
  //   color: PropTypes.string,
  //   size: PropTypes.string,
  //   defaultValue: PropTypes.bool,
}
