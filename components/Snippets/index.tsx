import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'
import {Box, Stack, Heading, Flex, Icon} from '@chakra-ui/react'
import {GoPlus, GoCode} from 'react-icons/go'

import {Snippet} from 'components'

export function Snippets({...rest}) {
  return (
    <Box
      as="aside"
      borderRight="1px"
      borderRightColor="whiteAlpha.200"
      px={5}
      py={6}
      overflowY="auto"
      {...rest}
    >
      <AnimateSharedLayout>
        <Stack spacing={5}>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="1px"
            >
              <Stack spacing="8px" isInline alignItems="center">
                <Icon as={GoCode} textColor="whiteAlpha.500" />
                <Box as="span" textColor="whiteAlpha.700">
                  Snippets
                </Box>
              </Stack>
            </Heading>
            <button>
              <Icon as={GoPlus} color="whiteAlpha.800" />
            </button>
          </Flex>
          <Snippet
            title="Start new API Project"
            description="Let me show you around to get you started with Code Snippets"
            language="JavaScript"
            created_at="05 May, 2020"
            isSelected
          />
          <Snippet
            title="Start new API Project"
            description="Let me show you around to get you started with Code Snippets"
            language="JavaScript"
            created_at="05 May, 2020"
          />
          <Snippet
            title="Start new API Project"
            description="Let me show you around to get you started with Code Snippets"
            language="JavaScript"
            created_at="05 May, 2020"
          />
        </Stack>
      </AnimateSharedLayout>
    </Box>
  )
}
