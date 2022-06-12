// import uuid from 'react-native-uuid';

import {nhost} from './nhost';

export interface IGetImageTransform {
  fileId?: string | null;
  fileUrl?: string | null;
  w?: number;
  h?: number;
  q?: number;
  alwaysRefresh?: boolean;
}

export const getStorageFileUrlWImageTransform = ({
  fileId,
  fileUrl,
  w,
  h,
  q,
  alwaysRefresh,
}: IGetImageTransform): string => {
  let url = '';
  if (fileUrl && fileUrl === '') return 'default';
  else if (fileUrl && fileUrl !== '') url = fileUrl;
  else if (fileId) url = nhost.storage.getPublicUrl({fileId: fileId});
  else return 'default';

  const arr = [];
  if (w) arr.push({key: 'w', val: w});
  if (h) arr.push({key: 'h', val: h});
  if (q) arr.push({key: 'q', val: q});
  // if (alwaysRefresh) arr.push({key: 'token', val: uuid.v1()});
  let query = '';
  arr.forEach((param, i) => {
    if (i === 0) query += `${param.key}=${param.val}`;
    else query += `&${param.key}=${param.val}`;
  });
  return `${url}?${query}`;
};
