import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input type="tel" placeholder="Search" />
      </InputGroup>
    </Box>
  );
};

export default Search;
