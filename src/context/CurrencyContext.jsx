import { createContext, useState } from 'react';

export const CurrencyContext = createContext();

function CurrencyProvider({children}) {
    const [fromValue, setFromValue] = useState("USD - American Samoa");
    const [toValue, setToValue] = useState("INR - India");
    const [amount, setAmount] = useState("")
    const [convertedAmount, setConvertedAmount] = useState("")
    
    const value = {
        fromValue,
        setFromValue,
        toValue,
        setToValue,
        amount,
        setAmount,
        convertedAmount,
        setConvertedAmount
    }
  return (
    <CurrencyContext.Provider value = {value}>
        {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider