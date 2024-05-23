import { useMemo, useState } from 'react';

import { Avatar, Box, Divider, Text } from '@chakra-ui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { PiTelegramLogo } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ID_USER, LIMIT, PAGE } from '@/data';
import {
  Comment,
  CreateComment,
  useGetCommentsQuery,
  useGetPostDetail,
  useLikePost,
} from '@/features';
import { converDateToString } from '@/utils';

export const PostDetail = () => {
  const [page, setPage] = useState(PAGE);
  const params = useParams();
  const postId = params.id;

  const { data } = useGetPostDetail(params.id as string);
  const { data: comments, refetch } = useGetCommentsQuery(
    LIMIT,
    page,
    postId as string,
  );
  const [likePost] = useLikePost();

  const total = comments?.getComments.total || 0;
  const totalPage = Math.ceil(total / LIMIT);
  const postDetail = useMemo(() => {
    if (data) {
      const result = data.getPostById;
      return result;
    }
  }, [data]);
  const goBackHandler = () => {
    window.history.back();
  };

  const allComment = useMemo(() => {
    if (comments) {
      const result = comments.getComments.data;
      return result;
    }
  }, [comments]);

  const handleLikePost = () => {
    void likePost({ variables: { idPost: postId as string, idUser: ID_USER } });
  };

  return (
    <Box className="flex !bg-white h-[100vh]">
      {postDetail?.images && postDetail.images.length > 0 ? (
        <Box className="w-9/12 bg-black">
          <AiOutlineCloseCircle
            className="text-4xl text-white cursor-pointer"
            onClick={goBackHandler}
          />
          <Box className="p-4">
            {postDetail?.images && (
              <Swiper
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {postDetail?.images &&
                  postDetail.images.map((img: string) => (
                    <SwiperSlide key={img}>
                      <Box className="w-full flex justify-center items-center h-[89vh]">
                        <img
                          src={img}
                          loading="lazy"
                          alt=""
                          className="w-9/12"
                        />
                      </Box>
                      <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </Box>
        </Box>
      ) : (
        ''
      )}
      <Box
        className={`${postDetail?.images && postDetail.images.length > 0 ? 'w-3/12 ' : 'w-full flex justify-center bg-black'}`}
      >
        <Box
          className={` ${postDetail?.images && postDetail.images.length > 0 ? '!h-[99vh] !p-4 overflow-y-scroll no-scrollbar' : 'w-5/12 bg-white p-4 border'}`}
        >
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
              <BiLike className="bg-[#039DFC] text-white text-2xl p-1 rounded-full cursor-pointer" />
              <Text>{postDetail?.usersLiked?.length}</Text>
            </Box>
            <Box className="flex gap-1">
              <FaRegComments className="bg-[#039DFC] text-white text-2xl p-1 rounded-full" />
              <Text>{1}</Text>
            </Box>
          </Box>
          <Divider className="mt-2" />
          <Box className="flex justify-around items-center my-2 text-xl">
            <BiLike onClick={handleLikePost} className="cursor-pointer" />
            <FaRegComments />
            <PiTelegramLogo />
          </Box>
          <Divider className="mb-2" />
          {allComment?.map((comment: any) => (
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
              id={comment.id}
              images={comment.images}
              replies={comment.replies}
              videos={comment.videos}
              createdAt={comment.createdAt}
              postId={comment.postId}
              refetch={refetch}
            />
          ))}
          <Box className="flex justify-between mb-2 font-bold text-[##545659]">
            {page === 1 ? (
              <Box></Box>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => {
                  if (page > 1) setPage(page - 1);
                }}
              >
                Back
              </p>
            )}
            {page === totalPage ? (
              <Box></Box>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => {
                  if (page < totalPage) setPage(page + 1);
                }}
              >
                See more
              </p>
            )}
          </Box>
          <CreateComment
            postId={postId as string}
            onRefetch={() => refetch()}
          />
        </Box>
      </Box>
    </Box>
  );
};
