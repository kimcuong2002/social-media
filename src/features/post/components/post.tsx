import { FC, useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Box,
  Text,
  Image,
  Divider,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { MdOutlineIosShare } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Comment } from '@/components';
import { CommentInput, PostType, useLikePost } from '@/features';
import { useQueryInfoUser } from '@/features/auth';
import { converDateToString } from '@/utils';

export const Post: FC<PostType> = ({
  idPost,
  content,
  images,
  typePost,
  videoSrc,
  fullname,
  avatar,
  createdAt,
  usersLiked,
  topic,
}) => {
  const videoProps = {
    src: videoSrc,
    name: 'header',
    allowFullScreen: true,
    title: 'video',
  };
  const dateCreated = converDateToString(createdAt);
  const [likePost] = useLikePost();
  const [likedPost, setLikedPost] = useState(false);
  const [countLiked, setCountLiked] = useState(0);

  const { data: userData, refetch } = useQueryInfoUser();
  const handleLikePost = () => {
    void likePost({
      variables: {
        idPost: idPost,
        idUser: userData?.getInfoUser.id,
      },
      onCompleted: async () => {
        setLikedPost(!likedPost);
        await refetch();
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  useEffect(() => {
    if (usersLiked && usersLiked.length > 0) {
      usersLiked.find((item) => item.id === userData?.getInfoUser.id)
        ? setLikedPost(true)
        : setLikedPost(false);
      setCountLiked(usersLiked.length);
    }
  }, [userData?.getInfoUser.id, usersLiked]);

  const color = useMemo(() => {
    if (topic) {
      return topic.color;
    }
  }, [topic]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <Box className="bg-white my-4 p-4 rounded-lg border-2">
      <Box className="flex items-center gap-2">
        <Avatar src={avatar} />
        <Box>
          <Text className="font-bold">{fullname}</Text>
          <Text fontSize="xs" className="text-gray-500">
            {dateCreated}
          </Text>
        </Box>
      </Box>
      <Box>

      <Text className={isTruncated ? 'text-ellipsis' : ''}>{content}</Text>
      <button onClick={toggleTruncation}>{isTruncated ? 'Xem thêm' : 'Thu gọn'}</button>
      </Box>
      {topic && (
        <Box
          className={`rounded-sm p-1 inline py-1 px-2 font-bold bg-[#${color}]`}
        >
          #{topic.name}
        </Box>
      )}

      {typePost === 'video' ? (
        <video {...videoProps} controls>
          <track src="captions.vtt" kind="captions" label="English" default />
        </video>
      ) : (
        <Box
          className="my-6 w-full columns-3"
        >
          {images &&
            images.map((item) => (
              <Link to={`posts/${idPost}`} key={item}>
              <Image src={item} className='m-1'/>
              </Link>
            ))}
        </Box>
      )}
      <Divider className="mb-4" />
      <Box className="flex justify-between items-center my-2">
        <Box className="w-full flex justify-around">
          <Box className="flex items-center gap-1">
            <BiLike
              onClick={handleLikePost}
              className={`${
                likedPost ? 'text-blue-800' : ''
              } cursor-pointer text-xl`}
            />
            <Box>{countLiked < 100 ? countLiked : '99+'}</Box>
          </Box>
          <Box className="flex justify-center items-center">
            <FaRegComments />
            <Text>Comments</Text>
          </Box>
          <Box>
            <MdOutlineIosShare onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Share Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
      <Divider className="mb-4" />
      <Comment />
      <CommentInput/>
    </Box>
  );
};
