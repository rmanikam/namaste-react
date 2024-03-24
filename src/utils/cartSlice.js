import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(older Redux) => Don't mutate state, returning was mandatory
      // earlier we used to do it earlier
      // const newState = {...state};
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit uses immer BTS(Behind the scenes)
      // We HAVE to mutate the state here in Redux toolkit
      // mutating the state here

      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state) => {
      // here above you are not modifying the state,
      //you are not mutating the state
      //but you are adding reference to the state

      //   state = ["akshay"];

      //   console.log(state); // [pizza]
      //   state = []; // this is not modifying original State
      // containing pizza but modifying  local variable of state.
      //   console.log(state); // []
      //   console.log(current(state));
      // you can mutate the state using  state.items.length = 0
      // it will make local variable empty but pizza remains same

      // RTK - either mutate the existing state or returns a new State
      state.items.length = 0; // [] will make your state as empty // Originalstate = []

      return { items: [] }; // this new object will be replaced inside originalState = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
