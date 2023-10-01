import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/feature/counter/counterSlice";
import { useState } from "react";


const IncrementDecrement = () => {
const  count = useSelector((state) =>state.counter.count)
const dispatch = useDispatch()
const [userIncrement, setUserIncrement] = useState()
console.log(userIncrement)
const handleIncrement = (event) =>{
    event.preventDefault()
    setUserIncrement(event.target.value)
}
    return (
        <div className="container mx-auto">
            <h1 className="text-xl text-center mb-6">Increment & Decrement</h1>
            <div className="flex justify-center gap-4">
<button className="bg-green-700 p-1 rounded-xl" onClick={() =>dispatch(increment())}>Increment</button>
            <p>{count}</p>
            <button className="bg-red-500 p-1 rounded-xl" onClick={() =>dispatch(decrement())}>Decrement</button>
            </div>
<div className="flex justify-center mt-4 gap-4">
<button type="submit" className="bg-indigo-500-500 p-1 rounded-xl" onClick={() =>dispatch(incrementByValue(10))}>Custom Increment</button>
<form onSubmit={handleIncrement}>
<input className="w-16 rounded-full" name="number" type="number" />
</form>
</div>
           

        </div>
    );
};

export default IncrementDecrement;