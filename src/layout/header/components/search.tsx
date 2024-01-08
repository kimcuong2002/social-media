import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  WrapItem,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <Box className="flex">
      <Box className="lg:hidden">
        <Button px="0" className="lg:hidden">
          <WrapItem className="bg-gray-500 p-2 rounded-full">
            <FiSearch className="text-md text-white" />
          </WrapItem>
        </Button>
      </Box>
      <InputGroup
        size={{ sm: 'sm', lg: 'md' }}
        className="!bg-gray-200 rounded-xl hidden lg:block"
      >
        <InputLeftElement pointerEvents="none">
          <FiSearch className="hidden md:block" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search"
          className="px-2 hidden lg:block lg:px-0"
        />
      </InputGroup>
    </Box>
  );
};

export default Search;
