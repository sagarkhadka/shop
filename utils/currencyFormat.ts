export const currencyFormat = (value: number) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'Nrs',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value)

  // Replace the currency symbol with 'रू'
  const formatted = formattedValue.replace(/\NRS/g, 'रू. ')

  return formatted
}
