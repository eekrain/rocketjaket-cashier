import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import { useEffect, useMemo, useState } from "react";
import Upload from "./components/Upload";
import { nhost } from "./utils/nhost";
import { TOAST_TEMPLATE } from "./utils/TOAST_TEMPLATE";

interface IFile {
  bucketId: string;
  id: string;
  mimeType: string;
  name: string;
}

const FILES = gql`
  query MyQuery {
    files(order_by: { updatedAt: desc_nulls_last }) {
      id
      name
      mimeType
      bucketId
    }
  }
`;

function App() {
  const [data, setData] = useState<Array<IFile>>([]);
  const toast = useToast();

  const [num, setNum] = useState(0);
  const refetch = () => {
    setNum((prev) => prev + 1);
  };

  const processed = useMemo(() => {
    return data.map((file) => ({
      ...file,
      url: nhost.storage.getPublicUrl({ fileId: file.id }),
    }));
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await nhost.graphql.request(FILES);
      if (error)
        console.log("🚀 ~ file: App.tsx ~ line 20 ~ fetchData ~ error", error);
      else {
        setData(data.files);
        console.log("🚀 ~ file: App.tsx ~ line 20 ~ fetchData ~ data", data);
      }
    };
    fetchData();
  }, [num]);

  const handleDelete = async (id: string) => {
    const { error } = await nhost.storage.delete({ fileId: id });
    if (error) {
      toast(TOAST_TEMPLATE.error(`${id} failed to delete`));
    } else {
      toast(TOAST_TEMPLATE.success(`${id} deleted`));
    }
    refetch();
  };

  return (
    <Box bgColor={"gray.100"} w="100vw" minH={"100vh"}>
      <Container py="10" size="full" maxW={"2xl"}>
        <Upload refetch={refetch} />
        <HStack justifyContent={"flex-end"}>
          <Button onClick={refetch}>Refresh</Button>
        </HStack>
        <VStack mt="10">
          {processed.map((file) => (
            <HStack
              key={file.id}
              bg="white"
              py="4"
              px="8"
              w="full"
              spacing={"2"}
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <VStack spacing="2" alignItems={"flex-start"}>
                <Text noOfLines={1}>{file.name}</Text>
                <Link href={file.url} noOfLines={1}>
                  {file.url}
                </Link>
                <Text>ID : {file.id}</Text>
                <Text>Bucket : {file.bucketId}</Text>
                <Text>Type : {file.mimeType}</Text>
              </VStack>
              <Box>
                <Button
                  onClick={() => handleDelete(file.id)}
                  colorScheme={"red"}
                >
                  Delete
                </Button>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
