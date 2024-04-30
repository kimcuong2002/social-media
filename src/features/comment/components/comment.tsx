import { FC, useState } from 'react';

import { Avatar, Box, Img, Text } from '@chakra-ui/react';
import { CommentType } from '../service';
import { durationTime } from '@/utils';
import { CreateReplyCmt } from './create-reply-comment';

export const Comment: FC<CommentType> = ({
  author,
  content,
  images,
  videos,
  createdAt,
  id,
  postId,
  replies,
}) => {
  const [repCmt, setRepCmt] = useState(false);
  return (
    <Box className="flex gap-2 my-4">
      <Avatar src={author?.avatar} />
      <Box>
        <>
          <Box className="bg-[#f0f0f1] py-1 px-2 rounded-lg">
            <Text className="font-medium">{author?.fullname}</Text>
            <Text>{content}</Text>
          </Box>
          <Box className="columns-2 mt-2">
            {images?.map((img) => (
              <Img src={img} alt="" key={img} className="rounded-lg" />
            ))}
          </Box>
          <Box className="columns-2">
            {videos?.map((video) => <Img src={video} alt="" key={video} />)}
          </Box>
          <Box className="flex gap-2 text-xs">
            <Text>{durationTime(createdAt)}</Text>
            <Text className="font-bold cursor-pointer">Like</Text>
            <Text
              className="font-bold cursor-pointer"
              onClick={() => setRepCmt(!repCmt)}
            >
              Reply
            </Text>
          </Box>
          {repCmt && <CreateReplyCmt idCmtParent={id} postId={postId} />}
        </>
        <Box className="flex flex-col mt-4">
          {replies?.map((reply) => (
            <Box key={reply.id} className="flex gap-2">
              <Avatar src={reply.author?.avatar} />
              <Box>
                <Box className="bg-[#f0f0f1] py-1 px-2 rounded-lg">
                  <Text className="font-medium">{reply.author?.fullname}</Text>
                  <Text>{reply.content}</Text>
                </Box>
                <Box className="columns-2 mt-2">
                  {reply.images?.map((img) => (
                    <Img src={img} alt="" key={img} className="rounded-lg" />
                  ))}
                </Box>
                <Box className="columns-2">
                  {reply.videos?.map((video) => (
                    <Img src={video} alt="" key={video} />
                  ))}
                </Box>
                <Text className="text-xs">{durationTime(reply.createdAt)}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
