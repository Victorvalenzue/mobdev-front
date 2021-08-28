interface FormatOptions {
  symbol: string
  separator: {
    miles: string
    decimal: string
  }
  round: boolean
  decimals: number
  fixedDecimals: boolean
}

export const format = (
  value: string | number = 0,
  options: FormatOptions,
): string => {
  const newValue = options.round
    ? Math.round(Number(value))
    : parseFloat(value.toString())

  const valueFixed = options.fixedDecimals
    ? newValue.toFixed(options.decimals)
    : newValue

  return valueFixed
    .toString()
    .replace('.', options.separator.decimal)
    .replace(/\B(?=(\d{3})+(?!\d))/g, options.separator.miles)
}

export const formatMoney = (
  value: string | number,
  options?: FormatOptions,
): string => {
  const optionsDefault = {
    symbol: '$',
    separator: {
      miles: '.',
      decimal: ',',
    },
    round: true,
    decimals: 0,
    fixedDecimals: true,
    ...options,
  }

  return `${optionsDefault.symbol}${format(value, optionsDefault)}`
}
