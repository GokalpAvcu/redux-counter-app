import {configureStore} from '@reduxjs/toolkit'; // import configureStore from redux toolkit
import counterReducer from './counter/counterSlice'; 


export const store = configureStore ({    // configureStore dışa aktarıldı
    reducer: {                            // reducer'lar buraya yazılacak
        counter: counterReducer          // counter key'i oluşturduk ve counter key'inin değeri counterReducer olsun
    }, 
})