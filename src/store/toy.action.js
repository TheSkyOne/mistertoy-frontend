import { toyService } from "../services/toy.service.js"
import { SET_TOYS, UPDATE_TOY, ADD_TOY, REMOVE_TOY, SET_IS_LOADING, SET_IS_EDITING } from "./toy.reducer.js"
import store from "./store.js"


export function loadToys(filter = {}) {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    toyService.query(filter)
        .then(toys => store.dispatch({ type: SET_TOYS, toys }))
        .catch(err => {
            console.log("failed to load toys", err)
            throw err
        })
        .finally(() => store.dispatch({ type: SET_IS_LOADING, isLoading: false }))
}

export function addToy(newToy) {
    return toyService.save(newToy)
        .then(() => store.dispatch({ type: ADD_TOY, newToy }))
        .catch(() => {
            console.log("failed to add new toy", err)
            throw err
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => store.dispatch({ type: REMOVE_TOY, toyId }))
        .catch(() => {
            console.log("failed to remove toy", err)
            throw err
        })
}

export function updateToy(updatedToy) {
    return toyService.save(updatedToy)
        .then(() => {
            store.dispatch({ type: UPDATE_TOY, updatedToy })
            return updatedToy
        })
        .catch(() => {
            console.log("failed to update toy", err)
            throw err
        })
}

export function setIsEditingToy(isEditing) {
    store.dispatch({ type: SET_IS_EDITING, isEditing })
}