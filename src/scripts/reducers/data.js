

const defaultState = {
    food: [],
    foodtype:[],
    foodId:[],
    display:true,
    text:"关注",
    namelist:[],
    isLogin:false,
    FouList:[],
    grayfontList:[],
    listByGrayfont:[],
    pinglun:[],
    colorPlay:true,
    lovelist:[]
}

export default (state = defaultState, action) => {
    // console.log(action.FouList);
    switch (action.type) {

        case 'getlovelist':
            return{
                ...state,lovelist:action.lovelist
            }
            break;

        case 'updatecolor':
            return{
                ...state,colorPlay:action.colorPlay
            }
            break;

        case 'getPing':
            return{
                ...state,pinglun:action.pinglun
            };
            break;

        case 'getlistByGrayfont':
            return{
                ...state,listByGrayfont:action.listByGrayfont
            };
            break;

        case 'getGrayfont':
            return{
                ...state,grayfontList:action.grayfontList
            };
            break;

        case "updataisLogin":
            return{
                ...state,isLogin:action.isLogin
            };
            break;

        case "getFouList":
            return{
                ...state,FouList:action.FouList
            };
            break;

        case "updatadisplay":
            return{
                ...state,display:action.display
            };
            break;

        case "updatatext":
            return{
                ...state,text:action.text
            };
            break;

        case "getFouName":
            return{
                ...state,namelist:action.namelist
            };
            break;

        case "getFoodById":
            return {...state,foodId:action.foodId};
            break;

        case "getSearchFood":
            return {...state,food:action.food};
            break;

        case "getfoodlist":
            return { ...state, food: action.food };
            break;

        case "getfoodtype":
            return {...state,foodtype:action.foodtype}
            break;

        default:
            return state;
            break;
    }
}