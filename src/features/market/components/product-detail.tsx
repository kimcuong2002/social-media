import { Box, IconButton, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ProductType } from '../service/type';
import { useGetProdcutById } from '@/features';
import { useMemo } from 'react';
import { CiShare2, CiShoppingTag } from 'react-icons/ci';

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
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 3,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
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
