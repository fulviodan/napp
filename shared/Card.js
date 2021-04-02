import React from 'react'
import { chakra, Box, Image, Flex, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export const Card = ({
  name,
  features,
  price,
  details,
  description,
  action,
  label,
  selected,
  valuedChoice,
  children,
}) => {
  return (
    <Flex p={4} w="full" alignItems="center" justifyContent="center">
      <Box
        p={8}
        mx="auto"
        rounded="20px"
        shadow="lg"
        bg={valuedChoice ? 'cyan.400' : useColorModeValue('white', 'gray.800')}
        color={valuedChoice ? 'white' : 'gray.600'}
        maxW="300px"
        minW="200px"
      >
        <Flex justifyContent="space-between" h={6}>
          <chakra.span fontSize=" 12px" lineHeight="1.4" fontWeight="600">
            {name}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <Box fontWeight="600" fontSize="20px" lineHeight="1.2">
            {price}
          </Box>
          <Box fontSize="12px" lineHeight="1.4" h={6} mb={2}>
            {details}
          </Box>
          <Box fontSize="12px" lineHeight="1.4" h={6}>
            {description}
          </Box>

          <chakra.ul listStyleType="none" pt={6}>
            {features.map((feature, i) => (
              <chakra.li key={i} py={1} fontSize="sm">
                <CheckIcon mr={2.5} />
                {feature.name}
              </chakra.li>
            ))}
          </chakra.ul>
          {children}
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={8}>
          <Button
            size="sm"
            w="90%"
            mx="auto"
            variant="outline"
            isDisabled={selected}
            rounded="full"
            colorScheme={valuedChoice ? 'whiteAlpha' : 'gray'}
            onClick={action}
          >
            {label}
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}
