import { useState, ChangeEvent } from 'react';

import { Box, Input, Text, Checkbox } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import ErrorShow from '../error-show/error-show';
import { SignInInput } from '@/ts/types';

export const SignInForm = () => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [other, setOther] = useState(false);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '1') {
      setMale(true);
      setFemale(false);
      setOther(false);
    } else if (value == '2') {
      setMale(false);
      setFemale(true);
      setOther(false);
    } else {
      setMale(false);
      setFemale(false);
      setOther(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>();

  const onSubmit = (data: SignInInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <Box className="flex flex-col gap-2">
        <Box className="flex gap-2">
          <Box>
            <Input
              id="firstname"
              placeholder="First Name"
              {...register('firstname', {
                required: 'What is your firstname',
                maxLength: {
                  value: 50,
                  message: 'Firstname cannot exceed 50 characters',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Alphabetical characters only',
                },
              })}
            />
            {errors?.firstname && (
              <ErrorShow message={errors.firstname.message as string} />
            )}
          </Box>
          <Box>
            <Input
              id="surname"
              placeholder="Surname"
              {...register('surname', {
                required: 'What is your surname',
                maxLength: {
                  value: 50,
                  message: 'Surname cannot exceed 50 character',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Alphabetical characters only',
                },
              })}
            />
            {errors?.surname && (
              <ErrorShow message={errors.surname.message as string} />
            )}
          </Box>
        </Box>
        <Input
          placeholder="Phone"
          {...register('phonenumber', {
            required: 'Please input your phone number',
            pattern: {
              value: /^[0-9]{10,}$/i,
              message: 'Invalid phone number',
            },
            minLength: {
              value: 10,
              message: 'The minimum and maximum phone number is ten digits',
            },
            maxLength: {
              value: 10,
              message: 'The minimum and maximum phone number is ten digits',
            },
          })}
        />
        {errors?.phonenumber && (
          <ErrorShow message={errors.phonenumber.message as string} />
        )}
        <Input
          id="username"
          placeholder="Username"
          {...register('username', {
            required: 'What is your username',
            maxLength: {
              value: 50,
              message: 'User cannot exceed 50 characters',
            },
            minLength: {
              value: 5,
              message: 'Username cannot be less than 5 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Alphabetical characters only',
            },
          })}
        />
        {errors?.username && (
          <ErrorShow message={errors.username.message as string} />
        )}
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register('password', {
            required: 'Please input your password',
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
        {errors?.password && (
          <ErrorShow message={errors.password.message as string} />
        )}
        <Box className="my-4">
          <Text className="text-gray-500">Gender</Text>
          <Box className="flex justify-between">
            <Checkbox
              value="1"
              isChecked={male}
              onChange={handleCheckboxChange}
            >
              Male
            </Checkbox>
            <Checkbox
              value="2"
              isChecked={female}
              onChange={handleCheckboxChange}
            >
              Female
            </Checkbox>
            <Checkbox
              value="3"
              isChecked={other}
              onChange={handleCheckboxChange}
            >
              Other
            </Checkbox>
          </Box>
          {errors?.gender && <ErrorShow message="Please choose your gender" />}
        </Box>
        <Text className="text-gray-500" fontSize="xs">
          People who use our service may have uploaded your contact information
          to Facebook.
        </Text>
        <Text className="text-gray-500" fontSize="xs">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </Text>
        <Input
          type="submit"
          colorScheme="whatsapp"
          className="my-4 cursor-pointer !bg-green-500"
        />
      </Box>
    </form>
  );
};
