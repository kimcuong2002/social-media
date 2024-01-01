import { useState } from 'react';

import {
  Box,
  Button,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LoginInput {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit = (data: LoginInput) => {
    alert(JSON.stringify(data));
  };

  const isUserNameError = login.username === '';
  const isPassWordError = login.password === '';

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={isUserNameError} className="mb-4">
        <FormLabel>Username</FormLabel>
        <Input
          id="username"
          type="email"
          value={login.username}
          {...register('username', {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.username?.type === 'required' && (
          <FormErrorMessage>This field is required</FormErrorMessage>
        )}
        {errors?.username?.type === 'maxLength' && (
          <FormErrorMessage>
            First name cannot exceed 20 characters
          </FormErrorMessage>
        )}
        {errors?.username?.type === 'pattern' && (
          <FormErrorMessage>Alphabetical characters only</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isPassWordError}>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            value={login.password}
            {...register('username', {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <InputRightElement width="3rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors?.password?.type === 'required' && (
          <FormErrorMessage>This field is required</FormErrorMessage>
        )}
        {errors?.password?.type === 'maxLength' && (
          <FormErrorMessage>
            First name cannot exceed 20 characters
          </FormErrorMessage>
        )}
        {errors?.password?.type === 'pattern' && (
          <FormErrorMessage>Alphabetical characters only</FormErrorMessage>
        )}
      </FormControl>
      <Box className="text-sm flex justify-between items-center my-2 text-[#7F265B]">
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Link to="">
          <Text>Forgot Password?</Text>
        </Link>
      </Box>
      <Input
        type="submit"
        className="cursor-pointer !bg-[#7F265B] text-white mt-6"
      />
    </form>
  );
};
