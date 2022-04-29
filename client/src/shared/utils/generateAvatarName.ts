export const generateAvatarName = (name: any) => {
  if (typeof name !== 'string') {
    return '';
  }

  return name
    .split(' ')
    .slice(0, 2)
    .map(function (str: any) {
      return str ? str[0].toUpperCase() : '';
    })
    .join('');
};
