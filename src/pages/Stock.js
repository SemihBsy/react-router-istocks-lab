import { useLoaderData } from "react-router-dom"

const Stock = (props) => {
    const stock = useLoaderData();


    return <div className="stock">
        <h1>{stock[0].name}</h1>
        <h4>{stock[0].symbol}</h4>
        <h4>Last:   {stock[0].price}</h4>
        <h4>Change:   {stock[0].change}</h4>
        <h4>High:   {stock[0].dayHigh}</h4>
        <h4>Low:   {stock[0].dayLow}</h4>
        <h4>Open:   {stock[0].open}</h4>
    </div>
}

export default Stock;