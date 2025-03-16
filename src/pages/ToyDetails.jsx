import { useEffect, useState } from "react";
import { toyService } from "../services/toy.service.js";
import { Link, useParams } from "react-router-dom";
import { updateToy, setIsEditingToy } from "../store/toy.action.js";
import { useSelector } from "react-redux";

export function ToyDetails() {

    const [curToy, setCurToy] = useState(null)
    const [intermediateToy, setIntermediateToy] = useState(null)
    const editingState = useSelector(storeState => storeState.isEditing)
    const params = useParams()

    useEffect(() => {
        loadToy()

        return () => setIsEditingToy(false)
    }, [params.toyId])

    function loadToy() {
        toyService.get(params.toyId)
            .then(toy => {
                setCurToy(toy)
                setIntermediateToy(toy)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default: break
        }

        setCurToy(prevToy => ({ ...prevToy, [field]: value }))
    }

    function saveChanges() {
        updateToy(curToy)
        setIntermediateToy(curToy)
    }

    function unEdit() {
        setIsEditingToy(false)
        setCurToy(intermediateToy)
    }


    if (!curToy) return <div>Could not load toy...</div>

    const editingForm =
        <form>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value={curToy.price} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="inStock">Available: </label>
                <input type="checkbox" id="inStock" name="inStock" checked={curToy.inStock} onChange={handleChange}></input>
            </div>

            <button onClick={saveChanges}>Save</button>
        </form>

    return (
        <section className="toy-details">
            <h1>{curToy.name}</h1>
            <div className="details-container">
                <img src={curToy.imgUrl} alt="Toy's picture"></img>
                <div className="details-side">
                    {curToy.labels.length !== 0 && <p className="details-categories">Categories: {curToy.labels.join(", ")}</p>}
                    {editingState ? editingForm
                        :
                        <div>
                            <h4>Price: {curToy.price}</h4>
                            <h4>Available: {curToy.inStock ? "✅" : "❌"}</h4>
                        </div>
                    }
                </div>

            </div>
            <div className="nav-buttons">
                <button><Link to={`/toys`}>Back</Link></button>
                {editingState ?
                    <button onClick={unEdit}><Link to={`/toys/edit/${curToy._id}`}>Un-edit</Link></button>
                    :
                    <button onClick={() => setIsEditingToy(true)}><Link to={`/toys/edit/${curToy._id}`}>Edit</Link></button>
                }

            </div>

        </section>
    )
}