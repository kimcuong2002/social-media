import { FC } from 'react';

import { Text } from '@chakra-ui/react';

type Props = {
  message: string;
};

const ErrorShow: FC<Props> = ({ message }) => {
  return <Text>{message}</Text>;
};

export default ErrorShow;
