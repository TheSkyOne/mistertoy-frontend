import { useState, useEffect } from "react"

export function ToyFilter({ filter, onSetFilter }) {
    const [filterToEdit, setFilterToEdit] = useState({ ...filter })
    const [stockStateOption, setStockStateOption] = useState("all")

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

            case "radio":
                setStockStateOption(value)
                switch (value) {
                    case "all":
                        value = undefined
                        break

                    case "stocked":
                        value = true
                        break

                    case "missing":
                        value = false
                        break

                    default:
                        value = undefined
                        break
                }
                break

            default: break
        }

        setFilterToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { name, price, inStock } = filter
    return (
        <section className="toy-filter">
            <h2>Filters</h2>

            <div>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={onFilterChange} type="text" id="name" name="name" />
            </div>

            <div>
                <label htmlFor="price">Below price: </label>
                <input value={price} onChange={onFilterChange} type="number" id="price" name="price" />
            </div>

            <div>
                <fieldset>
                    <legend>Stocking status:</legend>

                    <div>
                        <input type="radio" id="all" name="inStock" value="all" onChange={onFilterChange} checked={stockStateOption === "all"} />
                        <label htmlFor="all">All</label>
                    </div>

                    <div>
                        <input type="radio" id="stocked" name="inStock" value="stocked" onChange={onFilterChange} checked={stockStateOption === "stocked"} />
                        <label htmlFor="stocked">Stocked</label>
                    </div>

                    <div>
                        <input type="radio" id="missing" name="inStock" value="missing" onChange={onFilterChange} checked={stockStateOption === "missing"} />
                        <label htmlFor="missing">Missing</label>
                    </div>
                </fieldset>
            </div>

        </section>
    )
}