export const CartReducer = (state, action) => {
    // const {totalQuantity } = GlobalCartState()

    // const { cart, totoalPrice, totalQuantity } = state;

    // let product;
    // let index;
    // let updatePrice;
    // let updateQuant;
  

    switch (action.type) {
        case 'ADD_TO_CART': 
          
          return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
          
        case 'REMOVE_FROM_CART':
          return {...state, cart:state.cart.filter(c=> c.id !== action.payload.id)}
            
        case 'Change_Quantity':
            return {...state, cart:state.cart.filter(elem=>elem.id === action.payload.id ? elem.qty=action.payload.qty : elem.qty)}
    
        default:
            return state
    }
}  