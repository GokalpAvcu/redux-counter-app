import {configureStore} from '@reduxjs/toolkit';

 // configureStore dışa aktarıldı
export const store = configureStore ({
    reducer: {}, // reducer'lar buraya yazılacak
})