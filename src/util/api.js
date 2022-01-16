import AsyncStorageLib from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from "./Config";

const api = {
   
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