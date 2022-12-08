import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container p={16} minH={'100vh'} maxW={'container.lg'}>
        <Heading borderBottom={'2px solid'} w={'fit-content'} p="2" m={"auto"}>
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />
          <Text p={['4', '10']} letterSpacing={1} lineHeight={'190%'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            fugiat eaque quasi minus natus nesciunt id a, ipsam, facilis at
            laudantium dolor quod nobis quisquam repellendus in officiis porro
            qui repellat libero, consectetur assumenda atque mollitia amet.
            Commodi velit voluptatibus saepe reiciendis. Vitae optio commodi
            quod possimus id ullam aut ab. Nihil atque laborum ex, corporis
            doloremque officia facilis est molestias sit deserunt, nemo quaerat.
            Voluptatem deserunt facere culpa a cupiditate ex, quam perferendis
            porro iure molestiae dolorum fuga animi modi accusamus.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} />
      <Heading bgColor={'blackAlpha.900'} color={'white'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
