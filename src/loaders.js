export const stockLoader = async ({ params }) => {
//store the apikey and currency symbol in different variables 
const symbol= params.symbol;


    const apiKey = "f4610df1f97e1820da234ee65655261a"
// interpolate the apikey and symbol in the fetch URL
// return the data and use the useLoader hook to use it in our component
    return (await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`)).json()
} 