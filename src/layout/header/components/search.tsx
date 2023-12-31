import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <Box>
      <InputGroup
        size={{ sm: 'sm', lg: 'md' }}
        className="!bg-gray-200 rounded-xl"
      >
        <InputLeftElement pointerEvents="none">
          <FiSearch className="hidden md:block" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search" className="px-2 lg:px-0" />
      </InputGroup>
    </Box>
  );
};

export default Search;
