import { customAlphabet } from "nanoid/non-secure";

export const getRandomAlphabet = (length: number) => {
  const nanoid = customAlphabet("ABCDEFGHIKLMNOPQRSTVXYZ", length);
  return nanoid();
};
