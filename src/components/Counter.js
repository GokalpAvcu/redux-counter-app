import React from 'react'

import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'; // useSelector hooku ile state i çağırıyoruz
import {increment, decrement, incrementByAmount} from '../redux/counter/counterSlice'; // increment fonksiyonunu çağırdık

function Counter(){
    const [amount, setAmount] = useState(3) // amount state'i oluşturduk ve amount state'inin başlangıç değeri 3 olsun
    const countValue = useSelector((state) => state.counter.value); // state.counter.value ile state içindeki counter key'inin value key'inin değerini çağırıyoruz
    const dispatch = useDispatch(); // dispatch hooku ile fonksiyonları çağırıyoruz

    return(
        <div>
            <h1>{countValue}</h1>

            <button onClick={()=> dispatch(decrement())}>Decrement</button> {/* dispatch'e yazmış olduğumuz action'ı (decrement) parametre olarak verdik */}
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br/> 
            <br/>

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button>
        
        </div>
    )
}


export default Counter