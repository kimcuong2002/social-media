import {
  Box,
  FormErrorMessage,
  Input,
  InputGroup,
  Text,
} from '@chakra-ui/react';
import { Control, FieldErrors } from 'react-hook-form';
import { InputProductType } from '../service/type';
import { FC, useMemo } from 'react';
import { DataFieldInputType } from '@/ts/types';
import { FormCustom, Upload } from '@/components';

export type Props = {
  control: Control<InputProductType, unknown>;
  errors: FieldErrors<InputProductType>;
  disable: boolean;
};

const ProductForm: FC<Props> = ({ control, errors, disable = false }) => {
  const dataFormCustom: DataFieldInputType<InputProductType>[] = useMemo(
    () => [
      {
        isRequired: true,
        control,
        name: 'name',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Name</Text>
            <InputGroup>
              <Input {...field} id="name" disabled={disable} />
              {errors.name && (
                <FormErrorMessage>
                  {errors.name.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'description',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Description</Text>
            <InputGroup>
              <Input {...field} id="description" disabled={disable} />
              {errors.description && (
                <FormErrorMessage>
                  {errors.description.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'price',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Price</Text>
            <InputGroup>
              <Input {...field} id="price" disabled={disable} type="number" />
              {errors.price && (
                <FormErrorMessage>
                  {errors.price.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'category',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Category</Text>
            <InputGroup>
              <Input
                {...field}
                id="category"
                disabled={disable}
                type="number"
              />
              {errors.category && (
                <FormErrorMessage>
                  {errors.category.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'location',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Location</Text>
            <InputGroup>
              <Input {...field} id="location" disabled={disable} />
              {errors.location && (
                <FormErrorMessage>
                  {errors.location.message as string}
                </FormErrorMessage>
              )}
            </InputGroup>
          </Box>
        ),
      },
      {
        isRequired: true,
        control,
        name: 'images',
        element: ({ field }) => (
          <Box className="mb-4 font-bold">
            <Text>Images</Text>
            <Upload
              {...field}
              disable={disable}
              isMultiple={true}
              typeUpload="normal"
            />
            {errors.images && (
              <FormErrorMessage>
                {errors.images.message as string}
              </FormErrorMessage>
            )}
          </Box>
        ),
      },
      // {
      //   isRequired: true,
      //   control,
      //   name: 'videos',
      //   element: ({ field }) => (
      //     <Box className="mb-4 font-bold">
      //       <Text>Videos</Text>
      //       <Upload
      //         {...field}
      //         disable={disable}
      //         isMultiple={true}
      //         typeUpload="normal"
      //       />
      //       {errors.videos && (
      //         <FormErrorMessage>
      //           {errors.videos.message as string}
      //         </FormErrorMessage>
      //       )}
      //     </Box>
      //   ),
      // },
    ],
    [control, errors, disable],
  );
  return (
    <Box>
      <FormCustom data={dataFormCustom} />
    </Box>
  );
};

export default ProductForm;
