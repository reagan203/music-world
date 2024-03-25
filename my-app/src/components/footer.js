import React from 'react';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const Footer = ({ isPlaying, onPlayPause, onPrevious, onNext }) => {
  return (
    <Box bg="gray.900" color="white" p="4">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <IconButton
            aria-label="Previous"
            icon={<FaBackward />}
            onClick={onPrevious}
            mr="2"
            size="sm"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
            onClick={onPlayPause}
            size="md"
            colorScheme="whiteAlpha"
          />
          <IconButton
            aria-label="Next"
            icon={<FaForward />}
            onClick={onNext}
            ml="2"
            size="sm"
            colorScheme="whiteAlpha"
          />
        </Flex>
        <Text fontSize="sm">Music Title - Artist</Text> {/* Replace with actual song title and artist */}
      </Flex>
    </Box>
  );
};

export default Footer;
