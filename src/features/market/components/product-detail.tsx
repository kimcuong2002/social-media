import { Box, IconButton, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { ProductType } from '../service/type';
import { useGetProdcutById } from '@/features';
import { useMemo } from 'react';
import { CiShare2, CiShoppingTag } from 'react-icons/ci';
import { EffectCube, Pagination } from 'swiper/modules';

const ProductDetail = ({
  id,
  name,
  category,
  author,
  images,
  createdAt,
  description,
  price,
  location,
}: ProductType) => {
  const { data } = useGetProdcutById(id!);
  const productDetail = useMemo(() => {
    return data?.getProductById;
  }, [data]);

  return (
    <Box>
      <Box className="flex gap-2 p-2">
        <Box className="w-7/12">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {productDetail?.images?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} className="w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box className="w-5/12">
          <Text className="font-bold text-3xl">{productDetail?.name}</Text>
          <Box className="flex justify-between items-center">
            <Text className="text-[#147ADA] font-bold text-xl">
              ${productDetail?.price}
            </Text>
            <Box className="flex gap-2">
              <IconButton icon={<CiShare2 />} aria-label={''} />
              <IconButton icon={<CiShoppingTag />} aria-label="" />
            </Box>
          </Box>
          <Text className="text-[#898694] mt-4">Description</Text>
          <Text>{productDetail?.description}</Text>
          <Text className="text-[#898694] mt-4">Location</Text>
          <Text>{}</Text>
        </Box>
      </Box>
      <Box>mess</Box>
    </Box>
  );
};

export default ProductDetail;
