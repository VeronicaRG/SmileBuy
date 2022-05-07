export const formatToCurrency = (number: number) => {
  const internalNumber = isNaN(number) ? 0 : number;
  return internalNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
