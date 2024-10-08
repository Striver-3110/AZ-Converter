import { Grid, InputAdornment, TextField } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'
import axios from 'axios'
function InputAmount () {
  // console.log(import.meta.env.VITE_API_KEY)
  const {
    amount,
    setAmount,
    convertedAmount,
    setConvertedAmount,
    fromValue,
    setFromValue,
    toValue,
    setToValue
  } = useContext(CurrencyContext)

  const base_currency = fromValue.split(' ')[0]
  const currency = toValue.split(' ')[0]

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios(
          `https://api.currencyapi.com/v3/latest?apikey=${import.meta.env.VITE_API_KEY}`,
          {
            params: {
              base_currency: base_currency,
              currencies: currency
            }
          }
        )
        console.log(response)
        setConvertedAmount(response.data.data[currency].value * amount)
        console.log(convertedAmount)
      }
      fetchData()
    } catch (error) {
      
    }
  }, [amount, fromValue, toValue])
  return (
    <Grid item xs={6} md>
      <TextField
        value={amount}
        onChange={handleAmount}
        label='Amount'
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}
      />
    </Grid>
  )
}
export default InputAmount
