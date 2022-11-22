import { myAxios } from "./helper"

const register = (user)=>{
    return myAxios.post('/products').then((response)=> response.data)
}