export const toTitleCase = (text: string) => {
  const lower = text.toLowerCase().trim();
  const format = lower
    .split(' ')
    .map(([first, ...rest]) => `${first.toUpperCase()}${rest}`)
    .join(' ');
  return format;
};
