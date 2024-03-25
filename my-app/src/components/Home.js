import React, { useState } from 'react';
import { Box, Heading, Flex, Wrap, WrapItem, Image, Link, Input } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredGenres = [
    {
      name: 'Hip Hop',
      link: '/hiphop',
      imageSrc: 'https://images.a2im.org/wp-content/uploads/2023/05/17155129/DotHipHop_Logo_Round_Tagline-300x300-1.png',
    },
    {
      name: 'Kenyan',
      link: '/kenyan',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7PqWP5OSEn66r-5h3UnQVNr6XVgR8P5raA&usqp=CAU',
    },
    {
      name: 'Drill',
      link: '/drill',
      imageSrc: 'https://geo-media.beatport.com/image_size/500x500/87c3079b-d5dc-4600-8e0c-16661ade1453.jpg',
    },
    {
      name: 'Gospel',
      link: '/gospel',
      imageSrc: 'https://play-lh.googleusercontent.com/-7KfWLPVXs91ezp9CTveoLMHYS260a8LuGBoGB-mF8Vt_iYUiqk-XYH4naYk_BO4DQ=w240-h480-rw',
    },
    {
      name: 'Dancehall',
      link: '/dancehall',
      imageSrc: 'https://aqtent.com/wp-content/uploads/2022/03/Hottest-Dancehall-music-producers-e1646867763726.jpg',
    },
    {
      name: 'Reggae',
      link: '/reggae',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWbFQkliU1Ehg-N48_8NTzizfdq--3p6FxA&usqp=CAU',
    },
  ].filter(genre => genre.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box p={8}>
      <Heading mb={8} textAlign="center" fontSize="3xl">Music Genres</Heading>
      <Input
        placeholder="Search genres..."
        value={searchQuery}
        onChange={handleSearchChange}
        mb={4}
        variant="outline"
        size="lg"
        borderRadius="full"
        px={4}
      />
      <Wrap spacing={8} justify="center">
        {filteredGenres.map((genre, index) => (
          <WrapItem key={index}>
            <Flex direction="column" align="center">
              <Link as={RouterLink} to={genre.link}>
                <Image src={genre.imageSrc} alt={genre.name} boxSize="200px" objectFit="cover" borderRadius="md" />
              </Link>
              <Box mt={4} fontSize="xl" fontWeight="bold">{genre.name}</Box>
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Home;
