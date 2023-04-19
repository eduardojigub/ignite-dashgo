import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo</Text>
          <Text color="gray.300" fontSize="small">
            eduardobrunoit@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Eduardo Bruno"
        src="http://github.com/eduardojigub.png"
      />
    </Flex>
  );
}
