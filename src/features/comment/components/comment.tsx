import { useState } from 'react';

import { Avatar, Box, Text } from '@chakra-ui/react';
import { BiHeart } from 'react-icons/bi';

import CommentInput from './comment-input';

export const Comment = () => {
  const [reply, setReply] = useState(false);

  const toggleOpenReply = () => {
    setReply(!reply);
  };
  return (
    <Box className="flex gap-2">
     
    </Box>
  );
};
