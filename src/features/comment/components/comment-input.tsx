import { ChangeEvent, useState } from 'react';

import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

import { optionInput } from '../../post/constant';

export const CommentInput = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [content, setContent] = useState("");
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setContent((prevContent) => prevContent + emojiData.emoji);
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    setOpenEmoji(false);
  };
  return (
    <Box className="mt-2">
      <InputGroup className="my-4">
        <Input type="tel" placeholder="Type your comment" value={content} onChange={handleChangeInput}/>
        <InputRightElement className="gap-2 text-gray-500 mr-10">
          {optionInput.map((item) => (
            <Box key={item.id}>
              <label htmlFor={item.value}>
                {item.open ? (
                  <Box
                    className="cursor-pointer"
                    onClick={() => setOpenEmoji(!openEmoji)}
                  >
                    {item.icon}
                  </Box>
                ) : (
                  <Box className="cursor-pointer">{item.icon}</Box>
                )}
              </label>
              <Input
                multiple
                type={item.type}
                name={item.value}
                id={item.value}
                accept={item.value}
                className="hidden"
                
                
              />
          
            </Box>
          ))}
        </InputRightElement>
      </InputGroup>
        {openEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </Box>
  );
};
