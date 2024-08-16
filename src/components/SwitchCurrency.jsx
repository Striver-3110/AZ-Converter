import React, { useContext } from 'react'
import { Button, Grid } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { CurrencyContext } from '../context/CurrencyContext';


function SwitchCurrency() {
    const {
        fromValue,
        toValue,
        setFromValue,
        setToValue,
        amount,
        setAmount,
        convertedAmount,
        setConvertedAmount
    } = useContext(CurrencyContext)

    //? Key Points:
        // State Updates Are Asynchronous:

        // When you call setFromValue(toValue), React schedules an update to change fromValue to toValue.
        // However, this update doesn't happen immediately within the same function execution; React processes state updates asynchronously.
        // State Values Are Captured Before Updates:

        // When you call setToValue(fromValue), it still refers to the original fromValue, not the updated value.
        // React's state setters don't directly update the state; they queue the update and the state remains unchanged until React re-renders the component.
    const handleClick = () =>{
        setFromValue(toValue)
        setToValue(fromValue)
    }
  return (
    <Grid item xs={12} md="auto"> 
        <Button onClick={handleClick} sx={{
            borderRadius:1,
            height:"100%"

        }}>
            <CompareArrowsIcon sx={{fontSize:30}}  />
        </Button>
    </Grid>
)
}

export default SwitchCurrency