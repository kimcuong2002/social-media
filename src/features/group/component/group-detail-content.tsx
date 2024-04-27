import { CreatePost } from '@/components';
import { Box, Button, Divider, Text } from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { FaFacebook, FaInstagram, FaCopy } from 'react-icons/fa';

const GroupDetailContent = () => {
  const currentPath = window.location.pathname;
  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:5173${currentPath}`);
    toast.success('Copied!');
  };
  return (
    <Box className="lg:flex gap-2 mb-4">
      <Box className="w-full lg:w-9/12">
        <CreatePost />
      </Box>
      <Box className="w-full lg:w-3/12 bg-white mt-4 rounded-lg border-2 p-4">
        <Text className="font-bold">Share Group</Text>
        <Divider className="my-4" />
        <Box className="flex flex-wrap gap-2">
          <Button
            leftIcon={<FaFacebook />}
            className="!bg-[#E8F1FE] !text-[#1877F2]"
          >
            Facebook
          </Button>
          <Button
            leftIcon={<FaInstagram />}
            className="!bg-[#E8F1FE] !text-[#1DA1F2]"
          >
            Instagram
          </Button>
          <Button
            leftIcon={<FaCopy />}
            className="!bg-[#E8F1FE] !text-[#110D59]"
            onClick={handleCopy}
          >
            Copy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupDetailContent;
