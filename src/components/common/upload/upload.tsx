import { FC, useEffect, useMemo, useState } from 'react';

import { Box, Button, Input, Text } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';
import { LuUploadCloud } from 'react-icons/lu';

import {
  useUploadMultipleFilesMutation,
  useUploadSingleFileMutation,
} from '@/hooks';

type Props = {
  setValue?: (_v: string[]) => void;
};

export const Upload: FC<Props> = ({ setValue }) => {
  const [filesUpload, setFilesUpload] = useState<FileList | null>();

  const [uploadSingleFiles] = useUploadSingleFileMutation();
  const [uploadMultipleFiles] = useUploadMultipleFilesMutation();

  const imagePreview = useMemo(() => {
    if (filesUpload) {
      const result = [];
      for (const file of filesUpload) {
        result.push(URL.createObjectURL(file));
      }
      return result;
    }
    return null;
  }, [filesUpload]);

  const handleSubmitUpload = useEffect(() => {
    if (filesUpload) {
      if (filesUpload.length === 1) {
        void uploadSingleFiles({
          variables: { file: filesUpload[0] },
          onCompleted: (data) => {
            setValue && setValue(data.uploadSingleFiles.url);
          },
        });
      } else {
        void uploadMultipleFiles({
          variables: {
            files: [filesUpload],
          },
          onCompleted: (data) => {
            setValue && setValue(data.uploadMultipleFiles.url);
          },
        });
      }
    }
  }, [filesUpload, setValue, uploadSingleFiles, uploadMultipleFiles]);

  return (
    <>
      {imagePreview &&
        imagePreview.map((url) => (
          <Box key={url} className="relative">
            <img src={url} alt="pic" />
            <IoClose className="text-2xl absolute top-0 right-0 text-red-800 hover:rotate-[45deg] hover:scale-105 hover:duration-300 cursor-pointer " />
          </Box>
        ))}
      {!imagePreview && (
        <>
          <Box className="border-dotted border-4 border-sky-500 flex justify-center items-center py-10 rounded-lg ">
            <label
              htmlFor="upload"
              className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
            >
              <LuUploadCloud className="text-6xl" />
              <Text className="font-bold">Choose your image</Text>
            </label>
          </Box>
          <Input
            className="hidden"
            id="upload"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFilesUpload(e.target.files);
              }
            }}
          />
        </>
      )}
      <Button onClick={() => handleSubmitUpload}>Save</Button>
    </>
  );
};
