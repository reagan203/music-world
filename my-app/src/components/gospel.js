import React, { useState, useRef } from 'react';
import { Box, Heading, Text,  Flex, IconButton } from '@chakra-ui/react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'; // Import icons
import musicData from '../music.json'; // Assuming music.json is in the same directory

const Gospel = () => {
  const [playing, setPlaying] = useState(false);
  const [looping, setLooping] = useState(false);
  const soundRef = useRef(null);

  // Filter music data for songs in the "gospel" genre
  const gospelMusic = musicData.filter(song => song.genre === 'gospel');

  // Function to play selected song
  const playSong = (src) => {
    if (soundRef.current) {
      soundRef.current.unload();
    }
    const sound = new Howl({
      src: [src],
      loop: looping,
      onplay: () => setPlaying(true),
      onpause: () => setPlaying(false),
      onend: () => setPlaying(false)
    });
    soundRef.current = sound;
    sound.play();
  };

  // Function to pause the currently playing song
  const pauseSong = () => {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  };

  // Function to toggle loop mode
  const toggleLoop = () => {
    setLooping(!looping);
    if (soundRef.current) {
      soundRef.current.loop(looping);
    }
  };

  return (
    <Box p="4">
      <Heading mb="4">Gospel Music</Heading>
      {gospelMusic.map(song => (
        <Box key={song.id} p="4" borderWidth="1px" borderRadius="lg" mb="4">
          <Heading as="h3" size="md" mb="2">{song.title}</Heading>
          <Text mb="2">{song.artist}</Text>
          <Flex align="center">
            <IconButton icon={<FaPlay />} colorScheme="blue" onClick={() => playSong(song.src)} />
            <IconButton icon={<FaPause />} colorScheme="red" onClick={pauseSong} />
            <IconButton icon={<FaRedo />} colorScheme={looping ? "green" : "gray"} onClick={toggleLoop} />
          </Flex>
          {playing && <Text mt="2">Currently playing...</Text>}
        </Box>
      ))}
    </Box>
  );
};

export default Gospel;
