import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const TOY_KEY = 'toysDB'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
    'Outdoor', 'Battery Powered']

_createToys()

export const toyService = {
    query,
    get,
    remove,
    save,
}
// For Debug (easy access from console):
window.cs = toyService

function query(filter = {}) {
    return storageService.query(TOY_KEY)
        .then(toys => {
            if (filter.price) toys = toys.filter(toy => toy.price <= filter.price)

            return toys
        })
}

function get(toyId) {
    return storageService.get(TOY_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(TOY_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(TOY_KEY, toy)
    } else {
        toy.createdAt = Date.now()
        return storageService.post(TOY_KEY, toy)
    }
}

function getEmptyToy(name) {
    return {
        _id: '',
        name,
        imgUrl: '',
        price: 0,
        labels: [],
        createdAt: 0,
        inStock: true
    }
}


export function getDefaultFilter() {
    return {
        price: 0
    }
}


function _createToys() {
    let toys = utilService.loadFromStorage(TOY_KEY)
    if (!toys || !toys.length) {
        toys = []
        for (let i = 0; i < 20; i++) {
            const name = `Toy${i + 1}`
            const price = Math.floor(Math.random() * 1000)
            const toyLabels = labels.slice(0, Math.floor(Math.random() * labels.length))
            const inStock = Math.random() < 0.5 ? true : false
            toys.push(_createToy(name, price, toyLabels, inStock))
        }
        utilService.saveToStorage(TOY_KEY, toys)
    }
}

function _createToy(name, price, toyLabels, inStock) {
    const toy = getEmptyToy(name)
    toy._id = utilService.makeId()
    toy.price = price
    toy.labels = toyLabels
    toy.createdAt = Date.now() - utilService.getRandomIntInclusive(0, 1000 * 60 * 60 * 24)
    toy.inStock = inStock
    return toy
}


//Data Model
// const toy = {
//     _id: 't101',
//     name: 'Talking Doll',
//     imgUrl: 'hardcoded-url-for-now',
//     price: 123,
//     labels: ['Doll', 'Battery Powered', 'Baby'],
//     createdAt: 1631031801011,
//     inStock: true,
//     }