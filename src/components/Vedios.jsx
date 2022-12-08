import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Vedios = () => {
  const vedioArr = [
    'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/kdqjb0itbqqftjutdnqm',
    'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vlbamxnq76qktjrwkkf9',
    'https://thumbs.gfycat.com/WickedPitifulAntelope-mobile.mp4',
    'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/qpfvak3qd1eaxkujxz1w',
    'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/e3nq0oad4ezae8bujd3p',
    "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/fcmblfuat4j1mvms4f0l",
    "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/mncic1grz0komiah6cwi"
  ];

  const [vedioSrc, setVedioSrc] = useState(vedioArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'} >
      <VStack w={'full'} >
        <video src={vedioSrc} controls style={{ width: '100%' }} autoPlay ></video>
        <VStack overflow={'auto'}>
          <Heading>Sample Vedios</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            tenetur
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {vedioArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            w={"full"}
            onClick={() => setVedioSrc(item)}
            
          >
            Anime {index+1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Vedios;
