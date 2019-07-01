import axios from "@/utils/axios"

export const getfoodlist = ({ url, params, cb }) => {
    return axios.get(url, { params }).then(res => {
        cb();
        return {
            type: "getfoodlist",
            food: res.data.result
        }
    })
}

export const getfoodtype = ({ url, cb }) => {
    return axios.get(url).then(res => {
        cb();
        // console.log(res.data.result)
        return {
            type: "getfoodtype",
            foodtype: res.data.result
        }
    })
}

export const getSearchFood = ({ url, params, cb }) => {
    return axios.get(url, { params }).then(res => {
        cb();
        return {
            type: 'getSearchFood',
            food: res.data.result
        }
    })
}

export const getFoodById = ({ url, params, cb }) => {
    return axios.get(url, { params }).then(res => {
        cb();
        return {
            type: "getFoodById",
            foodId: res.data.result
        }
    })
}

export const inserFouseOn = ({ url, user, cb }) => {
    return axios.post(url, user).then(res => {
        cb();
        return {
            type: "inserFouseOn",

        }
    })
}

export const getFouName = ({ url, params, cb }) => {
    return axios.post(url, params).then(res => {
        cb();
        return {
            type: 'getFouName',
            namelist: res.data.result
        }
    })
}

export const updatatext = text => {
    // console.log(text)
    return {
        type: "updatatext",
        text
    }
}

export const updatadisplay = display => {
    return {
        type: 'updatadisplay',
        display
    }
}

export const getFouList = ({ url, params, cb }) => {
    return axios.post(url, params).then(res => {
        cb();
        return {
            type: 'getFouList',
            FouList: res.data.result
        }
    })
}

export const updataisLogin = isLogin => {
    return {
        type: 'updataisLogin',
        isLogin
    }
}

export const getGrayfont = ({ url, params, cb }) => {
    return axios.post(url, params).then(res => {
        cb();
        return {
            type: 'getGrayfont',
            grayfontList: res.data.result
        }
    })
}

export const getlistByGrayfont = ({ url, params, cb }) => {
    return axios.post(url, params).then(res => {
        // console.log(res.data.result)
        cb();
        return {
            type: "getlistByGrayfont",
            listByGrayfont: res.data.result
        }
    })
}

export const inserZan = ({ url, params, cb }) => {
    return axios.post(url, params).then(res => {
        cb();
        return {
            type: 'inserZan'
        }
    })
}

export const inserPing = ({ url, params, cb }) => {
    return axios.post(url,params).then(res=>{
        cb();
        return{
            type:"inserPing",
        }
    })
}

export const getPing= ({url,params,cb})=>{
    return axios.post(url,params).then(res=>{
        cb();
        return{
            type:"getPing",
            pinglun:res.data.result
        }
    })
}

export const inserlove =({url,params,cb})=>{
    return axios.post(url,params).then(res=>{
        cb();
        return{
            type:'inserlove'
        }
    })
}

export const updatecolor = colorPlay => {
    return {
        type: 'updatecolor',
        colorPlay
    }
}

export const getlovelist =({url,params,cb})=>{
    return axios.post (url,params).then(res=>{
        cb();
        return{
            type:'getlovelist',
            lovelist:res.data.result
        }
    })
}