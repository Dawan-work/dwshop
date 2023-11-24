// TYPES 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

// ACTIONS
export const increment = (() => ({type: INCREMENT}))
export const decrement = (() => ({type: DECREMENT}))
export const reset = (() => ({type: RESET}))

// REDUCERS
const INITIAL_STATE = {
    counter : 0
}
export const counterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT : {
            return {
                ...state,
                counter : state.counter + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                counter : state.counter - 1 
            }
        }
           case RESET: {
            return {
                ...state,
                counter : 0 
            }
        }
        default:
            return state
    }
}

// SELECTOR
