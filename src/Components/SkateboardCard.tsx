import { useState } from 'react';
import addCart from "../assets/images/ajouter-au-panier.png";
import trash from "../assets/images/corbeille.png";


interface SkateboardInterface {
    skateboard: {
        image: string,
        model: string,
        name: string,
        size: string,
        price: number
    }
    setTotalFavorites: React.Dispatch<React.SetStateAction<number>>
    setTotalCartItems: React.Dispatch<React.SetStateAction<number>>
}

function SkateboardCard({ skateboard, setTotalFavorites, setTotalCartItems }: SkateboardInterface,) {
    const [addPanier, setAddPanier] = useState(0);
    const [isFavorite, setIsFavorite] = useState<boolean>();

    function handleIsFavorite() {
        const newFav = !isFavorite;
        setIsFavorite(newFav);
        setTotalFavorites((totalFav) => totalFav + (newFav ? 1 : -1));
    }

    function handleAddToCart() {
        setAddPanier(addPanier + 1);
        setTotalCartItems((totalCart) => totalCart + 1);
    }

    function handleResetCart() {
        setTotalCartItems((totalCart) => totalCart - addPanier);
        setAddPanier(0);
    }

    return (
        <article className="card">
            <img className="images" src={skateboard.image} alt="deck of skateboard" />
            <h2 id="model">{skateboard.model}</h2>
            <p id="description">{skateboard.name} - {skateboard.size}"</p>
            <div className="card-bottom">
                <p id="price">{skateboard.price} EUR</p>
                <div className='buttons-card'>
                    <button id="favorite" onClick={() => handleIsFavorite()}>{isFavorite ? "❤️" : "🖤"}</button>
                    <button id="addPanier" onClick={() => handleAddToCart()}>{<img src={addCart} alt="add to cart" width="20" height="20" />}{addPanier}</button>
                    <button id="corbeille" onClick={() => handleResetCart()}>{<img src={trash} alt="remove my cart" width="20" height="20" />}</button>
                </div>
            </div>
        </article>
    )
}

export default SkateboardCard;