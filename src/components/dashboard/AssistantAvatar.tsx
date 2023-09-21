import React from 'react';
import { Box, Avatar, Divider, Text } from '@chakra-ui/react';
import CopyTextIcon from './CopyTextIcon';

interface AssistantAvatarProps {
    src: string;
    name: string;
    wallet: string;
  }

const AssistantAvatar: React.FC<AssistantAvatarProps> = ({ src, name, wallet }) => {
  return (
    <Box
      bg={'#C9DCDF'}
      maxW='sm'
      borderWidth='1px'
      borderRadius='xl'
      display='flex'
      flexDirection={'column'}
      alignItems={'center'}
      p={3}
      gap={5}
    >
      <Avatar size='xl' name={name} src={src} />

      <Divider borderColor={'gray.500'} />

      <Box p='3' paddingY={0} fontFamily={'space'} textAlign='center'>
        <Text fontWeight='medium' as='h4' lineHeight='tight' color={'#00001C'}>
          {name}
        </Text>

        <Box display='flex' alignItems='center' justifyContent={'center'} gap={1}>
          <Box as='span' color='gray.500'>
            {wallet}
          </Box>

          <Box
            as={'button'}
            _hover={{
              transform: 'scale(1.06)',
              transition: 'transform 0.3s ease-in-out',
            }}
            _active={{
              transform: 'scale(0.9)',
            }}
          >
            <CopyTextIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AssistantAvatar;
