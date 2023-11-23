import UpdateComponent from "./HOC";

function Person1({money,handleIncrease}){
    // const[money, setMoney]=useState(10);
    //     const handleIncrease = () => {
        //         setMoney(money *2);
    //     };
    return (
        <div>
                <h2>Jack is offering ${money}</h2>
                <button onClick={handleIncrease}>Increase Offering</button>
            </div>
        );
    }
export default UpdateComponent(Person1);