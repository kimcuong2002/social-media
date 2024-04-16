import { useMemo } from 'react';

import { Avatar, Box, Divider, Text } from '@chakra-ui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { PiTelegramLogo } from "react-icons/pi";
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGetPostDetail } from '@/features';
import { converDateToString } from '@/utils';

export const PostDetail = () => {
  const params = useParams();
  const { data } = useGetPostDetail(params.id as string);
  const postDetail = useMemo(() => {
    if (data) {
      const result = data.getPostById;
      return result;
    }
  }, [data]);
  const goBackHandler = () => {
    window.history.back();
  };
  return (
    <Box className="flex ">
      <Box className="w-9/12 bg-black p-4">
        <AiOutlineCloseCircle
          className="text-4xl text-white cursor-pointer"
          onClick={goBackHandler}
        />
        <Box>
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {postDetail?.images &&
              postDetail.images.map((img) => (
                <SwiperSlide key={img}>
                  <Box className="w-full flex justify-center items-center h-[89vh]">
                    <img src={img} loading="lazy" alt="" className="w-9/12" />
                  </Box>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
      <Box className="p-4 w-3/12">
        <Box className="flex gap-2">
          <Avatar src={postDetail?.author.avatar} />
          <Box>
            <Text className="font-bold">{postDetail?.author.fullname}</Text>
            <Text className="font-bold text-[#6a6d70]">
              {converDateToString(postDetail?.createdAt as Date)}
            </Text>
          </Box>
        </Box>
        <Text className="my-2">{postDetail?.content}</Text>
        <Box className="w-full flex justify-between items-center">
          <Box className="flex gap-1">
            <BiLike className="bg-[#039DFC] text-white text-2xl p-1 rounded-full" />
            <Text>{postDetail?.usersLiked?.length}</Text>
          </Box>
          <Box className="flex gap-1">
            <FaRegComments className="bg-[#039DFC] text-white text-2xl p-1 rounded-full" />
            <Text>{1}</Text>
          </Box>
        </Box>
        <Divider className='mt-2'/>
        <Box className='flex justify-around items-center my-2 text-xl'>
          <BiLike/>
          <FaRegComments/>
          <PiTelegramLogo/>
        </Box>
        <Divider className='mb-2'/>
      </Box>
    </Box>
  );
};
