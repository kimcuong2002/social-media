import { useMemo } from 'react';

import { Box, Image, Text } from '@chakra-ui/react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

import { CreatePost } from '@/components';
import { useGetGroupById } from '@/features';

export const GroupDetail = () => {
  const params = useParams();
  const { data } = useGetGroupById(params.id!);

  const groupDetail = useMemo(() => {
    if (data) {
      const result = data.getGroupById;
      return result;
    }
  }, [data]);

  const goBackHandler = () => {
    window.history.back();
  };

  return (
    <Box className=" flex gap-4">
      <Box className="w-3/12 flex gap-2 p-4">
        <IoArrowBackCircleOutline
          class="text-4xl cursor-pointer"
          onClick={goBackHandler}
        />
        <Box className="!max-h-10">
          <img
            src={groupDetail?.avatar}
            alt=""
            className="w-16 h-16 rounded-lg "
          />
        </Box>
        <Box>
          <Text>{groupDetail?.name}</Text>
          <Box className="flex gap-2">
            <Text>
              {groupDetail?.isPrivate === true
                ? 'Private Group'
                : 'Public Group'}
            </Text>
            <Text>{groupDetail?.members?.length} members</Text>
          </Box>
        </Box>
      </Box>
      <Box className="w-9/12 bg-[#F6E8E7] flex flex-col justify-center items-center">
        <Box className="w-full flex justify-center items-center bg-gradient-to-b from-[#836A55] to-white to-50%">
          <Box className="w-10/12 ">
            <Image
              src={groupDetail?.coverImage}
              alt=""
              className="w-full rounded-b-[30px]"
            />
            <Text className="text-3xl font-bold uppercase mt-4 mb-1">
              {groupDetail?.name}
            </Text>
            <Box className="flex gap-4 text-xl">
              <Text>
                {groupDetail?.isPrivate === true
                  ? 'Private Group'
                  : 'Public Group'}
              </Text>
              <Text>{groupDetail?.members?.length} members</Text>
            </Box>
            <></>
          </Box>
        </Box>
        <Box className="w-9/12 flex ">
          <Box className="w-8/12">
            <CreatePost />
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};
