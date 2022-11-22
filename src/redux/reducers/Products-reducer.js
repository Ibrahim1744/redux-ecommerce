import { ADD , DELETE ,DELETE_INDIVIDUAL_PRODUCT} from "../actions/Action-Types"



const INIT_STATE = {
  cart:[]
}


export const cartReducer=(state=INIT_STATE , action)=>{
  switch (action.type){
    case ADD:

    const itemIndex=state.cart.findIndex((item)=>item.id === action.payload.id);
    if(itemIndex >= 0){
      state.cart[itemIndex].qnty+=1;
    } else{
      const temp={...action.payload , qnty:1}
      return{
        ...state,
        cart:[...state.cart, temp]
      }
    }
    break;
      

      case DELETE:
        const data=state.cart.filter((el)=>el.id !==action.payload);
        
        return{
          ...state,
          cart:data,
        }

        case DELETE_INDIVIDUAL_PRODUCT:
          const itemIndex_dec=state.cart.findIndex((item)=>item.id === action.payload.id);
          if(state.cart[itemIndex_dec].qnty >=1)
          {
            state.cart[itemIndex_dec].qnty -=1;
            return{
              ...state,
              cart:[...state.cart]
            }
          }else if(state.cart[itemIndex_dec].qnty ===1)
          {
            const data=state.cart.filter((el)=>el.id !==action.payload.id);
            return{
              ...state,
              cart:data
            }

          }
          break;

      default:
        return state
  }
}