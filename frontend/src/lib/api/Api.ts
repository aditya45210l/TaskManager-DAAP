
import axios from 'axios';
export const getTasks = async () =>{
    try{
        const rawData =await axios.get("http://localhost:5000/api/v1/task/");
        console.log("rawData: ",rawData);
        return rawData
    }catch(error){
        console.log(error);
    }
}

