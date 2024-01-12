import { useState } from 'react';

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  WrapItem,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  return (
    <Box className="flex justify-center items-center">
      {openSearch ? (
        ''
      ) : (
        <Box className="lg:hidden mr-2">
          <Button px="0" className="lg:hidden" onClick={handleOpenSearch}>
            <WrapItem className="bg-gray-500 p-2 rounded-full">
              <FiSearch className="text-md text-white" />
            </WrapItem>
          </Button>
        </Box>
      )}
      {openSearch && (
        <Box className="flex justify-center items-center gap-1">
          <IoMdArrowRoundBack
            onClick={handleCloseSearch}
            className="text-2xl"
          />
          <Input placeholder="Search" size="sm" />
        </Box>
      )}

      <Box className="hidden lg:block">
        <InputGroup size="md" className="!bg-gray-200 rounded-xl">
          <InputLeftElement pointerEvents="none">
            <FiSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" className="px-2" />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Search;
