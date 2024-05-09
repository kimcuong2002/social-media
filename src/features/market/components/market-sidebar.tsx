import { Box, Divider, Text } from '@chakra-ui/react';

import { SideBarButton } from '@/components';
import { categoriesItem, marketSidebarItem } from '../service/constant';
import CreateProduct from './create-product';

type Props = {
  refetch: () => void;
};

export const CartSideBar = ({ refetch }: Props) => {
  return (
    <Box>
      <Text className="font-bold" fontSize="2xl">
        Marketplace
      </Text>
      <Divider className="my-4" />
      <Box className="flex flex-col">
        {marketSidebarItem.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
      <CreateProduct refetch={refetch} />
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        Filter
      </Text>
      <Text className="font-bold cursor-pointer">Danang . 20km</Text>
      <Divider className="my-4" />
      <Text className="uppercase my-4 text-violet-800 font-bold" fontSize="sm">
        All Categories
      </Text>
      <Box className="flex flex-col gap-4">
        {categoriesItem.map((item) => (
          <SideBarButton
            key={item.name}
            buttonIcon={item.icon}
            buttonName={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};
