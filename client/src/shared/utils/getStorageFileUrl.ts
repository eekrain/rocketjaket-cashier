import {BACKEND_HBP_ENDPOINT} from '@env';
import uuid from 'react-native-uuid';

export const getStorageFileUrl = (fileUrlKey?: string): string => {
  if (!fileUrlKey) return '';
  return `${BACKEND_HBP_ENDPOINT}/storage/o/${fileUrlKey}`;
};

interface IGetImageTransform {
  fileKey?: string | null;
  w?: number;
  h?: number;
  q?: number;
  alwaysRefresh?: boolean;
}

export const getStorageFileUrlWImageTransform = ({
  fileKey,
  w,
  h,
  q,
  alwaysRefresh,
}: IGetImageTransform): string => {
  if (!fileKey) return '';
  const fileUrl = getStorageFileUrl(fileKey);
  const arr = [];
  if (w) arr.push({key: 'w', val: w});
  if (h) arr.push({key: 'h', val: h});
  if (q) arr.push({key: 'q', val: q});
  if (alwaysRefresh) arr.push({key: 'token', val: uuid.v1()});
  let query = '';
  arr.forEach((param, i) => {
    if (i === 0) query += `${param.key}=${param.val}`;
    else query += `&${param.key}=${param.val}`;
  });
  return `${fileUrl}?${query}`;
};
