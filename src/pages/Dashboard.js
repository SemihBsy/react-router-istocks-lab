import { Link } from "react-router-dom"


const Dashboard = (props) => {
    const stocks = [
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT"},
        {name: "Alphabet Inc.", symbol: "GOOGL"}, 
        {name: "Facebook Inc.", symbol: "META"}, 
        {name: "Oracle Corporation", symbol: "ORCL"}, 
        {name: "Intel Corporation", symbol: "INTC"},
        
    ]
    
    
    return (
        <div>
            {stocks.map((stock) => {
                const { name, symbol } = stock;

                return (
                    <Link to={`/stocks/${symbol}`} key={symbol}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
};

export default Dashboard;