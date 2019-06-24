import axios from "@/utils/axios"

// export const getBanner =({url,params,cb})=>{
//     return axios.get(url,{params}).then(res=>{
//         cb();
//         return{
//             type:"getFood",
//             banner:res.data.result
//         }
//     })
// }

export const getfoodlist = ({url,params,cb})=>{
    return axios.get(url,{params}).then(res=>{
        cb();
        return{
            type:"getfoodlist",
            food:res.data.result
        }
    })   
}