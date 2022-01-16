import AsyncStorageLib from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from "./Config";

const api = {
    logar: async function(data){
        let url = Config.BASE_URL+'/auth/login';
        console.log('LOGANDO', url)
        try{
            let response = await axios({
                url: url,
                method: 'POST',
                data: data,
                headers: {
                    Accept: 'application/json',
                }
            })
            console.log('RESPONSE', response.data);
            AsyncStorageLib.setItem('TOKEN', response.data.token)
            return response;
        }catch(error){
            console.log('ERRO', error);
            return {error}
        }
    },
    request: async function(type, url, data){
        url = Config.BASE_URL+url;
        console.log('GET', url)
        let token =await AsyncStorageLib.getItem('TOKEN');
        console.log('GET TOKEN', token)
        let response = await axios({
            url: url,
            method: type,
            data: data,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            }
        })
        return response;
    },
   
}

export default api;