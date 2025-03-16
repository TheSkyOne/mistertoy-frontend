import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { loadToys } from "../store/toy.action.js"
import { ToyList } from "../cmps/ToyList"
import { ToyFilter } from "../cmps/ToyFilter.jsx"
import { getDefaultFilter } from "../services/toy.service.js"

export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toys)
    const [filter, setFilter] = useState(getDefaultFilter())

    useEffect(() => {
        loadToys(filter)
    }, [filter])


    const toysUndefined = !toys
    const toysEmpty = toys.length === 0
    return (
        <section className="toy-index">
            <ToyFilter filter={filter} onSetFilter={newFilter => setFilter(newFilter)} />

            {toysUndefined ? <div>Loading...</div>
                : toysEmpty ? <div>No toys...</div>
                    : <ToyList toys={toys} mode="index" />
            }

        </section>
    )
}