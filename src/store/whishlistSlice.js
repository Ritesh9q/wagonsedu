import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const whishlistSlice = createSlice({
    name:'whishlist',
    initialState,
    reducers:{
        addw(state,action){
            // state.push(action.payload)
       const product = action.payload;
      if (state.some(item => item.id === product.id)) {
        return state;
      } else {
        state.push(product);
      }
    
        },
        removew(state,action){
            return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {addw,removew}  = whishlistSlice.actions;
export default whishlistSlice.reducer;
