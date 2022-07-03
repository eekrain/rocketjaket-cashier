export const TOAST_TEMPLATE = {
  error: (text: string, duration: number = 2000) => ({
    title: 'Error!',
    status: 'error',
    description: text,
    duration,
  }),
  success: (text: string, duration: number = 2000) => ({
    title: 'Success!',
    status: 'success',
    description: text,
    duration,
  }),
  cancelled: (text: string, duration: number = 2000) => ({
    title: 'Cancelled!',
    status: 'info',
    description: text,
    duration,
  }),
};
