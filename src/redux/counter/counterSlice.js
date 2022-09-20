import { createSlice } from "@reduxjs/toolkit"; // createSlice dışa aktarıldı
// createSlice'in bizim için yapacağı şey bir slice oluşturmak, slice'in içinde bu state'imizin içindeki bütün verilerin duracağı key'e isim vereceğiz
// sonra initial state vereceğiz ve aynı zamanda bu state'in verilerini güncelleyecek olan reducer'ları tanımlayacağız, bu reducer'ların içinde de birtakım fonksiyonlar olacak
// ve bu fonksiyonlarda gidip bizim initial state üzerindeki verileri güncelleyecekler sonra da orda yazdığımız fonksiyonları dışa aktaracağız

// burda counterSlice'i dışa aktarmamın sebebi bu slice'i store'a bağlamak için kullanacağım
export const counterSlice = createSlice({
  name: "counter", // slice'in adı
  initialState: {
    // initial state'i ilk oluştururken değerleri ne olacak onları belirlememizi sağlıyor
    value: 0, // value key'i oluşturduk ve value key'inin değeri 0 olsun
  },
  reducers: {
    // bir veriyi güncellemek istediğim zaman kullanacağım fonksiyonları buraya yazıyorum (reducers kısmı)
    increment: (state) => {
      // increment fonksiyonu oluşturduk
      state.value += 1; // state.value key'inin değerini 1 arttırdık
    },
  },
});

export const {increment} = counterSlice.actions; // dışarıya export ettik
export default counterSlice.reducer; // burda dışa aktardığımız reducer'ı store'a bağlamak için kullanacağım
