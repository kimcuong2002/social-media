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
          {...register('username', {
            required: 'This field is required',
            maxLength: {
              value: 50,
              message: 'User cannot exceed 50 characters',
            },
            minLength: {
              value: 10,
              message: 'Username cannot be less than 5 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Alphabetical characters only',
            },
          })}
        />
        {errors?.username && (
          <FormErrorMessage>{errors.username.message}</FormErrorMessage>
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
            {...register('password', {
              required: 'This field is required',
              maxLength: {
                value: 50,
                message: 'Password cannot exceed 50 characters',
              },
              minLength: {
                value: 5,
                message: 'Password cannot be less than 5 characters',
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Alphabetical characters only',
              },
            })}
          />
          <InputRightElement width="3rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
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
