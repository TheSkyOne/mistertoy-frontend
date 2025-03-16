import { useEffect, useState } from "react";
import { toyService } from "../services/toy.service.js";
import { Link, useParams } from "react-router-dom";

export function ToyDetails() {

    const [curToy, setCurToy] = useState(null)
    const params = useParams()

    useEffect(() => {
        loadToy()
    }, [params.toyId])

    function loadToy() {
        toyService.get(params.toyId)
            .then(setCurToy)
            .catch(err => {
                console.log(err)
            })
    }

    if (!curToy) return <div>Could not load toy...</div>
    return (
        <section className="toy-details">
            <h1>{curToy.name}</h1>
            <div className="details-container">
                <img src={curToy.imgUrl} alt="Toy's picture"></img>
                <div className="details-side">
                    {curToy.labels.length !== 0 && <p className="details-categories">Categories: {curToy.labels.join(", ")}</p>}
                    <div>
                        <h4>Price: {curToy.price}</h4>
                        <h4>Available: {curToy.inStock ? "✅" : "❌"}</h4>
                    </div>
                </div>
            </div>
            <button><Link to={`/toys`}>Back</Link></button>
        </section>
    )
}