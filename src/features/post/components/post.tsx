import { FC, useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Box,
  Text,
  Image,
  Divider,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from '@chakra-ui/react';
import toast from 'react-hot-toast';
import { BiLike } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi';

import { PostType, useDeletePost, useGhimPost, useLikePost } from '@/features';
import { useQueryInfoUser } from '@/features/auth';
import { converDateToString } from '@/utils';
import { PiTelegramLogo } from 'react-icons/pi';
import SharePostForm from './share-post-form';
import { CreateComment } from '@/features/comment/components/create-comment';
import { CiShoppingTag, CiEdit, CiTrash } from 'react-icons/ci';
import { BsCopy } from 'react-icons/bs';

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
  idAuthor,
  refetch,
}) => {
  const videoProps = {
    src: videoSrc,
    name: 'header',
    allowFullScreen: true,
    title: 'video',
  };
  const dateCreated = converDateToString(createdAt);
  const [likedPost, setLikedPost] = useState(false);
  const [countLiked, setCountLiked] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTruncated, setIsTruncated] = useState(true);
  const [likePost] = useLikePost();
  const [deletePost] = useDeletePost();
  const [ghimPost] = useGhimPost();

  const { data: userData } = useQueryInfoUser();

  const handleLikePost = () => {
    void likePost({
      variables: {
        idPost: idPost,
        idUser: userData?.getInfoUser.id,
      },
      onCompleted: () => {
        refetch && void refetch();
        setLikedPost(!likedPost);
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

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const handleDeletePost = () => {
    void deletePost({
      variables: {
        id: idPost,
      },
      onCompleted: () => {
        refetch && refetch();
        toast.success('Delete post successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  const handleGhimPost = () => {
    void ghimPost({
      variables: {
        idPost: idPost,
      },
      onCompleted: () => {
        refetch && void refetch();
        toast.success('Ghim post successfully!');
      },
      onError: (errors) => {
        toast.error(errors.message);
      },
    });
  };

  const currentPath = window.location.pathname;

  return (
    <Box className="bg-white my-4 p-4 rounded-lg border-2">
      <Box className="flex justify-between">
        <Box className="flex items-center gap-2">
          <Link to={`/profile/${idAuthor}`}>
            <Avatar src={avatar} className="hover:cursor-pointer" />
          </Link>
          <Box>
            <Link to={`/profile/${idAuthor}`}>
              <Text className="font-bold cursor-pointer">{fullname}</Text>
            </Link>
            <Text fontSize="xs" className="text-gray-500">
              {dateCreated}
            </Text>
          </Box>
        </Box>
        <Popover>
          <PopoverTrigger>
            <IconButton
              aria-label="Add to friends"
              icon={<HiDotsHorizontal />}
              className="cursor-pointer text-2xl"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              {userData?.getInfoUser.id === idAuthor && (
                <>
                  <Box
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleDeletePost}
                  >
                    <CiTrash className="text-2xl" />
                    <Text className="font-bold">Delete Post</Text>
                  </Box>
                  <Divider className="my-2" />
                  <Box
                    className="flex items-center gap-2 cursor-pointer font-bold"
                    onClick={handleGhimPost}
                  >
                    <CiShoppingTag className="text-2xl" />
                    <Text className="font-bold">Ghim Post</Text>
                  </Box>
                  <Divider className="my-2" />
                  <Link to={`/edit-post/${idPost}`}>
                    <Box className="flex items-center gap-2 cursor-pointer font-bold">
                      <CiEdit className="text-2xl" />
                      <Text className="font-bold">Edit Post</Text>
                    </Box>
                  </Link>
                </>
              )}
              {userData?.getInfoUser.id !== idAuthor && (
                <Box className="flex items-center gap-2 cursor-pointer font-bold">
                  <BsCopy className="text-2xl" />
                  <Text>Save Post</Text>
                </Box>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Text className={`${isTruncated ? 'truncate' : ''} mt-2 `}>
          {content}
        </Text>
        <button onClick={toggleTruncation} className="font-bold mb-2">
          {isTruncated ? 'See more' : 'Collapse'}
        </button>
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
          className={`my-6 w-full bg-[#1F1F1F] ${
            images && images?.length < 3 ? 'columns-2' : 'columns-3'
          }`}
        >
          {images &&
            images.map((item) => (
              <Link to={`${currentPath}/posts/${idPost}`} key={item}>
                <Image src={item} />
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
              } cursor-pointer text-2xl`}
            />
            <Box>{countLiked < 100 ? countLiked : '99+'}</Box>
          </Box>
          <Link to={`posts/${idPost}`}>
            <FaRegComments className="text-2xl cursor-pointer" />
          </Link>
          <Box>
            <PiTelegramLogo
              onClick={onOpen}
              className="text-2xl cursor-pointer"
            />
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Share Post</ModalHeader>
                <Divider />
                <ModalCloseButton />
                <ModalBody>
                  <SharePostForm idPost={idPost} idUser={idAuthor} />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      </Box>
      <Divider className="mb-4" />
      <CreateComment postId={idPost as string} />
    </Box>
  );
};
