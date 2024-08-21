export const initialState = {
    basket: [],
    detail: [],
    rate: [],
    history: [],
    user: false,
    id : "",
}
export const getBasketTotal = basket => basket?.reduce((amount, item) => amount+(item.price*item.count), 0)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET': 
            const index2 = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id 
            )
            let new2Basket = [...state.basket] 
 
            if(index2>=0){
                new2Basket[index2].count=new2Basket[index2].count+action.count
            }
            else{
                new2Basket = [...state.basket, action.item]
            }
                return {
                    ...state,
                     basket: new2Basket
            };
        case 'DETAIL':
            return{
                ...state,
                detail: [action.item],
            };
        case 'UPDATE_BASKET':
            const index3 = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let new3Basket = [...state.basket];
            if(index3 >= 0) {
                new3Basket[index3].count=action.count
            }
            return{
                ...state,
                basket:new3Basket
            } 
    
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn('(id' + action.id + ')이 장바구니에 존재하지 않습니다')
            }
            return {
                ...state,
                basket:newBasket
            }
        case "LOGIN":
            return {          
                ...state,      
                user: true,
                id: action.item,    
            }
        case "NEW_RATE":
            return {
                ...state,
                rate:[...state.rate, action.item],
            }
        case "ADD_HISTORY":
            return {
                ...state,
                history:[...state.history, action.item],
            }
        default:
            return state;
    }
}

export default reducer;