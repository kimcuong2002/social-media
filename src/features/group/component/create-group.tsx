import { Box, Divider, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import GroupCreateForm from './group-create-form';
import { useCreateGroup } from '../hooks/use-group-query';
import { GroupInput } from '../service/type';

const defaultValueForm = {
  name: '',
  description: '',
  avatar: '',
  coverImage: '',
};

const CreateGroup = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GroupInput>({ defaultValues: defaultValueForm });

  const [createGroup, { loading }] = useCreateGroup();

  const onSubmit: SubmitHandler<GroupInput> = (data) => {
    if (data.avatar && data.coverImage) {
      void createGroup({
        variables: {
          body: {
            ...data,
            coverImage: data.coverImage[0],
            avatar: data.avatar[0],
            isPrivate: false,
          },
        },
        onCompleted: () => {
          toast.success('Create group successfully!');
          reset(defaultValueForm);
        },
        onError: (errors) => {
          toast.error(errors.message);
        },
      });
    }
  };

  return (
    <Box>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <GroupCreateForm control={control} errors={errors} disable={loading} />
        <Divider className="mb-4" />
        <Input type="submit" className="!bg-[#1DA1F2] text-white" />
      </form>
    </Box>
  );
};

export default CreateGroup;
