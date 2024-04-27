import { useMemo } from 'react';

import { Box } from '@chakra-ui/react';

import { CreatePost } from '@/components';
import { Post, RightNavBar, HomeSideBar, useGetPostsQuery } from '@/features';
import NavbarLayout from '@/layout/navbar-layout';

export const Home = () => {
  const limit = 1000;
  const page = 1;
  const filter = {};

  const { data, refetch } = useGetPostsQuery(limit, page, filter);

  const posts = useMemo(() => {
    if (data?.getAllPost) {
      const result = data.getAllPost.data;
      return result;
    }
  }, [data]);
  return (
    <NavbarLayout navBarChildren={<HomeSideBar />}>
      <Box className="flex w-full justify-between">
        <Box className="hidden md:block"></Box>
        <Box className="w-full lg:w-11/12 xl:w-8/12 overflow-y-scroll h-[95vh] no-scrollbar">
          <CreatePost refetch={refetch} />
          {posts?.map((item) => (
            <Post
              key={item.id}
              content={item.content}
              images={item.images}
              fullname={item.author.fullname}
              avatar={item.author.avatar}
              createdAt={item.createdAt as Date}
              idPost={item.id}
              usersLiked={item.usersLiked}
              topic={item.topic}
              idAuthor={item.author.id}
              refetch={refetch}
            />
          ))}
        </Box>
        <Box className="hidden md:block"></Box>
        <RightNavBar className="w-3/12" />
      </Box>
    </NavbarLayout>
  );
};
