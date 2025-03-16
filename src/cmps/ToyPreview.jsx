export function ToyPreview({ toy }) {

    return (
        <article className="toy-preview">
            <h2>{toy.name}</h2>
            <img src={toy.imgUrl} alt="Toy Image"></img>
            <div>
                <h4>Price: {toy.price}</h4>
                <h4>In stock: {toy.inStock ? "✅" : "❌"}</h4>
            </div>

        </article>
    )
}