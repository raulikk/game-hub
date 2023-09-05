import axios from "axios"; 


export default axios.create( {
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '39d1d48647e546bd92cb45a7503bebe5'
    }



})

