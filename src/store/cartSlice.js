import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            // state.push(action.payload)
       const product = action.payload;
      if (state.some(item => item.id === product.id)) {
        return state;
      } else {
        state.push(product);
      }
    
        },
        remove(state,action){
            return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {add,remove}  = cartSlice.actions;
export default cartSlice.reducer;
