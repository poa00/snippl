import Link from 'next/link'
import Image from 'next/image'
import {Box, Flex, Icon} from '@chakra-ui/react'
import {FiBox} from 'react-icons/fi'

export function Header({...rest}) {
  return (
    <Box
      as="header"
      borderRight="1px"
      borderRightColor="whiteAlpha.200"
      position="relative"
      {...rest}
    >
      <Flex h={12} mt={2} alignItems="center" mx="auto" justifyContent="center">
        <Image
          src="/img/logo-symbol.svg"
          alt="Logo Snippl"
          width={22}
          height={22}
        />
      </Flex>
    </Box>
  )
}
