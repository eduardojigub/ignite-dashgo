import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo</Text>
        <Text color="gray.300" fontSize="small">
          eduardobrunoit@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Eduardo Bruno"
        src="http://github.com/eduardojigub.png"
      />
    </Flex>
  );
}
