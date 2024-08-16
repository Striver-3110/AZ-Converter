import './App.css'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import InputAmount from './components/InputAmount';
import SwitchCurrency from './components/SwitchCurrency';
import SelectCountry from './components/SelectCountry';
import { useContext, useState } from 'react';
import { CurrencyContext } from './context/CurrencyContext';

function App() {
  // const [fromValue, setFromValue] = useState("USD - American Samoa");
  // const [toValue, setToValue] = useState("INR - India");

  const {
    fromValue,
    setFromValue,
    toValue,
    setToValue,
    amount,
    convertedAmount
  } = useContext(CurrencyContext)

  const boxStyles = {
    background:"#fdfdfd",
    marginTop:"10rem",
    borderRadius:2,
    padding:"4rem 2rem",
    minHeight:"20rem",
    textAlign:"center",
    color:"#222",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    position:"relative"
  }
  return (
    <>
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant='h5' sx={{marginBottom: '2rem'}}> Stay Ahead With Accurate Conversions</Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry 
        value={fromValue} setValue={setFromValue} label="from"/>
        <SwitchCurrency />
        <SelectCountry 
        value={toValue} setValue={setToValue} label="to"/>
      </Grid>
      {
      amount && convertedAmount ?(
        <Box sx={{marginTop:"1rem", textAlign:"left"}}>
          <Typography  sx={{marginTop: '1rem'}}>
            {amount} {fromValue} = 
          </Typography>
          <Typography  sx={{marginTop: '0.2rem', fontWeight:"bold"}}>
            {convertedAmount} {toValue}
          </Typography>
        </Box>
      ):("")

    }
    </Container>

    
    </>
  )
}

export default App
