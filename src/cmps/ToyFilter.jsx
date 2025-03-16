import { useState, useEffect } from "react"

export function ToyFilter({ filter, onSetFilter }) {
    const [filterToEdit, setFilterToEdit] = useState({ ...filter })

    useEffect(() => {
        onSetFilter(filterToEdit)
    }, [filterToEdit])


    function onFilterChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case "number":
                value = +value || ""
                break

            default: break
        }

        setFilterToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { price } = filter
    return (
        <section className="toy-filter">
            <h2>Filters</h2>

            <label htmlFor="price">Below price: </label>
            <input value={price} onChange={onFilterChange} type="number" id="price" name="price"/>
        </section>
    )
}