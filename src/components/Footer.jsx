import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={40} bgColor={'blackAlpha.900'} color="white" p="16">
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading size={'md'} textAlign={["center","left"]}>Subscribe to get updates</Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter your email..."
              border={'none'}
              borderRadius={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          w={'full'}
        >
          <Heading>VEDIO HUB</Heading>
          <Heading size={"xs"}>@All rights reserved</Heading>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'}>SOCIAL MEDIA</Heading>
          <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://www.facebook.com/neel.kamal.509994/" target={"_blank"}>Facebook</a>
          </Button >
          <Button variant={'link'} colorScheme={"purple"}>
          <a href="https://www.linkedin.com/in/nishant-rathore-253589238/" target={"_blank"}>
            LinkedIn
          </a>
          </Button>
            <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://github.com/Nishant8826" target={"_blank"}>GitHub</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
