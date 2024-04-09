export const currencyFormat = (value: number) => {
  const formatted = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'Nrs',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)

  return formatted
}
