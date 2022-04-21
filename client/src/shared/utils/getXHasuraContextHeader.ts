interface IGetXHasuraRoleHeader {
  role?: TUserRoleOptions | null;
  withUserId?: boolean;
}

interface IHasuraHeader {
  'x-hasura-role': TUserRoleOptions | null;
  'x-hasura-user-id': string | null;
}

export const getXHasuraContextHeader = ({
  role = null,
  withUserId = false,
}: IGetXHasuraRoleHeader) => {
  const headers: IHasuraHeader = {
    'x-hasura-role': role,
    'x-hasura-user-id': null,
  };

  if (withUserId) {
    headers['x-hasura-user-id'] = nhostClient.auth.getClaim(
      'x-hasura-user-id',
    ) as string | null;
  }

  return {context: {headers: headers}};
};
