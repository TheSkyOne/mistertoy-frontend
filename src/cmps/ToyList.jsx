import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys }) {

    return (
        <ul className="toy-list">
            {
                toys.map(toy =>
                    <li key={toy._id}>
                        <ToyPreview toy={toy}></ToyPreview>
                        <button><Link to={`/toys/${toy._id}`}>View Details</Link></button>
                    </li>
                )
            }
        </ul>
    )
}