import React from 'react';
import { Box } from '@chakra-ui/react';

interface TagComponentProps {
    text: string;
  }

const TagComponent: React.FC<TagComponentProps> = ({ text  }) => {
  return (
    <Box
      as="button"
      borderRadius="2xl"
      bg="rgba(52, 135, 147, 0.3)"
      color="#00001C"
      fontFamily="space"
      fontWeight="medium"
      p="0.625rem"
      h={8}
      w="fit-content"
      height="fit-content"
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform 0.3s ease-in-out',
      }}
      _active={{
        transform: 'scale(0.96)',
      }}
    >
      {text}
    </Box>
  );
};

export default TagComponent;
