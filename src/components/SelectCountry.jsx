import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { TextField } from '@mui/material'
import useAxios from '../hooks/useAxios'
const url = 'https://restcountries.com/v3.1/all'

function SelectCountry (props) {
    const {label, value, setValue} = props;
  const [data, error, loaded] = useAxios(url)
  const dataFilter = data.filter(d => 'currencies' in d)
  if (!loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant='rounded' height={60} />
      </Grid>
    )
  }

  if (error) {
    console.log('error'+error)
    return 'Ops, Something went wrong!!'
  }
  // const pngFlags = dataFilter.map(item =>{
  //     return `${item.flags.png}`
  // })
  // const countriesName = dataFilter.map((item)=>{
  //     return `${item.name.common}`
  // })

//   const currencyOptions = dataFilter.map(item => ({
//     flag: item.flags.png,
//     currency: Object.keys(item.currencies)[0],
//     name: item.name.common
//   }))

    const dataCountries = dataFilter.map((item)=>(
        `${Object.keys(item.currencies)[0]} - ${item.name.common}`
    ))
//   console.log(currencyOptions)

  return (
    <Grid item xs={12} md={3}>
      {/* <Autocomplete
        options={currencyOptions}
        getOptionLabel={option => `${option.currency} - ${option.name}`}
        disableClearable
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.flag}>
              <img
                src={option.flag}
                alt={option.name}
                style={{ width: 20, marginRight: 8 }}
              ></img>
              {`- ${option.currency}`}
              {` - ${option.name}`}
            </li>
          )
        }}
        renderInput={params => {
          return <TextField {...params} label={label} />
        }}
      /> */}
      <Autocomplete
      options={dataCountries}
      value={value}
      disableClearable
      onChange={(event, value)=>setValue(value)}
      renderInput={(params)=> <TextField {...params} label={label}/>}
      />
    </Grid>
  )
}

export default SelectCountry
