import React, { useEffect, useRef, useState } from "react";
import { nhost } from "../utils/nhost";
import { Box, FormLabel, Input, useToast } from "@chakra-ui/react";
import { TOAST_TEMPLATE } from "../utils/TOAST_TEMPLATE";

const Upload = ({ refetch }: { refetch: () => void }) => {
  const toast = useToast();
  const [bucket, setBucket] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    console.log("🚀 ~ file: Upload.tsx ~ line 35 ~ handleUpload ~ e", file);
    if (!file) return;

    const { fileMetadata, error } = await nhost.storage.upload({
      bucketId: bucket,
      file: file,
    });
    if (error) {
      console.log(
        "🚀 ~ file: Upload.tsx ~ line 9 ~ handleChangeStatus ~ error",
        error
      );
      toast(TOAST_TEMPLATE.error(`${file.name} uploaded`));
    } else {
      console.log(
        "🚀 ~ file: Upload.tsx ~ line 9 ~ handleChangeStatus ~ success",
        fileMetadata
      );
      toast(TOAST_TEMPLATE.success(`${fileMetadata.name} uploaded`));
      refetch();
    }
    if (fileInput.current?.value) fileInput.current.value = "";
  };

  return (
    <Box bg="white" p="4">
      <FormLabel htmlFor="bucket">Bucket</FormLabel>
      <Input
        mb="2"
        type="text"
        value={bucket}
        onChange={(e) => setBucket(e.target.value)}
        name="bucket"
        id="bucket"
      />
      <Input
        ref={fileInput}
        type={"file"}
        onChange={(e) => {
          handleUpload(e);
        }}
        multiple={false}
      />
    </Box>
  );
};

export default Upload;
