import { Box, Input, Text, Checkbox, Button } from '@chakra-ui/react';

export const SignInForm = () => {
  return (
    <Box className="flex flex-col gap-2">
      <Box className="flex gap-2">
        <Input placeholder="First Name" />
        <Input placeholder="Surname" />
      </Box>
      <Input placeholder="Phone Number or Address Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm PassWord" />
      <Box className="mt-4">
        <Text className="text-gray-500">Date of birth</Text>
        <Input placeholder="Select Date" size="md" type="datetime-local" />
      </Box>
      <Box className="my-4">
        <Text className="text-gray-500">Gender</Text>
        <Box className="flex justify-between">
          <Checkbox value="naruto">Male</Checkbox>
          <Checkbox value="sasuke">Female</Checkbox>
          <Checkbox value="kakashi">Custom</Checkbox>
        </Box>
      </Box>
      <Text className="text-gray-500" fontSize="xs">
        People who use our service may have uploaded your contact information to
        Facebook.
      </Text>
      <Text className="text-gray-500" fontSize="xs">
        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies
        Policy. You may receive SMS notifications from us and can opt out at any
        time.
      </Text>
      <Button className="my-6" colorScheme="whatsapp">
        Sign Up
      </Button>
    </Box>
  );
};
