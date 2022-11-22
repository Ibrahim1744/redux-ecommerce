import { ADD , DELETE , DELETE_INDIVIDUAL_PRODUCT } from "./Action-Types"



export const ADD_TO_CART =(item)=>{
  return{
      type:ADD ,
      payload: item,
  }
}

export const DELETE_FROM_CART =(id)=>{
  return{
      type:DELETE ,
      payload: id,
  }
}

export const DELETE_INDIVIDUAL =(item)=>{
  return{
      type:DELETE_INDIVIDUAL_PRODUCT ,
      payload: item,
  }
}
