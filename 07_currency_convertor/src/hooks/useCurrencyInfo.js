import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {

    // using useState hook to create the variable that will be changing
    const [data, setData] = useState({})
    // Using an API to fetch the data of the conversion rates of the currency
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    // So here I am using useEffect hook to fetch the data and set it into the state so that whenever there is any change in the value of the currency, the API will give us the updated conversion rates for the selected currency which we can then update our UI.
    useEffect(()=>{
        fetch(url).then((res)=> 
        // The response given by the api is in string format so it is needed to convert into json.
        res.json()).then((res)=> 
            // Now if we store the data in a normal variable then we cannot update the UI. Declared above: const[data. setData]...
            setData(res[currency]))
            console.log(data);
    }, [currency])
    return data

}
// Now here we created a functionality and the method is itself returning same as useState hook in which actually the whole method is returned.

