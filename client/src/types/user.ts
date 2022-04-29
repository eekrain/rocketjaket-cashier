export enum UserRolesEnum {
  user = 'user',
  me = 'me',
  anonymous = 'anonymous',
  administrator = 'administrator',
  karyawan = 'karyawan',
}

export const UserRoleValues = Object.values(UserRolesEnum);
export const PossibleDefaultRoleUser = [
  UserRolesEnum.administrator,
  UserRolesEnum.karyawan,
];
export type TUserRoleOptions = keyof typeof UserRolesEnum;
