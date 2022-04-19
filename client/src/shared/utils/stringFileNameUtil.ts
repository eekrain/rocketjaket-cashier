import {nanoid} from 'nanoid/non-secure';

export const fileNameExtExtract = (filename: string) => {
  return {
    name: filename.substring(filename.lastIndexOf('/') + 1),
    ext: filename.substring(filename.lastIndexOf('.') + 1),
  };
};

export const renameFilenameWithAddedNanoid = (
  newFilename: string,
  uri: string,
) => {
  const extractedFileName = fileNameExtExtract(uri);

  return {
    originalName: extractedFileName,
    modifiedName: `${newFilename}-${nanoid(10)}.${extractedFileName.ext}`,
  };
};
