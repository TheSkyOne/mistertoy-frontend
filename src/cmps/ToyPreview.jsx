import { Link } from "react-router-dom";
import { setIsEditingToy } from "../store/toy.action";

export function ToyPreview({ toy }) {

    return (
        <article className="toy-preview">
            <button className="edit-toy-button" onClick={() => setIsEditingToy(true)}><Link to={`/toys/edit/${toy._id}`}>✏</Link></button>
            <h2>{toy.name}</h2>
            <img src={toy.imgUrl} alt="Toy Image"></img>
            <div>
                <h4>Price: {toy.price}</h4>
                <h4>In stock: {toy.inStock ? "✅" : "❌"}</h4>
            </div>
        </article>
    )
}