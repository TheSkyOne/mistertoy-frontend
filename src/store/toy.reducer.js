export const SET_TOYS = "SET_TOYS"
export const ADD_TOY = "ADD_TOY"
export const REMOVE_TOY = "REMOVE_TOY"
export const UPDATE_TOY = "UPDATE_TOY"

export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_IS_EDITING = "SET_IS_EDITING"


const initialState = {
    toys: [],
    isLoading: false,
    isEditing: false
}

export function toyReducer(state = initialState, cmd) {
    switch (cmd.type) {
        case SET_TOYS:
            return { ...state, toys: cmd.toys }

        case ADD_TOY:
            return { ...state, toys: [...state.toys, cmd.newToy] }

        case REMOVE_TOY:
            return { ...state, toys: state.toys.filter(toy => toy._id !== cmd.toyId) }

        case UPDATE_TOY:
            return { ...state, toys: state.toys.map(toy => toy._id === cmd.updatedToy._id ? cmd.updatedToy : toy) }

        case SET_IS_LOADING:
            return { ...state, isLoading: cmd.isLoading }

        case SET_IS_EDITING:
            return { ...state, isEditing: cmd.isEditing }

        default: return state
    }
}
