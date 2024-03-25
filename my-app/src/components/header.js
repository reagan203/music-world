import React, { useState, useCallback } from 'react';
import { Box, Flex, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'; // Import CloseIcon
import musicData from '../music.json';

const Header = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback(() => {
    const results = musicData.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, setSearchResults]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
    setSearchResults(musicData);
  }, [setSearchResults]);

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <Box as="header" p={4}>
      <Flex justify="space-between" align="center">
        <IconButton
          aria-label="Toggle dark mode"
          icon={<CloseIcon />} // just a placeholder for the icon
          onClick={() => {}} // just a placeholder for the function
        />
        <Input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          mr={2}
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          onClick={handleSearch}
          mr={2}
        />
        <IconButton
          aria-label="Clear search"
          icon={<CloseIcon />}
          onClick={handleClearSearch}
          disabled={!searchTerm}
        />
      </Flex>
    </Box>
  );
};

export default Header;
