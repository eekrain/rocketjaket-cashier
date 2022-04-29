export const TOAST_TEMPLATE = {
  error: (text: string) => ({
    title: 'Error!',
    status: 'error',
    description: text,
  }),
  success: (text: string) => ({
    title: 'Success!',
    status: 'success',
    description: text,
  }),
  cancelled: (text: string) => ({
    title: 'Cancelled!',
    status: 'info',
    description: text,
  }),
};
