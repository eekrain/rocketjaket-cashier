export const checkErrorMessage = {
  fkError: (errMsg?: string | null) => {
    if (!errMsg) return false;
    return errMsg.includes('foreign key');
  },
};
