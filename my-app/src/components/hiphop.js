import React, { useState, useRef } from 'react';
import { Box, Heading, Text, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, IconButton } from '@chakra-ui/react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'; // Import icons
import musicData from '../music.json'; // Assuming music.json is in the same directory

const Hiphop = () => {
  const [playing, setPlaying] = useState(false);
  const [looping, setLooping] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 0.5
  const soundRef = useRef(null);

  // Filter music data for songs in the "hiphop" genre
  const hiphopMusic = musicData.filter(song => song.genre === 'hiphop');

  // Function to play selected song
  const playSong = (src) => {
    if (soundRef.current) {
      soundRef.current.unload();
    }
    const sound = new Howl({
      src: [src],
      loop: looping,
      volume: volume, // Set volume
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

  // Function to handle volume change
  const handleVolumeChange = (value) => {
    setVolume(value);
    if (soundRef.current) {
      soundRef.current.volume(value);
    }
  };

  return (
    <Box p="4">
      <Heading mb="4">Hiphop Music</Heading>
      <Flex direction="column" gap="4">
        {hiphopMusic.map(song => (
          <Box key={song.id} p="4" borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="md" mb="2">{song.title}</Heading>
            <Text mb="2">{song.artist}</Text>
            <Flex>
              <IconButton icon={<FaPlay />} colorScheme="blue" onClick={() => playSong(song.src)} />
              <IconButton icon={<FaPause />} colorScheme="red" onClick={pauseSong} />
            </Flex>
            <IconButton icon={<FaRedo />} colorScheme={looping ? "green" : "gray"} onClick={toggleLoop} />
            <Flex align="center">
              <Text mr="2">Volume:</Text>
              <Slider flex="1" value={volume} onChange={handleVolumeChange}>
                <SliderTrack bg="gray.200">
                  <SliderFilledTrack bg="blue" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Flex>
            {playing && <Text mt="2">Currently playing...</Text>}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Hiphop;
