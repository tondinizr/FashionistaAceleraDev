export const floatToCurrency = value => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const currencyToFloat = (value) => {  
  value = value || '0'

  value = value.replace(/[^\d,]/g, '')
  value = value.replace(',', '.')

  return parseFloat(value)
}