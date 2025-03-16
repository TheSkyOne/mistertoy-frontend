export function ToyPreview({ toy }) {

    return (
        <article className="toy-preview">
            <h2>{toy.name}</h2>
            <img src={toy.imgUrl || null} alt="Toy Image"></img>
            <h4>price: {toy.price}</h4>
        </article>
    )
}