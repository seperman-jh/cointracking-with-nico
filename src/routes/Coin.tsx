import {useLocation} from "react-router-dom";

function Coin() {
    const {state}  = useLocation()
    return <h1>{state?.name}</h1>;
}
export default Coin;