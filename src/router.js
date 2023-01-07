import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import { stockLoader } from "./loaders";


const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stocks" element={<Dashboard />} />
            <Route path="/stocks/:symbol" element={<Stock />} loader={stockLoader} />

        </Route>
    )
)

export default router;