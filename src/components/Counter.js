import React from 'react'

import {useSelector, useDispatch} from 'react-redux'; // useSelector hooku ile state i çağırıyoruz
import {increment} from '../redux/counter/counterSlice'; // increment fonksiyonunu çağırdık

function Counter(){
    const countValue = useSelector((state) => state.counter.value); // state.counter.value ile state içindeki counter key'inin value key'inin değerini çağırıyoruz
    const dispatch = useDispatch(); // dispatch hooku ile fonksiyonları çağırıyoruz

    return(
        <div>
            <h1>{countValue}</h1>

            <button>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            

        </div>
    )
}


export default Counter