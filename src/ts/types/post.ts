export type PostType = {
  id: string;
  listFile: FileType[];
  content: string;
};

export type FileType = {
  id: string;
  file: File;
};
