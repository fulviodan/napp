import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Portal } from '@chakra-ui/portal'
import PropTypes from 'prop-types'
import { useState } from 'react'

export function Dropdown({ label, options }) {
    const [value, setValue] = useState(false)
  return (
    <FormControl>
      <FormLabel mb={1} fontSize="10px" color={useColorModeValue('gray.500', 'white')} mx={4}>
        {label}
      </FormLabel>
      {options && (
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                px={4}
                py={2}
                w="240px"
                textAlign="left"
                transition="all 0.2s"
                borderRadius="full"
                borderWidth="1px"
                d="flex"
                flex="100%"
                justifyContent="space-between"
                _hover={{ bg: 'gray.50' }}
                _expanded={{ bg: 'blue.50' }}
                _focus={{ boxShadow: 'outline' }}
              >
                <Flex w="full" justifyContent="space-between" alignItems="center">
                  {value.label || label} <ChevronDownIcon transform={isOpen && "rotate(180deg)"} />
                </Flex>
              </MenuButton>
              <Portal>
                <MenuList
                  minWidth="240px"
                  maxH="200px"
                  overflowY="auto"
                  overflowX="hidden"
                  borderRadius="20px"
                  overflow="hidden"
                  shadow="lg"
                >
                  {options.map((option, i) => (
                    <MenuItem key={i} value={option.value} onClick={()=>setValue({label: option.label, value: option.value})}>
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Portal>
            </>
          )}
        </Menu>
      )}
    </FormControl>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.bool,
  options: PropTypes.array,
}
